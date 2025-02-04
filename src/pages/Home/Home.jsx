import React, { useEffect, useState } from "react";
import "./Home.css";
import bannerHome from "../../assets/images/bannerhome.png";
import Slide from "./components/Carousel/Slide";
import { getAllProduct } from "../../services/ProductService/products";
import Product from "../../components/Product";

function Home(props) {
  useEffect(() => {
    document.title = 'Vật Vờ Shop'
  }, [])

  const [plusProduct, setPlusProduct] = useState([]);
  const [ultraProduct, setUltraProduct] = useState([]);

  const fetchDataProduct = async () => {
    try {
      const res = await getAllProduct();
      const filteredPlusProducts = res.filter(product => product.version === "plus");
      setPlusProduct(filteredPlusProducts)

      const filteredUltraProducts = res.filter(product => product.version === "ultra");
      setUltraProduct(filteredUltraProducts)
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    fetchDataProduct();
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
        <h1>PHIÊN BẢN PLUS</h1>
        <p>
          Những mẫu áo thun được <strong>thiết kế độc quyền</strong> dành cho
          fan của Vật Vờ Studio và anh em đam mê công nghệ.
        </p>
        <p>
          <strong>Chất liệu Cotton 100% chống xù của Mehub Signature</strong>
        </p>
        <p>
          <strong style={{ color: 'red' }}>
            *Lưu ý: Size áo của hai phiên bản sẽ khác nhau, bạn hãy xem kỹ nhé!
          </strong>
        </p>
      </section>

      <section className="prod-plus">
        {plusProduct.map((plus, index) => (
          <Product
            key={index}
            id={plus._id}
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
          <strong style={{ color: 'red' }}>
            *Lưu ý: Size áo của hai phiên bản sẽ khác nhau, bạn hãy xem kỹ nhé!
          </strong>
        </p>
      </section>

      <section className="prod-ultra">
        {ultraProduct.map((ultra, index) => (
          <Product
            key={index}
            id={ultra._id}
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
