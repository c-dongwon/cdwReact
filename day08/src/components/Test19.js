import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading:true,
    error:'',
    data:{}
}
const reducer = (state,action) =>{
    switch  (action.type){
        case 'SUCCESS':
                return{
                    loading:false,
                    error:'',
                    data:action.payload
                }
        case 'ERROR':
                return{
                    loading:true,
                    error:'ERROR!!',
                    data:{}
                }   
        default:
                return state     
    }
}
const Test19 = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/5')
        .then(res =>{
            dispatch({type:'SUCCESS',payload:res.data})
        })
        .catch(error =>{
            dispatch({type:'ERROR'})
        })
    })
    return (
        <div>
            <h2>
                {
                    state.data && state.loading ? '로딩중' : state.data.title
                }
                <p>
                    {
                        state.error ? state.error : null
                    }
                </p>
            </h2>
        </div>
    );
};

export default Test19;