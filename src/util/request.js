import axios from 'axios'

// let promiseList = {}

axios.defaults.baseURL = 'http://118.24.155.105/api/'
axios.defaults.timeout = 10000
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  "Accept": "application/json",

  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE1MjgzNzQ2NjF9.0Frf5AMOj92lIMkaCDOPvbJD_Z1o_S37cVdJcWqdQwE'
}

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // 发起请求时,取消当前正在进行的相同请求
    // if (promiseList[config.url]) { 
    //   promiseList[config.url]('操作取消')
    //   promiseList[config.url] = cancel
    // } else {
    //   promiseList[config.url] = cancel
    // }
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

// 响应拦截
axios.interceptors.response.use(
  // 返回响应时做一些处理
  function (response) {
    return response
  },
  function (err) {
    return Promise.resolve(err.response)
  }
)

export default function request(opts) { 
  const method = opts.method
  const defaultOpts = {
    method,
    url: opts.url,
    // headers: method === 'get' ? { 
    //   "Content-Type": "application/json; charset=UTF-8"
    // } : {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    params: opts.data,
    data: opts.data,
  }

  if (method === 'GET') { 
    delete defaultOpts.data
  } else { 
    delete defaultOpts.params
  }

  return new Promise(function (resolve, reject) {
    axios(defaultOpts)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}