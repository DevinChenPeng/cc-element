/*
 * @Description:
 * @Date: 2021-06-09 20:47:38
 * @LastEditTime: 2021-12-29 10:53:56
 * @FilePath: \mds\src\components\packages\cc-data-picker-range\src\props.js
 * @Author: Devin
 */
import { config } from "@/utils/cc-components-config/data-picker-range";
let props = {
  value: Array,
  valueFormat: {
    type: String,
    default: config.valueFormat
  },
  format: {
    type: String,
    default: config.format
  },
  size: {
    type: String,
    default: config.size
  },
  prefixIcon: {
    type: String,
    default: config.prefixIcon
  },
  startPlaceholder: {
    type: String,
    default: config.startPlaceholder
  },
  endPlaceholder: {
    type: String,
    default: config.endPlaceholder
  },
  rangeSeparator: {
    type: String,
    default: config.rangeSeparator
  },
  defaultTime: {
    type: Array,
    default: () => config.defaultTime
  },
  popperClass: {
    type: [String, Array, Object],
    default: config.popperClass
  },
  hiddenHeader: {
    type: Boolean,
    default: config.hiddenHeader
  }
};

export default props;
