const Utlis = {
  formateDate() {
    var time =  new Date()
    var year = time.getFullYear()
    var month = time.getMonth() + 1
    var date = time.getDate()
    var hours = time.getHours()
    var minutes = time.getMinutes()
    var  second = time.getSeconds()
    return `${year}/${month}/${date}/${hours}:${minutes}:${second}`
  }
}

export default Utlis