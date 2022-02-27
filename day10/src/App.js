import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Count from './components/count/Count';
import Todos from './components/todos/Todos';
import ChangeColorProvider from './contexts/ChangeColorContext';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
import TodosProvider from './contexts/TodosContext';

const App = () => {
  return (
    <div>
      <CountProvider>
        <ColorProvider>
          <Color />
          <Count />
        </ColorProvider>  
      </CountProvider>
      <hr/>

      {/* 
        <Count />
      </CountProvider>

      <hr/>

<ChangeColorProvider>
      <ChangeColor />
</ChangeColorProvider>

<hr/>
<TodosProvider>
<Todos />
</TodosProvider> */}

    </div>
  );
};

export default App;