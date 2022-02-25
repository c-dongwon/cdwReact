import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import User from './User'
const Profile = () => {
    return (
        <div className='page'>
        <h1>Profile Page</h1>
        <ul>
            <li><Link to="page1">페이징1</Link></li>
            <li><Link to="page2">페이징2</Link></li>
            <li><Link to="page3">페이징3</Link></li>
            <li><Link to="page4">페이징4</Link></li>
            <li><Link to="page5">페이징5</Link></li>
        </ul>

        <Routes>
            <Route path=':id' element={<User/>}/>
        </Routes>
    </div>
    );
};

export default Profile;