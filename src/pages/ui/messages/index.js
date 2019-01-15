import React from 'react'

import { Card,Button,message } from 'antd'

import './index.less'

const success = () => {
  message.success('this is message Success')
}

const error = () => {
  message.success('this is message Error')
}

const warning = () => {
  message.success('this is message Warning')
}

class Message extends React.Component {
  render() {
    return (
      <div>
        <Card className='card-wrap' title='类型标签'>
          <Button onClick={success} type='primary'>success</Button>
          <Button onClick={error} type='primary'>success</Button>
          <Button onClick={warning} type='primary'>success</Button>
        </Card>

      </div>
    )
  }
}

export default Message