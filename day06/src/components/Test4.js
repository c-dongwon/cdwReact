import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [ count , setCount ] = useState(1)

    //1초마다 계속 실행 
    useEffect( ()  => {
        console.log('useEffect')

        const timer = setInterval( () => {
            console.log('setInterval')
            // setCount( 이전값 => 이전값 +  1 )
            // setCount( state => state +  1 )
            setCount( count => count +  1 )
        }, 1000 )
        //시간은 뒷정리해야함 
        return()  => {
            console.log('뒷정리')
            clearInterval( timer )
        }
    },[])

    return (
        <div>
            <h1>1초마다 실행 : { count} </h1>
        </div>
    );
};

export default Test4;