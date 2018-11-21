import React from 'react';
import App from './App';
import Home from './Home';
import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import {Form} from "antd";
import {browserHistory, IndexRoute, Route, Router} from "react-router";

const SignInForm = Form.create()(SignIn);
const SignUpForm = Form.create()(SignUp);

const Root = () => {
    return (
    <Router history = {browserHistory}>
        <Route path = "/" component = {Home}>
            <IndexRoute component = {SignInForm} />
            <Route path = "app" component={App}/>
            <Route path = "sign-up" component={SignUpForm}/>
            <Route path = "sign-in" component={SignInForm}/>
        </Route>
    </Router>
    );
};

export default Root;