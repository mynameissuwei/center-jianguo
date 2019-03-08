import React from 'react'
import TabCard from '../../components/TabCard'
import { Table } from 'antd'

class Category extends React.Component {
  render() {
    const tabContent = [{
      tabTitle:'食材类别',
      tabContent:<Table />
    },{
      tabTitle:'辅料类别',
      tabContent:<Table />
    }]
    return(
      <div>
        <TabCard tabsArray={tabContent}></TabCard>
      </div>
    )
  }
}

export default Category