/*
 * @Description:
 * @Date: 2021-09-29 13:39:05
 * @LastEditTime: 2021-12-29 14:08:43
 * @FilePath: \mds\src\components\packages\cc-switch\src\props.js
 * @Author: Devin
 */
import { config } from "@/utils/cc-components-config/switch";
let props = {
  value: {
    type: [String, Number, Boolean],
    default() {
      return false;
    }
  },
  activeValue: {
    type: [String, Number, Boolean],
    default: config.activeValue
  },
  inactiveValue: {
    type: [String, Number, Boolean],
    default: config.inactiveValue
  },
  activeColor: {
    type: String,
    default:config.activeColor
  },
  inActiveColor: {
    type: String,
    default: config.inActiveColor
  },
  // 开启时的弹框提示语，仅当<code>openMessageBox='true'</code>时生效
  activeMessage: {
    type: String,
    default: config.activeMessage
  },
  // 关闭时的弹框提示语，仅当<code>openMessageBox='true'</code>时生效
  inActiveMessage: {
    type: String,
    default: config.inActiveMessage
  },
  // 是否开启二次确认弹框模式
  openMessageBox: {
    type: Boolean,
    default: config.openMessageBox
  },
  // 点击确认按钮时的回调函数，参数是当前状态的值
  confirmFun: Function,
  // 点击取消按钮时的回调函数，参数是当前状态的值
  cancelFun: Function,
  // 请求接口的地址，仅当<code>openMessageBox='true'</code>时生效
  url: {
    type: String
  },
  // 请求参数，默认会添加一个属性是当前开关绑定的属性值
  params: {
    type: Object,
    default: () => {
      return config.params;
    }
  },
  // 接口请求的方式
  method: {
    type: String,
    default: config.method
  },
  // 绑定参数的key
  field: {
    type: String,
    default: config.field
  },
  // 是否开启loading，仅当<code>openMessageBox='true'</code>时生效
  isLoading: {
    type: Boolean,
    default: true
  },
  // 是否禁用开关
  disabled: Boolean
};

export default props;
