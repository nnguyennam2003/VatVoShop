import React from "react";
import "./PlusProduct.css";
import { Link } from "react-router-dom";

function PlusProduct({ id, name, newPrice, oldPrice, image }) {
  const formattedNewPrice = Number(newPrice).toLocaleString('vi-VN');
  const formattedOldPrice = Number(oldPrice).toLocaleString('vi-VN');
  
  return (
    <Link to={`/productDetail/${id}`} style={{ textDecoration: "none" }}>
      <div className="plusProduct">
        <div className="plus-img">
          <img src={image} alt="Ảnh sản phẩm" />
        </div>
        <p className="plus-name">{name}</p>
        <p className="plus-new-price">
          {formattedNewPrice}₫ <span className="plus-old-price">{formattedOldPrice}₫</span>
        </p>
      </div>
    </Link>
  );
}

export default PlusProduct;
