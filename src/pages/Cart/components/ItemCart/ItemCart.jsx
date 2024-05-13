import React from 'react';
import './ItemCart.css'

function ItemCart({ image, name, price, quantity}) {

    return (
        <div className="item-cart">
            <button>
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
            <div className="item-cart-price">{price}₫</div>
            <div className="item-cart-total">{price}₫</div>
          </div>
    );
}

export default ItemCart;