import React from "react";
import "./UltraProducts.css";
import { Link } from "react-router-dom";

function UltraProduct({ id, name, newPrice, oldPrice, image }) {
  return (
    <Link to={`/productDetail/${id}`} style={{ textDecoration: "none" }}>
      <div className="ultraProduct">
        <div className="ultra-img">
          <img src={image} alt="Ảnh sản phẩm" />
        </div>
        <p className="ultra-name">{name}</p>
        <p className="ultra-new-price">
          {newPrice}₫ <span className="ultra-old-price">{oldPrice}₫</span>
        </p>
      </div>
    </Link>
  );
}

export default UltraProduct;
