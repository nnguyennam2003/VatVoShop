import React, { useState } from "react";
import "./ItemCart.css";
import Swal from "sweetalert2";
import { updateQuantity } from "../../../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

function ItemCart({id, image, name, price, quantity, size, onRemove }) {
  const [ quantityItem, setQuantityItem ] = useState(quantity)
  const dispatch = useDispatch()
  const formattedPrice = Number(price).toLocaleString('vi-VN');
  const totalPrice = (price * quantityItem).toLocaleString('vi-VN');
  
  const handleRemoveFromCart = () => {
    Swal.fire({
      title: `Bạn có chắc muốn xóa ${name}?`,
      text: "Bạn có thể thêm lại sản phẩm này bất cứ khi nào",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Thoát"
    }).then((result) => {
      if (result.isConfirmed) {
        onRemove();
        Swal.fire({
          title: "Đã xóa!",
          text: "Sản phẩm đã được xóa khỏi giỏ hàng.",
          icon: "success",
          confirmButtonColor: "#4FED66"
        });
      }
    });
  };

  const handleIncrementQuantity = () => {
    const newQuantity = quantityItem + 1;
    setQuantityItem(newQuantity);
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  }

  const handleDecrementQuantity = () => {
    if (quantityItem > 1) {
      const newQuantity = quantityItem - 1;
      setQuantityItem(newQuantity);
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };


  return (
    <div className="item-cart">
      <button onClick={handleRemoveFromCart}>
        <i className="bx bx-x"></i>
      </button>

      <div className="item-cart-img">
        <img src={image} alt="" />
      </div>
      <div className="item-cart-info">
        <h3>{name}</h3>
        <span>Kích thước: {size}</span>
      </div>
      <div className="item-cart-quantity">
        <div className="action-quantity">
          <button onClick={handleDecrementQuantity}>
            <i className="bx bx-minus"></i>
          </button>
          <p className="quantity">{quantityItem}</p>
          <button onClick={handleIncrementQuantity}>
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </div>
      <div className="item-cart-price">{formattedPrice}₫</div>
      <div className="item-cart-total">{totalPrice}₫</div>
    </div>
  );
}

export default ItemCart;
