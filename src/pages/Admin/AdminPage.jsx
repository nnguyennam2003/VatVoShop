import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

export default function AdminPage() {
  const isAdminRole = localStorage.getItem('role') === 'admin'
  console.log(isAdminRole)
  return isAdminRole ? (
    <div>
      <div>
        <Link to={'dashboard'}>dashboard</Link>
        <Link to={'products-manage'}>Products Manage</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={'/'} />
  )
}
