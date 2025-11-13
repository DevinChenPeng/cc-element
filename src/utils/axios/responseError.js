/*
 * @Description:
 * @Date: 2021-09-18 14:33:29
 * @LastEditTime: 2021-09-18 14:42:26
 * @FilePath: \mds\src\utils\axios\responseError.js
 * @Author: Devin
 */
import { Message } from 'element-ui';
function responseError(error) {
  console.log('err' + error);
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  });
}
export default responseError;
