import React from 'react';
import "./Product.css"

const Product = () => {
    return (
        <div className='product'>
            <div className="product_info">
                <p>제품1</p>
                <p className="product_price">
                    <small>가격</small>    
                    <strong>10,000</strong>
                    <small>원</small>
                </p>    
            </div>
        </div>
    );
};

export default Product;