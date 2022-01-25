import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [count,setCount] = useState(1)
    useEffect( ()=>{
        const timer = setInterval(() =>{
            setCount(count => count +1)
        },1000)
        return() =>{
            clearInterval(timer)
        }
    })
    return (
        <div>
            <h1>1초마다 실행 : {count}</h1>
        </div>
    );
};

export default Test4;