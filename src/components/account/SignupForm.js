import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Select, Checkbox, Button } from 'antd';
import './css/account.css';
import { Link } from 'react-router';

const style = {
    width : "100%"
}
const styleTitle ={
    textAlign: "center",
    minWidth: "250px",
    maxWidth: "500px",
    paddingLeft: "250px"
}

const FormItem = Form.Item;
const Option = Select.Option;


class SignupForm extends Component {
    constructor(){
        super();
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { signup } = this.props;
        this.props.form.validateFieldsAndScroll((err, values) => {
            const agreement = values.agreement;
            if(agreement === true){
                if (!err) {
                    console.log('Received values of form: ', values);
                    const userId = values.userId;
                    const password = values.password;
                    const username = values.username;
                    const email = values.email;
                    const nickname = values.nickname;
                    const phoneNumber = values.phoneNumber;
                    const countryCode = values.countryCode;
                    signup(userId, password, username, email, nickname, phoneNumber, countryCode);
                }
            } else {
                alert("약관을 읽고 동의 체크해주세요.");
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        const { signupSuccess } = this.props;
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('countryCode', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );
        let rootLoginAuth = this.props;
        const loginAuth = rootLoginAuth.loginAuth;

        return (
            loginAuth ?
                <div>
                    {alert("로그인이 되어 있습니다. 로그아웃 하신 후 등록해주세요.")}
                    {window.location.href = "/app"}
                </div>
                :
            signupSuccess ?
                <div>{window.location.href = "/login"}</div>
                :
            <div id="signUpForm">
                <div style={styleTitle}>
                    <h3>회원 등록</h3>
                </div>
                <br/>

            <Form onSubmit={this.handleSubmit}>

                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>아이디&nbsp;</span>
                    )}
                >
                    {getFieldDecorator('userId', {
                        rules: [{ required: true, message: 'Please input your id!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="비밀번호"
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="비밀번호 확인"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>이름&nbsp;</span>
                    )}
                >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your your name!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="이메일"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                                별명&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="휴대전화번호"
                >
                    {getFieldDecorator('phoneNumber', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>개인정보 제공 및 서비스 이용에 관한 <Link to="">약관</Link>을 읽고 동의합니다.</Checkbox>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <div>
                        <Button style={style} type="primary" htmlType="submit">회원 등록</Button>
                    </div>
                </FormItem>
            </Form>
        </div>
        );
    }
}

const Signup = Form.create()(SignupForm);

export default Signup;