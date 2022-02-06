import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Test14 = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(2)
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios.get(url)
        .then(res => setPost(res.data))
    },[id])
    return (
        <div>
            <input type='text' value={id} onChange={e =>setId(e.target.value)}/>
            <button>확인</button>
            <h3>{post.id}/{post.title}</h3>
        </div>
    );
};

export default Test14;