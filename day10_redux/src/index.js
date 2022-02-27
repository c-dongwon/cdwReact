import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

//합친 리듀서파일 가져오기 
import rootReducer from './store'

// const store  = createStore( rootReducer )
const store = createStore(rootReducer, composeWithDevTools()); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
 
reportWebVitals();
