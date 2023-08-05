import React from 'react'
import './AllProduct.css'

const AllProduct = (props) => {
    const { img, name, price, discount, chip, sizeScreen, ram, rom } = props
    const discountPrice = (num) => {
        let arr = num.split('')

        arr.pop()
        let total = parseInt(arr.join(''))
        return Math.floor((total * (100 - parseInt(discount))) / 100)
    }
    return (
        <div>
            <div className='allProductContainer'>
                <img src={img} alt={img} className='imgAllProduct' />
                <div className='allProductInfo'>
                    <h2 className='allProductTitele'>{name}</h2>
                    <h2 className='allProductDiscount'>{(discountPrice(price))}đ</h2>
                    <div className="allProductSale">
                        <span className='allProductPrice'>{(price)}</span>
                        <span className="allProductPercent">-{discount}%</span>
                    </div>
                    <p className='allProductChip'>{chip}</p>
                    <h2 className='allProductSizeScreen'> Kích thước màn hình : {sizeScreen}</h2>
                    <p className='allProductRam'>RAM {ram}</p>
                    <p className='allProductRom'> Bộ nhớ trong : {rom}</p>
                </div>
            </div>
        </div>
    )
}

export default AllProduct
