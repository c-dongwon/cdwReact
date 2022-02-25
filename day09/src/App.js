import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes
} from "react-router-dom";
import About from './220225/component5/About';
import Home from './220225/component5/Home';
import Profile from './220225/component5/Profile';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <nav>
            <ul>
              <li><Link to=''>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/profile' element={<Profile/>}>
              <Route path=':id'/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;