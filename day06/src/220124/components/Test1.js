import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test1 = () => {
    const [cnt,setCnt] = useState(0)
    const ref1 = useRef(null)
    const ref2 = useRef()
    const onColor = () =>{
        setCnt(cnt +1)
        ref1.current.style.color = "blue"
        ref2.current.style.color = "pink"
    }
    useEffect( () => {
        ref1.current.style.color = 'red'
    })
    useLayoutEffect( () => {
        ref2.current.style.color = 'green'
    })
    return (
        <div>
            <h2>{cnt}</h2>
            <h2 ref={ref1}>useEffect</h2>
            <h2 ref={ref2}>useLayoutEffect</h2>
            <button onClick={onColor}>버튼</button>
        </div>
    );
};

export default Test1;