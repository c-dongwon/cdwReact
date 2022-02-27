import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './data';

const ProductDetail = () => {
    const { productId } = useParams()
    const navigate = useNavigate() 

    const product  = data.find( item => item.id === productId )

    const onGo  = ()  => {
        navigate( -1 )
    }
    return (
        <div className='item'>
             <h2>운동화 상세페이지</h2>           
             <h3> {product.name} - 가격 : {product.price} </h3>           
             <p><img src={product.photo} alt={product.name} /></p>
             <p>제품설명 : {product.description} </p>
             <button onClick={ onGo }>제품목록</button>
        </div>
    );
};

export default ProductDetail;