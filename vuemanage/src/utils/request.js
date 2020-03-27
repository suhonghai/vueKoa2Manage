/* eslint-disable no-console */
import axios from 'axios'

// 创建axios实例无loading
const service = axios.create({
    // api的base_url
    baseURL: process.env.VUE_APP_BASE_API,
    // 请求超时时间
    timeout: 20000
})

axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.timeout = 20000

axios.defaults.headers = {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

// request拦截器
axios.interceptors.request.use(config => {
    // Toast.loading({
    //     message: '加载中...',
    //     forbidClick: true,
    //     loadingType: 'spinner',
    //     duration: '10000'
    // });
    return config
    // eslint-disable-next-line no-unreachable
}, error => {
    // Toast.clear()
    // Toast.fail(error.message);
    // eslint-disable-next-line no-console
    console.log('...request,error')
    // Do something with request error
    Promise.reject(error)
})
// noloading
service.interceptors.request.use(config => {
    return config
    // eslint-disable-next-line no-unreachable
}, error => {
    // Toast.clear()
    // Toast.fail(error.message);
    // eslint-disable-next-line no-console
    console.log('...request,error')
    // Do something with request error
    Promise.reject(error)
})
// respone拦截器
axios.interceptors.response.use(
    response => {
        // Toast.clear()
        console.log('come in response')
        return response
    },
    error => {
        console.log(error)
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求'
                    break;
                case 401:
                    error.message = '未授权，请重新登录'
                    break;
                case 403:
                    error.message = '拒绝访问'
                    break;
                case 404:
                    error.message = '请求错误,未找到该资源'
                    break;
                case 405:
                    error.message = '请求方法未允许'
                    break;
                case 408:
                    error.message = '请求超时'
                    break;
                case 500:
                    error.message = '服务器端出错'
                    break;
                case 501:
                    error.message = '网络未实现'
                    break;
                case 502:
                    error.message = '网络错误'
                    break;
                case 503:
                    error.message = '服务不可用'
                    break;
                case 504:
                    error.message = '网络超时'
                    break;
                case 505:
                    error.message = 'http版本不支持该请求'
                    break;
                default:
                    error.message = `连接错误${error.response.status}`
            }
        } else {
            error.message = "连接到服务器失败"
        }
        console.log(error.message)
        return Promise.reject(error)
    })

export default {
    //get请求
    get (url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
            }).then(res => {
                if (res.data.result == 'ok') resolve(res.data)
                else reject({
                    message: res.data.message
                })
            }).catch(error => {
                reject(error)
            })
        })
    },
    //post请求
    post (url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: param,
            }).then(res => {
                if (res.data.result == 'ok') resolve(res.data)
                else reject({
                    message: res.data.message
                })
            }).catch(error => {
                reject(error)
            })
        })
    },
    //noloading get
    unloading_get (url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url,
                params: param,
            }).then(res => {
                if (res.data.result == 'ok') resolve(res.data)
                else reject({
                    message: res.data.message
                })
            }).catch(error => {
                reject(error)
            })
        })
    },
    unloading_post (url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: 'post',
                url,
                data: param,
            }).then(res => {
                if (res.data.result == 'ok') resolve(res.data)
                else reject({
                    message: res.data.message
                })
            }).catch(error => {
                reject(error)
            })
        })
    },
}
// export default service