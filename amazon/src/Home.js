import React from 'react';
import "./Home.css"
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>
                <img className='home_image' src='./image/img-main.png' alt=''/>  
                <div className="hone_row">
                    <Product/>
                </div> 
                <div className="hone_row">
                <Product/>
                <Product/>
 
                </div> 
                <div className="hone_row">
                <Product/>

                </div> 
            </div>
        </div>
    );
};

export default Home;