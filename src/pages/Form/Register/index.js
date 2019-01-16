import React from 'react'
import moment from 'moment'
import { Form,Card,Input,Icon,Radio,InputNumber,Select,Switch,DatePicker,TimePicker,Upload,Checkbox,Button,message } from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const { TextArea } = Input

class FormRegister extends React.Component {

  handleSubmit = (e) => {
    let userInfo = this.props.form.getFieldsValue()
    console.log(userInfo)
    this.props.form.validateFields((err, values) => {
      if(err) {
        message.error(`${userInfo.userName}  请完善你的信息`)
      }
      if (!err) {
        message.success(`${userInfo.userName},你已经通过测试`)
      }
    });
  }

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    value:'female',
  };

  RadioOnChange = (e) => {
    console.log(e.target.value)
    this.setState({
      value:e.target.value
    })
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    return(
      <Card title='注册表单' className='card-wrap'>
        <Form layout='horizontal' style={{width:800}} onSubmit={this.handleSubmit}>
          <FormItem label='userName' {...formItemLayout}>
            {
              getFieldDecorator('userName',{
                initialValue:'',
                rules:[{
                  required:true,
                  message:'please input your userName'
                }]
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="please input your userName" />
              )
            }
          </FormItem>
          <FormItem label='passWord' {...formItemLayout}>
            {
              getFieldDecorator('passWord',{
                initialValue:'',
                rules:[{
                  required:true,
                  message:'please input your password'
                }]
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="please input your passWord" />
              )
            }
          </FormItem>
          <FormItem label='gender' {...formItemLayout}>
            {
              getFieldDecorator('gender',{
                initialValue:'male',
              })(
                <RadioGroup onChange={this.RadioOnChange} value={this.state.value}>
                  <Radio value={'male'}>male</Radio>
                  <Radio value={'female'}>female</Radio>
                </RadioGroup>
              )
            }
          </FormItem>
          <FormItem label='age' {...formItemLayout}>
            {
              getFieldDecorator('age',{
                initialValue:18,
              })(
                <InputNumber />
              )
            }
          </FormItem>
          <FormItem label='status' {...formItemLayout}>
            {
              getFieldDecorator('status',{
                initialValue:'咸鱼'
              })(
                <Select style={{width:200}}>
                  <Option value='咸鱼'>咸鱼</Option>
                  <Option value='高富帅'>高富帅</Option>
                  <Option value='白富美'>白富美</Option>
                  <Option value='富二代'>富二代</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label='hobby' {...formItemLayout}>
            {
              getFieldDecorator('hobby',{
                initialValue:'健身'
              })(
                <Select
                  mode="multiple"
                  defaultValue={["健身","体育"]}
                  >
                    <Option value='摄影'>摄影</Option>
                    <Option value='音乐'>音乐</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label='marriage' {...formItemLayout}>
            {
              getFieldDecorator('marriage',{
                initialValue:'no'
              })(
                <Switch defaultChecked />
              )
            }
          </FormItem>
          <FormItem label='birthday' {...formItemLayout}>
            {
              getFieldDecorator('birthday',{
                initialValue:moment('2018-01-01')
              })(
                <DatePicker />
              )
            }
          </FormItem>
          <FormItem label='contactAddress' {...formItemLayout}>
            {
              getFieldDecorator('contactAddress',{
                initialValue:'北京市朝阳区'
              })(
                <TextArea />
              )
            }
          </FormItem>
          <FormItem label='WakeUpTime' {...formItemLayout}>
            {
              getFieldDecorator('WakeUpTime',{
                initialValue:''
              })(
                <TimePicker />
              )
            }
          </FormItem>
          <FormItem  {...formItemLayout}>
            {
              getFieldDecorator('WakeUpTime',{
                initialValue:''
              })(
                <div style={{marginLeft:170}}>
                  <Checkbox />
                  <span>我已经阅读过<a href='/'>慕课协议</a></span>
                </div>
              )
            }
          </FormItem>
          <FormItem  {...formItemLayout} style={{marginLeft:180}}>
            <Button type='primary' htmlType="submit" block>register</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }
}



const WrappedFormRegister = Form.create({ name:'Form_Register' })(FormRegister)

export default WrappedFormRegister