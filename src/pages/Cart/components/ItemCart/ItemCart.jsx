import React from 'react';
import './ItemCart.css'
import img_cart from "../../../../assets/images/img-cart.webp"

function ItemCart(props) {
    return (
        <div className="item-cart">
            <button>
              <i class="bx bx-x"></i>
            </button>

            <div className="item-cart-img">
              <img src={img_cart} alt="" />
            </div>
            <div className="item-cart-info">
              <h3>Áo thun Work-hard Play-hard (Trắng) | Plus</h3>
              <span>Trắng,S</span>
            </div>
            <div className="item-cart-quantity">
              <div className="action-quantity">
                <button>
                  <i class="bx bx-minus"></i>
                </button>
                <p className="quantity">1</p>
                <button>
                  <i class="bx bx-plus"></i>
                </button>
              </div>
            </div>
            <div className="item-cart-price">249.000₫</div>
            <div className="item-cart-total">249.000₫</div>
          </div>
    );
}

export default ItemCart;