/*
 * @Description:
 * @Date: 2021-06-15 15:46:26
 * @LastEditTime: 2021-09-17 17:55:44
 * @FilePath: \mds\src\components\packages\iconButton\src\render.js
 * @Author: Devin
 */

export const renderFun = (_this, h) => {
  const listeners = { ..._this.$listeners };
  const attrs = { ..._this.$attrs };
  const attrsSelf = {
    title: _this.titleText,
    type: _this.type || 'button'
  };
  const listenersSelf = {};
  const selfClass = ['button-icon', 'iconfont', _this.iconClass];
  const defaultSlots = _this.$slots.default;
  const styles = {
    ..._this.customStyle,
    ...{
      '--color': _this.color || _this.variableRoot.TC3,
      '--bg-color': _this.bgColor,
      '--bg-color-hover': _this.bgColorHover
    }
  };
  return h(
    'button',
    {
      class: selfClass,
      style: styles,
      attrs: {
        ...attrs,
        ...attrsSelf
      },
      on: { ...listeners, ...listenersSelf },
      ref: 'cc-icon-button',
      key: 'cc-icon-button',
      refInFor: true
    },
    [defaultSlots]
  );
};
