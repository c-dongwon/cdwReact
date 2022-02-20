import React, { useMemo, useState } from 'react';
import Test10Sub from './Test10Sub';

const Test10 = () => {
    const [count,setCount] = useState(1)
    const test1 = () =>{
        setCount(count + 1)
    }

    //사용자정의함수
    const testSub = useMemo(() =>{
        return <Test10Sub/>
    },[count])
    return (
        <div>
            <h1>출력 : {count}</h1>
            <button onClick={test1}>증가</button>
            <hr/>
            {testSub}
        </div>
    );
};

export default Test10;