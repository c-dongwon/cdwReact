import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes
} from "react-router-dom";
import About from './component3/About';
import Front from './component3/Front';
import Home from './component3/Home';
import Profile from './component3/Profile';

const data = [
  {title:'html',info:'html에 대한 설명'},
  {title:'css',info:'css에 대한 설명'},
  {title:'js',info:'js에 대한 설명'},
  {title:'scss',info:'scss에 대한 설명'},
  {title:'react',info:'react에 대한 설명'},
]

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to=''>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/profile'>Profile</Link></li>

            <li><Link to='front/html'>html</Link></li>
            <li><Link to='front/css'>css</Link></li>
            <li><Link to='front/js'>js</Link></li>
            <li><Link to='front/scss'>scss</Link></li>
            <li><Link to='front/react'>react</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/front/:name' element={<Front data={data}/>}></Route>

          {/* 
            <Route path='front/:사용자 정의변수'/>
              
              front/:name <= html,css 등등
          */}
        </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;