import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Login = () => {
  const [message, setMessage] = useState(null);
  const handleOnFinish = async (values) => {
    const res = await axios({
      method: 'post',
      url: '/api/login',
      data: values,
    }).then((res) => res.data);
    const token = res.token;

    const userInfo = jwt.decode(token);
    setMessage(
      `Welcome ${userInfo.username}. you are ${
        userInfo.admin ? 'admin' : 'not admin'
      }.`,
    );
  };

  return (
    <>
      {message}
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={handleOnFinish}>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}>
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}>
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href=''>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'>
            Log in
          </Button>
          Or <a href=''>register now!</a>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
