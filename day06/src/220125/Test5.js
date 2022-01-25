import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [step,setStep] = useState(1)//받는값
    const [count,setCount] = useState(1)//계산해서 출력함
    const chInput = (e) =>{
        const {value} = e.target
        setStep(Number(value))
    }
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(count => count+ step)
        },1000)
        return() =>{
            clearInterval(timer)
        }
    },[step])
    return (
        <div>
           <input type='text' value={step} onChange={chInput}/> 
           <h2>1초마다 카운트 입력값 더함 : {count}</h2>
        </div>
    );
};

export default Test5;