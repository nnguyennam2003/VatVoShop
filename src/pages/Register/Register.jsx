import React, { useState } from 'react'
import { signup } from '../../services/AuthService/authService'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Register.css'

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [fullName, setFullName] = useState("")
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault()

        try {
            const res = await signup(email, fullName, phone, password)
            console.log(res)
            if (res && res.message === "User registered successfully. Please log in.") {
                Swal.fire({
                    title: "Đăng ký thành công, hãy đăng nhập!",
                    icon: "success",
                    draggable: true
                });
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='register-page'>
        <div className='register-form'>
                <h1>Đăng kí</h1>
            <form onSubmit={handleSignUp}>
                <div className='input-item'>
                    <label htmlFor="">Họ tên</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className='input-item'>
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-item'>
                    <label htmlFor="">Số điện thoại</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='input-item'>
                    <label htmlFor="">Mật khẩu</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Đăng ký</button>
                <div>Bạn đã có tài khoản? <Link to={'/login'}>Đăng nhập</Link></div>
            </form>
            </div>
        </div>
    )
}
