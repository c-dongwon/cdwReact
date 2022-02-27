import React, { createContext, useState } from 'react';

export const TodosContext  = createContext()

const TodosProvider = ( props ) => {
    const [data , setData ] = useState([
        {id:1, text:'운동하기', isChk : false },
        {id:2, text:'운동하기', isChk : false },
        {id:3, text:'운동하기', isChk : true },
        {id:4, text:'운동하기', isChk : false },
        {id:5, text:'운동하기', isChk : false },
    ])

    //삭제
    const onDel = ( id ) => {
        setData( data.filter( item => item.id !== id ))
    }

    //수정
    const onToggle = ( id )  => {
        setData( data.map( item => item.id === id ? {...item, isChk: !item.isChk }:item ))
    }
    
    return (
        <TodosContext.Provider value={{data , onDel, onToggle }}>
            { props.children }
        </TodosContext.Provider>
    );
};

export default TodosProvider;