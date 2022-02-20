import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('​https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setData(res.data)
        })
    },[])
    return (
        <div>
            <h1>회원수 : {data.length}</h1>
        </div>
    );
};

export default Main;