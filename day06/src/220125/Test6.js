import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [count,setCount] = useState(0)
    const [active,setActive] = useState(false)
    useEffect( () => {
        let timer = null
        if(active){
            timer = setInterval(()=>{
                setCount(count => count + 1)
            },1000)
        }else{
            clearInterval(timer)
        }
        return() =>{
            clearInterval(timer)
        }
    },[active])
    const onToggle = () =>{
        setActive(!active)
    }
    const onReset = () =>{
        setCount(0)
        setActive(false)
    }
    return (
        <div>
           <h1>카운트 : {count}</h1> 
           <button onClick={onToggle}>{active ? '중지':'시작'}</button>
           <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test6;