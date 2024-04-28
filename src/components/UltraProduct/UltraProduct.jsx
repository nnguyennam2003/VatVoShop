import React from 'react';
import './UltraProducts.css'

function UltraProduct({ name, newPrice, oldPrice, image }) {
    return (
        <div className="ultraProduct">
        <div className="ultra-img">
          <img src={image} alt="Ảnh sản phẩm" />
        </div>
        <p className="ultra-name">{name}</p>
        <p className="ultra-new-price">
          {newPrice}₫ <span className="ultra-old-price">{oldPrice}₫</span>
        </p>
      </div>
    );
}

export default UltraProduct;