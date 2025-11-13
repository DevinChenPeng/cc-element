<!--
 * @Description: 
 * @Date: 2021-09-14 13:40:35
 * @LastEditTime: 2021-09-17 16:56:43
 * @FilePath: \mds\src\layout\components\container\main\main_header\index.vue
 * @Author: Devin
-->
<template>
  <div class="layout-container-main-header">
    <Switchsidebar @switchSidebarFun="switchSidebarFun" :is-active="sidebar.opened"></Switchsidebar>
    <Breadcrumb id="breadcrumb-container" class="breadcrumb-container"></Breadcrumb>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
import Switchsidebar from '@/components/Switchsidebar';
import { mapGetters } from 'vuex';
export default {
  components: {
    Breadcrumb,
    Switchsidebar
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    switchSidebarFun() {
      this.$store.dispatch('app/switchSidebar');
    }
  },
  watch: {}
};
</script>
<style scoped lang='scss'>
$boxShadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
.layout-container-main-header {
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: $boxShadow;
  z-index: 1;
  &-sidebarBtn {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
    transition: all 0.5s;
    .icon-shouqi {
      font-size: 18px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>