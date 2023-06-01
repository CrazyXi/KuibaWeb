import axios from 'axios'

// create an axios instance
const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

service.interceptors.response.use( 
    response => { 
      const res=response.data
      return res
    }
)

export function get(url,query){
    return service({
      url: url,
      method: 'get',
      params:query
  })
}
export function post(url,data){
  return service({
      url: url,
      method: 'post',
      data
  })
}
export function put(url,data){
  return service({
      url: url,
      method: 'put',
      data
  })
}
export function del(url,data){
  return service({
      url: url,
      method: 'delete',
      params:data
  })
}
export default service
