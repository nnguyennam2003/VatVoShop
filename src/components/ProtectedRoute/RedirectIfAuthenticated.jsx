import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function RedirectIfAuthenticated() {
    const token = localStorage.getItem('token')
    return token ? <Navigate to="/" replace /> : <Outlet />;
}
