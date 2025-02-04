import React, { useEffect, useState } from "react";
import "./ProductInfo.css";
import LoadingProductInfo from "../LoadingProductInfo";
import { useDispatch } from 'react-redux'
import { addToCart, setCart } from "../../redux/slice/cartSlice";
import AlertSweet from "./components/AlertSweet";
import { addToCartBackend } from "../../services/CartService/CartService";

function ProductInfo({ productInfo }) {
  const userId = localStorage.getItem('userId')
  useEffect(() => {
    if (productInfo) {
      document.title = `${productInfo.name}`
    }
  }, [productInfo])

  const [activeSize, setActiveSize] = useState('S')
  const [size, setSize] = useState("S")
  const [quantity, setQuantity] = useState(1)
  const [alertSweet, setAlertSweet] = useState(false)
  const dispatch = useDispatch()

  const handlePickSize = (sizeSelect) => {
    setActiveSize(sizeSelect)
    setSize(sizeSelect)
  }

  const handleAddToCart = async () => {
    // dispatch(addToCart({ ...productInfo, quantity: quantity, size: size }))
    const cartItem = {
      userId, // Gửi userId đi
      productId: productInfo._id,
      size: size, // Lấy từ UI
      quantity: quantity,
    }

    try {
      const response = await addToCartBackend(cartItem);

      if (response) {
        dispatch(setCart(response.cart));
      }
    } catch (error) {
      console.error(error);
    }

    setAlertSweet(true)
  }

  const handleClose = () => {
    setAlertSweet(false)
  }

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);

  }

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const formatNewPrice = (price) => {
    const priceProduct = price;
    return priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const formatOldPrice = (price) => {
    const priceProduct = price;
    return priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <>
      {productInfo ? (
        <div className="product-info">
          <div className="product-info-img">
            <img src={productInfo.image} alt="img" />
          </div>

          <div className="product-info-text">
            <h1>{productInfo.name}</h1>
            <div className="product-info-text-price">
              <p>{formatNewPrice(productInfo.new_price)}₫</p>
              <span>{formatOldPrice(productInfo.old_price)}₫</span>
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
              <button onClick={handleDecrementQuantity}><i className="bx bx-minus"></i></button>
              <p style={{ fontSize: '20px' }}>{quantity}</p>
              <button onClick={handleIncrementQuantity}><i className="bx bx-plus"></i></button>
            </div>

            <button className="add-to-cart-btn" onClick={() => handleAddToCart()} >THÊM VÀO GIỎ HÀNG</button>
            {alertSweet && (<AlertSweet onclose={handleClose} />)}
          </div>
        </div>
      ) : (
        <LoadingProductInfo />
      )}
    </>
  );
}

export default ProductInfo;
