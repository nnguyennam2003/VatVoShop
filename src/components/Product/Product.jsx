import React from 'react';
import './Product.css'

function Product({name, newPrice, oldPrice, image }) {
    return (
        <div className='product'>
            <div className='prod-img'>
                <img src={image} alt="Ảnh sản phẩm" className='image1'/>
            </div>
            <p className='prod-name'>{name}</p>
            <p className='new-price'>{newPrice}₫ <span className='old-price'>{oldPrice}₫</span></p>
        </div>
    );
}

export default Product;