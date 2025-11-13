/*
 * @Description:
 * @Date: 2021-09-18 14:45:13
 * @LastEditTime: 2021-09-29 17:40:27
 * @FilePath: \mds\src\api\public.js
 * @Author: Devin
 */
import axios from '@/utils/axios/index';

export function getSelectList({ data, url, isLoading = true }) {
  return axios({
    url: url,
    method: 'get',
    data,
    isLoading: isLoading
  });
}

export function getTableList({ data, url, isLoading = true }) {
  return axios({
    url: url,
    method: 'get',
    data,
    isLoading: isLoading
  });
}

export function changeSwitchState({ data, url, isLoading, method }) {
  return axios({
    url: url,
    method: method,
    data,
    isLoading: isLoading
  });
}
