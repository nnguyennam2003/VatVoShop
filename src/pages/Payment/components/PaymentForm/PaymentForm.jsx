import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import logo from "../../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import SelectCountry from "../SelectCountry";
import axios from "axios";
import './PaymentForm.css';
import { useSelector } from "react-redux";
import { checkout } from "../../../../services/CheckoutService/checkout";

function PaymentForm({ userInfo, cartItems }) {
  const cartProductSelector = useSelector((state) => state.cart.ListCart);

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState({ city: "", district: "", ward: "" });
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartProductSelector.forEach((product) => {
      totalPrice += parseInt(product.price) * product.quantity;
    });
    return totalPrice.toLocaleString('vi-VN');
  };

  const userIdStorage = localStorage.getItem('userId');

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email);
      setPhone(userInfo.phoneNumber);
      setFullName(userInfo.fullName);
    }
  }, [userInfo]);

  const getAddress = (selectedAddress) => {
    setAddress({ city: selectedAddress.city, district: selectedAddress.district, ward: selectedAddress.ward });
  };

  const totalPrice = cartProductSelector.reduce((total, item) => total + item.price * item.quantity, 0);

  const createOrder = async (paymentMethod, paymentStatus = "pending") => {
    setLoading(true);
    try {
      const orderData = {
        userId: userIdStorage,
        items: cartProductSelector.map(item => ({
          productId: item._id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        shippingInfo: {
          fullName,
          phoneNumber: phone,
          address: `${houseNumber}, ${street}, ${address.ward}, ${address.district}, ${address.city}`
        },
        paymentMethod,
        totalPrice: calculateTotalPrice(),
        status: paymentStatus,
      };

      const response = await checkout(orderData);
      if (response.data) {
        navigate("/payment-success");
      }
    } catch (error) {
      console.error("Lỗi khi tạo đơn hàng:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCashPayment = () => {
    createOrder("cod", "pending");
  };

  const handlePayPalSuccess = (details) => {
    console.log("Thanh toán PayPal thành công:", details);
    createOrder("paypal", "paid");
  }

  const backToCartPage = () => {
    navigate(-1);
  }

  return (
    <div className="payment-form">
      <div className="payment-form-header">
        <div className="payment-form-header-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="payment-form-field">
        <h1>Thông tin liên lạc</h1>
        <input type="email" placeholder="Địa chỉ Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="payment-form-field">
        <h1>Địa chỉ giao hàng</h1>
        <form className="form-address">
          <input type="text" placeholder="Tên đầy đủ" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input type="text" placeholder="Tên đường" value={street} onChange={(e) => setStreet(e.target.value)} />
          <input type="text" placeholder="Số nhà, căn hộ" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />
          <SelectCountry getAddress={getAddress} />
          <input type="number" placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </form>
      </div>

      <div className="payment-order-confirm">
        <p onClick={backToCartPage}>
          <span>&lt;</span> Trở lại giỏ hàng
        </p>
        <div className="payment-method-selection">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              onChange={() => setPaymentMethod("cod")}
              checked={paymentMethod === "cod"}
            />
            Thanh toán tiền mặt khi nhận hàng
          </label>

          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              onChange={() => setPaymentMethod("paypal")}
              checked={paymentMethod === "paypal"}
            />
            Thanh toán qua PayPal
          </label>

          {paymentMethod && (
            paymentMethod === "cod" ? (
              <button onClick={handleCashPayment} disabled={loading}>
                {loading ? "Đang xử lý..." : "Xác nhận đặt hàng"}
              </button>
            ) : (
              <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_CLIENT_ID }}>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{ amount: { value: totalPrice.toString() } }]
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => handlePayPalSuccess(details, data));
                  }}
                  onError={(error) => {
                    alert("Thanh toán PayPal lỗi");
                  }}

                />
              </PayPalScriptProvider>
            )
          )}
        </div>

      </div>
    </div>
  );
}

export default PaymentForm;
