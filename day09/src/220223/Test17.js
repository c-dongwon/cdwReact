import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state,action) =>{
    switch(action.type){
        case 'TEST1':
            //증가함수
            return state + action.step
        case 'TEST2':
             return state - action.step
        default: 
              return state
    }
}
const Test17 = () => {
    const [count1,dispatch1] = useReducer(reducer,initialState)
    const [count2,dispatch2] = useReducer(reducer,1001) 
    return (
        <div>
            <h1>카운트 : {count1}</h1>
            <div>
                <button  onClick={() => dispatch1({type:'TEST1',step:50})}>50증가</button>
                <button onClick={() => dispatch1({type:'TEST2',step:30})}>30감소</button>
            </div>
            <hr/>
            <h1>카운트 : {count2}</h1>
            <div>
                <button onClick={() => dispatch2({type:'TEST1',step:100})}> 100증가</button>
                <button onClick={() => dispatch2({type:'TEST2',step:50})}>50감소</button>
            </div>
        </div>
    );
};

export default Test17;