import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
function Footer(props) {
  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="logo-footer">
        <img src={logo} alt="" />
      </div>
      <div className="social-footer">
        <h3>VẬT VỜ STUDIO SHOP</h3>
        <ul>
          <li>
            <a href="">YOUTUBE</a>
          </li>
          <li>
            <a href="">FACEBOOK</a>
          </li>
          <li>
            <a href="">TIKTOK</a>
          </li>
          <li>
            <a href="">INSTAGRAM</a>
          </li>
        </ul>
        <div className="credit-footer">
          <p>© 2024 VẬT VỜ STUDIO SHOP</p>
          <p>Tạo bởi Mehub</p>
        </div>
      </div>

      <div className="support-footer">
        <ul>
          <li>
            <a href="">Về chúng tôi</a>
          </li>
          <li>
            <a href="">Chính sách mua hàng</a>
          </li>
          <li>
            <a href="">Hỗ trợ CSKH</a>
          </li>
        </ul>
      </div>
      <div className="scroll-up">
        <button onClick={handleScrollUp}>
          <i class="bx bx-up-arrow-alt"></i>{" "}
        </button>
      </div>
    </div>
  );
}

export default Footer;
