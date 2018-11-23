import React from 'react';
import App from './App';
import Home from './Home';
import Login from './containers/account/Login';
import RegisterMemberForm from "./components/account/RegisterMemberForm";
import {Form} from "antd";
import {browserHistory, IndexRoute, Route, Router} from "react-router";

const RegisterMember = Form.create()(RegisterMemberForm);


const Root = () => {

    return (
    <Router history = {browserHistory}>
        <Route path = "/" component = {Home}>

            <IndexRoute component = {Login} />
            <Route path = "/app" component={App}/>
            <Route path = "/register-member" component={RegisterMember}/>
            <Route path = "/login" component={Login}/>
        </Route>
    </Router>


    );
};

export default Root;