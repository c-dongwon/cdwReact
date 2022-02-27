import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeColor } from '../../store/modules/changecolor';

const ChangeColor = () => {
    const color  = useSelector( state  => state.changecolor.color )
    const dispatch  = useDispatch() 

    return (
        <div>
            <h1 style={{color:color}}>changeColor: { color } </h1>
            <p>
                <button onClick={ () => dispatch( changeColor('hotpink'))}>hotpink</button>
                <button onClick={ () => dispatch( changeColor('yellow'))}>yellow</button>
                <button onClick={ () => dispatch( changeColor('skyblue'))}>skyblue</button>
            </p>
        </div>
    );
};

export default ChangeColor;