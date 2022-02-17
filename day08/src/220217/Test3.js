import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test3 = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            setData(res.data)
            setLoading(false)
            setError('')
        })
        .catch(error =>{
            setData([])
            setLoading(true)
            setError('에러')
        })
    })
    return (
        <div>
            {
                data && loading ?  <h2>로딩중</h2> : data.map(item => <p key={item.id}>{item.id}/{item.title}</p>)
            }
            <p>
                {
                    error  ? error : null
                }
            </p>
        </div>
    );
};

export default Test3;