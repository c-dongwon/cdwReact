import React from 'react';
import { BrowserRouter, Routes, Route,  Link } from "react-router-dom";
import './css/reset.css'
import './220228/component7/style.css'
import Main from './220228/component7/Main';
import Products from './220228/component7/Products';
import ProductDetail from './220228/component7/ProductDetail';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>products</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/products'>
              <Route element={<Products/>} index/>
              <Route path=':productId' element={<ProductDetail/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;