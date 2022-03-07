import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {red,blue} from './../../store/modules/color2'
const Color = () => {
    const color = useSelector(state => state.color.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{color:color}}>color : {color}</h1>
            <p>
                <button onClick={() => dispatch(red())}>red</button>
                <button onClick={() => dispatch(blue())}>blue</button>
            </p>
        </div>
    );
};

export default Color;