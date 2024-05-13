import React from "react";
import "./Cart.css";
import ItemCart from "./components/ItemCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Cart() {
  const navigate = useNavigate()
  const cartProductSelector = useSelector(state => state.cart.ListCart)

  return (
    <div className="cart">
      <div className="title-cart">
        <h2>
          <span>{cartProductSelector.length}</span> sản phẩm trong giỏ hàng
        </h2>
      </div>
      <div className="table-cart">
        <div className="column-name">
          <div className="col1">Sản phẩm</div>
          <div className="col2">Số lượng</div>
          <div className="col3">Giá</div>
          <div className="col4">Tổng tiền</div>
        </div>

        {/* danh sách giở hàng */}
        <div className="list-cart">
          {cartProductSelector.map((item, index) => (
            <ItemCart key={index} image={item.image} name={item.name} price={item.new_price} quantity={item.quantity}/>
          ))}
          
        </div>
      </div>

      <div className="price-total-cart">
        <div className="text-price-total-cart">
          <strong>Tổng tiền</strong>
          <strong>249.000₫</strong>
        </div>
      </div>

      <div className="actions-cart">
        <button onClick={() => navigate('/products')}>Tiếp tục mua hàng</button>
        <button>Thanh toán</button>
      </div>
    </div>
  );
}

export default Cart;
