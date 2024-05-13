import React from "react";
import "./PlusProduct.css";
import { Link } from "react-router-dom";

function PlusProduct({ id, name, newPrice, oldPrice, image }) {
  return (
    <Link to={`/productDetail/${id}`} style={{ textDecoration: "none" }}>
      <div className="plusProduct">
        <div className="plus-img">
          <img src={image} alt="Ảnh sản phẩm" />
        </div>
        <p className="plus-name">{name}</p>
        <p className="plus-new-price">
          {newPrice}₫ <span className="plus-old-price">{oldPrice}₫</span>
        </p>
      </div>
    </Link>
  );
}

export default PlusProduct;
