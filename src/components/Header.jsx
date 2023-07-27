import React from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDown } from 'react-icons/ai';
import Search from './Search';
import HeaderItem from './HeaderItem';


function Header() {
    return (
        <div className="header">
            <div className='container'>
                <div className='header-logo'>
                    <img src="	https://www.nguyenkim.com/images/companies/_1/html/2017/T11/homepage/Logo_NK.svg" alt="" />
                    <div className='header-location'>
                        <CiLocationOn size={40} color='#ffffff' />
                        <div className='container-item'>
                            <div className='item'>
                                <h2 className="">Xem giá tại</h2>
                            </div>
                            <div className='location-item'>
                                <p>TP.HCM</p>
                                <AiOutlineDown size={16} color='#fff' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-menu'>
                    <Search />
                    <div className='header-menu__item'>
                        <HeaderItem Icon={"AiOutlineShoppingCart"} label={'Giỏ hàng'} />
                        <HeaderItem Icon={"BiTimeFive"} label={'Tra cứu đơn hàng'} />
                        <HeaderItem Icon={"BiUserCircle"} label={'Tài khoản'} />
                        <HeaderItem Icon={"AiOutlinePhone"} label={'Gọi mua : 1800 6800 miễn phí'} />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Header
