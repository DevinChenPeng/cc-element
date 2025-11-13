<!--
 * @Description: 
 * @Date: 2021-09-14 14:14:13
 * @LastEditTime: 2021-09-22 16:16:51
 * @FilePath: \mds\src\layout\components\container\main\index.vue
 * @Author: Devin
-->
<template>
  <div class="layout-container-main">
    <CcMianHeader></CcMianHeader>
    <CcContent></CcContent>
  </div>
</template>

<script>
import CcContent from './content/index.vue';
import CcMianHeader from './main_header/index.vue';
export default {
  components: {
    CcMianHeader,
    CcContent
  },
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
.layout-container-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
</style>

