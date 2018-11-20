import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Routes from "./routes";
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//import Login from "./components/account/Login";

import './include/bootstrap'
//import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import {Form} from "antd";
import App from "./App";

const middleware = [ thunk ]
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)

//const WrappedNormalLoginForm = Form.create()(SignIn);

const WrappedRegistrationForm = Form.create()(SignUp);


console.log("defaultStore - store.getState() : ", store.getState());

ReactDOM.render(
    <Provider store={store}>
        {/*<App/>*/}
        {/*<WrappedNormalLoginForm />*/}
        <WrappedRegistrationForm />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
