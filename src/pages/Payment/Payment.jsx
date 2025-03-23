import React, { useEffect, useState } from 'react';
import './Payment.css'
import PaymentForm from './components/PaymentForm';
import PaymentDetail from './components/PaymentDetail';
import { getInfoUser } from '../../services/AuthService/authService';

function Payment() {
    const userId = localStorage.getItem('userId')
    const [infoUser, setInfoUser] = useState(null)

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        fullName: '',
        address: { city: '', district: '', ward: '' },
        street: '',
        houseNumber: '',
    })

    useEffect(() => {
        const fetchInfoUser = async () => {
            try {
                const res = await getInfoUser(userId)
                if (res) {
                    setInfoUser(res)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchInfoUser()
    }, [userId])

    return (
        <div className='payment'>
            <div className='payment-container'>
                <PaymentForm userInfo={infoUser} />

                <PaymentDetail />
            </div>
        </div>
    );
}

export default Payment;