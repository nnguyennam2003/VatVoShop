import React from 'react';
import './Payment.css'
import PaymentForm from './components/PaymentForm';
import PaymentDetail from './components/PaymentDetail';

function Payment(props) {
    return (
        <div className='payment'>
            <div className='payment-container'>
                <PaymentForm />
                
                <PaymentDetail />
            </div>
        </div>
    );
}

export default Payment;