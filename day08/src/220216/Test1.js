import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TestPaging1 from './TestPaging1';
import TestPost1 from './TestPost1';

const Test1 = () => {
    const [post,setPost] = useState([])
    const [loading,setLoading] = useState(true)
    const [curruntPage,setCurruntPage] = useState(1)
    const [postsPage] = useState(10)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            setPost(res.data)
            setLoading(false)
        })
    },[])

    const lastPost = curruntPage*10
    const firstPost = lastPost - postsPage
    const curruntPost = post.splice(firstPost,lastPost)
    return (
        <div>
            <TestPost1 curruntPost={curruntPost} loading={loading}/>
            <TestPaging1/>
        </div>
    );    
};

export default Test1;