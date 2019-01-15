import React from 'react' 
import { Card,Button,Icon } from 'antd'

import './index.less'

class Buttons extends React.Component {
  constructor() {
    super()
    this.state= {
      iconLoading:false,
    }
  }

  enterIconLoading = () => {
    this.setState({
      iconLoading:!this.state.iconLoading,
    })
  }

  render() {
    return (
      <div>
        <Card title='基础按钮'>
          <Button type='primary'>primary</Button>
          <Button>Default</Button>
          <Button type='dashed'>Dashed</Button>
          <Button type='danger'>Danger</Button>
        </Card>      
        <Card title='图形按钮'>
          <Button type='primary' shape='circle' icon='search'></Button>
          <Button type='primary' icon='search'>Search</Button>
          <Button shape='circle' icon='search'></Button>
          <Button icon='search'>Search</Button>         
        </Card>
        <Card title='按钮尺寸'>
          <Button size='large'>Large</Button>
          <Button size='default'>Default</Button>
          <Button size='small'>Small</Button>
          <Button icon='download'></Button>
          <Button icon='download' type='primary'>Download</Button>
          <Button icon='left' type='primary'>Backward</Button>
          <Button type='primary'>
            Forward
            <Icon type='right'></Icon>
          </Button>
        </Card>
        <Card title='loading按钮'>
          <Button icon='poweroff' loading={this.state.iconLoading} onClick={this.enterIconLoading} type='primary'>Loading</Button>
        </Card>
        <Card title='block按钮'>
          <Button type='primary' block>Block</Button>
          <Button type='danger' block>danger</Button>
        </Card>
      </div>
    )
  }
} 

export default Buttons