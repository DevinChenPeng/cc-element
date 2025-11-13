/*
 * @Description:
 * @Date: 2021-06-29 17:12:36
 * @LastEditTime: 2021-10-21 11:29:39
 * @FilePath: \cc-common-resource\packages\cc-input\src\render.js
 * @Author: Devin
 */
export const renderFun = (_this, h) => {
  const listeners = { ..._this.$listeners };
  const attrs = { ..._this.$attrs };
  const attrsSelf = {
    placeholder: _this.placeholder || '请输入',
    size: _this.size,
    'show-word-limit': _this.showWordLimit,
    maxlength:_this.maxlength || 64,
    clearable:_this.clearable
  };
  const listenersSelf = {
    input: _this.handleInput,
    blur: _this.blurTrimInput,
    focus:_this.focusInput
  };

  let prefix = _this.$slots.prefix;
  let suffix = _this.$slots.suffix;
  let prepend = _this.$slots.prepend;
  let append = _this.$slots.append;

  return h("el-input", {
    attrs: {
      ...attrs,
      ...attrsSelf
    },
    class:["cc-input"],
    on: { ...listeners, ...listenersSelf },
    ref: "cc-input",
    key: "cc-input",
    refInFor: true
  },
  [
    h('template', {
      slot: 'prefix'
    }, [prefix]),
    h('template', {
      slot: 'suffix'
    }, [suffix]),
    h('template', {
      slot: 'prepend'
    }, [prepend]),
    h('template', {
      slot: 'append'
    }, [append])
  ]
)}

