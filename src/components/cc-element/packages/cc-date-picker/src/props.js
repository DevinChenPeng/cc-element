
/*
 * @Description:
 * @Date: 2021-06-09 20:47:38
 * @LastEditTime: 2021-12-29 10:55:16
 * @FilePath: \cc-common-resource\packages\cc-date-picker\src\props.js
 * @Author: Devin
 */
import { config } from "@/utils/cc-components-config/date-picker";
import dayjs from 'dayjs';
let props = {
  value: String,
  valueFormat: {
    type: String,
    default: config.valueFormat,
  },
  size: {
    type: String,
    default: config.size
  },
  prefixIcon: {
    type: String,
    default: config.prefixIcon,
  },
  type: {
    type: String,
    default: config.type
  },
  disabledTimeRange: {
    type: Object,
    validator(value) {
      if (!value.type) {
        return true
      }
      const types = ['before', 'after', 'range'];
      const validType = types.indexOf(value.type) !== -1
      if (!validType) {
        throw new Error(`Invalid type of '${value.type}', please set one type of 'before', 'range' or 'after'.`)
      }
      if (value.type === 'range') {
        if (value.endValue && !dayjs(value.endValue, value.dateFormat, true).isValid()) {
          throw new Error(`EndValue satisfy the time format.`);
        }
      }
      return validType
    },
    default: () => {
      return {
        type: config.disabledTimeRange
      }
    }
  },
  pickerOptions: Object,
  placeholder: String
}

export default props
