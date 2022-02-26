import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import User from './User'
const Profile = () => {
    return (
        <div className='page'>
        <h1>페이징도 이런식으로 뿌릴수있지않을까??</h1>
        <ul>
        <li><Link to='page1'>첫페이지</Link></li>
            <li><Link to='page1'>1페이지</Link></li>
            <li><Link to='page2'>2페이지</Link></li>
            <li><Link to='page3'>3페이지</Link></li>
            <li><Link to='page4'>4페이지</Link></li>
            <li><Link to='page5'>5페이지</Link></li>
            <li><Link to='page5'>마지막페이지</Link></li>
        </ul>

        <Routes>
            <Route path=':id' element={<User/>}/>
        </Routes>
    </div>
    );
};

export default Profile;