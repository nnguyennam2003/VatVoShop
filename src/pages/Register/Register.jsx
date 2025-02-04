import React, { useState } from 'react'
import { signup } from '../../services/AuthService/authService'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [fullName, setFullName] = useState("")
const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault()

        try {
            const res = await signup(email, fullName, phone, password )
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
        <div>
            <form onSubmit={handleSignUp}>
                <input type="text" placeholder='Full name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Đăng ký</button>
            </form>
        </div>
    )
}
