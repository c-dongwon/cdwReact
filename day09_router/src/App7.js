import React from 'react';
import { BrowserRouter, Routes, Route,  Link } from "react-router-dom";
import './css/reset.css'
import './component7/style.css'
import Main from './component7/Main';
import Products from './component7/Products';
import ProductDetail from './component7/ProductDetail';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
            <ul>
              <li><Link to="/"> Home </Link> </li>
              <li><Link to="/products"> Products </Link> </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products">
                {/* index일치 */}
                <Route element={ <Products /> } index />
                <Route path=":productId" element={<ProductDetail /> } />
            </Route>
        </Routes>

      </BrowserRouter>      
    </>
  );
};

export default App;