import React, { useState } from 'react';
import Test7Sub from './Test7Sub';

const Test7 = () => {
    const [isShow  , setIsShow ] = useState(false)
    return (
        <div>
            <p>
                <button onClick={() => setIsShow(!isShow)}> 출력 </button>
            </p>
            { isShow && <Test7Sub /> }
        </div>
    );
};

export default Test7;