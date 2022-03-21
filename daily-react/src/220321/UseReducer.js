import React, { useReducer, useState } from 'react';

const UseReducer = () => {
    const [num, setNum]= useState(1)
    const countReducer = (oldCount, action) =>{
        if(action.type === "UP"){
            return oldCount + action.num
        }else if(action.type === "DOWN"){
            return oldCount - action.num
        }else if(action === "RESET"){
            return 0
        }
    }

    const [count, countDispatch]= useReducer(countReducer, 0)

    const down = () =>{
        countDispatch({type: "DOWN", num:num});
    }

    const up = () =>{
        countDispatch({type: "UP", num:num});
    }

    const reset = () =>{
        countDispatch("RESET");
    }

    const chNumber = (e) =>{
        setNum(Number(e.target.value));
    }
    return (
        <div style={{textAlign:"center"}}>
            <input type="button" value="-" onClick={down}/>
            <input type="button" value="0" onClick={reset}/>
            <input type="button" value="+" onClick={up}/>
            <input type="text" value={num} onChange={chNumber}/>
            <h2>{count}</h2>
        </div>
    );
};

export default UseReducer;