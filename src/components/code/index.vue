<!--
 * @Description:
 * @Date: 2021-09-17 14:36:02
 * @LastEditTime: 2021-09-23 15:15:54
 * @FilePath: \mds\src\components\code\index.vue
 * @Author: Devin
-->
<template>
  <div class="code">
    <el-collapse-transition>
      <div class="code-content" :class="{ isOpen: isOpen }" v-show="isOpen">
        <slot></slot>
      </div>
    </el-collapse-transition>

    <div class="code-block-control" @click="isOpen = !isOpen" :class="{ isOpen: isOpen }">
      <i :class="{ 'el-icon-caret-bottom': !isOpen, 'el-icon-caret-top': isOpen }"></i>
      <span class="span" :class="{ isOpen: isOpen }">{{ !isOpen ? '显示代码' : '隐藏代码' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isOpen: false
    };
  },
  created() {},
  computed: {},
  methods: {},
  watch: {}
};
</script>
<style scoped lang='scss'>
.code {
  margin: 0 auto;
  &-block-control {
    height: 44px;
    border-top: 1px solid #ebeef5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .span {
      display: none;
      font-size: 14px;
      margin-left: 8px;
    }
    .span.isOpen {
      color: #409eff;
      display: inline-block;
    }
    &:hover {
      color: #409eff;
      background-color: #f9fafc;
      .span {
        display: inline-block;
      }
    }
  }
  &-block-control.isOpen {
    color: #409eff;
  }

  &-content.isOpen {
    border-top: 1px solid #ebeef5;
    background-color: rgba(235,238,245,0.5);
  }
}
::v-deep {
  code[class*='language-'],
  pre[class*='language-'] {
    color: #000;
    background: 0 0;
    text-shadow: 0 1px #fff;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    padding: 20px;
  }
  .token.tag {
    color: $TC3;
  }
  .token.punctuation {
    color: #9a8989;
  }
  .token.attr-name {
    color: $MC3;
  }
  .token.attr-value,
  .token.keyword {
    color: $MC4;
  }
  .token.class-name,
  .token.function {
    color: #dd4a68;
  }
  .token.attr-name,
  .token.builtin,
  .token.char,
  .token.inserted,
  .token.selector,
  .token.string {
    color: #690;
  }
}
</style>