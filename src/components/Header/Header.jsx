import React from 'react';
import './Header.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='header'>
            <ul className='pages-header'>
                <Link to={'/products'} style={{textDecoration: 'none', color: '#0c0c0c'}}><li className='products-btn'>SẢN PHẨM</li></Link>
                <Link to={'/tutorial'} style={{textDecoration: 'none', color: '#0c0c0c'}}><li className='tutorial-btn'>HƯỚNG DẪN MUA</li></Link>
                <a href="https://vatvostudio.vn/" target='_blank' rel="noreferrer"><li className='vatvostudio-btn'>VATVOSTUDIO.VN</li></a>
            </ul>
            <div className='logo-header'>
                <Link to={'/'} className='logo-url'><img src={logo} alt="logo" width='100px'/></Link>
            </div>
            <div className='cart-header'>
                <Link to={'/cart'} style={{textDecoration: 'none', color: '#0c0c0c'}}><li to='/cart'>GIỎ HÀNG <span>0</span></li></Link>
            </div>
        </div>
    );
}

export default Header;