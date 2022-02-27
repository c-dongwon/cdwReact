import React from 'react';
import { useSelector } from 'react-redux';
import TodosItem from './TodosItem';

const TodosList = () => {
    const todos = useSelector( state => state.todos.todos )
    return (
        <ul>
           {
               todos.map( todo => <TodosItem  key={todo.id} todo={todo} />)
           } 
        </ul>
    );
};

export default TodosList;