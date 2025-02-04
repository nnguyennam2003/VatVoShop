import React from 'react';
import './Header.css'
import logo from '../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import { logout } from '../../redux/slice/authSlice';

function Header() {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    const cartProductSelector = useSelector(state => state.cart.ListCart)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleLogout = () => {
        Swal.fire({
            title: `Bạn có chắc muốn đăng xuất?`,
            text: "Bạn có thể thêm lại sản phẩm này bất cứ khi nào",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Đăng xuất",
            cancelButtonText: "Thoát"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout())
                
                localStorage.removeItem('role')
                localStorage.removeItem('token')
                localStorage.removeItem('userId')

                navigate('/login')
                Swal.fire({
                    title: "Đã đăng xuất!",
                    icon: "success",
                    confirmButtonColor: "#4FED66"
                })
            }
        });
    }

    return (
        <div className='header'>
            <ul className='pages-header'>
                {role === 'admin' ? (
                    <>
                        <h1>Admin</h1>
                    </>
                ) : (
                        <>

                            <Link to={'/products'} style={{ textDecoration: 'none', color: '#0c0c0c' }}><li className='products-btn'>SẢN PHẨM</li></Link>
                            <Link to={'/tutorial'} style={{ textDecoration: 'none', color: '#0c0c0c' }}><li className='tutorial-btn'>HƯỚNG DẪN MUA</li></Link>
                            <a href="https://vatvostudio.vn/" target='_blank' rel="noreferrer"><li className='vatvostudio-btn'>VATVOSTUDIO.VN</li></a>
                        </>
                )}
            </ul>
            <div className='logo-header'>
                <Link to={'/'} className='logo-url'><img src={logo} alt="logo" width='100px' /></Link>
            </div>
            <div className='cart-header'>
                {token ?
                    (
                        <>
                            <Link to={'/cart'} style={{ textDecoration: 'none', color: '#0c0c0c' }}><li>GIỎ HÀNG <span>{cartProductSelector.length}</span></li></Link>
                            <li style={{ marginLeft: '10px' }} onClick={handleLogout}>
                                <LogoutOutlined style={{ margin: 'auto', width: '100%' }} />
                            </li>
                        </>
                    )
                    :
                    <Link to={'/login'} style={{ textDecoration: 'none', color: '#0c0c0c' }}><li>ĐĂNG NHẬP</li></Link>
                }
            </div>
        </div>
    );
}

export default Header;