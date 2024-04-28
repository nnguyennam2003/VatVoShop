import React from "react";
import "./PlusProduct.css";

function PlusProduct({ name, newPrice, oldPrice, image }) {
  return (
    <div className="plusProduct">
      <div className="plus-img">
        <img src={image} alt="Ảnh sản phẩm" />
      </div>
      <p className="plus-name">{name}</p>
      <p className="plus-new-price">
        {newPrice}₫ <span className="plus-old-price">{oldPrice}₫</span>
      </p>
    </div>
  );
}

export default PlusProduct;
