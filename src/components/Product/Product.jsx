import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({id, name, newPrice, oldPrice, image }) {
  const formattedNewPrice = Number(newPrice).toLocaleString('vi-VN');
  const formattedOldPrice = Number(oldPrice).toLocaleString('vi-VN');

  return (
    <Link to={`/productDetail/${id}`} style={{textDecoration: 'none'}}>
      <div className="product">
        <div className="prod-img">
          <img src={image} alt="Ảnh sản phẩm" />
        </div>
        <p className="prod-name">{name}</p>
        <p className="new-price">
          {formattedNewPrice}₫ <span className="old-price">{formattedOldPrice}₫</span>
        </p>
      </div>
    </Link>
  );
}

export default Product;
