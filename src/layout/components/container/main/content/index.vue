<!--
 * @Description: 
 * @Date: 2021-09-14 13:40:35
 * @LastEditTime: 2021-09-22 16:18:16
 * @FilePath: \mds\src\layout\components\container\main\content\index.vue
 * @Author: Devin
-->
<template>
  <div class="layout-container-main-content">
    <!-- <el-row class="layout-container-main-content-box"> -->
      <!-- <el-col></el-col> -->
      <!-- <el-col> -->
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      <!-- </el-col> -->
    <!-- </el-row> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  watch: {}
};
</script>
<style scoped lang='scss'>
.layout-container-main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: block;
  scroll-behavior: smooth;
  &-box {
    width: 100%;
  }
}
</style>