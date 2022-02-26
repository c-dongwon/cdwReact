import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Topics from './220226/component5/sample/Topics';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/topics'>step01</NavLink>
        </li>
      </ul>
      <Route path="/topics">
        <Topics/>
      </Route>
    </div>
  );
};

export default App;