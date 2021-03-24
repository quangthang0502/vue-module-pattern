import { API_URL } from '@/config'
import axios from 'axios'
import Cookies from 'js-cookie'
import { forEach } from 'lodash'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: API_URL,
  withCredentials: false
})

request.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'

request.defaults.headers.common['Authorization'] = Cookies.get('access_token') !== 'undefined' ? 'Bearer ' + Cookies.get('access_token') : ''

request.interceptors.request.use(request => {
  return request
})

request.interceptors.response.use(
  response => {
    if (response.data.code === 401) {
      return Promise.reject(response.data)
    } else if (response.data.code !== 200) {
      forEach(response.data.errors, value => {
        Message.error(value)
      })
      return Promise.reject(response.data)
    }
    return response
  },
  error => {
    if (!error.response || error.response.status >= 500) {
      // error.message = 'Không thể kết nối đến máy chủ'
      error.message = 'Cannot connect to server'
      Message.error(error.message)
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default request
