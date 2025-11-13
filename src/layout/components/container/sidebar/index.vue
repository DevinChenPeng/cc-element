<!--
 * @Description: 
 * @Date: 2021-09-14 13:40:35
 * @LastEditTime: 2021-09-16 16:11:07
 * @FilePath: \mds\src\layout\components\container\sidebar\index.vue
 * @Author: Devin
-->
<template>
  <div class="layout-container-sidebar" :class="classObj">
    <el-scrollbar class="layout-container-sidebar-scrollbar">
      <el-menu
        :collapse="isCollapse"
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
      >
        <MenuItem
          v-for="route in routeList"
          :key="route.path"
          :menuItem="route"
          :base-path="route.path"
        ></MenuItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variableMenu from '../../../../styles/variableMenu.scss';
import MenuItem from './MenuItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: { MenuItem },
  data() {
    return {
      routeList: []
    };
  },
  created() {
    let routes = this.$router.options.routes.filter((item) => {
      return !item.hidden;
    });
    this.routeList = routes;
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened;
    },
    variables() {
      return variableMenu;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      };
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if (meta.activeMenu) {
      //   return meta.activeMenu
      // }
      return path
    },
  },
  methods: {},
  watch: {}
};
</script>
<style scoped lang='scss'>
</style>