import React from 'react'
import './HomePage.css'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/img/slider-1.jpg'
import slider2 from '../../assets/img/slider-2.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import IntroduceProduct from '../../components/IntroduceProduct/IntroduceProduct'
import cardProduct1 from '../../assets/img/product-1.webp'
import cardProduct2 from '../../assets/img/product-2.webp'
import cardProduct3 from '../../assets/img/product-3.webp'
import cardProduct4 from '../../assets/img/product-4.webp'
import cardProduct5 from '../../assets/img/product-5.webp'
// import { useQuery } from '@tanstack/react-query'
// import * as ProductService from '../../services/ProductService'

const HomePage = () => {
    const arr = ['Trang chủ', 'Sản phẩm', 'Giới thiệu', 'Liên hệ'];
    // const fetchProductAll = async () => {
    //     await ProductService.getAllProduct()
    // }
    // const { isLoading, data } = useQuery(['products'], fetchProductAll, { retry: 3, retryDelay: 1000 })
    // console.log('data', data)
    const cardData = [
        {
            image: cardProduct1,
            name: "Đồng hồ nam Tissot Le Locle 1",
            code: "T006.407.22.036.00",
            diameter: "AUTOMATIC|39.3MM",
            price: "25.550.000₫",
            salePrice: "22.995.000₫",
        },
        {
            image: cardProduct2,
            name: "Đồng hồ nam Longines Master",
            code: "TL2.793.5.57.7 ",
            diameter: "AUTOMATIC|40MM",
            price: "115.000.000₫",
            salePrice: "103.500.000₫",
        },
        {
            image: cardProduct3,
            name: "Đồng hồ nam Longines Master",
            code: "L2.793.5.97.7",
            diameter: "AUTOMATIC|40MM",
            price: "115.000.000₫",
            salePrice: "103.500.000₫",
        },
        {
            image: cardProduct4,
            name: "Đồng hồ nam Tissot Le Locle",
            code: "T006.407.11.033.02",
            diameter: "AUTOMATIC|39.3MM",
            price: "24.330.000₫",
            salePrice: "21.897.000₫",
        },
        {
            image: cardProduct5,
            name: "Đồng hồ nam Mido Multifort",
            code: "TM038.431.11.097.00",
            diameter: "AAUTOMATIC COSC|42MM",
            price: "35.950.000₫",
            salePrice: "32.355.000₫",
        }, {
            image: cardProduct1,
            name: "Đồng hồ nam Tissot Le Locle 1",
            code: "T006.407.22.036.00",
            diameter: "AUTOMATIC|39.3MM",
            price: "25.550.000₫",
            salePrice: "22.995.000₫",
        },
        {
            image: cardProduct2,
            name: "Đồng hồ nam Longines Master",
            code: "TL2.793.5.57.7 ",
            diameter: "AUTOMATIC|40MM",
            price: "115.000.000₫",
            salePrice: "103.500.000₫",
        },
        {
            image: cardProduct3,
            name: "Đồng hồ nam Longines Master",
            code: "L2.793.5.97.7",
            diameter: "AUTOMATIC|40MM",
            price: "115.000.000₫",
            salePrice: "103.500.000₫",
        },
        {
            image: cardProduct4,
            name: "Đồng hồ nam Tissot Le Locle",
            code: "T006.407.11.033.02",
            diameter: "AUTOMATIC|39.3MM",
            price: "24.330.000₫",
            salePrice: "21.897.000₫",
        },
        {
            image: cardProduct5,
            name: "Đồng hồ nam Mido Multifort",
            code: "TM038.431.11.097.00",
            diameter: "AAUTOMATIC COSC|42MM",
            price: "35.950.000₫",
            salePrice: "32.355.000₫",
        }

    ]

    return (
        <>
            <div className='homepage_nav'>
                {arr.map((item) => {
                    return (
                        <TypeProduct name={item} key={item} />
                    )
                })}
            </div>
            <div className='homepage'>
                <SliderComponent arrImage={[slider1, slider2]} />
                <div>
                    <IntroduceProduct />
                </div>
                <div className='products'>
                    <p>Bán chạy nhất</p>
                </div>
                <div className='card'>
                    {cardData.map((data, index) => (
                        <CardComponent key={index} data={data} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePage
