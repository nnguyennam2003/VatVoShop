import React from "react";
import logo from "../../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import SelectCountry from "../SelectCountry";
import './PaymentForm.css'

function PaymentForm({ userInfo }) {
  const navigate = useNavigate();

  const backToCartPage = () => {
    navigate(-1);
  };

  return (
    <div className="payment-form">
      <div className="payment-form-header">
        <div className="payment-form-header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="payment-form-header-breadcrumb">
          Thông tin <span>&gt;</span> Giao hàng <span>&gt;</span> Thanh toán
        </div>
      </div>
      <div className="payment-form-field">
        <h1>Thông tin liên lạc</h1>
        <input type="email" placeholder="Địa chỉ Email" value={userInfo ? userInfo.email : ''} disabled />
      </div>
      <div className="payment-form-field">
        <h1>Địa chỉ giao hàng</h1>
        <form className="form-address">
          <input type="text" placeholder="Tên đầy đủ" value={userInfo ? userInfo.fullName : ''} disabled />
          <input type="text" placeholder="Tên đường" />
          <input type="text" placeholder="Số nhà, căn hộ (không bắt buộc)" />
          {/* <SelectCountry /> */}
          <input type="number" placeholder="Số điện thoại" value={userInfo ? userInfo.phoneNumber : ''} disabled />
        </form>
      </div>
      <div className="payment-order-confirm">
        <p onClick={backToCartPage}>
          <span>&lt;</span> Trở lại giỏ hàng
        </p>
        <button type="submit">Tiếp tục đến giao hàng &#8594;</button>
      </div>
    </div>
  );
}

export default PaymentForm;
