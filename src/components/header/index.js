import React from 'react'
import { Row,Col,Divider,Icon } from 'antd'
import Utlis from '../../utlis/utlis'

import './index.less'

class Header extends React.Component {
  render() {
    return(
      <div className='containerHeader'>
        <Row style={{height:'60px',lineHeight:'60px'}}>
          <Col span={4} style={{paddingLeft:'20px'}}>一级菜单/二级菜单/三级菜单</Col>
          <Col span={20} style={{textAlign:'right',paddingRight:'25px'}}>
            <Icon type="bell" />
            <Divider type="vertical" style={{margin:'0px 15px'}} />
            <span>
              <Icon type="setting" />
              用户名
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header