import React from 'react';
import { Link } from 'react-router-dom';
import data from './data'
const Products = () => {
    return (
        <div className='products'>
            <h2>운동화 제품 목록</h2>
            <div>
                {
                    data.map(item => 
                    <Link to={`/products/${item.id}`}>
                            <article key={item.id}>
                                <h3>{item.name}</h3>
                                <p>
                                    <img src={item.photo} alt={item.name}/>
                                </p>
                            </article>  
                            </Link>
                        )
                }
            </div>
        </div>
    );
};

export default Products;