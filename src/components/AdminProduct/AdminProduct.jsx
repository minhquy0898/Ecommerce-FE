import React, { useState } from 'react'
import './AdminProduct.css'
import { Button, Form, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputFormComponent from '../InputFormComponent/InputFormComponent'

const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [stateProduct, setStateProduct] = useState({
        name: '',
        type: '',
        quantity: '',
        price: '',
        description: '',
        rating: '',
        image: ''
    })
    const handleOk = () => {
        onFinish()
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = () => {
        console.log(stateProduct)
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
                <TableComponent props={{ selectionType: 'checkbox' }} />
            </div>
            <Modal title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"  // Đặt name cho trường này
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <InputFormComponent value={stateProduct.name} onChange={handleOnChange} name="name" />
                    </Form.Item>

                    <Form.Item
                        label="Type"
                        name="Type"
                        rules={[{ required: true, message: 'Please input your type!' }]}
                    >
                        <InputFormComponent value={stateProduct.type} onChange={handleOnChange} name="type" />

                    </Form.Item>

                    <Form.Item
                        label="Quantity"
                        name="quantity"
                        rules={[{ required: true, message: 'Please input your Quantity!' }]}
                    >
                        <InputFormComponent value={stateProduct.quantity} onChange={handleOnChange} name="quantity" />

                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your Price!' }]}
                    >
                        <InputFormComponent value={stateProduct.price} onChange={handleOnChange} name="price" />

                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your Description!' }]}
                    >
                        <InputFormComponent value={stateProduct.description} onChange={handleOnChange} name="description" />

                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: 'Please input your Rating!' }]}
                    >
                        <InputFormComponent value={stateProduct.rating} onChange={handleOnChange} name="rating" />

                    </Form.Item>

                    {/* <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item> */}
                </Form>
            </Modal>
        </div>
    )
}

export default AdminProduct
