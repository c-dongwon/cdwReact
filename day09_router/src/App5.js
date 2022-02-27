import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './component5/About';
import Home from './component5/Home';
import Profile from './component5/Profile';

const App = () => {
  return (
    <>
     <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/profile"> Profile </Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} >
              <Route path=":id" />
          </Route>      
        </Routes>
     </BrowserRouter> 
    </>
  );
};

export default App;