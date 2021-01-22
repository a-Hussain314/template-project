import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './Components/App';
import combineReducers from './Reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(combineReducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={myStore}>
        <App/>
     </Provider>
    ,document.getElementById('root'));

