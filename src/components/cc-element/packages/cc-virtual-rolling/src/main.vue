<!--
 * @Description:
 * @Date: 2021-08-02 10:10:14
 * @LastEditTime: 2021-09-27 13:42:00
 * @FilePath: \mds\src\components\packages\virtual_rolling\src\main.vue
 * @Author: Devin
-->
<template>
  <div class="wrapper" ref="wrapper" @scroll="onScroll" :style="{ height: height + 'px' }">
    <div
      class="wrapper-container"
      :style="{
        paddingTop: topBlankFill + 'px',
        paddingBottom: bottomBlankFill + 'px'
      }"
    >
      <slot :showLists="showLists" :itemHeight="itemHeight" :startIndex="startIndex"></slot>
    </div>
  </div>
</template>

<script>
import props from './props';
export default {
  props: props,
  data() {
    return {
      // 容器的最大容积
      containerSize: 0,
      // 可视区域元素开始索引
      startIndex: 0
    };
  },
  watch: {
    showPopper() {
      if (
        this.setStartIndex != 0 &&
        this.setStartIndex > 2 &&
        this.setStartIndex > this.showLists.length / 2
      ) {
        this.startIndex = this.setStartIndex - 2;
        this.$nextTick(() => {
          this.$refs.wrapper.scrollTop = this.topBlankFill;
          if (this.$refs.wrapper.children[0].querySelector('.selected')) {
            this.$refs.wrapper.children[0].querySelector('.selected').classList.add('hover');
          }
        });
      }else if (this.setStartIndex == 0) {
        this.startIndex = this.setStartIndex;
        this.$refs.wrapper.scrollTop = 0;
      }
    }
  },
  created() {},
  computed: {
    // 根据 startIndex 和屏幕容积 containerSize 来计算 endIndex
    endIndex() {
      let endIndex = this.startIndex + this.containerSize;
      // 判断截取到的最后一位是否存在，如果不存在则只取最后一位
      if (!this.list[endIndex]) {
        endIndex = this.list.length - 1;
      }
      return endIndex;
    },
    // 根据容器最大容积数。截取显示
    showLists() {
      return this.list.slice(this.startIndex, this.endIndex + 1);
    },
    // 定义上空白的高度
    topBlankFill() {
      return this.startIndex * this.itemHeight;
    },
    // 定义下空白的高度
    bottomBlankFill() {
      return (this.list.length - this.endIndex - 1) * this.itemHeight;
    }
  },
  mounted() {
    if (
        this.setStartIndex != 0 &&
        this.setStartIndex > 2 &&
        this.setStartIndex > this.showLists.length / 2
      ) {
        this.startIndex = this.setStartIndex - 2;
        this.$nextTick(() => {
          this.$refs.wrapper.scrollTop = this.topBlankFill;
          if (this.$refs.wrapper.children[0].querySelector('.selected')) {
            this.$refs.wrapper.children[0].querySelector('.selected').classList.add('hover');
          }
        });
      }
    if (this.containerSizeShow) {
      this.containerSize = this.containerSizeShow;
    } else {
      this.getContainerSize();
    }
  },
  methods: {
    onScroll(e) {
      let startIndex = Math.floor(e.target.scrollTop / this.itemHeight);
      this.startIndex = startIndex;
      // 判断是否滚动到底部
      try {
        if (
          e.target.scrollTop ==
          this.list.length * this.itemHeight - this.$refs.wrapper.offsetHeight
        ) {
          this.$emit('scrollBottom');
        }
      } catch {}
    },
    getContainerSize() {
      try {
        this.containerSize = Math.floor(this.$refs.wrapper.offsetHeight / this.itemHeight) * 2;
      } catch {}
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  overflow: auto;
}
</style>
