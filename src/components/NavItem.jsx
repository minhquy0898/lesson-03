import React from 'react'
import { AiOutlineMenu, AiFillSetting } from 'react-icons/ai';
import { GiBus } from 'react-icons/gi';
import { MdLibraryBooks } from 'react-icons/md';
import { IoDiamondSharp } from 'react-icons/io5';

const NavItem = (props) => {
    const label = props.label
    const Icon = props.Icon
    const active = props.active
    const renderIcon = () => {
        switch (Icon) {
            case 'AiOutlineMenu':
                return <AiOutlineMenu size={30} color={`${active ? '#ffffff' : '#ff0000'}`} />
            case 'GiBus':
                return <GiBus size={30} color={`${active ? '#ffffff' : '#ff0000'}`} />
            case 'AiFillSetting':
                return <AiFillSetting size={30} color={`${active ? '#ffffff' : '#ff0000'}`} />
            case 'MdLibraryBooks':
                return <MdLibraryBooks size={30} color={`${active ? '#ffffff' : '#ff0000'}`} />
            case 'IoDiamondSharp':
                return <IoDiamondSharp size={30} color={`${active ? '#ffffff' : '#ff0000'}`} />
            default:
                return null;
        }
    }


    return (
        <div className={`navItem ${active ? "active" : ''}`}>
            {renderIcon()}
            {label}
        </div>
    )
}

export default NavItem
