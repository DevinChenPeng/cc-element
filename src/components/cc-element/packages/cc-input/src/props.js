/*
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-12-29 11:18:09
 * @FilePath: \mds\src\components\packages\input\src\props.js
 * @Author: Devin
 */
import { config } from "@/utils/cc-components-config/input";
let props = {
  maxlength: [String, Number],
  size: {
    type: String,
    default: config.size,
    validator: value => {
      const methodTypes = ['large', 'medium', 'small', 'mini'];
      const valid = methodTypes.indexOf(value) !== -1;
      if (!valid) {
        throw new Error(`size must be one of large / medium / small / mini`);
      }
      return valid;
    }
  },
  clearable: {
    type: Boolean,
    default: config.clearable
  },
  openShowLimit: {
    type: Boolean,
    default: config.openShowLimit
  },
  placeholder: String
};

export default props;
