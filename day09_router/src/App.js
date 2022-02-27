import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './220227/component6/Main';
import Member from './220227/component6/Member';
import MemberDetail from './220227/component6/MemberDetail';

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
            {/* 멀티 */}
            <Route path='/' element={<Main/>}>
                <Route path='main'/>
                <Route path='about'/>
                <Route path='aaa'/>
                <Route path='bbb'/>
            </Route>
            <Route path='member'>
                <Route element={<Member/>}/>
                <Route path=':memberId' element={<MemberDetail/>}/>
            </Route>
        </Routes>
     </BrowserRouter> 
    </>
  );
};

export default App;