import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import styles from './sign.css';

const FormItem = Form.Item;
class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      if (!values.password || !values.userName) {
        message.info('Please fill in the right  Password Or Username');
        return 0;
      }
      this.props.dispatch({
        type: 'shareme/r_login',
        payload: { user: values },
      })
      let logstate = this.props.shareme.logstate;
      if (logstate) {
        message.success('Welcome ' + values.userName);
        this.props.dispatch({
          type: 'shareme/e_jumpjump',
          payload: {
            path: '/home'
          }
        })
        return 0;
      }
      message.info('Please fill in the right  Password Or Username');
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
                        )}
          {/* <a className={styles['login-form-forgot']} href="">Forgot password</a> */}
          <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
                        Log in
          </Button>
                    Or <a
                      onClick={() => {
                        this.props.dispatch({
                          type: 'shareme/r_Changed_lorzc',
                          payload: { dlorzc: false }
                        })
                      }}
                    >register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
