import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Test13 = () => {
    const [data,setData] = useState([])
    // useEffect(()=>{
    //    fetch('https://jsonplaceholder.typicode.com/posts') 
    //    .then(res => res.json())
    //    .then(res => setData(res))
    // },[])


    // useEffect (()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //          .then(res => setData(res.data))
    // },[])

    // useEffect(()=>{
    //     const getData = async() =>{
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts') 
    //         const data = await res.json()
    //         setData(data)
    //     }
    //     getData()
    // },[])


    useEffect (()=>{
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
    Ajax : 서버로부터 새로고침없이 요청 할수있게 도와줌
            서버로 네트워크 요청을 보내고 응답을 받을수 있도록 해줌

    형식
       1.jQury $.ajax()
       2.js fetch()
       3.axios설치 - axios.get()
       react -> fetch, axios ***

    fetch : json형태로 가져오기
    fetch ('주소',옵션)
    .then(콜백) 응답성공
    .catch(콜백) 응답실패

    axios : 객체로 변환해서 가져온다
    axios.get('주소',옵션)
    .then(콜백) 응답성공
    .catch(콜백) 응답실패

    -useEffect(()=>{
        외부파일 가져오기
    },[])

    axios , fetch 는 promise 기반 ,
    
    axios:크로스브라우저 가능,promis 기반, 간단하다,객체형태로 가져온다
    엑시오스

    fetch:js에서 지원,promis기반,json형태 그대로 가져와 변환해야함,브라우저 호환성이 떨어진다,기능이 부족하다
*/