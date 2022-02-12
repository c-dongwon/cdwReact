import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test14 = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)//value id 연결 setId value 값 변하는거 감지
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios.get(url)
        .then(item => setPost(item.data))
        //url id입력값 받아와서 setPost 로 데이터 호출
    },[id])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <h3>{post.id}/{post.title}</h3>
        </div>
    );
};

export default Test14;