import React, { useState } from 'react'

const Card = (props) => {

    let { data } = props
    const [numberProduct, setNumberProduct] = useState(1)
    const discountPrice = (num) => {
        let arr = num.split('')

        arr.pop()
        let total = parseInt(arr.join(''))
        return Math.floor((total * (100 - parseInt(data.discount))) / 100)
    }
    return (
        <div className='cartContent'>
            <div className='cartClose'>
                <button className='close'>X</button>
            </div>
            <div className='cartMain'>
                <img src={data.img} alt="" />
                <div className='cartInfoTitle'>
                    <h2 className='cartTitle'>{data.name}</h2>
                    <p className='cartSale'>1 khuyến mãi</p>
                </div>
                <div className='cartInfoPrice'>
                    <h2 className='cartPrice'>{data.price}</h2>
                    <h2 className='cartDiscount'>{discountPrice(data.price)}đ</h2>
                    <button className='cartMinus' >-</button>
                    <span className='cartNumber'>1</span>
                    <button className='cartPlus' >+</button>
                </div>
            </div>
        </div>
    )
}

export default Card
