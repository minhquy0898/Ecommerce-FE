import React, { useEffect, useRef, useState } from 'react'
import './AdminProduct.css'
import { Button, Form, Modal, Input, Space } from 'antd'
import { PlusOutlined, UploadOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputFormComponent from '../InputFormComponent/InputFormComponent'
import { WrapperUploadFile } from '../../pages/Profile/style'
import { getBase64 } from '../../utils'
import { WrapperUploadFileAdmin } from './style'
import * as ProductService from '../../services/ProductService'
import { useMutationHook } from '../../hooks/useMutationHook'
import Loading from '../LoadingComponent/Loading'
import * as message from '../../components/Message/Message'
import { useQuery } from '@tanstack/react-query'
import DrawerCoponent from '../DrawerComponent/DrawerCoponent'
import { useSelector } from 'react-redux'
import img from '../../assets/img/backround_signInUp.jpg'
import ModalComponent from '../ModalComponent/ModalComponent'

const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [rowSelected, setRowSelected] = useState('')
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
    const user = useSelector((state) => state?.user)

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const [stateProduct, setStateProduct] = useState({
        name: '',
        type: '',
        quantity: '',
        price: '',
        description: '',
        rating: '',
        image: ''
    })

    const [stateProductDetails, setStateProductDetails] = useState({
        name: '',
        type: '',
        quantity: '',
        price: '',
        description: '',
        rating: '',
        image: ''
    })


    const [form] = Form.useForm();

    const mutation = useMutationHook(
        (data) => {
            const { name, type, quantity, price, description, rating, image } = data
            const res = ProductService.createProduct({ name, type, quantity, price, description, rating, image })
            return res
        }
    )

    console.log('rowSelected', rowSelected)

    const mutationUpdate = useMutationHook(
        (data) => {
            const { id, token, ...rests } = data
            const res = ProductService.updateProduct(id, token, { ...rests })
            return res
        },
    )

    const getAllProducts = async () => {
        const res = await ProductService.getAllProduct()
        return res
    }

    const mutationDelete = useMutationHook(
        (data) => {
            const { id, token } = data
            const res = ProductService.deleteProduct(id, token)
            return res
        },
    )


    const fetchGetDetailsProduct = async (rowSelected) => {
        const res = await ProductService.getDetailsProduct(rowSelected)
        if (res?.data) {
            setStateProductDetails({
                name: res?.data?.name,
                type: res?.data?.type,
                quantity: res?.data?.quantity,
                price: res?.data?.price,
                description: res?.data?.description,
                rating: res?.data?.rating,
                image: res?.data?.image
            })
        }
    }

    useEffect(() => {
        form.setFieldsValue(stateProductDetails)
    }, [stateProductDetails])

    useEffect(() => {
        if (rowSelected) {
            fetchGetDetailsProduct(rowSelected)
        }
    }, [rowSelected])

    console.log('StateProduct', stateProductDetails)
    const handleDetailsProduct = (value) => {
        console.log("value", value)
        setStateProductDetails({
            name: value?.name,
            type: value?.type,
            quantity: value?.quantity,
            price: value?.price,
            description: value?.description,
            rating: value?.rating,
            image: value?.image
        })
        setIsOpenDrawer(true)
    }

    const { data, isLoading, isSuccess, isError } = mutation
    const { data: dataUpdated, isLoading: isLoadingUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
    const { data: dataDeleted, isLoading: isLoadingDeleted, isSuccess: isSuccessDeleted, isError: isErrorDeleted } = mutationDelete

    console.log('dataUpdated', dataUpdated)

    const queryProduct = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
    const { isLoading: isLoadingProducts, data: products } = queryProduct
    const renderAction = (value) => {
        return (
            <div>
                <DeleteOutlined onClick={() => setIsModalOpenDelete(true)} style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
                <EditOutlined onClick={() => { handleDetailsProduct(value) }} style={{ color: 'rgb(233, 203, 31)', fontSize: '20px', cursor: 'pointer', marginLeft: '10px' }} />
            </div>
        )
    }

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        // setSearchText(selectedKeys[0]);
        // setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        // setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <InputFormComponent
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(value) => setSelectedKeys(value ? [value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        // render: (text) =>
        //     searchedColumn === dataIndex ? (
        //         <Highlighter
        //             highlightStyle={{
        //                 backgroundColor: '#ffc069',
        //                 padding: 0,
        //             }}
        //             searchWords={[searchText]}
        //             autoEscape
        //             textToHighlight={text ? text.toString() : ''}
        //         />
        //     ) : (
        //         text
        //     ),
    });

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.name.length - b.name.length,
            ...getColumnSearchProps('name')
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
            filters: [
                {
                    text: '>= 50',
                    value: '>=',
                },
                {
                    text: '<= 50',
                    value: '<=',
                }
            ],
            onFilter: (value, record) => {
                if (value === ">=") {
                    return record.price >= 50
                }
                return record.price <= 50
            }
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            sorter: (a, b) => a.rating - b.rating,
            filters: [
                {
                    text: '>= 3',
                    value: '>=',
                },
                {
                    text: '<= 3',
                    value: '<=',
                }
            ],
            onFilter: (value, record) => {
                if (value === ">=") {
                    return Number(record.rating) >= 3
                }
                return Number(record.rating) <= 3
            }
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, value) => (
                renderAction(value))
        },
    ];
    const dataTable = products?.data.length && products?.data.map((product) => {
        return { ...product, key: product._id }
    })

    useEffect(() => {
        if (isSuccess && data?.status === "OK") {
            message.success()
            handleCancel()
        } else if (isError) {
            message.error()
        }
    }, [isSuccess])

    useEffect(() => {
        if (isSuccessUpdated && dataUpdated?.status === 'OK') {
            message.success()
            // handleCloseDrawer()
        } else if (isErrorUpdated) {
            message.error()
        }
    }, [isSuccessUpdated])

    useEffect(() => {
        if (isSuccessDeleted && dataDeleted?.status === "OK") {
            message.success()
            handleCloseDrawer()
            handleCancelDelete()
        } else if (isErrorDeleted) {
            message.error()
        }
    }, [isSuccessDeleted])

    const handleCancelDelete = () => {
        setIsModalOpenDelete(false)
    }
    const handleDeleteProduct = () => {
        mutationDelete.mutate({ id: rowSelected, token: user?.access_token }, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
    }

    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
        setStateProductDetails({
            name: '',
            type: '',
            quantity: '',
            price: '',
            description: '',
            rating: '',
            image: ''
        })
        form.resetFields()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateProduct({
            name: '',
            type: '',
            quantity: '',
            price: '',
            description: '',
            rating: '',
            image: ''
        })
        form.resetFields()
    };


    const onFinish = (value) => {
        mutation.mutate(stateProduct, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
        console.log('value', value)
        console.log('state', stateProduct)
    }
    const handleOnChange = (e) => {
        if (e.target && e.target.name) {
            const { name, value } = e.target;
            setStateProduct({
                ...stateProduct,
                [name]: value,
            });
        }
    };
    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setStateProduct({
            ...stateProduct,
            image: file.preview
        });
    }

    const handleOnchangeAvatarDetails = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setStateProductDetails({
            ...stateProductDetails,
            image: file.preview
        });
    }

    const onUpdateProduct = () => {
        mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateProductDetails }, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
    }


    // const handleOnChange = (e) => {
    //     setStateProduct({
    //         ...setStateProduct,
    //         [e.target.name]: e.target.vale
    //     })
    // }
    return (
        <div>
            <div className='wrapper_header'>
                Quản lý sản phẩm
            </div>
            <div className='wrapper_button'>
                <Button onClick={() => setIsModalOpen(true)} className='btn_button'><PlusOutlined style={{ fontSize: '40px' }} /></Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <TableComponent columns={columns} isLoading={isLoadingProducts} props={{ selectionType: 'checkbox' }} data={dataTable}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: (event) => {
                                setRowSelected(record._id)
                            }, // click row

                        };
                    }}
                />
            </div>
            <ModalComponent forceRender title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="on"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <InputFormComponent value={stateProduct.name} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "name": value,
                            });
                        }} name="name" />
                    </Form.Item>


                    <Form.Item
                        label="Type"
                        name="Type"
                        rules={[{ required: true, message: 'Please input your type!' }]}
                    >
                        <InputFormComponent value={stateProduct.type} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "type": value,
                            });
                        }} name="type" />

                    </Form.Item>

                    <Form.Item
                        label="Quantity"
                        name="quantity"
                        rules={[{ required: true, message: 'Please input your Quantity!' }]}
                    >
                        <InputFormComponent value={stateProduct.quantity} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "quantity": value,
                            });
                        }} name="quantity" />

                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your Price!' }]}
                    >
                        <InputFormComponent value={stateProduct.price} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "price": value,
                            });
                        }} name="price" />

                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your Description!' }]}
                    >
                        <InputFormComponent value={stateProduct.description} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "description": value,
                            });
                        }} name="description" />

                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: 'Please input your Rating!' }]}
                    >
                        <InputFormComponent value={stateProduct.rating} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "rating": value,
                            });
                        }} name="rating" />

                    </Form.Item>

                    <Form.Item
                        label="Image"
                        name="image"
                        rules={[{ required: true, message: 'Please input your Image!' }]}
                    >
                        <WrapperUploadFileAdmin onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button>Select File</Button>
                            {stateProduct?.image && (
                                <img src={stateProduct?.image} style={{
                                    height: '60px',
                                    width: '60px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginLeft: '10px'
                                }} alt='avatar' />
                            )}
                        </WrapperUploadFileAdmin>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 20, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </ModalComponent>
            <DrawerCoponent title='Chi tiết sản phẩm' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onUpdateProduct}
                    autoComplete="on"
                    form={form}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <InputFormComponent value={stateProductDetails.name} onChange={(value) => {
                            setStateProductDetails({
                                ...stateProductDetails,
                                "name": value,
                            });
                        }} name="name" />
                    </Form.Item>

                    <Form.Item
                        label="Type"
                        name="type"
                        rules={[{ required: true, message: 'Please input your type!' }]}
                    >
                        <InputFormComponent value={stateProductDetails.type} onChange={(value) => {
                            setStateProductDetails({
                                ...stateProductDetails,
                                "type": value,
                            });
                        }} name="type" />

                    </Form.Item>

                    <Form.Item
                        label="Quantity"
                        name="quantity"
                        rules={[{ required: true, message: 'Please input your Quantity!' }]}
                    >
                        <InputFormComponent value={stateProductDetails.quantity} onChange={(value) => {
                            setStateProductDetails({
                                ...stateProductDetails,
                                "quantity": value,
                            });
                        }} name="quantity" />

                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your Price!' }]}
                    >
                        <InputFormComponent value={stateProductDetails.price} onChange={(value) => {
                            setStateProductDetails({
                                ...stateProductDetails,
                                "price": value,
                            });
                        }} name="price" />

                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your Description!' }]}
                    >
                        <InputFormComponent value={stateProductDetails.description} onChange={(value) => {
                            setStateProductDetails({
                                ...stateProductDetails,
                                "description": value,
                            });
                        }} name="description" />

                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: 'Please input your Rating!' }]}
                    >
                        <InputFormComponent value={stateProductDetails.description} onChange={(value) => {
                            setStateProductDetails({
                                ...stateProductDetails,
                                "rating": value,
                            });
                        }} name="rating" />

                    </Form.Item>

                    <Form.Item
                        label="Image"
                        name="image"
                        rules={[{ required: true, message: 'Please input your Image!' }]}
                    >
                        <WrapperUploadFileAdmin onChange={handleOnchangeAvatarDetails} maxCount={1}>
                            <Button>Select File</Button>
                            {stateProductDetails?.image && (
                                <img src={stateProductDetails?.image} style={{
                                    height: '60px',
                                    width: '60px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginLeft: '10px'
                                }} alt='avatar' />
                            )}
                        </WrapperUploadFileAdmin>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 20, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </DrawerCoponent>
            <ModalComponent title="Xóa sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct} >
                {/* <Loading isLoading={isLoadingDeleted}> */}
                <div>Bạn có muốn xóa sản phẩm này không ?</div>
                {/* </Loading> */}
            </ModalComponent>
        </div>
    )
}

export default AdminProduct
