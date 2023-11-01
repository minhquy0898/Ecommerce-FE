import React from 'react'
import { Link } from 'react-router-dom';
import './IntroduceProduct.css'
import introduce1 from '../../assets/img/introduce-1.png'
import introduce2 from '../../assets/img/introduce-2.png'
import introduce3 from '../../assets/img/introduce-3.png'
import introduce5 from '../../assets/img/introduce-5.png'
import introduce6 from '../../assets/img/introduce-6.png'
import sliderProduct1 from '../../assets/img/slider-product-1.webp'
import sliderProduct2 from '../../assets/img/slider-product-2.webp'
import sliderProduct3 from '../../assets/img/slider-product-3.webp'
import sliderProduct4 from '../../assets/img/slider-product-4.webp'
import sliderProduct5 from '../../assets/img/slider-product-5.webp'
import imgSliderMain1 from '../../assets/img/img-slider-1.webp'
import imgSliderMain2 from '../../assets/img/img-slider-2.webp'
import imgSliderMain3 from '../../assets/img/img-slider-3.webp'
import imgSliderMain4 from '../../assets/img/img-slider-4.webp'
import imgSliderMain5 from '../../assets/img/img-slider-5.webp'
import backgroundImg from '../../assets/img/background-img.jpg'
import { Carousel } from 'antd'

const IntroduceProduct = () => {
    return (
        <>
            <div className='introduce_top'>
                <img src={backgroundImg} alt="" />
            </div>
            <div className='introduce_content'>
                <div className='item'>
                    <div className='icon'>
                        <img src={introduce1} alt="" />
                    </div>
                    <div className='content'>
                        <p className='title'>Phòng bảo hành đạt</p>
                        <p className='desc'>Tiêu chuẩn thụy sĩ</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon_main'>
                        <div className='icon_inner'>
                            <img src={introduce2} alt="" />
                        </div>
                    </div>
                    <div className='content'>
                        <p className='title'>Thương hiệu uy tín</p>
                        <p className='desc'>Lâu đời 70 năm</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon_3'>
                        <img src={introduce3} alt="" />
                    </div>
                    <div className='content'>
                        <p className='title'>Đền gấp 20 lần</p>
                        <p className='desc'>Sản phẩm kém</p>
                    </div>
                </div>
            </div>
            <div className='introduce_img'>
                <img src={introduce5} alt="" />
                <img className='mg-l-10' src={introduce6} alt="" />
            </div>
            <div className='carousel_info'>
                <Carousel>
                    <div>
                        <div className='carousel_img'>
                            <img src={sliderProduct1} alt="" />
                        </div>
                        <div className='carousel_sub'>
                            <img src={imgSliderMain1} alt="" />
                        </div>
                        <div className='carousel_content'>
                            <h2 className='content_title'>Vàng 18k</h2>
                            <p className='content_text'>Bộ sưu tập</p>
                            <p className='content_desc'>Tuyển chọn những mẫu đồng hồ vàng 18k bán chạy</p>
                            <Link to="./order">vào cửa hàng</Link>
                        </div>
                    </div>
                    <div>
                        <div className='carousel_img'>
                            <img src={sliderProduct2} alt="" />
                        </div>
                        <div className='carousel_sub'>
                            <img src={imgSliderMain2} alt="" />
                        </div>
                        <div className='carousel_content'>
                            <h2 className='content_title'>Open heare</h2>
                            <p className='content_text'>Bộ sưu tập</p>
                            <p className='content_desc'>Bộ sưu tập những đồng hồ lộ máy cực đẹp</p>
                            <Link to="./order">vào cửa hàng</Link>
                        </div>
                    </div>
                    <div>
                        <div className='carousel_img'>
                            <img src={sliderProduct3} alt="" />
                        </div>
                        <div className='carousel_sub'>
                            <img src={imgSliderMain3} alt="" />
                        </div>
                        <div className='carousel_content'>
                            <h2 className='content_title'>Xanh lam</h2>
                            <p className='content_text'>Bộ sưu tập</p>
                            <p className='content_desc'>Tuyển chọn những mẫu đồng hồ xanh được yêu thích</p>
                            <Link to="./order">vào cửa hàng</Link>
                        </div>
                    </div>
                    <div>
                        <div className='carousel_img'>
                            <img src={sliderProduct4} alt="" />
                        </div>
                        <div className='carousel_sub'>
                            <img src={imgSliderMain4} alt="" />
                        </div>
                        <div className='carousel_content'>
                            <h2 className='content_title'>Quân độ</h2>
                            <p className='content_text'>Bộ sưu tập</p>
                            <p className='content_desc'>Khám phá những mẫu quân đội hot nhất</p>
                            <Link to="./order">vào cửa hàng</Link>
                        </div>
                    </div>
                    <div>
                        <div className='carousel_img'>
                            <img src={sliderProduct5} alt="" />
                        </div>
                        <div className='carousel_sub'>
                            <img src={imgSliderMain5} alt="" />
                        </div>
                        <div className='carousel_content'>
                            <h2 className='content_title'>Đồng hồ lặn</h2>
                            <p className='content_text'>Bộ sưu tập</p>
                            <p className='content_desc'>
                                Đồng hồ lặn là một trong những loại đồng <br />
                                hồ đeo tay cao cấp dành cho những khách <br />
                                hàng thường xuyên bơi lội hoặc lặn với khả <br />
                                năng chống nước cao</p>
                            <Link to="./order">vào cửa hàng</Link>
                        </div>
                    </div>

                </Carousel>
            </div>
        </>
    )
}

export default IntroduceProduct
