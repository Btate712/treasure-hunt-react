import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import huntsReducer from './reducers/huntsReducer';
import huntReducer from './reducers/huntReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  huntsData: huntsReducer,
  user: userReducer,
  huntData: huntReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </ Provider>,
  document.getElementById('root')
);
