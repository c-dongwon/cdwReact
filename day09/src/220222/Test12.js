import React, { useCallback, useState } from 'react';

const Test12 = () => {
    const [count,setCount] = useState(1)
    const ran = Math.random()

    const test1 = useCallback(() =>{
        console.log(ran)
        setCount(count + 1)
    },[count])

    
    const test2 = () =>{
        console.log(ran)
        setCount(count - 1)
    }
    return (
        <div>
            <h2>카운트 : {count}</h2>
            <button onClick={test1}>증가</button>
            <button onClick={test2}>감소</button>

        </div>
    );
};

export default Test12;

/*
    콜백의 의존성이 변경되었을때만 변경된다
    함수자체를 기억함
*/