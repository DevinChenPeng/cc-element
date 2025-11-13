/*
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-12-29 16:03:28
 * @FilePath: \cc-button\src\props.js
 * @Author: Devin
 */

import { config } from "@/utils/cc-components-config/button";

let props = {
  size: {
    type: String,
    default: config.size
  },
  classArray: {
    type: Array,
    default: () => {
      return config.classArray
    }
  },
  type: String,
  textAdd: { // 文本模式的添加，文本自定义
    type: [Number, String],
    default: config.textAdd

  },
  btnType: Boolean
}

export default props
