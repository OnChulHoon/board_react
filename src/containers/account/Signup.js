import React, { Component } from 'react';
import { signup, userIdCheck, userEmailCheck } from "../../actions";
import { connect } from 'react-redux';
import SignupForm from '../../components/account/SignupForm';
import PropTypes from "prop-types";

class Signup extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    render() {

        let root = this.props;
        const loginAuth = root.routes[0].loginAuth;

        const { userSignup, dispatch, checkedId, checkedEmail } = this.props;

        return (
            <SignupForm signupSuccess={userSignup.signupSuccess} loginAuth={loginAuth} isExistId={checkedId.isExistId}  isExistEmail={checkedEmail.isExistEmail}
            signup={
                (userId, password, username, email, nickname, phoneNumber, countryCode) => dispatch(signup(userId, password, username, email, nickname, phoneNumber, countryCode))
            }
            userIdCheck={(userId) => dispatch(userIdCheck(userId))}
            userEmailCheck={(email) => dispatch(userEmailCheck(email))}/>
        )
    }
}

function mapStateToProps(state) {
    return { userSignup: state.userSignup,
            checkedId: state.checkedId,
            checkedEmail: state.checkedEmail}
}

export default connect(mapStateToProps)(Signup);