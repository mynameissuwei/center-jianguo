import React from 'react'
import { Card,Spin,Alert,Switch } from 'antd'

import '../index.less'

class Rotate extends React.Component {
  state = {
    loading:false,
  }
  handleToggle = () => {
    this.setState({
      loading:!this.state.loading,
    })
  }
  render() {
    return (
      <div>
        <Card title='基本用法' className='card-wrap'>
          <Spin/>
        </Card>
        <Card title='各种大小' className='card-wrap'>
          <Spin size='small' style={{marginRight:20}}/>
          <Spin size='default' style={{marginRight:20}}/>
          <Spin size='large' />
        </Card>
        <Card title='卡片加载中' className='card-wrap'>
          <Spin tip='loading' spinning={this.state.loading}>
            <Alert
              message='xiaosu'
              description='xiaosu is a handsome boy'
              type="info"
              />
          </Spin>
          <div style={{marginTop:30}}>
            Loading State:<Switch checked={this.state.loading} onChange={this.handleToggle} style={{marginLeft:20}}/>
          </div>
        </Card>
      </div>
    )
  }
}

export default Rotate