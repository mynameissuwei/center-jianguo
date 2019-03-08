import React from 'react';
import { Table, Tag,  Button, Radio, Badge, Divider } from 'antd';
import WrappedOrderForm from './CuisineTableOneFilter';

import './index.less'


const tabColumns = [
  {
    title: '名称',
    dataIndex: 'purchase',
    key: 'purchase',
  },
  {
    title: '类别',
    dataIndex: 'ResultSource',
    key: 'ResultSource',
    render(ResultSource) {
      let orderArray = {
        '0': '菜单生成',
        '1': '辅料超市',
        '2': '新建',
      }
      return <Tag color="magenta">
        {/* {orderArray[ResultSource]} */}
        ResultSource
      </Tag>
    }
  },
  {
    title: '别名',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '食材明细',
    dataIndex: 'subtract',
    key: 'subtract',
  },
  {
    title: '操作',
    dataIndex: 'status',
    key: 'status',
    render(status) {
      return status == 1 ? <span><Badge status="warning" />未下单</span> : <span>已下单</span>
    }
  },
  {
    title: '操作',
    dataIndex: 'status',
    key: 'Status',
    render(status) {
      return status == 1 ? <div className='opertion'>
        <a className='orders' href='/details'>下单</a> <Divider type="vertical" /> <a className='delete'>删除</a>
      </div> : <a className='acceptance'>配送验收情况</a>
    }
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class FoodCategory extends React.Component {

  render() {
    return (
      <div className='orderTable'>
        <WrappedOrderForm />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Button type='primary' icon="plus">新建</Button>
            <Button style={{marginLeft:10}}>删除</Button>
          </div>
        </div>
        <div style={{ marginTop: 30 }}>
          <Table columns={tabColumns} rowSelection={rowSelection} />
        </div>
      </div>
    )
  }
}

export default FoodCategory