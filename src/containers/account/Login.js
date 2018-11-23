import React, { Component } from 'react';
import { login } from "../../actions";
import { connect } from "react-redux";
import LoginForm from "../../components/account/LoginForm";
import PropTypes from "prop-types";

class Login extends Component {

    static propTypes = {
        user: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    render() {

        const { user, dispatch } = this.props;
        console.log("[container-Login] user : ", user);

        return (
            <LoginForm
                isLoggedIn={user.isLoggedIn}
                login={(id, pw) => dispatch(login(id, pw))} />

        );
    }
}

function mapStateToProps(state) {
    return { user: state.user }
}

export default connect(mapStateToProps)(Login);