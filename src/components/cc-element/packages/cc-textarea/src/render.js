/*
 * @Description:
 * @Date: 2021-06-15 15:46:26
 * @LastEditTime: 2021-10-21 11:30:36
 * @FilePath: \cc-common-resource\packages\cc-textarea\src\render.js
 * @Author: Devin
 */


export const renderFun = (_this, h) => {
  const listeners = { ..._this.$listeners };
  const attrs = { ..._this.$attrs };
  const attrsSelf = {
    placeholder: _this.placeholder || '请输入',
    type: "textarea",
    value: _this.value,
    resize: _this.resize,
    autosize: _this.autosize,
    maxlength: _this.maxlength,
    'show-word-limit': _this.showWordLimit
  };
  const listenersSelf = {
    input: _this.handleInput,
    blur: _this.blurTrimInput,
    focus:_this.focusInput
  };
  return h("el-input", {
    attrs: {
      ...attrs,
      ...attrsSelf
    },
    class:["cc-textarea"],
    on: { ...listeners, ...listenersSelf },
    ref: "cc-textarea",
    key: "cc-textarea",
    refInFor: true,
  })
}

