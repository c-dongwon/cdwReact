import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './data'
const User = () => {
    const {id} = useParams()
    const naviGate = useNavigate()
    const profile = data[id]
    const onGo1 = () =>{
        naviGate('/')
    }
    const onGo2 = () =>{
        naviGate('/about')
    }
    return (
        <div>
            <h1>UserPage</h1>
            <h2>{profile.name}/{profile.job}</h2>
            <p>
                <button onClick={onGo1}> home </button>
                <button onClick={onGo2}> about </button>
            </p>
        </div>
    );
};

export default User;