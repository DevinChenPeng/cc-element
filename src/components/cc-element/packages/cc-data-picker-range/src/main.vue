<!--
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-12-29 16:04:14
 * @FilePath: \mds\src\components\packages\cc-data-picker-range\src\main.vue
 * @Author: Devin
-->
<template>
  <el-date-picker
    :value="value"
    type="datetimerange"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :value-format="valueFormat"
    :size="size"
    :prefix-icon="prefixIcon"
    :format="format"
    :default-time="defaultTime"
    class="cc-data-picker-range"
    :popper-class="hiddenHeader ? 'hiddenHeader' + ' ' + popperClass : popperClass"
    v-bind="$attrs"
    @input="handleInput"
  ></el-date-picker>
</template>
<script>
import props from './props';
export default {
  name: 'CcDatePickerRange',
  props: props,
  data() {
    return {};
  },
  watch: {},
  created() {},
  computed: {},
  methods: {
    handleInput($event) {
      if ($event == null) {
        $event = ['', ''];
      }
      this.$emit('input', $event);
    }
  }
};
</script>
<style lang="scss">
.hiddenHeader {
  .el-date-range-picker__time-header {
    display: none;
  }
}
.el-range-editor--small.el-input__inner {
  width: 284px;
}
.el-input__icon.el-range__icon.iconfont.icon-riqi {
  font-size: 24px;
}
</style>
