import React, { useCallback, useState } from 'react';
import Test14Sub from './Test14Sub';

const Test14 = () => {
    const [cnt1,setCnt1] = useState(1)
    const [cnt2,setCnt2] = useState(10)
    const test1 = useCallback(() =>{
        setCnt1(cnt1 + 1)
    },[cnt1])
    const test2 = useCallback(() =>{
        setCnt2(cnt2 + 1)
    },[cnt2])
    return (
        <div>
            <h1>숫자 : {cnt1}</h1>
            <Test14Sub title='카운트1' cnt={cnt1}/>
            <button onClick={test1}>증가</button>
            <hr/>
            <h1>숫자 : {cnt2}</h1>
            <Test14Sub title='카운트2' cnt={cnt2}/>
            <button onClick={test2}>증가</button>
        </div>
    );
};

export default Test14;