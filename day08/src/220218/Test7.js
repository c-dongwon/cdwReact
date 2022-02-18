import React, { useMemo, useState } from 'react';

const Test7 = () => {
    const [cnt1,setCnt1] = useState(1)
    const [cnt2,setCnt2] = useState(10)

    const isEven = useMemo(()=>{
        console.log('test')
        console.log(cnt1)
        return cnt1 % 2 === 0
    },[cnt1])
    return (
        <div>
            <h2>카운트 : {cnt1}</h2>
            <button onClick={()=>setCnt1(cnt1 + 1)}>증가</button>

            <h2>카운트 : {cnt2}</h2>
            <button onClick={()=>setCnt2(cnt2 + 1)}>증가</button>
            <h2>
                홀수,짝수 : {isEven ? '짝수' : '홀수'}
            </h2>
        </div>
    );
};

export default Test7;