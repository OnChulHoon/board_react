import React, { Component, Fragment } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './css/signIn.css';
import { Link } from 'react-router';

const FormItem = Form.Item;

class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { login } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const id = values.id;
                const pw = values.pw;
                login(id, pw);
            }
        });
    }

    render() {

        const { isLoggedIn } = this.props;
        const { getFieldDecorator } = this.props.form;

        return (
            isLoggedIn
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
                            <div>
                                <Button id="submitBtn" name="LOGIN" type="primary" htmlType="submit" className="login-form-button">
                                    로그인
                                </Button>
                            </div>
                            <div id="login-form-footer">
                                <div>
                                    <Link className="login-form-forgot" to="">아이디/비밀번호 찾기</Link>
                                </div>
                                <div>
                                    아직 회원이 아니신가요? <Link to="/register-member">회원가입</Link>
                                </div>
                            </div>
                        </FormItem>
                    </Form>
                </div>
            </Fragment>
        );
    }
}

const Login = Form.create()(LoginForm);

export default Login;
