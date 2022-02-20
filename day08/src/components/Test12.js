import React, { useCallback, useState } from 'react';

const Test12 = () => {
    const [count,setCount] = useState(1)

    const ran = Math.random()

    const test1 = useCallback(() =>{
        console.log(ran)
        setCount(count + 1)
    },[count])

    const test2 = useCallback(() =>{
        console.log(ran)
        setCount(count - 1)
    },[count])
    
    return (
        <div>
            <h2>카운트 : {count}</h2>
            <button onClick={test1}>증가</button>
            <button onClick={test2}>감소</button>
        </div>
    );
};

export default Test12;

// 콜백의 의존성이 변경되었을 때에만 변경됩니다. 
// 이것은, 불필요한 렌더링을 방지하기 위해 (예로 shouldComponentUpdate를 사용하여) 
// 참조의 동일성에 의존적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용합니다.

/*
    함수 자체를 기억한다 90%사용
*/