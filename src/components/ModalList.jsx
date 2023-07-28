import React, { useEffect, useState } from 'react'
import './ModalList.css'
import Card from './Card'
const Modal = (props) => {
    const { listProduct, data, setIsShowModalList } = props
    const discountPrice = (num, discount) => {
        let arr = num.split('')

        arr.pop()
        let total = parseInt(arr.join(''))
        return Math.floor((total * (100 - parseInt(discount))) / 100)
    }
    let toggle = () => {
        setIsShowModalList(false)
    }
    const total = () => {
        let sum = 0
        listProduct.map((item) => {
            sum += discountPrice(item.price, item.discount)
        })
        return sum
    }
    console.log('check sum', total())
    return (
        <div className='modalCart' onClick={toggle}>
            <div className='cartContainer'>
                {listProduct && listProduct.length > 0 && listProduct.map((item, index) => {
                    return (
                        <Card data={item} key={index} />
                    )
                })}

                <div className='cartTotal'>
                    <div className='totalInfo'>
                        <h3 className='totalProvisional'>Tạm tính</h3>
                        <h3 className='totalSale'>Khuyến mãi</h3>
                        <h3 className='totalTransport'>Phí vận chuyển</h3>
                    </div>
                    <div className='totalMoney'>
                        <h3 className='totalProvisionalMoney'>{total()}</h3>
                        <h3 className='totalSaleMoney'>0</h3>
                        <h3 className='totalTransportMoney'>0</h3>
                    </div>
                </div>
                <div className='totalMoneyProduct'>
                    <div className='totalTitle'>
                        <h3>Tổng tiền</h3>
                    </div>
                    <div className='TotalMoney'>{total()}</div>

                </div>

            </div>
        </div>
    )
}

export default Modal
