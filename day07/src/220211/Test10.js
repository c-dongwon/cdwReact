import React, { useState } from 'react';
import styled from 'styled-components';


const Test10 = () => {
    const Test = styled.div`
        border:1px solid #333;
        padding: 25px;
        width:${props => props.width};
    `
    const Btn = styled.button`
        border: 0;
        padding: 5px;
        font-size:50px;
        margin: 5px;
        &.up:after{
            content:'📤' ;
        }
        &.down:after{
            content:'📥'
        }
        &:hover{
            background: tomato;
        }
        &:disabled{
            filter: grayscale(100%);
            background: #333;
        }
    `
    const [count,setCount] = useState(1)
    const [max,setMax] = useState(10)
    const [min,setMin] = useState(0)

    const test1 = () =>{
        setCount(count > max ? max : count+1)
    }
    const test2 = () =>{
        setCount(count < min ? min : count - 1)
    }
    return (
        <Test width='500px'>
            <h2>숫자 : {count}</h2>
            <Btn className='down' onClick={test2} disabled = {count === min}></Btn>
            <Btn className='up' onClick={test1} disabled = {count === max}></Btn>

        </Test>
    );
};

export default Test10;