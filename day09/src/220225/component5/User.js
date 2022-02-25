import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './data'
const User = () => {
    const {id} = useParams()
    const naviGate = useNavigate()
    const profile = data[id]
    const onGo1 = () =>{
        naviGate('/profile/page1')
    }
    const onGo2 = () =>{
        naviGate('/profile/page2')
    }
    return (
        <div>
            <h2>{profile.title}/{profile.content}</h2>
            <p>
                <button onClick={onGo1}> home </button>
                <button onClick={onGo2}> about </button>
            </p>
        </div>
    );
};

export default User;