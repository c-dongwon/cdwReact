import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { red, green, tomato } from './../../store/modules/color';

const Color = () => {
    //const 이름  = useSelector(  App에서 내려준모든상태값  => 모든상태값중에.리듀서파일.키값)
    const color = useSelector( state => state.color.color )
    const dispatch  = useDispatch() 

    return (
        <div>
            <h1 style={{color:color}}> color UI / {color} </h1>
            <p>
                <button onClick={() => dispatch(red())}>red</button>
                <button onClick={() => dispatch( green())}> green</button>
                <button onClick={() => dispatch( tomato())}>tomato</button>                
            </p>
        </div>
    );
};

export default Color;