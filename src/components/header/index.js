import React from 'react'
import { Row,Col } from 'antd'
import Utlis from '../../utlis/utlis'

import './index.less'

class Header extends React.Component {
  constructor() {
    super()
    this.state ={
      time:'1'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.updateTime()
    },1000)
  }

  updateTime = () =>  {
    this.setState({
      time:Utlis.formateDate()
    })
  }

  render() {
    return(
      <div className='containerHeader'>
        <Row className='top'>
          <Col span={24} className='topRight'>欢迎河畔一角   退出</Col>
        </Row>
        <Row className='bottom'>
          <div className='triangle'></div>
          <Col span={4}>首页</Col>
          <Col span={20} className='bottomRight'>
            <div>{this.state.time}</div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header