import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import huntReducer from './reducers/huntReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  huntData: huntReducer,
  user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </ Provider>,
  document.getElementById('root')
);
