import React from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import Front from './Front';
const Profile = () => {
    return (
        <div className='page'>
            <h1>ProFile</h1>
            <ul>
                <li><Link to='html'>html</Link></li>
                <li><Link to='css'>css</Link></li>
                <li><Link to='js'>js</Link></li>
            </ul>
            <hr/>
            <Routes>
                <Route path=':name' element={<Front/>}/>
            </Routes>
        </div>
    );
};

export default Profile;