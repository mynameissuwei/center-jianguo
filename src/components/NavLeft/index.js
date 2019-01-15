import React from 'react'
import Menuconfig from '../../config/meun.config'
import { Link } from 'react-router-dom'
import { Menu,Icon } from 'antd'

import './style.less'



const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
  
  constructor() {
    super()
  }

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (<Menu.Item key={item.key}>
                <Link to={item.key}>{item.title}</Link>
              </Menu.Item>)
    })
  }

  componentDidMount() {
    const menuTreeNode = this.renderMenu(Menuconfig) 
    this.setState({
      menuTreeNode
    })
  }

  render() {
    return (
      <div className='navLeft'>
        <div className='logo'>
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>Imooc Ms</h1>
        </div>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          theme="dark"

        >
          {this.state.menuTreeNode} 
        </Menu>
      </div>

    );
  }
}


export default NavLeft