import React, { useEffect, useState } from 'react';
import './ProductDetail.css'
import { getAllProduct } from '../../services/products';
import { useParams } from 'react-router-dom';
import ProductInfo from '../../components/ProductInfo';

function ProductDetail() {
    
    const [ dataProducts , setDataProducts ] = useState([])

    const getDataProducts = async () => {
        try {
            const res = await getAllProduct()
            setDataProducts(res)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getDataProducts()
    }, [])

    const { productDetailId } = useParams();

    const productIf = dataProducts.find((e)=> e.id === productDetailId)

    return (
        <div>
            <ProductInfo productInfo={productIf}/>
        </div>
    );
}

export default ProductDetail;