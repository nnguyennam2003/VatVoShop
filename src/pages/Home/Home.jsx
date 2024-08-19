import React, { useEffect, useState } from "react";
import "./Home.css";
import bannerHome from "../../assets/images/bannerhome.png";
import PlusProduct from "../../components/PlusProduct";
import { getPlusProduct } from "../../services/plusProduct";
import { getUltraProduct } from "../../services/ultraProduct";
import UltraProduct from "../../components/UltraProduct";
import Slide from "./components/Carousel/Slide";

function Home(props) {
  useEffect(() => {
    document.title = 'Vật Vờ Shop'
  }, [])

  const [plusProduct, setPlusProduct] = useState([]);
  const [ultraProduct, setUltraProduct] = useState([]);

  const fetchDataPlusProduct = async () => {
    try {
      const res = await getPlusProduct();
      // console.log(res);
      setPlusProduct(res);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchDataUltraProduct = async () => {
    try {
      const res = await getUltraProduct();
      // console.log(res);
      setUltraProduct(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDataPlusProduct();
    fetchDataUltraProduct();
  }, []);

  return (
    <div className="home-page">
      <div className="banner-home">
        <img src={bannerHome} alt="" />
        <div className="social">
          <ul>
            <li>
              <i className="bx bxl-youtube"></i>
            </li>
            <li>
              <i className="bx bxl-facebook"></i>
            </li>
            <li>
              <i className="bx bxl-instagram-alt"></i>
            </li>
            <li>
              <i className="bx bxl-tiktok"></i>
            </li>
          </ul>
        </div>
      </div>

      <section className="title-plus">
        <h1>PHIÊN BẢN PLUSss</h1>
        <p>
          Những mẫu áo thun được <strong>thiết kế độc quyền</strong> dành cho
          fan của Vật Vờ Studio và anh em đam mê công nghệ.
        </p>
        <p>
          <strong>Chất liệu Cotton 100% chống xù của Mehub Signature</strong>
        </p>
        <p>
          <strong style={{color: 'red'}}>
            *Lưu ý: Size áo của hai phiên bản sẽ khác nhau, bạn hãy xem kỹ nhé!
          </strong>
        </p>
      </section>

      <section className="prod-plus">
        {plusProduct.map((plus, index) => (
          <PlusProduct
            key={index}
            id={plus.id}
            name={plus.name}
            newPrice={plus.new_price}
            oldPrice={plus.old_price}
            image={plus.image}
          />
        ))}
      </section>

      <section className="slide">
        <Slide />
      </section>

      <section className="title-ultra">
        <h1>PHIÊN BẢN ULTRA</h1>
        <p>
          Những mẫu áo thun được <strong>thiết kế độc quyền</strong> dành cho
          fan của Vật Vờ Studio và anh em đam mê công nghệ.
        </p>
        <p>
          <strong>
            Chất liệu Cotton 100% cao cấp của Coolmate dày dặn, ít xù lông, mềm
            mịn và bền màu hơn.
          </strong>
        </p>
        <p>
          <strong style={{color: 'red'}}>
            *Lưu ý: Size áo của hai phiên bản sẽ khác nhau, bạn hãy xem kỹ nhé!
          </strong>
        </p>
      </section>

      <section className="prod-ultra">
        {ultraProduct.map((ultra, index) => (
          <UltraProduct
            key={index}
            id={ultra.id}
            name={ultra.name}
            newPrice={ultra.new_price}
            oldPrice={ultra.old_price}
            image={ultra.image}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
