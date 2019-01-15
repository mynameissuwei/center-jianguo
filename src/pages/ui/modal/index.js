import React from 'react'
import { Card,Modal,Button } from 'antd'

import '../index.less'

class ModalPage extends React.Component {
  state = {
    visible:false,
    visible1:false,
    visible2:false,
    visible3:false
  }

  showModal = () => {
    this.setState({
      visible:true,
    })
  }

  showModal1 = () => {
    this.setState({
      visible1:true,
    })
  }

  showModal2 = () => {
    this.setState({
      visible2:true,
    })
  }

  showModal3 = () => {
    this.setState({
      visible3:true,
    })
  }

  handleOk = () => {
    this.setState({
      visible:false,
      visible1:false,
      visible2:false,
      visible3:false
    })
  }

  handleCancel = () => {
    this.setState({
      visible:false,
      visible1:false,
      visible2:false,
      visible3:false
    })
  }

  render() {
    return (
      <div>
        <Card title='对话框' className='card-wrap'>
          <Button type='primary' onClick={this.showModal}>open Modal!</Button>
          <Modal
            title='title'
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>some content....</p>
            <p>some content....</p>
            <p>some content....</p>
          </Modal>
        </Card>
        <Card title='自定义页脚按钮属性' className='card-wrap'>
          <Button type='primary' onClick={this.showModal1}>Footer</Button>
          <Modal
            title='title'
            visible={this.state.visible1}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            okButtonProps={{ disabled:true }}
            cancelButtonProps={{ disabled:true }}
          >
            <p>some content....</p>
            <p>some content....</p>
            <p>some content....</p>
          </Modal>
        </Card>
        <Card title='自定义位置' className='card-wrap'>
          <Button type='primary' onClick={this.showModal2}>Center</Button>
          <Button type='primary' onClick={this.showModal3}>Top</Button>
          <Modal
            title='title'
            centered
            visible={this.state.visible2}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>some content....</p>
            <p>some content....</p>
            <p>some content....</p>
          </Modal>
          <Modal
            title='title'
            visible={this.state.visible3}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            style={{ top:20 }}
          >
            <p>some content....</p>
            <p>some content....</p>
            <p>some content....</p>
          </Modal>
        </Card>
      </div>
    )
  }
}

export default ModalPage