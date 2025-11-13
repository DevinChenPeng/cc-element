<!--
 * @Description: 
 * @Date: 2021-09-29 13:35:30
 * @LastEditTime: 2021-10-09 11:34:25
 * @FilePath: \mds\src\components\packages\cc-sticky\src\main.vue
 * @Author: Devin
-->
<template>
  <div
    :style="{
      top: isSticky ? stickyTop + 'px' : '',
      right: isSticky ? right + 'px' : '',
      left: isSticky ? left + 'px' : '',
      zIndex: zIndex,
      position: position
    }"
  >
    <slot>
      <div>sticky</div>
    </slot>
  </div>
</template>

<script>
import props from './props';
export default {
  name: 'CcSticky',
  props: props,
  data() {
    return {
      active: false,
      position: '',
      isSticky: false,
      el: null
    };
  },
  mounted() {
    if (this.target) {
      this.el = document.querySelector(this.target);
      if (!this.el) {
        throw new Error(`target is not existed: ${this.target}`);
      }
      this.el.addEventListener('scroll', this.handleScroll);
      // this.el.addEventListener('resize', this.handleResize);
      this.handleScroll();
    }
  },
  activated() {
    this.handleScroll();
  },
  destroyed() {
    this.el.removeEventListener('scroll', this.handleScroll);
    // this.el.removeEventListener('resize', this.handleResize);
  },
  methods: {
    sticky() {
      if (this.active) {
        return;
      }
      this.position = 'fixed';
      this.active = true;
      this.isSticky = true;
    },
    handleReset() {
      if (!this.active) {
        return;
      }
      this.reset();
    },
    reset() {
      this.position = '';
      this.active = false;
      this.isSticky = false;
    },
    handleScroll() {
      const scrollTop = this.el.scrollTop;
      if (scrollTop >= this.scrollTop) {
        this.sticky();
        return;
      }
      this.handleReset();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
