import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navData from './navData';
const NavBar = () => {
    const [nav,setNav] = useState(false)
    const onToggle = () =>{
        setNav(!nav)
    }
    return (
        <>
            <div className='navbar'>
                <p className='all-menu' onClick={onToggle}>menu</p> 
                <nav className={nav ? 'on' : ''}>
                    <ul>
                        {
                            navData.map((item,index) => <li key={index}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>)
                        }
                        {/* <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/ceo'>Ceo</Link></li>
                        <li><Link to='/sub1'>Sub1</Link></li> */}
                    </ul>
                    <p className='close' onClick={()=>setNav(false)}>X</p>
                </nav>
            </div>   
        </>
    );
};

export default NavBar;