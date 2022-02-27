import React, { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';

const Color = () => {
    //관리자호출
    const {color, onRed, onGreen, onBlue, onPink, onTomato} = useContext(ColorContext)

    return (
        <div>
            <h1 style={{color:color}}> 컬러 디자인 UI 부분: { color } </h1>
            <p>
                <button onClick={ () => onRed() }>red</button>
                <button onClick={ () => onGreen() }>green</button>
                <button onClick={ () => onBlue() }>blue</button>
                <button onClick={ () => onPink() }>pink</button>
                <button onClick={ () => onTomato() }>tomato</button>
            </p>
        </div>
    );
};

export default Color;