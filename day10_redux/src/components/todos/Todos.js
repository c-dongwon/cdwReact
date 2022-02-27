import React from 'react';
import TodosInput from './TodosInput';
import TodosList from './TodosList';
import { useSelector } from 'react-redux';

const Todos = () => {
    const color  = useSelector( state  => state.changecolor.color )
    const count  = useSelector( state  => state.count.num )
    return (
        <div>
            <h1 style={{color:color }}>일정관리 앱 만들기</h1>
            <h2> 카운트 {count} :  컬러: {color} </h2>
            <TodosInput />
            <TodosList />
        </div>
    );
};

export default Todos;