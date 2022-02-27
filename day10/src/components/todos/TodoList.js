import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { data } = useContext(TodosContext )
    return (
        <div>
            <h2> 리스트 목록 </h2>
            {
                data.map( item => <TodoItem key={item.id} item={item} />)
            }
        </div>
    );
};

export default TodoList;