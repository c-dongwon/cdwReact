import React, { useEffect, useState } from 'react';

const Test7Sub = () => {
    const [ now , setNow ] = useState( new Date() )

    useEffect( () => {
        console.log('timer')
        const timer = setInterval( () => {
             setNow( new Date() )   
        }, 1000)
        return() => {
            console.log('뒷정리')
            clearInterval( timer )
        }
    },[] )

    return (
        <div>
            <h3> 날짜 : { now.toLocaleDateString() } </h3>
            <h3> 시간 : { now.toLocaleTimeString() } </h3>
        </div>
    );
};

export default Test7Sub;