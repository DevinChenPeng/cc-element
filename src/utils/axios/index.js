/*
 * @Description:
 * @Date: 2021-09-18 14:23:42
 * @LastEditTime: 2022-04-06 10:51:36
 * @FilePath: \mds\src\utils\axios\index.js
 * @Author: Devin
 */
import axios from 'axios';
import requestError from './requestError';
import responseBusinessError from './responseBusinessError';
import responseError from './responseError';

// 1.创建axios实例
const service = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  // baseURL: window.__POWERED_BY_QIANKUN__ ? 'http://localhost:8010' : 'http://localhost:8080',

  withCredentials: true, // 表示跨域请求时是否需要使用凭证
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 5000
});

// 2.添加请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    console.log(config);
    return config;
  },
  error => {
    // 对请求错误做些什么
    requestError(error);
    return Promise.reject(error);
  }
);

// 3.添加响应拦截器
service.interceptors.response.use(
  /**
   * 如果您想获取http信息，如标题或状态
   * 请直接返回 response
   */

  /**
   * 通过自定义代码确定请求状态
   * 这里只是一个例子
   * 您还可以通过HTTP状态代码来判断状态
   */
  response => {
    const responseData = response.data;

    // 如果自定义代码不是0，则判断为错误。
    if (responseData.code !== 0) {
      // 这个函数是一些其他的错误码，在这里处理逻辑
      return responseBusinessError(responseData);
    } else {
      return responseData;
    }
  },
  error => {
    // 处理不是业务错误的请求错误
    responseError(error);
    return Promise.reject(error);
  }
);

export default service;