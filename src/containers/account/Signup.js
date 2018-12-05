import React, { Component } from 'react';
import { signup } from "../../actions";
import { connect } from 'react-redux';
import SignupForm from '../../components/account/SignupForm';

class Signup extends Component {

    render() {

        let root = this.props;
        const loginAuth = root.routes[0].loginAuth;

        const { userSignup, dispatch } = this.props;

        return (
            <SignupForm signupSuccess={userSignup.signupSuccess} loginAuth={loginAuth}
            signup={
                (userId, password, username, email, nickname, phoneNumber, countryCode) => dispatch(signup(userId, password, username, email, nickname, phoneNumber, countryCode))
            }/>
        )
    }
}

function mapStateToProps(state) {
    return { userSignup: state.userSignup }
}

export default connect(mapStateToProps)(Signup);