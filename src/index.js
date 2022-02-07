import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import { searchRobots } from './reducers';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'tachyons';

const store = createStore(searchRobots, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
      <Provider store={store}>
         <App />
      </Provider>,
   document.getElementById('root')
);
