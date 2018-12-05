import React from 'react';
import App from './App';
import Home from './Home';
import Login from './containers/account/Login';
import Signup from "./containers/account/Signup";
import { browserHistory, IndexRoute, Route, Router } from "react-router";

const loginUserId = window.sessionStorage.loginUserId;
let loginAuth = false;
if(loginUserId !== undefined){
    loginAuth = true;
}
console.log("[Root] sessionStorage.loginUserId : ",loginUserId);
console.log("[Root] loginAuth : ", loginAuth);


const Root = () => {
    return (
        <Router history = {browserHistory} >
            <Route path = "/" component = {Home} loginAuth={loginAuth}>
                <IndexRoute component = {Login} />
                <Route path = "/app" component={App} loginAuth={loginAuth}/>
                <Route path = "/signup" component={Signup} loginAuth={loginAuth}/>
                <Route path = "/login" component={Login} loginAuth={loginAuth}/>
            </Route>
        </Router>
    );
};

export default Root;