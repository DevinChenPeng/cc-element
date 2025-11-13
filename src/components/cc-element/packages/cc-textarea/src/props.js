/*
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-12-29 14:22:56
 * @FilePath: \mds\src\components\packages\textarea\src\props.js
 * @Author: Devin
 */

import { config } from "@/utils/cc-components-config/textarea";
let props = {
  value: {
    type: [String, Number],
    default() {
      return ''
    }
  },
  autosize: {
    type: Object,
    default: () => {
      return config.autosize
    }
  },
  resize: {
    type: String,
    default: config.resize
  },
  maxlength: {
    type: Number,
    default: config.maxlength
  },
  openShowLimit: {
    type: Boolean,
    default: config.openShowLimit
  }
}

export default props
