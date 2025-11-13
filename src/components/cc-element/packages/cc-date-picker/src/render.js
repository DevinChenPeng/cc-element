/*
 * @Description:
 * @Date: 2021-06-16 11:42:02
 * @LastEditTime: 2021-10-21 11:25:35
 * @FilePath: \cc-common-resource\packages\cc-date-picker\src\render.js
 * @Author: Devin
 */

export const renderFun = (_this, h) => {
  const listeners = { ..._this.$listeners };
  const attrs = { ..._this.$attrs };
  const attrsSelf = {
    placeholder: _this.placeholder || '请选择',
    value: _this.value,
    size: _this.size,
    'prefix-icon': _this.prefixIcon,
    type: _this.type,
    'value-format': _this.valueFormat,
    'picker-options': _this.pickerOptionsComputed
  };
  const listenersSelf = {
    input: _this.handleInput
  };
  return h("el-date-picker", {
    attrs: {
      ...attrs,
      ...attrsSelf
    },
    on: { ...listeners, ...listenersSelf },
    ref: "cc-date-picker",
    key: "cc-date-picker",
    refInFor: true,
  });
}
