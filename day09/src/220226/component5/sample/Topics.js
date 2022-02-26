import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

const Topics = () => {
    return (
        <div>
            <h2>title</h2>
            <ul>
                <li>
                    <NavLink to="/topics/1">HTML1</NavLink>
                </li>
                <li>
                    <NavLink to="/topics/2">css</NavLink>
                </li>
                <li>
                    <NavLink to="/topics/3">js</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='/topics/1'>Html...</Route>
                <Route path='/topics/2'>css</Route>
                <Route path='/topics/3'>js</Route>
            </Routes>
        </div>
    );
};

export default Topics;