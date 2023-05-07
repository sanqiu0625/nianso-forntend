import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8101/api/",
  // baseURL: "http://www.jiaying.asia:8101/api/",
  timeout: 10000,
  headers: {},
});
export default instance;
// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const data = response.data;
    if (data.code === 0) {
      return data.data;
    }
    console.error("request error ", data);
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
