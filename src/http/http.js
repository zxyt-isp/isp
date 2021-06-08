/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'


// axios 配置
// axios.defaults.timeout = 10000
axios.defaults.baseURL = window.zxytUrl.baseURL
// axios.defaults.baseURL = 'http://192.168.1.109:9068';
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if ( sessionStorage.getItem("token") ) {
      config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           // 401 清除token信息并跳转到登录页面
//           store.commit(types.LOGOUT)
          
//           // 只有在当前路由不是登录页面才跳转
//           router.currentRoute.path !== 'login' &&
//             router.replace({
//               path: 'login',
//               query: { redirect: router.currentRoute.path },
//             })
//       }
//     }
//     // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//     return Promise.reject(error.response.data)
//   },
// )

export default axios