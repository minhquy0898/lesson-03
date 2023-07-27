import React from 'react'

const Product = (props) => {
    const { img, name, price, discount, chip, sizeScreen, ram, rom } = props


    const discountPrice = (num) => {
        let arr = num.split('')
        console.log(arr)
        arr.pop()
        let total = parseInt(arr.join(''))
        return Math.floor((total * (100 - parseInt(discount))) / 100)
    }

    return (
        <div className='productContainer'>

            <img src={img} alt={img} className='imageProduct' />
            <div className='productInfo'>
                <h2 className="productTitle">{name}</h2>
                <h2 className='productDiscount'>{(discountPrice(price))}đ</h2>
                <div className='productSale'>
                    <span className='productPrice'>{(price)} </span>
                    <span className='productPrecent'>-{discount}%</span>
                </div>
                <p className='productChip'>{chip}</p>
                <h2 className='productSizeScreen'>Kích thước màn hình : {sizeScreen}</h2>
                <p className='productRam'> RAM {ram}</p>
                <p className='productRom'>Bộ nhớ trong {rom}</p>
                <button className='btn-detail'></button>
            </div>
        </div>
    )
}

export default Product
