import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { getProductById } from "../../services/ProductService/products";
import { useParams } from "react-router-dom";
import ProductInfo from "../../components/ProductInfo";

function ProductDetail() {
  const [productInfo, setProductInfo] = useState(null)

  const { productDetailId } = useParams()

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const res = await getProductById(productDetailId)
        setProductInfo(res)
      } catch (err) {
        console.error(err)
      }
    }

    getProductDetail()
  }, [productDetailId])

  return (
    <div>
      <ProductInfo productInfo={productInfo} />
    </div>
  );
}

export default ProductDetail;
