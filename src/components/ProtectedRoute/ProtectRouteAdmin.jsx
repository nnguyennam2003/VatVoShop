import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRouteUser() {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    return token && role === 'admin' ? <Outlet /> : <Navigate to='/login' />
}