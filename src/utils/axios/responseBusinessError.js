/*
 * @Description:
 * @Date: 2021-09-18 14:33:29
 * @LastEditTime: 2021-09-18 14:42:21
 * @FilePath: \mds\src\utils\axios\responseBusinessError.js
 * @Author: Devin
 */
import { MessageBox, Message } from 'element-ui';
import store from '@/store';
function responseBusinessError(responseData) {
  if (responseData.code === 50008 || responseData.code === 50012 || responseData.code === 50014) {
    // 去重新登录
    MessageBox.confirm('您已注销，您可以取消停留在此页面，或重新登录', '确认注销', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      console.log(responseData);
    });
  }
  return Promise.reject(new Error(responseData.message || 'Error'));
}
export default responseBusinessError