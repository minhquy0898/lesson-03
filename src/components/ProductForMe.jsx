import React from 'react'
import './ProductForMe.css'

const ProductForMe = (props) => {
    const { img, name, price, discount, chip, sizeScreen, ram, rom, setDataDetail, setIsShowModal } = props

    const discountPrice = (num) => {
        let arr = num.split('')

        arr.pop()
        let total = parseInt(arr.join(''))
        return Math.floor((total * (100 - parseInt(discount))) / 100)
    }
    return (
        <div className='productForMe'  >

            <img src={img} alt={img} className='imageProductForMe' />
            <div className='producForMetInfo'>
                <h2 className="productForMeTitle">{name}</h2>
                <h2 className='productForMeDiscount'>{(discountPrice(price))}đ</h2>
                <div className='productForMeSale'>
                    <span className='productForMePrice'>{(price)} </span>
                    <span className='productForMePrecent'>-{discount}%</span>
                </div>
                <p className='productForMeChip'>{chip}</p>
                <h2 className='productFormeSizeScreen'>Kích thước màn hình : {sizeScreen}</h2>
                <p className='productForMeRam'> RAM {ram}</p>
                <p className='productForMeRom'>Bộ nhớ trong {rom}</p>
            </div>
        </div>


    )
}

export default ProductForMe
