import React, { useReducer, useState } from 'react';


const initialState = 0 ;
// const 함수명 = (필수 , 필수 ) => {
const reducer = ( state , action ) => {
    switch( action.type ){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1 
        case 'RESET':
            return 0
        default:
            return state             
    }
}

const Test16 = () => {
     const [ count , dispatch ] = useReducer( reducer , initialState )

    return (
        <div>
            <h1>카운트 : {count}   </h1>
            <button onClick={() => dispatch({type:'INCREMENT'})}>증가:INCREMENT</button>            
            <button onClick={() => dispatch({type:'DECREMENT'})}>감소:DECREMENT</button>            
            <button onClick={() => dispatch({type:'RESET'})}>초기화:RESET</button>            
        </div>
    );
};

export default Test16;

/*
      const [state, dispatch] = useReducer(reducer, initialState);
      state : 상태데이터 
      dispatch : 액션을 발생시키는 함수 ( 액션을 보내는것 )
      useReducer(상태업데이트로직을 담는 함수, 초기값)

      dispatch({type: 'decrement'})
      dispatch({type: '액션명'}) : 액션명은 별명,별칭 
      type 필수 : 액션명  - 한글,영문,소문자,대문자 :주로 영문대문자 ( 상수형 )

      dispatch({type: '액션명', 키1:값, 키2:값})
      action.type , action.키1 , action.키2
      
    switch (action.type) {
        case '액션명':
            return 넘기는값;        
        default:
            return state 
    }
*/