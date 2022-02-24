import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialState = {//초기값
    loading:false,
    error:'',
    data:{}
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'SUCCESS':
            return{
                loading:true,
                error:'',
                data:action.payload
            }
        case 'ERROR':
            return{
                loading:false,
                error:'ERROR',
                data:[]
            }
        default:
            return state
    }
}
const Test19 = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/5')
        .then(res=>{
            dispatch({type:'SUCCESS',payload:res.data})
        })
        .catch(error =>{
            dispatch({type:'ERROR'})
        })
    })
    return (
        <div>
            {
                state.data && state.loading ? state.data.title :'로딩중' 
            }
            {
                state.error ? state.error : null
            }
        </div>
    );
};

export default Test19;