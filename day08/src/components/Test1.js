import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TestPaging from './TestPaging1';
import TestPost from './TestPost1';

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
    
    const lastPost = curruntPage * 10 //10
    const firstPost = lastPost - postsPage //0
    const curruntPost = post.slice(firstPost,lastPost)
    const onShow = (id) =>{
        setCurruntPage(id)
    }
    return (
        <div>
            <TestPost curruntPost={curruntPost} loading={loading}/>
            <TestPaging postsPage={postsPage} post={post} onShow={onShow}/>
        </div>
    );
};

export default Test1;