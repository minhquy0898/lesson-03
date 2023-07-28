import React from 'react'
import './Modal.css'
const Modal = (props) => {
    const { setIsShowModal, data, listProduct, setListProduct, setIsShowModalList } = props
    const handleBuyProduct = () => {
        setListProduct([...listProduct, data])
        setIsShowModal(false)
        setIsShowModalList(true)
    }
    const discountPrice = (num) => {
        let arr = num.split('')

        arr.pop()
        let total = parseInt(arr.join(''))
        return Math.floor((total * (100 - parseInt(data.discount))) / 100)
    }

    return (
        <div className='modalBackground' onClick={() => setIsShowModal(false)} >
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>

                <img src={data.img} alt="" />
                <div className='detailContent'>
                    <h2 className='contentTitle'>{data.name}</h2>
                    <hr />
                    <h2 className='contentDiscount'>{discountPrice(data.price)}đ</h2>
                    <div className='saleGroup'>
                        <span className='contentPercent'>-{data.discount}%</span>
                        <span className='contentPrice'>{data.price}đ</span>
                    </div>
                    <div className='contentInfo'>
                        <span className='contentInstallment'>Trả góp 0 %</span>
                        <span className='contentNew'>Mới</span>
                    </div>
                    <button className='btnAddProduct' onClick={handleBuyProduct}>Thêm và giỏ hàng</button>
                </div>


            </div>
        </div>
    )
}

export default Modal
