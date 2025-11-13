<!--
 * @Description:
 * @Date: 2021-09-16 10:29:00
 * @LastEditTime: 2021-09-16 11:29:39
 * @FilePath: \mds\src\components\Switchsidebar\index.vue
 * @Author: Devin
-->
<template>
  <div class="layout-container-main-header-sidebarBtn" @click="switchSidebarFun()">
    <div class="iconfont" :class="{ 'icon-shouqi': isActive, 'icon-zhankai': !isActive }"></div>
  </div>
</template>

<script>
export default {
  name: 'SwitchSidebar',
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    switchSidebarFun() {
      this.$emit('switchSidebarFun');
    }
  },
  watch: {}
};
</script>
<style scoped lang='scss'>
</style>