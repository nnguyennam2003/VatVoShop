import React, { useState } from 'react'
import { login } from '../../services/AuthService/authService'
import { useDispatch } from 'react-redux';
import { setLoading, setLoginFailure, setLoginSuccess } from '../../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { jwtDecode } from "jwt-decode";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(setLoading())

        try {
            const res = await login(email, password)
            dispatch(setLoginSuccess(res))
            if (res && res.token) {
                Swal.fire({
                    title: "Đăng nhập thành công!",
                    icon: "success",
                    draggable: true
                });
                const decoded = jwtDecode(res.token)

                localStorage.setItem('token', res.token);
                localStorage.setItem('role', res.role);
                localStorage.setItem('userId', decoded.userId);
            }

            if (res.role === 'admin') {
                navigate('/admin/dashboard')
            } else if (res.role === 'user') {
                navigate('/')
            }

        } catch (error) {
            dispatch(setLoginFailure(error.response?.data || "Login failed"));
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Đăng nhập</button>
            </form>
        </div>
    )
}
