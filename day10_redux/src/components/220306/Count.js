import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement,increment,reset } from '../../store/220306/count';

const Count = () => {
    //useSelecotor란 connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다
    const num = useSelector(state => state.count.num)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>카운트 : {num}</h1>
            <p>
                <button onClick={() => dispatch(increment())}>증가</button>
                <button onClick={() => dispatch(decrement())}>감소</button>
                <button onClick={() => dispatch(reset())}>초기화</button>
            </p>
        </div>
    );
};

export default Count;