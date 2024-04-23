import axios from "axios";
import { showToast } from 'vant'

let baseURL = "/api"
const service = axios.create({
    baseURL,
    timeout: 10000
})
// 发起请求之前的拦截器
service.interceptors.request.use(
    (config: any) => {
        const token = window.localStorage.getItem('token')
        if(token){
            config.headers = {
                'x-access-token': token
            }
        }
        return config
    },
    error => Promise.reject(error)
)
// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if(response.status !==200) {
            return Promise.reject(new Error(res.success || 'Error'))
        }else{
            if(res.code == 200){
                return res.result || res.data
            }else{
              showToast(res.success)
            }   
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export default service
