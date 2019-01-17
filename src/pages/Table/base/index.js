import React from 'react'
import { Table } from 'antd'
import Axios from '../../../axios'

const columns = [{
  title:'userName',
  dataIndex:'userName',
  key:'userName'
},{
  title:'contactAddress',
  dataIndex:'contactAddress',
  key:'contactAddress'
},{
  title:'status',
  dataIndex:'status',
  key:'status'
},{
  title:'marriage',
  dataIndex:'marriage',
  key:'marriage'
},{
  title:'gender',
  dataIndex:'gender',
  key:'gender'
},{
  title:'hobby',
  dataIndex:'hobby',
  key:'hobby'
}]

class BaseTable extends React.Component {
  constructor() {
    super()
    this.state = {
      tableData:[]
    }
  }

  componentDidMount() {
    Axios.ajax({
      url:'/table/list'
    }).then((value) => {
      this.setState({
        tableData:value
      })
    })
  }

  render() {
    return(
      <Table dataSource={this.state.tableData} columns={columns} />
    )
  }
}

export default BaseTable