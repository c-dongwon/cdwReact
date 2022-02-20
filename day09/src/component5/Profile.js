import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import User from './User'
const Profile = () => {
    return (
        <div className='page'>
        <h1>Profile Page</h1>
        <ul>
            <li><Link to='user1'>김다미1</Link></li>
            <li><Link to='user2'>김다미2</Link></li>
            <li><Link to='user3'>김다미3</Link></li>
            <li><Link to='user4'>김다미4</Link></li>
            <li><Link to='user5'>김다미5</Link></li>
        </ul>

        <Routes>
            <Route path=':id' element={<User/>}/>
        </Routes>
    </div>
    );
};

export default Profile;