import axios from 'axios'
import { message } from 'antd'

class Axios {
  static ajax(options) {
    let BaseUrl = "https://www.easy-mock.com/mock/5c3ef9f68f0a5319857ada59/dancheapi"
    return new Promise((resolve,reject) => {
      axios({
        method:'get',
        url:options.url,
        baseURL:BaseUrl
      }).then((res) => {
        if(res.status == 200) {
          if(res.data.code == 0) {
            resolve(res.data.result.list)
          } else {
            message.error('后端数据错误')
          }
        } else {
          reject(res.data)
        }
      })
    })
  }
}

export default Axios