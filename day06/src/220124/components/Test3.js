import React, { useState } from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    const [show,setShow] = useState(false)
    const onToggle = () =>{
        setShow(!show)
    }
    return (
        <div>
            <button onClick={onToggle}>
                {show ? '숨기기':'보이기'}
            </button>
            {
                show && <Test3Sub/>
            }
        </div>
    );
};

export default Test3;