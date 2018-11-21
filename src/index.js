import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './Root';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './include/bootstrap'

const middleware = [ thunk ]
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)

console.log("defaultStore - store.getState() : ", store.getState());

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
