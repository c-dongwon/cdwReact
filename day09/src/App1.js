import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import About from './component1/About';
import Ceo from './component1/Ceo';
import Home from './component1/Home';
import Sub1 from './component1/Sub1';
const App = () => {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/ceo'>Ceo</Link></li>
          <li><Link to='/sub1'>Sub1</Link></li>
        </ul>
      </nav>
    </div>
    <div>
      {/*화면에 보이는 영역*/}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ceo' element={<Ceo/>}/>
        <Route path='/sub1' element={<Sub1/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;