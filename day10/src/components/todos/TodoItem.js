import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';

const TodoItem = ({ item }) => {
    const { onDel, onToggle  } = useContext( TodosContext  )
    const { id , text, isChk } = item 

    return (
        <div style={{ color: isChk ? 'tomato':'#000' }}>
              <input type="checkbox" checked={ isChk } onChange={ () => onToggle( id )}  />
              { text }
              <button onClick={ () => onDel(id) }> 삭제 </button>  
        </div>
    );
};

export default TodoItem;