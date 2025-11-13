/*
 * @Description:
 * @Date: 2021-06-15 15:46:26
 * @LastEditTime: 2021-12-29 16:03:37
 * @FilePath: \web-template\src\components\elementUIpackage\button\src\render.js
 * @Author: Devin
 */

export const renderFun = (_this, h) => {
  const listeners = {
    ..._this.$listeners
  };
  const attrs = {
    ..._this.$attrs
  };
  const attrsSelf = {
    type: _this.type,
    size: _this.size,
  };
  const listenersSelf = {};
  let selfClass = _this.selfClass;
  let defaultSlots = _this.$slots.default;
  if (_this.type === 'textAdd') {
    defaultSlots = _this.textAdd
  }
  return h("el-button", {
    class: selfClass,
    attrs: {
      ...attrs,
      ...attrsSelf
    },
    on: {
      ...listeners,
      ...listenersSelf
    },
    ref: "cc-button",
    key: "cc-button",
    refInFor: true,
  }, [defaultSlots]);
}

