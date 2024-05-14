import React, { useEffect } from "react";
import "./Tutorial.css";
import bannerTutorial from '../../assets/images/bannerTutorial.png'
import step1 from '../../assets/images/step1.png'
import step2 from '../../assets/images/step2.png'
import step3 from '../../assets/images/step3.png'
import step4 from '../../assets/images/step4.png'
import step5 from '../../assets/images/step5.png'
import step6 from '../../assets/images/step6.png'

function Tutorial(props) {
  useEffect(() => {
    document.title = 'Hướng dẫn mua - Vật Vờ Shop'
  }, [])

  return (
    <div className="tutorial">
      <div className="banner-tutorial">
        <img src={bannerTutorial} alt="" />
      </div>

      <section className="title-tutorial">
        <h1>Hướng dẫn mua hàng</h1>
        <p>Hướng dẫn các bước mua hàng đơn giản và nhanh chóng tại Vật Vờ Shop.</p>
      </section>

      <section className="step-container">
        <div className="step-1 step-item">
            <div className="step-img">
                <img src={step1} alt="" />
            </div>
            <div className="step-text">
                <h1>Bước 1</h1>
                <p>Truy cập trang chủ Vật Vờ Shop và <strong>lựa chọn sản phẩm</strong> anh em muốn mua.</p>
            </div>
        </div>
        <div className="step-2 step-item">
        <div className="step-img">
                <img src={step2} alt="" />
            </div>
            <div className="step-text">
                <h1>Bước 2</h1>
                <p>Lựa chọn kích thước <strong>số đo và số lượng</strong> anh em mong muốn. Anh em có thể tham khảo bảng thông số kích thước tại mục <strong>Size & fit.</strong> <br /> <br /> Chọn <strong>Thêm vào giỏ hàng</strong> để tiến hành thanh toán.</p>
            </div>
        </div>
        <div className="step-3 step-item">
        <div className="step-img">
                <img src={step3} alt="" />
            </div>
            <div className="step-text">
                <h1>Bước 3</h1>
                <p>Chọn <strong>Thanh toán</strong> để mua sản phẩm ngay hoặc <strong>Xem giỏ hàng</strong> để tiếp tục mua sản phẩm.</p>
            </div>
        </div>
        <div className="step-4 step-item">
        <div className="step-img">
                <img src={step4} alt="" />
            </div>
            <div className="step-text">
                <h1>Bước 4</h1>
                <p>Điền thông tin giao hàng để tiến hành thanh toán. <br /> <br />
                Ngoài ra anh em đừng quên <strong>Nhập mã giảm giá</strong> tại góc phía bên phải màn hình nha!
                </p>
            </div>
        </div>
        <div className="step-5 step-item">
        <div className="step-img">
                <img src={step5} alt="" />
            </div>
            <div className="step-text">
                <h1>Bước 5</h1>
                <p>Lựa chọn đơn vị vận chuyển anh em mong muốn.</p>
            </div>
        </div>
        <div className="step-6 step-item">
        <div className="step-img">
                <img src={step6} alt="" />
            </div>
            <div className="step-text">
                <h1>Bước 6</h1>
                <p>Lựa chọn <strong>Phương thức thanh toán</strong> anh em mong muốn và ấn <strong>Hoàn tất đặt hàng.</strong> <br />
                Anh em có thể cập nhật thông tin đơn hàng tại Email của mình.</p>
            </div>
        </div>
      </section>

      <section className="contact">
        <h1>Liên hệ</h1>
        <p>Nếu có vấn đề về đặt đặt hàng/giao hàng, vui lòng liên hệ <strong>Fanpage Vật Vờ Studio</strong> hoặc <strong>Tư vấn Mehub</strong> tại link dưới đây:</p>
        <button>Liên hệ ngay</button>
      </section>
    </div>
  );
}

export default Tutorial;
