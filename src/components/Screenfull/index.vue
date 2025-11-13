<!--
 * @Description: 
 * @Date: 2021-09-16 11:51:55
 * @LastEditTime: 2021-09-17 11:22:51
 * @FilePath: \mds\src\components\Screenfull\index.vue
 * @Author: Devin
-->
<template>
  <div class="layout-header-right-item" title="全屏" @click="click">
    <i
      :class="{
        iconfont: true,
        'icon-full-screen': !isFullscreen,
        'icon-cancel-full-screen': isFullscreen
      }"
    ></i>
  </div>
</template>

<script>
import screenfull from 'screenfull';

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    click() {
      if (typeof screenfull.isEnabled === 'undefined') {
        if (!screenfull.enabled) {
          this.$cc_message.success({
            message: 'Your browser does not support it',
            type: 'warning'
          });
          return false;
        }
        screenfull.toggle();
      } else {
        if (!screenfull.isEnabled) {
          this.$cc_message.success({
            message: 'Your browser does not support it',
            type: 'warning'
          });
          return false;
        }
        screenfull.toggle();
      }
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (typeof screenfull.isEnabled === 'undefined') {
        if (screenfull.enabled) {
          screenfull.on('change', this.change);
        }
      } else {
        if (screenfull.isEnabled) {
          screenfull.on('change', this.change);
        }
      }
    },
    destroy() {
      if (typeof screenfull.isEnabled === 'undefined') {
        if (screenfull.enabled) {
          screenfull.on('change', this.change);
        }
      } else {
        if (screenfull.isEnabled) {
          screenfull.on('change', this.change);
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.layout-header-right-item:hover {
  background-color: rgba(0, 0, 0, 0.2);
  .icon-full-screen {
    transform: scale(1.5);
  }
  
}
</style>