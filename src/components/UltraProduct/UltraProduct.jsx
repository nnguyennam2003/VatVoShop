import React from "react";
import "./UltraProducts.css";
import { Link } from "react-router-dom";

function UltraProduct({ id, name, newPrice, oldPrice, image }) {
  const formattedNewPrice = Number(newPrice).toLocaleString('vi-VN');
  const formattedOldPrice = Number(oldPrice).toLocaleString('vi-VN');

  return (
    <Link to={`/productDetail/${id}`} style={{ textDecoration: "none" }}>
      <div className="ultraProduct">
        <div className="ultra-img">
          <img src={image} alt="Ảnh sản phẩm" />
        </div>
        <p className="ultra-name">{name}</p>
        <p className="ultra-new-price">
          {formattedNewPrice}₫ <span className="ultra-old-price">{formattedOldPrice}₫</span>
        </p>
      </div>
    </Link>
  );
}

export default UltraProduct;
