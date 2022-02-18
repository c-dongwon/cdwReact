import React, { useMemo, useState } from 'react';

const Test8 = () => {
    const [count, setCount] = useState(0)

    const test = (cnt) =>{
        console.log('test')
       
        return cnt*100
    }
    const reCount = useMemo(()=>{
        return test(count)
    },[count])
    return (
        <div>
            <h1>카운트 : {count}</h1>
            <input type='text' value={count} onChange={e => setCount(e.target.value)}/>
            <h2>출력 : {reCount}</h2>
        </div>
    );
};

export default Test8;