import React, { useReducer } from 'react';
const initialState = {width:150}
const reducer = (state,action) =>{
    switch(action.type){
        case'PLUS':
            return{
                width:state.width + action.step
            }
        case 'MINUS':
            return{
                width: state.width - action.step
            }
        case 'RESET':
            return{
                width:150
            }
        default:
            return state
    }
}
const Test18 = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <div style={{transition:'0.4s',width:state.width,background:'tomato',height:150}}></div>
            <p>
                <button onClick={()=>dispatch({type:'PLUS',step:50})}>증가</button>
                <button onClick={()=>dispatch({type:'MINUS',step:50})}>감소</button>
                <button onClick={()=>dispatch({type:'RESET'})}>복구</button>

            </p>
        </div>
    );
};

export default Test18;