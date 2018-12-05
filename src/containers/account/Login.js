import React, { Component } from 'react';
import { login } from "../../actions";
import { connect } from "react-redux";
import LoginForm from "../../components/account/LoginForm";
import PropTypes from "prop-types";

class Login extends Component {

    static propTypes = {
        userLogin: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    render() {

        let root = this.props;
        const loginAuth = root.routes[0].loginAuth;

        const { userLogin, dispatch } = this.props;

        return (
            <LoginForm
                isLoggedIn={userLogin.isLoggedIn} loginAuth={loginAuth}
                login={(userId, password) => dispatch(login(userId, password))} />

        );
    }
}

function mapStateToProps(state) {
    return { userLogin: state.userLogin }
}

export default connect(mapStateToProps)(Login);