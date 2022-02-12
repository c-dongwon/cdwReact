import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test13 = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        const getData = async() =>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(res.data)
        }
        getData()
    },[])
    return (
        <div>
            {
                data.map(item => <p key={item.id}>{item.id}/{item.title}</p>)
            }
        </div>
    );
};

export default Test13;

/*
    axios : 객체로 변환해서 가져온다
    axios.get('주소')
    .then(콜백) 응답성공
    .catch(콜백) 응답실패

    useEffect(()=>{
        외부파일 가져오기
    },[])

       axios , fetch 는 promise 기반 ,
    
    axios:크로스브라우저 가능,promis 기반, 간단하다,객체형태로 가져온다
    엑시오스
*/