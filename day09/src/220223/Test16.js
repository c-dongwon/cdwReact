import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state,action) =>{
    switch(action.type){
        case 'TEST1':
            return state + 1
        case 'TEST2':
            return state - 1
        case 'TEST3' :
            return 0
        default:
            return state
    }
}
const Test16 = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h1>카운트 : {count}   </h1>
            <button onClick={() => dispatch({type:"TEST1"})}>증가</button>
            <button onClick={() => dispatch({type:'TEST2'})}>감소</button>
            <button onClick={() => dispatch({type:'TEST3'})}>리셋</button>
        </div>
    );
};

export default Test16;