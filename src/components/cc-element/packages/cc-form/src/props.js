/*
 * @Description:
 * @Date: 2021-06-18 15:18:54
 * @LastEditTime: 2021-12-29 11:07:59
 * @FilePath: \cc-common-resource\packages\cc-form\src\props.js
 * @Author: Devin
 */
import { config } from "@/utils/cc-components-config/form";
export const formProps = {
  size: {
    type: String,
    default: config.size,
    validator: sizeValidator
  },
  labelPosition: {
    type: String,
    default: config.labelPosition
  },
  gutter: {
    type: Number,
    default:config.gutter
  },
  itemWidth: {
    type: String,
    default: config.itemWidth
  },
  showResetBtn: {
    type: Boolean,
    default: config.showResetBtn
  },
  submitHandler: Function,
  submitErrorHandle: Function,
  backHandler: Function,
  showCancelButton: {
    type: Boolean,
    default: config.showCancelButton
  },
  showSubmitButton: {
    type: Boolean,
    default: config.showSubmitButton
  },
  submitLoading: {
    type: Boolean,
    default: config.submitLoading
  },
  submitBtnText: {
    type: String,
    default: config.submitBtnText
  },
  cancelBtnText: {
    type: String,
    default: config.cancelBtnText
  },

  resetBtnText: {
    type: String,
    default: config.resetBtnText
  },
  resetBtnCallback: Function,
  forms: {
    type: Object,
    required: config.forms.required
  }
}

function sizeValidator(value) {
  const methodTypes = ['large', 'small', 'mini'];
  const valid = methodTypes.indexOf(value.toLowerCase()) !== -1 || value === ''
  if (!valid) {
    throw new Error(`Size must be one of ['large', 'small', 'mini']`)
  }
  return valid
}