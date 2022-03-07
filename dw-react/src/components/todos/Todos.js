import React from 'react';
import TodosInput from './TodosInput';
import TodosList from './TodosList';

const Todos = () => {
    return (
        <div>
            <h1>일정관리</h1>
            <TodosInput/>
            <TodosList/>
        </div>
    );
};

export default Todos;