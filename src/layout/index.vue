<!--
 * @Description: 
 * @Date: 2021-09-14 11:29:55
 * @LastEditTime: 2021-12-31 15:24:20
 * @FilePath: \mds\src\layout\index.vue
 * @Author: Devin
-->
<template>
  <div class="layout">
    <CcHeader></CcHeader>

    <CcContainer></CcContainer>
    <RightPanel><Setting></Setting></RightPanel>
  </div>
</template>

<script>
import CcContainer from './components/container/index.vue';
import CcHeader from './components/header/index.vue';
import Setting from './components/setting';
import RightPanel from '@/components/RightPanel';
export default {
  components: { CcContainer, CcHeader, Setting, RightPanel },
  data() {
    return {};
  }
};
</script>
<style scoped lang='scss'>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>