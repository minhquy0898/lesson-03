import React from 'react'
import NavItem from './NavItem';
import './Nav.css';

const Nav = () => {
    return (
        <div className='navContainer'>
            <div className='navContent'>
                <NavItem Icon={'AiOutlineMenu'} label={'Danh mục sản phẩm'} active={true} />
                <div className='navBorder'></div>
                <NavItem Icon={'GiBus'} label={'Giao lắp chuyên nghiệp'} active={false} />
                <div className='navBorder'></div>
                <NavItem Icon={'AiFillSetting'} label={'Bảo hành nhanh gọn'} active={false} />
                <div className='navBorder'></div>
                <NavItem Icon={'MdLibraryBooks'} label={'Tổng hợp khuyến mãi'} active={false} />
                <div className='navBorder'></div>
                <NavItem Icon={'IoDiamondSharp'} label={'Nguyễn Kim Luxury'} active={false} />
            </div>
        </div>
    )
}

export default Nav
