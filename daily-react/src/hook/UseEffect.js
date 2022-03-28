import React, { useState, useEffect } from 'react';

const Timer = () =>{

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("time is chkine")
        },1000)
        
        return () => {
            clearInterval(timer)
        }
    }, []);

    return(
        <div>
            <span>타이머!!!</span>
        </div>
    )
}

const UseEffect = () => {
    const [showTimer, setShowTimer] = useState(false)
    return (
        <div>
            {showTimer && <Timer/>}
            <button onClick={() => setShowTimer(!showTimer)}>toggle</button>
        </div>
    );
};

export default UseEffect;