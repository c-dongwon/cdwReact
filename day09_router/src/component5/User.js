import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './data'

const User = () => {
    const {id} = useParams()
    const navigate  = useNavigate() 

    const profile = data[id]

    const onGo1 = ()  => {
        // navigate(-1) 한단계뒤로
        // navigate(1) 한단계앞으로
        // navigate(-2) 두단계뒤로
        navigate('/')
    }
    const onGo2 = ()  => {
        navigate('/about')
    }
    return (
        <div>
           <h1>User page</h1> 
           <h2> {profile.name} / {profile.job} </h2>
           <p>
               <button onClick={ onGo1 }> home </button>
               <button onClick={ onGo2}> about </button>
           </p>
        </div>
    );
};

export default User;