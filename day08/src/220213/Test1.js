import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TestPaging1 from './TestPaging1';
import TestPost1 from './TestPost1';

const Test1 = () => {
    const [post,setPost] = useState([])//배열
    const [loading,setLoading] = useState(true)//로딩
    const [curruntPage,setCurruntPage] = useState(1)//현재 페이지
    const [postsPage] = useState(10) // 한페이지에서 보여줄 값갯수

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')//axios api호출
        .then(res=>{
            setPost(res.data) // api 데이터 setPost로 배열 뿌려줌
            setLoading(false)//호출 성공하면 로딩창 false
        })
    },[])

    const lastPost = curruntPage * 10 //10
    const firstPost = lastPost - postsPage //0
    const curruntPost = post.slice(firstPost,lastPost) // post배열에서 1~10까지만 배열 짜름
                                                       // 9번째 페이징 누르면 80~90까지 보여주는식
    const onShow = (id) =>{
        setCurruntPage(id)
        // 페이징 키값 받아옴 1~9
    }
    return (
        <div>
            <TestPost1 curruntPost={curruntPost} loading={loading}/>
            {/* post배열에서 1~10까지 값 내려줌 */}
            <TestPaging1 postsPage={postsPage} post={post} onShow={onShow}/>
            {/* postsPage max값 10 내려줌
            post 배열내림 */}
        </div>
    );
};

export default Test1;