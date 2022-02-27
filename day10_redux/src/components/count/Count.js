import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/modules/count';
import { reset } from './../../store/modules/count';

const Count = () => {
    const num  = useSelector( state => state.count.num )
    const color = useSelector( state => state.color.color )
    const dispatch  = useDispatch() 
    return (
        <div>
            <h1 style={{color:color}}>카운트: {num} / {color} </h1>
            <p>
                <button onClick={() => dispatch( increment() ) }>증가</button>
                <button onClick={() => dispatch( decrement() ) }>감소</button>
                <button onClick={() => dispatch( reset() ) }>초기화</button>
            </p>
        </div>
    );
};

export default Count;