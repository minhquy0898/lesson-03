import React, { useState } from 'react'
import './Content.css'
import Product from './Product';
import Modal from './Modal';
import ModalList from './ModalList';
const data = [
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/product/829/dien-thoai-iphone-14-pro-max-128gb-tim-1.jpg",
        name: "iPhone 14 Pro Max 128GB Tím",
        price: "26790000đ",
        discount: "19",
        chip: "Apple A16 Bionic 6 nhân",
        sizeScreen: "6.7",
        ram: "6",
        rom: "12"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/product/829/dien-thoai-iphone-14-pro-max-128gb-vang-1.jpg",
        name: "iPhone 14 Pro Max 128GB Vàng",
        price: "26790000đ",
        discount: "19",
        chip: "Apple A16 Bionic",
        sizeScreen: "6.7",
        ram: "6",
        rom: "128"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/827/10053257-dien-thoai-samsung-galaxy-a04s-4gb-64gb-xanh-1.jpg",
        name: "Samsung Galaxy A04s 4GB/64GB Xanh",
        price: "2990000đ",
        discount: "25",
        chip: "Exynos 850 (8nm)",
        sizeScreen: "6.5",
        ram: "6",
        rom: "64"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/832/10053536-dien-thoai-oppo-a77s-8gb-128gb-xanh-1.jpg",
        name: "Điện thoại OPPO A77s 8GB/128GB Xanh",
        price: "5490000đ",
        discount: "13",
        chip: "Qualcomm Snapdragon 680 ",
        sizeScreen: "6.58",
        ram: "6",
        rom: "128"
    },
    {
        img: "https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054597-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-do-1.jpg",
        name: "Samsung Galaxy A14 5G 4GB/128GB Đỏ",
        price: "3990000đ",
        discount: "23",
        chip: "Mediatek MT6833 Dimensity 700 (7 nm)",
        sizeScreen: "6",
        ram: "4",
        rom: "16"
    }
]

const Content = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [dataDetail, setDataDetail] = useState({})
    const [listProduct, setListProduct] = useState([])
    const [isShowModalList, setIsShowModalList] = useState(false)
    let handleClickProduct = () => {
        setIsShowModal(!isShowModal)
    }
    console.log(listProduct);
    return (
        <>
            <div className='contentContainer'>
                <div className='content'>
                    <div className='banner'>
                        <div className='contentBannerLeft'>
                            <img src="https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0423/Dealsheet/AQUA/t%E1%BB%A7%20l%E1%BA%A1nh%20897x350.jpg" alt="" />
                        </div>
                        <div className='contentBannerRight'>
                            <img src="https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0723/PANASONIC/Onsite/new/Right%20banner%20in%20cate.png" alt="" className='bannerItem' />
                            <img src="https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0723/TLV%20LG/Onsite/Small_Homepage-Banner_309x183px.jpg" alt="" className='bannerItem' />
                        </div>
                    </div>

                    <div className='listProduct'>
                        {data && data.map((item, index) => {
                            return (
                                <Product setDataDetail={setDataDetail} setIsShowModal={setIsShowModal} key={index} img={item.img} name={item.name} price={item.price} discount={item.discount} chip={item.chip} sizeScreen={item.sizeScreen} ram={item.ram} rom={item.rom} />
                            )
                        })}
                    </div>
                </div>
            </div>
            {isShowModal && <Modal setIsShowModalList={setIsShowModalList} listProduct={listProduct} setListProduct={setListProduct} setIsShowModal={setIsShowModal} data={dataDetail} />}
            {isShowModalList && <ModalList setIsShowModalList={setIsShowModalList} listProduct={listProduct} />}
        </>
    )
}

export default Content
