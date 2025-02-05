import React, { useEffect, useState } from 'react';
import './Payment.css'
import PaymentForm from './components/PaymentForm';
import PaymentDetail from './components/PaymentDetail';
import { getInfoUser } from '../../services/AuthService/authService';

function Payment(props) {
    const userId = localStorage.getItem('userId')
    const [infoUser, setInfoUser] = useState(null)

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
    useEffect(() => {
        fetchInfoUser()
    }, [])
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