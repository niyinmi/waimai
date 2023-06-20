import axios from "axios";
export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise = null
    if (type == 'GET') {
      let dataStr = ''
      Object.keys(data).forEach((key) => {
        dataStr += `${key}=${data[key]}&`
      })
      //非空，拼接url，删除末尾的&
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.length - 1)
        url = `${url}?${dataStr}`
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}