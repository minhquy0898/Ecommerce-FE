import React from 'react'
import { Image } from 'antd'
import Slider from 'react-slick'
const SliderComponent = ({ arrImage }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider settings={settings}>
            {arrImage.map((image) => {
                return (
                    <Image key={image} src={image} alt='slider' preview={false} width="100%" height="480px" />
                )
            })}
        </Slider>
    )
}

export default SliderComponent
