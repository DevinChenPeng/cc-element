<!--
 * @Description: 
 * @Date: 2021-09-29 13:38:57
 * @LastEditTime: 2021-10-09 16:27:10
 * @FilePath: \cc-common-resource\packages\cc-switch\src\main.vue
 * @Author: Devin
-->
<template>
  <div class="cc-switch">
    <el-switch
      :value="value"
      @input="handleInput"
      v-bind="$attrs"
      v-on="$listeners"
      :active-value="activeValue"
      :inactive-value="inactiveValue"
      :active-color="activeColor"
      :inactive-color="inActiveColor"
      :disabled="disabled"
      v-if="!openMessageBox || disabled"
    ></el-switch>
    <el-switch
      v-if="!disabled && openMessageBox"
      class="switch"
      disabled
      :value="value"
      @input="handleInput"
      v-bind="$attrs"
      v-on="$listeners"
      :active-value="activeValue"
      :inactive-value="inactiveValue"
      :active-color="activeColor"
      :inactive-color="inActiveColor"
      @click.native.prevent="changeValue"
    ></el-switch>
  </div>
</template>

<script>
import Props from './props';
import { changeSwitchState } from '@/api/public';
export default {
  inheritAttrs: false,
  props: Props,
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    handleInput($event) {
      this.$emit('input', $event);
    },
    changeValue() {
      if (this.openMessageBox) {
        let state = this.value === this.activeValue ? this.inactiveValue : this.activeValue;
        let message = this.value === this.inactiveValue ? this.activeMessage : this.inActiveMessage;
        this.$ecc_message_confirm(
          {
            message: message
          },
          () => {
            if (this.url) {
              this.changeState(state);
            } else {
              if (this.confirmFun) {
                this.confirmFun(state);
              } else {
                throw new Error(`你需要设置confirmFun哦!!!!`);
              }
            }
          },
          () => {
            if (this.cancelFun) {
              this.cancelFun();
            }
          }
        );
      } else {
        this.$emit('changeValue');
      }
    },
    changeState(state) {
      let { url, method, isLoading } = this;
      let data = { field: state };
      if (this.params) {
        data = Object.assign(data, this.params);
      }
      changeSwitchState({ data, url, method, isLoading }).then((res) => {
        if (res.code == 0) {
          if (this.confirmFun) {
            this.confirmFun(state);
          } else {
            this.handleInput(state);
          }
        }
      });
    }
  },
  watch: {}
};
</script>
<style scoped lang='scss'>
.switch.el-switch.is-disabled {
  opacity: 1;
}
::v-deep {
  .el-switch__label{
    background-color: inherit !important;
  }
}
.switch.el-switch.is-disabled {
  ::v-deep .el-switch__core {
    cursor: pointer;
  }
}
</style>