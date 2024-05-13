import React, { useEffect, useState } from "react";
import "./Products.css";
import { getAllProduct } from "../../services/products";
import Product from "../../components/Product";

function Products(props) {
  const [productData, setProductData] = useState([]);

  const fetchDataProduct = async () => {
    try {
      const res = await getAllProduct();
      // console.log(res);
      setProductData(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);

  return (
    <div className="products">
      <h1>Chúng tôi có</h1>
      <div className="prod-wrapper">
        {productData.map((prod, index) => (
          <Product
            key={index}
            id={prod.id}
            name={prod.name}
            newPrice={prod.new_price}
            oldPrice={prod.old_price}
            image={prod.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
