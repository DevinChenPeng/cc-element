<!--
 * @Description: 
 * @Date: 2021-09-14 15:40:39
 * @LastEditTime: 2021-09-14 15:58:19
 * @FilePath: \mds\src\layout\componets\container\sidebar\LinkType.vue
 * @Author: Devin
-->
<template>
  <router-link :to="to" class="menu-item-link">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    }
  },
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
.menu-item-link {
  text-decoration: none;
}
</style>