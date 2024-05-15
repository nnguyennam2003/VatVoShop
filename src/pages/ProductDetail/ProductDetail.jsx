import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { getProductById } from "../../services/products";
import { useParams } from "react-router-dom";
import ProductInfo from "../../components/ProductInfo";

function ProductDetail() {
  const [productInfo, setProductInfo] = useState(null)

  const { productDetailId } = useParams()

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const res = await getProductById(productDetailId); // Gọi API để lấy thông tin của sản phẩm cụ thể
        setProductInfo(res)
      } catch (err) {
        console.error(err)
      }
    }

    getProductDetail() // Gọi hàm lấy chi tiết sản phẩm khi component được mount
  }, [productDetailId]) // Thêm productDetailId vào dependency array để hàm được gọi lại khi productDetailId thay đổi

  return (
    <div>
      <ProductInfo productInfo={productInfo} />
    </div>
  );
}

export default ProductDetail;
// const [ dataProducts , setDataProducts ] = useState([])

// const getDataProducts = async () => {
//     try {
//         const res = await getAllProduct()
//         setDataProducts(res)
//     } catch (err) {
//         console.error(err)
//     }
// }

// useEffect(() => {
//     getDataProducts()
// }, [])

// const productIf = dataProducts.find((e)=> e.id === productDetailId)
