import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Count from './components/count/Count';
import Todos from './components/todos/Todos';

const App = () => {
  return (
    <div>
      <Todos />
      <hr/>
      <ChangeColor />
      <hr/>
      <Count />
      <hr/>
      <Color />      
    </div>
  );
};

export default App;