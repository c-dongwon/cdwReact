import React, { useMemo, useState } from 'react';

const Test8 = () => {
    const [count,setCount] = useState(0)
    
    const fun1 = (cnt) =>{
        console.log('test')
        let k = 0
        for(let i =0; i < 100000; i++){
            k++
        }
        return cnt * 10
    }

    //사용자 정의
    const reCount = useMemo(() =>{
        return fun1(count)
    },[count])


    return (
        <div>
            <h1>카운트 {count}</h1>
            <input type='text' value={count} onChange={e=>setCount(e.target.value)}/>
            <hr/>
            <h2>출력:{reCount}</h2>
        </div>
    );
};

export default Test8;