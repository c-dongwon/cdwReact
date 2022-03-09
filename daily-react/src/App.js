import React from 'react';
import Subscibers from './220309/components/Subscibers';
import { Provider } from 'react-redux';
import store from './220309/redux/store';
import './App.css'
import Display from './220309/components/Display';
import Views from './220309/components/Views';
import Comments from './220309/components/Comments';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Subscibers/>
        <Display/>
        <Views/>
        <Comments/>
      </div>
    </Provider>
  );
};

export default App;