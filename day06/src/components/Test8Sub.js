import React, { useEffect } from 'react';

const Test8Sub = ({ isShow , msg , setIsShow }) => {
    //3초후에 사라지기 setTimeout + useEffect 

    useEffect( ()  => {
        const timer  = setTimeout( () => {
            setIsShow( false )
        }, 3000)
        return()  => {
            clearTimeout( timer )
        }
    },[ isShow ])


    return (
        <>
        <h1>연습</h1>
        {
            isShow && 
            <p style={{background:'pink', padding:'15px 30px', margin:20, fontSize:20 }}>
                메세지 : {msg}
            </p>
        }   
        </>
    );
};

export default Test8Sub;