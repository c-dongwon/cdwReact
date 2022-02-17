import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
const Test2 = () => {
    const [post,setPost] = useState({})//배열저장
    const [id,setId] = useState(2)//인풋 value = num 연결
    const [num,setNum] = useState(2)//value 값 받아와서 num에 넣어줌
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