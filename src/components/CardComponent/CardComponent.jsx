import { Card } from 'antd'
import './CardComponent.css'
import React from 'react'



const CardComponent = ({ data }) => {
    const { image, name, code, diameter, price, salePrice } = data
    return (
        <Card
            hoverable
            style={{ width: 228 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} />}
        >

            <div className='card_body'>
                <span className='product_name'>{name}</span>
                <span className='product_code'>{code}</span>
                <p className='product_diameter'>{diameter}</p>
                <p className='product_price'> Giá : {price}</p>
                <p className='price_sale'>Giá KM: {salePrice}</p>
            </div>
        </Card>
    )
}

export default CardComponent
