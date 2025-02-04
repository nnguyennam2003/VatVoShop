import React, { useEffect } from "react";
import "./Cart.css";
import ItemCart from "./components/ItemCart";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../../redux/slice/cartSlice";
import { removeFromCart } from "../../services/CartService/CartService";

function Cart() {
  const navigate = useNavigate();
  const cartProductSelector = useSelector((state) => state.cart.ListCart);
  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    document.title = `Giỏ hàng ${`${cartProductSelector.length === 0 ? '' : `(${cartProductSelector.length})`}`} - Vật Vờ Shop`
  }, [cartProductSelector])

  const handleRemoveFromCart = async (productId, productSize) => {
    const dataRemove = {
      userId: userId,
      productId: productId,
      size: productSize
    }

    try {
      const res = await removeFromCart(dataRemove)
      if (res.message === "Product removed from cart successfully") {
        dispatch(removeToCart({ productId, size: productSize }));
      }
    } catch (error) {
      console.log(error)
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartProductSelector.forEach((product) => {
      totalPrice += parseInt(product.price) * product.quantity;
    });
    return totalPrice.toLocaleString('vi-VN');
  };

  return (
    <div className="cart">
      {cartProductSelector.length > 0 && (
        <div className="title-cart">
          <h2>
            <span>Có {cartProductSelector.length}</span> sản phẩm trong giỏ hàng của bạn
          </h2>
        </div>
      )}
      {cartProductSelector.length > 0 && (
        <div className="table-cart">
          <div className="column-name">
            <div className="col1">Sản phẩm</div>
            <div className="col2">Số lượng</div>
            <div className="col3">Giá</div>
            <div className="col4">Tổng tiền</div>
          </div>
        </div>
      )}

      <div className="list-cart">
        {cartProductSelector.length === 0 ? (
          <div className="cart-empty">
            <p>Không có sản phẩm trong giỏ hàng</p>
            <button onClick={() => navigate('/products')}>Bắt đầu mua hàng</button>
          </div>
        ) : (
          cartProductSelector.map((item, index) => (
            <ItemCart
              key={index}
              id={item._id}
              productId={item.productId}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => handleRemoveFromCart(item.productId, item.size)}
              size={item.size}
            />
          ))
        )}
      </div>

      {cartProductSelector.length > 0 && (
        <div className="price-total-cart">
          <div className="text-price-total-cart">
            <strong>Tổng tiền</strong>
            <strong>{calculateTotalPrice()}₫</strong>
          </div>
        </div>
      )}

      {cartProductSelector.length > 0 && (
        <div className="actions-cart">
          <button onClick={() => navigate("/products")}>
            Tiếp tục mua hàng
          </button>
          <Link to={'/payment'}><button>Thanh toán</button></Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
