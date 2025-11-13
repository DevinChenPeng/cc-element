/*
 * @Description:
 * @Date: 2021-10-14 17:31:54
 * @LastEditTime: 2021-12-29 11:00:02
 * @FilePath: \web-template\src\components\packages\cc-dialog\src\props.js
 * @Author: Devin
 */
import { config } from "@/utils/cc-components-config/dialog";
export default {
  title: {
    type: String,
    default: config.title
  },
  width: {
    type: String,
    default: config.width
  },
  visible: {
    type: Boolean,
    default: config.visible
  },

  closeOnClickModal: {
    type: Boolean,
    default: config.closeOnClickModal
  },
  showFooter: {
    type: Boolean,
    default: config.showFooter
  },
  stopCloseFun: Function,
  cancelBtnText: {
    type: String,
    default: config.cancelBtnText
  },
  confirmBtnText: {
    type: String,
    default: config.confirmBtnText
  },
  dialogDrag: {
    type: Boolean,
    default: config.dialogDrag
  },
  disabledCancel: Boolean,
  disabledConfirm: Boolean,
  showCancel: {
    type: Boolean, default: config.showCancel
  },
  showConfirm: {
    type: Boolean, default: config.showConfirm
  }
};