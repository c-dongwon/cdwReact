import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Front from './Front';

const Profile = () => {
    return (
        <div>
             <h1>Profile page</h1>
             <ul>
                 <li><Link to="html">html</Link> </li>
                 <li><Link to="css">css</Link> </li>
                 <li><Link to="javascript">javascript</Link> </li>
                 <li><Link to="react">react</Link> </li>
                 <li><Link to="/profile/vue">vue</Link> </li>
             </ul>
            <hr/>
            <Routes>
                <Route  path=":name"  element={ <Front />} />
            </Routes>

        </div>
    );
};

export default Profile;