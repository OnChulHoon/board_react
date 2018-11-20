import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './css/signIn.css';

const FormItem = Form.Item;

class SignIn extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
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
                        {getFieldDecorator('password', {
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
                        <Button id="submitBtn" type="primary" htmlType="submit" className="login-form-button">
                            로그인
                        </Button>
                        <div>
                            아직 회원이 아니신가요? <a href="#">회원가입</a>

                            <span id="findIdAndPw">
                                <a className="login-form-forgot" href="#">아이디/비밀번호 찾기</a>
                            </span>

                        </div>
                    </FormItem>
                </Form>
            </div>
        );
    }
}



export default SignIn;
