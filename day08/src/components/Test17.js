import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state,action) =>{
    switch(action.type){
        case 'test1':
            return state + action.step
        case 'test2' :
            return state - action.step
            default:
                return state
    }
}

const Test17 = () => {
    const [count1,dispatch1] = useReducer(reducer,initialState)
    const [count2,dispatch2] = useReducer(reducer,100)
    return (
        <div>
            <h1>카운트1 =0 : {count1} </h1>
            <p>
                <button onClick={() => dispatch1({type:'test1',step:50})}>50증가</button>
                <button onClick={() => dispatch1({type:'test2',step:30})}>30감소</button>
            </p>
            <hr/>
            <h1>카운트2 = 100 : {count2}</h1>
            <p>
                <button onClick={() => dispatch2({type:'test1',step:100})}>100증가</button>
                <button onClick={()=>dispatch2({type:'test2',step:50})}>50감소</button>
            </p>
        </div>
    );
};

export default Test17;