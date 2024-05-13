import React, { useState } from "react";
import "./ProductInfo.css";
import Loading from "../Loading";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../redux/slice/cartSlice";

function ProductInfo({ productInfo }) {
  const [activeSize, setActiveSize] = useState('S')
  const [size, setSize] = useState("S")
  const dispatch = useDispatch()

  const handlePickSize = (sizeSelect) => {
    setActiveSize(sizeSelect)
    setSize(sizeSelect)
  }

  return (
    <>
      {productInfo ? (
        <div className="product-info">
          <div className="product-info-img">
            <img src={productInfo.image} alt="img"/>
          </div>

          <div className="product-info-text">
            <h1>{productInfo.name}</h1>
            <div className="product-info-text-price">
              <p>{productInfo.new_price}₫</p>
              <span>{productInfo.old_price}₫</span>
            </div>

            <p>Sẵn sàng gửi trong 2 - 3 ngày tới</p>

            <div className="product-info-size">
              <p>Size: <span>{size}</span></p>
              <div className="size-option">
                <button className={activeSize === 'S' ? 'active' : 'S'} onClick={() => handlePickSize('S')}>S</button>
                <button className={activeSize === 'M' ? 'active' : 'S'} onClick={() => handlePickSize('M')}>M</button>
                <button className={activeSize === 'L' ? 'active' : 'S'} onClick={() => handlePickSize('L')}>L</button>
                <button className={activeSize === 'XL' ? 'active' : 'S'} onClick={() => handlePickSize('XL')}>XL</button>
                <button className={activeSize === 'XXL' ? 'active' : 'S'} onClick={() => handlePickSize('XXL')}>XXL</button>
                <button className={activeSize === 'XXXL' ? 'active' : 'S'} onClick={() => handlePickSize('XXXL')}>XXXL</button>
                <button className={activeSize === 'XXXXL' ? 'active' : 'S'} onClick={() => handlePickSize('XXXXL')}>XXXXL</button>
              </div>
            </div>

            <div className="product-info-quantity">
              <button><i className="bx bx-minus"></i></button>
              <p style={{fontSize: '20px'}}>1</p>
              <button><i className="bx bx-plus"></i></button>
            </div>

            <button className="add-to-cart-btn" onClick={() => dispatch(addToCart(productInfo))} >THÊM VÀO GIỎ HÀNG</button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ProductInfo;
