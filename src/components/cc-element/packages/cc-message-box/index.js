/*
 * @Description:
 * @Date: 2021-09-22 11:28:07
 * @LastEditTime: 2021-12-29 11:26:04
 * @FilePath: \cc-common-resource\packages\cc-message-box\index.js
 * @Author: Devin
 */
import { MessageBox } from 'element-ui';
import { configConfirm, configAlert } from "@/utils/cc-components-config/message-box";
export function basicConfirm(
  {
    title = configConfirm.title,
    message = configConfirm.message,
    confirmButtonText = configConfirm.confirmButtonText,
    cancelButtonText = configConfirm.cancelButtonText,
    type = configConfirm.type,
    center = configConfirm.center,
    confirmButtonClass = configConfirm.confirmButtonClass,
    cancelButtonClass = configConfirm.cancelButtonClass,
    closeOnClickModal = configConfirm.closeOnClickModal
  },
  callbackConfirm = () => { },
  callbackCancel = () => { }
) {
  return MessageBox.confirm(message, title, {
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    type: type,
    center: center,
    callback: action => {
      if (action === 'cancel') {
        callbackCancel();
      }
      if (action === 'confirm') {
        callbackConfirm();
      }
    },
    confirmButtonClass: confirmButtonClass,
    cancelButtonClass: cancelButtonClass,
    closeOnClickModal: closeOnClickModal
  });
}

export function basicAlert(
  {
    title = configAlert.title,
    message = configAlert.message,
    confirmButtonText = configAlert.confirmButtonText,
    showClose = configAlert.showClose,
    type = configAlert.type,
    center = configAlert.center,
    confirmButtonClass = configAlert.confirmButtonClass
  },
  callbackConfirm,
  callbackCancel
) {
  return MessageBox.alert(message, title, {
    confirmButtonText: confirmButtonText,
    type: type,
    center: center,
    callback: action => {
      if (action === 'cancel') {
        callbackCancel();
      }
      if (action === 'confirm') {
        callbackConfirm();
      }
    },
    confirmButtonClass: confirmButtonClass,
    showClose: showClose
  });
}
