import React from 'react';
import { Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import User from './User';

const Profile = () => {
    return (
        <div>
            <h1>Profile page</h1>
            <ul>
                <li><Link to="user1">김다미</Link></li>
                <li><Link to="user2">최우식</Link></li>
                <li><Link to="user3">김진주</Link></li>
                <li><Link to="user4">전지현</Link></li>
                <li><Link to="/profile/user4">송혜교</Link></li>
            </ul>

            <Routes>
                <Route path=":id" element={<User />}  />
            </Routes>

        </div>
    );
};

export default Profile;