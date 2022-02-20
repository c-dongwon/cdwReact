import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes
} from "react-router-dom";
import Ceo from './component2/Ceo';
import About from './component2/About';
import Home from './component2/Home';
import Sub1 from './component2/Sub1';
import NavBar from './component2/NavBar'
import NotFiles from './component2/NotFiles'
import './component2/style.css'
import './css/reset.css'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/ceo' element={<Ceo/>}/>
          <Route path='/sub1' element={<Sub1/>}/>
          <Route path='/*' element={<NotFiles/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;