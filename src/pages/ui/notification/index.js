import React from 'react'

import { Card,Button,notification } from 'antd'

import './index.less'

const openNotification = () => {
  notification.open({
    message:'xiaosu',
    description:'xiaosu is a handsome boy',
    onClick:() => {
      console.log('this is ok')
    }
  })
}

class Notificate extends React.Component {
  render() {
    return (
      <Card title='基本' className='card-wrap'>
        <Button onClick={openNotification} type='primary'>click me</Button>
      </Card>
    )
  }
}

export default Notificate