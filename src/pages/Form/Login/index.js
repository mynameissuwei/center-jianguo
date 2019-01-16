import React from 'react'
import {
  Form, Icon, Input, Button, Checkbox,Card,message
} from 'antd';

import './index.less'

const FormItem = Form.Item

class FormLogin extends React.Component {
  handleSubmit = (e) => {
    let userInfo = this.props.form.getFieldsValue()
    console.log(userInfo)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName},你已经通过测试`)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return(
      <div>
        <Card title='登陆行内表单' className='card-wrap'>
          <Form layout='inline' onSubmit={this.handleSubmit}>
            <FormItem>
              {
                getFieldDecorator('userName',{
                  initialValue:'Username',
                  rules:[{ required:true,message:'Please input your Password'}]
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )
              }
            </FormItem>
            <FormItem>
              <Button type='primary'>submit</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title='登陆水平表单' className='card-wrap'>
          <Form layout='horizontal' style={{width:300}} onSubmit={this.handleSubmit}>
            <FormItem>
            {
                getFieldDecorator('userName',{
                  initialValue:'Username',
                  rules:[{ required:true,message:'Please input your Password'}]
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )
              }
            </FormItem>
            <FormItem>
            </FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

const WrappedFormLogin = Form.create({ name:'Form_Login' })(FormLogin)

export default WrappedFormLogin
