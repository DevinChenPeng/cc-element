<!--
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-09-17 17:42:54
 * @FilePath: \mds\src\components\packages\input\src\main.vue
 * @Author: Devin
-->

<script>
import props from './props';
import { renderFun } from './render';

export default {
  name: 'CcInput',
  props: props,
  inheritAttrs: false,
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
      e.target.value = e.target.value.trim();
      this.showWordLimit = false;
      this.handleInput(e.target.value);
      this.$emit('blur', e, e.target.value);
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
.cc-input {
  
  ::v-deep {
    .el-input__count {
      position: absolute;
      top: 24px;
      right: -6px;
      width: max-content;
      .el-input__count-inner {
        background-color: inherit;
      }
    }
  }
}
.cc-input.el-input--mini {
  ::v-deep {
    .el-input__count {
      top: 23px;
    }
  }
}
.cc-input.el-input--medium {
  ::v-deep {
    .el-input__count {
      top: 26px;
    }
  }
}

.cc-input.el-input--large {
  ::v-deep {
    .el-input__count {
      top: 27px;
    }
  }
}
</style>
