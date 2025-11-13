/*
 * @Description:
 * @Date: 2021-09-29 13:35:36
 * @LastEditTime: 2021-12-29 14:02:59
 * @FilePath: \mds\src\components\packages\cc-sticky\src\props.js
 * @Author: Devin
 */
import { config } from '@/utils/cc-components-config/sticky'
let props = {
  stickyTop: {
    type: Number,
    default: config.stickyTop
  },
  scrollTop: {
    type: Number,
    default: config.scrollTop
  },
  zIndex: {
    type: Number,
    default: config.zIndex
  },
  className: {
    type: String,
    default: config.className
  },
  target: String,
  right: {
    type: Number,
    default: config.right
  },
  left: Number
};

export default props;
