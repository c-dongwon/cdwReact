import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes
} from "react-router-dom";
import Main from './component6/Main';
import Member from './component6/Member';
import MemberDetail from './component6/MemberDetail';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 멀티 */}
          <Route path='/' element={<Main/>}>
            <Route path='main'/>
            <Route path='about'/>
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