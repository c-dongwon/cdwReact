import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState()

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setData(res.data)
            setLoading(false)
            setError(null)
        })
        .catch(error =>{
            setError('에러')
            setLoading(true)
        })
    },[])
    if(loading) return <h2>로딩중</h2>
    if(error) return <h2>에러</h2>
    if(!data) return null
    return (
        <div>
            {
                data.map(item => <p key={item.id}>{item.title}</p>)
            }
            {
                error ? error :null
            }
        </div>
    );
};

export default Test4;