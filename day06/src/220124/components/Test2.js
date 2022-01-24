import React, { useLayoutEffect, useRef } from 'react';

const Test2 = () => {
    const ref1 = useRef()
    useLayoutEffect( () => {
        ref1.current.focus()
    })
    return (
        <div>
            <input type='text' ref={ref1}/>
        </div>
    );
};

export default Test2;