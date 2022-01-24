import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [ step , setStep ] = useState(1)
    const [ count , setCount ] = useState(1)

    const changeInput  = (e) => {
        const { value } = e.target 
        setStep( Number(value) )
    }

    useEffect( () => {
        const timer  = setInterval(() => {
            setCount( state => state +  step )
        }, 1000)
        return() => {
            clearInterval( timer )
        }
    }, [ step ] )


    return (
        <div>
            <input type="text" value={step} onChange={changeInput}/>
            <h2>입력값만큼 카운트 1초마다 : {count} </h2>
        </div>
    );
};

export default Test5;