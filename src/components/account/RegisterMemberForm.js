import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Select, Checkbox, Button } from 'antd';
import './css/signIn.css';
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


class RegisterMemberForm extends Component {
    constructor(){
        super();
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        };
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
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
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
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
                    {getFieldDecorator('id', {
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
                    {getFieldDecorator('phone', {
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

const RegisterMember = Form.create()(RegisterMemberForm);

export default RegisterMember;