import React from "react";
import "./ItemCart.css";
import Swal from "sweetalert2";

function ItemCart({ image, name, price, quantity, onRemove }) {
  const formattedPrice = Number(price).toLocaleString('vi-VN');

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
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#4FED66"
        });
      }
    });
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
        <span>Trắng,S</span>
      </div>
      <div className="item-cart-quantity">
        <div className="action-quantity">
          <button>
            <i className="bx bx-minus"></i>
          </button>
          <p className="quantity">{quantity}</p>
          <button>
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </div>
      <div className="item-cart-price">{formattedPrice}₫</div>
      <div className="item-cart-total">{formattedPrice}₫</div>
    </div>
  );
}

export default ItemCart;
