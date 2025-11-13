/*
 * @Description:
 * @Date: 2021-06-09 20:47:38
 * @LastEditTime: 2021-12-29 11:50:06
 * @FilePath: \mds\src\components\packages\select\src\props.js
 * @Author: Devin
 */
import { config } from '@/utils/cc-components-config/select'
let props = {
  options: Array, // option选项列表，如此项有值，则直接用此选项中的数据，不会进行数据请求去获取数据。即优先级options>url。默认为空，非必传。
  url: {
    // 请求下拉框URL地址，默认数据字典请求接口地址，非必传。
    type: String,
    default: config.url
  },
  params: Object, // 接口其余请求参数，非必传。
  dataHandler: Function, //接口参数的处理函数
  listField: {
    type: String,
    default: config.listField
  },
  size: { type: String, default: config.size },
  clearable: {
    type: Boolean,
    default: config.clearable
  },
  styles: {
    type: [String, Object, Array],
    default: config.styles
  },
  placeholder: {
    // 选择框提示文字，默认‘请选择’，非必传。
    type: String,
    default: config.placeholder
  },
  optionKeys: {
    type: Object,
    default: () => {
      return config.optionKeys;
    }
  }, // 指定禁用的vaule和label的
  disableValues: {
    type: Array,
    default: () => {
      return config.disableValues;
    }
  },
  // 禁止选择的属性值，非必传。
  disableKey: String,
  showValues: {
    type: Array,
    default: () => {
      return config.showValues;
    }
  },
  // 隐藏选择的属性值，非必传。
  showKey: String,
  isLoading: {
    type: Boolean,
    default: config.isLoading
  },
  dataFilterHandler: Function,
  showOptionSlot: Boolean
};

export default props;
