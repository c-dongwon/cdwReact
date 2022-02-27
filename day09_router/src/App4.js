import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './component4/About';
import Home from './component4/Home';
import Profile from './component4/Profile';

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
              <Route path=":name" />
          </Route>          
          {/* profile/:name */}
        </Routes>
     </BrowserRouter> 
    </>
  );
};

export default App;