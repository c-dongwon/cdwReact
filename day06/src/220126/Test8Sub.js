import React, { useEffect } from 'react';

const Test8Sub = ({show,setShow,msg}) => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShow(false)
        },3000)
        return() =>{
            clearTimeout(timer)
        }
    },[show])
    return (
        <>
        <h1>연습</h1>
        {
            show && 
            <p style={{background:'pink', padding:'15px 30px', margin:20, fontSize:20 }}>
                메세지 : {msg}
            </p>
        }   
        </>
    );
};

export default Test8Sub;