import React, { useEffect } from 'react';

let num = 0

const Test10Sub = () => {
    
    useEffect(()=>{
        return num++
    })

    return (
        <div>
           <h3>Test10Sub : {num}</h3> 
        </div>
    );
};

export default Test10Sub;