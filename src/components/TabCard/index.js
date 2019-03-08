import React from 'react'
import { Tabs } from 'antd'

import './index.less'

const TabPane = Tabs.TabPane;

class TabCard extends React.Component {
  render() {
    const { tabsArray  } = this.props
    return(
      <Tabs className='jg-tabs'>
        {tabsArray.map((item,index) => <TabPane tab={item.tabTitle} key={index}>
          <div className='tabContent'>
            {item.tabContent}
          </div>
        </TabPane>)}
      </Tabs>
    )
  }
}

export default TabCard