import React, { useEffect, useState } from 'react';

const Test7Sub = () => {
    const [now,setNow] = useState(new Date())
    //newDate now에 저장
    useEffect(()=>{
        const timer = setInterval(()=>{
            setNow(new Date())
            //다시 출력시 현재 날짜 출력
        },1000)
        return()=>{
            clearInterval(timer)
        }
    },[])
    return (
        <div>
            <h3>날짜 : {now.toLocaleDateString()}</h3> 
            <h3>시간 : {now.toLocaleTimeString()}</h3>     
        </div>
    );
};

export default Test7Sub;