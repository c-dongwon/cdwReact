import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
const Test2 = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(2)
    const [num,setNum] = useState(2)
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${num}`
        axios.get(url)
        .then(res => setPost(res.data))
    },[num])

    const onShow = () =>{
        setNum(id)
    }

    return (
        <div>
            <input type='text' value={id} onChange={e =>setId(e.target.value)}/>
            <button onClick={onShow}>확인</button>
            <h3>{post.id}/{post.title}</h3>
        </div>
    );
};

export default Test2;