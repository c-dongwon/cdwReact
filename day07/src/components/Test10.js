import React, { useState } from 'react';
import styled from 'styled-components'

const Test10 = () => {
    const Test = styled.div`
        border:1px solid #000;
        padding: 25px;
        margin:15px auto;
        width: ${props=>props.width};
    `
    const Btn = styled.button`
        font-size:50px;
        margin: 5px;
        padding: 0 30px 25px;
        border: 0;
        outline:0;
        cursor:pointer;
        &.up::after{content:'📤'}
        &.down::after{content:'📥'}
        &:hover{
            background:tomato;
        }
        &:disabled{
            filter:grayscale(100%);
            background: #333;
            cursor: not-allowed;
        }
    `

    const [count,setCount] = useState(1)
    const [max,setMax] = useState(10)
    const [min,setMin]  = useState(0)

    const test1 = () =>{
        setCount(count > max ? max : count + 1)
    }
    const test2 = () =>{
        setCount(count < min ? min : count - 1)
    }
    return (
        <Test width='400px'>
            <h2>숫자 :{count} </h2>
            <Btn className='down' onClick={test2} disabled={count === min}></Btn>
            <Btn className='up' onClick={test1} disabled={count === max}></Btn>
        </Test>
    );
};

export default Test10;