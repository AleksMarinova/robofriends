import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import { searchRobots, requestRobots } from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'tachyons';

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
      <Provider store={store}>
         <App />
      </Provider>,
   document.getElementById('root')
);
