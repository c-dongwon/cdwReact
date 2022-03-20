import React from 'react';
import './App.css'
import Sub from './220319/components/Sub';
import { Provider } from 'react-redux';
import store from './220319/redux/store';
import Display from './220319/components/Display';
import Views from './220319/components/Views';
import Comments from './220319/components/Comments';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
          <Sub/>
          <Display/>
          <Views/>
          <Comments/>
      </div>
    </Provider>
  );
};

export default App;