import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './css/signIn.css';
import { Link } from 'react-router';
import { login } from "../../actions";
import { connect } from "react-redux";

const FormItem = Form.Item;

class SignIn extends Component {

    static propTypes = {
        user: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const id = values.id;
                const pw = values.pw;
                dispatch(login(id, pw));
            }
        });
    }

    // constructor() {
    //     super();
    //     this.loggedin = false;
    // }
    //
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log("", this.props);
    //             const findIdByDB = "admin";
    //             const findPwByDB = "1234";
    //
    //             if((values.id === findIdByDB) && (values.pw === findPwByDB)){
    //                 console.log("Log-in Success!!!");
    //                 alert("환영합니다! " + values.id + " 님!");
    //                 //window.location = "/app";
    //                 //Link.to("/app");
    //                 this.loggedin = true;
    //             }else if((values.id !== findIdByDB)){
    //                 alert("존재하지 않는 아이디입니다.");
    //             }else {
    //                 alert("비밀번호가 틀립니다! 다시 입력해주세요.");
    //             }
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // }

    render() {

        const { user } = this.props;
        console.log("[SignIn] user : ", user);

        const { getFieldDecorator } = this.props.form;

        return (
            user.isLoggedIn
                ? <div>로그인 성공</div>
           : <Fragment>
                <div id="signInForm">
                    <div>
                        <h1>로그인</h1>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('id', {
                                rules: [{ required: true, message: '아이디를 입력해주세요.' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="ID" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('pw', {
                                rules: [{ required: true, message: '비밀번호를 입력해주세요.' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="PASSWORD" />
                            )}
                        </FormItem>
                        <FormItem>
                            <div id="rememberCheck">
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>아이디 기억하기</Checkbox>
                            )}

                            </div>
                            <Button id="submitBtn" name="LOGIN" type="primary" htmlType="submit" className="login-form-button">
                                로그인
                            </Button>
                            <div>
                                아직 회원이 아니신가요? <Link to="/sign-up">회원가입</Link>
                                <span id="findIdAndPw">
                                    <Link className="login-form-forgot" to="">아이디/비밀번호 찾기</Link>
                                </span>
                            </div>
                        </FormItem>
                    </Form>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user }
}



export default connect(mapStateToProps)(SignIn);
