import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { test1,test2,test3 } from '../../store/modules/count2';
const Count = () => {
    const num = useSelector(state => state.count.num)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>카운트 : {num}</h1>
            <p>
                <button onClick={() => dispatch(test1())}>증가</button>
                <button onClick={() => dispatch(test2())}>감소</button>
                <button onClick={() => dispatch(test3())}>리셋</button>
            </p>
        </div>
    );
};

export default Count;