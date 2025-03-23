import React from "react";
import './PaymentDetail.css'
import { useSelector } from "react-redux";

function PaymentDetail(props) {
  const cartProductSelector = useSelector((state) => state.cart.ListCart);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartProductSelector.forEach((product) => {
      totalPrice += parseInt(product.price) * product.quantity;
    });
    return  totalPrice.toLocaleString('vi-VN');
  };

  return (
    <div className='payment-detail'>
      {cartProductSelector.map((item, index) => (
        <div className="payment-detail-item" key={index}>
          <div className="payment-detail-item-img">
            <img src={item.image} alt="image_product" />
          </div>
          <p>{item.name}</p>
          <div className="payment-detail-ite-quantity">{item.quantity}</div>
          <div className="payment-detail-ite-price">{Number(item.price).toLocaleString('vi-VN')}₫</div>
        </div>
      ))}

      <div className="payment-detail-total">
        <div>Tổng tiền ({`${cartProductSelector.length}`} sản phẩm)</div>
        <div>{calculateTotalPrice()}₫</div>
      </div>
    </div>
  );
}

export default PaymentDetail;
