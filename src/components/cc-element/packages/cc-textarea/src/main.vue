<!--
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-09-18 10:26:51
 * @FilePath: \mds\src\components\packages\textarea\src\main.vue
 * @Author: Devin
-->

<script>
import props from './props';
import { renderFun } from './render';

export default {
  name: 'CcTextarea',
  inheritAttrs: false,
  props: props,
  data() {
    return {
      showWordLimit: false
    };
  },
  methods: {
    handleInput($event) {
      this.$emit('input', $event);
    },
    blurTrimInput(e) {
      this.showWordLimit = false;
      this.value = this.value.trim();
      this.handleInput(e.target.value);
      this.$emit('blur', e, this.value);
    },
    focusInput(e) {
      this.showWordLimit = this.openShowLimit;
    }
  },
  created() {},
  render(h) {
    return renderFun(this, h);
  }
};
</script>
<style lang="scss" scoped>
.cc-textarea {
  ::v-deep .el-textarea__inner{
    font-family: initial;
  }
  ::v-deep {
    .el-input__count {
      position: absolute;
      font-size: 12px;
      right: 2px;
      bottom: -15px;
      line-height: 1;
    }
  }
}
</style>
