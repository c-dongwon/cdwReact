import React from 'react';
import './Header.css'
import { BsSearch } from "react-icons/bs";
const Header = () => {
    return (
        <div className='header'>
            <img className='header_logo' src='./image/logo.png'/>
            <div className='header_search'>
                <input type='text' className='header_searchInput'/>
                <BsSearch className='header_searchIcon'/>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_option1'>hi</span>
                    <span className='header_option2'>로그인하기</span>
                </div>
                <div className='header_option'>
                <span className='header_option1'>돌아가기</span>
                    <span className='header_option2'>로그인하기</span>
                </div>
                <div className='header_option'>
                <span className='header_option1'>반가워요</span>
                    <span className='header_option2'>방가방가</span>
                </div>
            </div>
        </div>
    );
};

export default Header;