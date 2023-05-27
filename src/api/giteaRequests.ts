//==================== axios请求 Gitea后端接口 ====================//
import axios from 'axios';

const giteaRequests = axios.create({
  // 请求地址
  baseURL: import.meta.env.VITE_GITEA_API_URL,
  // 设置接口超时时间, 1.5s
  timeout: 1500,
});

// 请求拦截器
giteaRequests.interceptors.request.use(
  (config: any) => {
    config.headers = {
      Authorization: 'token f9bf37b17f683baa5a331bd691bf62ae000e865c',
      accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8', // 传参方式json
    };
    return config;
  },
  (error: any) => {
    window.$message.warning('请求拦截异常,请稍后再试!');
    return Promise.reject(error);
  }
);

//http response 拦截器, 会处理所有的错误响应(code是400开头)
// giteaRequests.interceptors.response.use(
//   (res: any) => {
//     // 响应结果的状态(code的前三位), 200正常 400异常
//     const status = String(res.data.code).substring(0, 3)
//     if (status !== '200') {
//       // 响应异常, 返回异常信息
//       return Promise.reject(new Error(res.data.message))
//     }
//     // 返回的就是自定义的ResponseResult
//     return res.data
//   },
//   (error: any) => {
//     return Promise.reject(new Error('服务器异常,请稍后再试!'))
//   }
// )

export default giteaRequests;
