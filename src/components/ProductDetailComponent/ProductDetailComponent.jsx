import React from 'react'
import { Col, InputNumber, Row } from 'antd'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import './ProductDetailComponent.css'
import imageProduct from '../../assets/img/detail-1.webp'
import imgSmall from '../../assets/img/img-small-1.jpg'
const ProductDetailComponent = () => {
    const onChange = () => {

    }
    return (
        <Row className='product_left'>
            <Col span={8} >
                <img className='img_main' src={imageProduct} alt="" />
                {/* product_specifically = cụ thể */}
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <Col className='col_product' span={4}>
                        <img className='img_small' src={imgSmall} alt="" />
                    </Col>
                    <Col className='col_product' span={4}>
                        <img className='img_small' src={imgSmall} alt="" />
                    </Col>
                    <Col className='col_product' span={4}>
                        <img className='img_small' src={imgSmall} alt="" />
                    </Col>
                    <Col className='col_product' span={4}>
                        <img className='img_small' src={imgSmall} alt="" />
                    </Col>
                    <Col className='col_product' span={4}>
                        <img className='img_small' src={imgSmall} alt="" />
                    </Col>
                    <Col className='col_product' span={4}>
                        <img className='img_small' src={imgSmall} alt="" />
                    </Col>
                </Row>
            </Col>
            <Col span={12} style={{ marginLeft: '110px' }}>
                <div>
                    <h2 className='col_right_name'>TISSOT LE LOCLE POWERMATIC 80 T006.407.22.036.00</h2>
                    <p className='col_right_title'> Mã sản phẩm: T006.407.22.036.00  </p>
                    <p className='col_right_title'> Loại máy:Automatic (Máy cơ tự động) </p>
                    <p className='col_right_title'>Đường kính:39.3mm</p>
                    <div className=' product_icon'>
                        <StarFilled style={{ fontSize: '18px', color: '#FF9727' }} />
                        <StarFilled style={{ fontSize: '18px', color: '#FF9727' }} />
                        <StarFilled style={{ fontSize: '18px', color: '#FF9727' }} />
                        <StarFilled style={{ fontSize: '18px', color: '#FF9727' }} />
                        <StarFilled style={{ fontSize: '18px', color: '#FF9727' }} />
                        <span>(3 đánh giá )</span>
                    </div>
                    <div className='product_detail_price'>
                        <h1 className='price_product_detail'>22.995.000₫</h1>
                    </div>
                    <div className='product_detai_quality'>
                        <div>Số lượng</div>
                        <div className='quality'>
                            <button>
                                <MinusOutlined className='btn_quality' style={{ color: '#000', fontSize: '16px' }} />
                            </button>
                            <InputNumber className='input_number' defaultValue={0} onChange={onChange} size='small' />
                            <button>
                                <PlusOutlined className='btn_quality' style={{ color: '#000', fontSize: '16px' }} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className='btn_buy'>Mua ngay</button>
                        {/* interest = Lãi suất */}
                        <button className='btn_interest'>Mua trước trả sau </button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailComponent
