<!--
 * @Description: 
 * @Date: 2021-10-14 17:31:48
 * @LastEditTime: 2021-12-29 11:39:11
 * @FilePath: \web-template\src\components\packages\cc-dialog\src\main.vue
 * @Author: Devin
-->
<template>
  <el-dialog
    :width="width"
    :visible.sync="dialogVisible"
    :close-on-click-modal="closeOnClickModal"
    v-dialogDrag="dialogDrag"
    :before-close="beforeClose"
    v-bind="$attrs"
    v-on="$listeners"
    :class="{ showFooter: showFooter }"
    ref="dialog"
  >
    <div slot="title">
      <slot name="title">{{ title || $t('public.title') }}</slot>
    </div>
    <slot></slot>
    <div slot="footer">
      <slot name="footer" v-if="showFooter"></slot>
      <div v-else>
        <CcButton
          type="basic"
          @click="handleCancel"
          :disabled="disabledCancel"
          v-if="showCancel"
          >{{ cancelBtnText || $t('public.cancel') }}</CcButton
        >
        <CcButton @click="handleConfirm" :disabled="disabledConfirm" v-if="showConfirm">{{
          confirmBtnText || $t('public.confirm')
        }}</CcButton>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import Props from './props';
import dialogDrag from './dialogDrag';
export default {
  name: 'CcDialog',
  props: Props,
  components: {},
  data() {
    return {};
  },
  directives: {
    dialogDrag: dialogDrag
  },
  created() {},
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        // 当visible改变的时候，触发父组件的 updateVisible方法，在该方法中更改传入子组件的 centerDialogVisible的值
        this.$emit('update:visible', val);
      }
    }
  },
  methods: {
    handleCancel() {
      this.$emit('handleCancel');
    },
    handleConfirm() {
      this.$emit('handleConfirm');
    },
    beforeClose(done) {
      if (this.stopCloseFun) {
        this.stopCloseFun(done);
      } else {
        done();
      }
    }
  },
  watch: {}
};
</script>
<style scoped lang='scss'>
.showFooter{
  ::v-deep .el-dialog__footer{
    padding: 0;
  }
}
</style>