<!--
 * @Description: 
 * @Date: 2021-09-14 13:40:35
 * @LastEditTime: 2021-09-22 15:54:44
 * @FilePath: \mds\src\layout\components\container\index.vue
 * @Author: Devin
-->
<template>
  <div class="layout-container">
    <CcSidebar></CcSidebar>
    
    <CcMian></CcMian>
  </div>
</template>

<script>
import CcSidebar from './sidebar/index.vue';
import CcMian from './main/index.vue';
export default {
  components: {
    CcMian,
    CcSidebar,
  },
  data() {
    return {
      
    };
  },
  created() {
    
  },
  watch: {}
};
</script>
<style scoped lang='scss'>
.layout-container {
  flex: 1;
  overflow-y: auto;
  display: flex;
  &-sidebarBtn {
    display: flex;
    align-items: center;
  }
}
</style>