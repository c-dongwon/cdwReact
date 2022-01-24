import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Test2 = () => {
    const ref1  = useRef() 

    //화면에 그려진 후 
    useEffect( () => {
      //  ref1.current.focus()
    },[])

    //화면에 그려지기 전 
    useLayoutEffect( ()  => {
        ref1.current.focus()
    },[])

    return (
        <div>
            <input type="text" ref={ ref1 } />
        </div>
    );
};

export default Test2;