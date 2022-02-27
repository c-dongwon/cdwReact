import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './css/reset.css'
import './component2/style.css'

import NavBar from './component2/NavBar';
import Home from './component2/Home';
import About from './component2/About';
import Ceo from './component2/Ceo';
import Sub1 from './component2/Sub1';
import NotFiles from './component2/NotFiles';


const App = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar />

        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ceo" element={<Ceo />} />
              <Route path="/sub1" element={<Sub1 />} />
              <Route path="/*" element={<NotFiles />} />
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;