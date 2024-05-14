import React, { useEffect, useState } from "react";
import "./Products.css";
import { getAllProduct } from "../../services/products";
import Product from "../../components/Product";
import LoadingProducts from "../../components/LoadingProducts";

function Products(props) {
  useEffect(() => {
    document.title = 'Tất cả sản phẩm - Vật Vờ Shop'
  }, [])

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataProduct = async () => {
    try {
      const res = await getAllProduct();
      // console.log(res);
      setProductData(res);
      setIsLoading(false);
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
      {isLoading ? (
          <LoadingProducts /> // Hiển thị LoadingProducts khi isLoading là true
        ) : (
          productData.map((prod, index) => (
            <Product
              key={index}
              id={prod.id}
              name={prod.name}
              newPrice={prod.new_price}
              oldPrice={prod.old_price}
              image={prod.image}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
