import React, { useState } from 'react';
import Test7Sub from './Test7Sub';

const Test7 = () => {
    const [show,setShow] = useState(false)
    return (
        <div>
            <p>
                <button onClick={() => setShow(!show)}>{show ? '미출력':'출력'}</button>
            </p>
            
                {show && <Test7Sub/>}

        </div>
    );
};

export default Test7;