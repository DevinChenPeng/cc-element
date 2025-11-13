/*
 * @Description:
 * @Date: 2021-06-17 10:34:26
 * @LastEditTime: 2021-12-29 11:42:26
 * @FilePath: \web-template\src\utils\request\resetMessage.js
 * @Author: Devin
 */
/**重置message，防止重复点击重复弹出message弹框 */

import { Message } from "element-ui";
let messageParams = null;
export const ccMessage = {
  success: (message, options) => {
    if (messageParams) {
      messageParams.close();
      messageParams = null;
    }
    messageParams = Message({
      message: message,
      type: 'success',
      ...options
    });
  },
  error: (message, options) => {
    if (messageParams) {
      messageParams.close();
      messageParams = null;
    }
    messageParams = Message({
      message: message,
      type: 'error',
      ...options
    });
  },
  warning: (message, options) => {
    if (messageParams) {
      messageParams.close();
      messageParams = null;
    }
    messageParams = Message({
      message: message,
      type: 'warning',
      ...options
    });
  },
  info: (message, options) => {
    if (messageParams) {
      messageParams.close();
      messageParams = null;
    }
    messageParams = Message({
      message: message,
      type: 'info',
      ...options
    });
  }
};
