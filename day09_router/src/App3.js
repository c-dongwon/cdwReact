import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './component3/About';
import Front from './component3/Front';
import Home from './component3/Home';
import Profile from './component3/Profile';

const data = [
  {title:'html', info:'html에 대한 설명입니다.'},
  {title:'css', info:'css에 대한 설명입니다.'},
  {title:'javascript', info:'javascript에 대한 설명입니다.'},
  {title:'react', info:'react에 대한 설명입니다.'},
  {title:'vue', info:'vue에 대한 설명입니다.'},
]


const App = () => {
  return (
    <>
     <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="profile"> Profile </Link></li>

            <li><Link to="front/html"> html </Link></li>
            <li><Link to="front/css"> css </Link></li>
            <li><Link to="front/javascript"> javascript </Link></li>
            <li><Link to="front/react"> react </Link></li>
            <li><Link to="front/vue"> vue </Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="front/:name" element={<Front  data={data} />} />
          {/* <Route path="front/:사용자정의변수" />} />           
                front/:name  <= html, css 등등
          */}
        </Routes>
     </BrowserRouter> 
    </>
  );
};

export default App;