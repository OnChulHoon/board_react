import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './Root';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import './include/bootstrap'
//import configureStore from './store/configureStore';
import promiseMiddleware from './middlewares/promiseMiddleware';

//const middleware = [ thunk ]
const store = createStore(
    reducers,
    applyMiddleware(compose(promiseMiddleware))
);

console.log("defaultStore - store.getState() : ", store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
