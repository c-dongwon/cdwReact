import React, { useState } from 'react';

// CallBack 함수란 이름 그대로 나중에 호출되는 함수를 말한다.
// 콜백함수라고 해서 그 자체로 특별한 선언이나 문법적 특징을 가지고 있지는 않다.
// 콜백함수도 일반적인 자바스크립트 함수일 뿐이다.
// 콜백 함수는 코드를 통해 명시적으로 호출하는 함수가 아니라, 개발자는 단지 함수를 동록하기만 하고, 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수를 말한다.
const Test2 = () => {
    const [number,setNumber] = useState(0)
    const onAdd= () =>{
        setNumber(count => count + 1)
    }
    const onRemove = () =>{
        setNumber(number - 1)
    }
    return (
        <div>
           <h1> {number}</h1>
            <button onClick={onAdd}>+</button>
            <button onClick={onRemove}> -</button>
        </div>
    );
};

export default Test2;