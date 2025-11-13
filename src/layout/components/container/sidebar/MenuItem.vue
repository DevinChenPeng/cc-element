<!--
 * @Description:
 * @Date: 2021-09-14 14:46:50
 * @LastEditTime: 2021-09-17 11:47:37
 * @FilePath: \mds\src\layout\components\container\sidebar\MenuItem.vue
 * @Author: Devin
-->
<template>
  <div class="menu-item">
    <template v-if="isOneChild(menuItem.children, menuItem) && !menuItem.alwaysShow">
      <LinkType :to="resolvePath(showingMenu.path)">
        <el-menu-item :index="resolvePath(showingMenu.path)">
          <MenuItemTitle
            :icon="showingMenu.meta.icon"
            :title="$t(`public.${showingMenu.meta.title}`)"
          />
        </el-menu-item>
      </LinkType>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(menuItem.path)" popper-append-to-body>
      <template slot="title">
        <MenuItemTitle v-if="menuItem.meta" :icon="menuItem.meta && menuItem.meta.icon" :title="$t(`public.${menuItem.meta.title}`)" />
      </template>
      <MenuItem
        v-for="route in menuItem.children"
        :key="route.path"
        :menuItem="route"
        :base-path="resolvePath(menuItem.path)"
      ></MenuItem>
    </el-submenu>
  </div>
</template>

<script>
import LinkType from './LinkType';
import MenuItemTitle from './MenuItemTitle';
import path from 'path';
export default {
  name: 'MenuItem',
  props: {
    menuItem: {
      type: Object,
      require: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  components: {
    LinkType,
    MenuItemTitle
  },
  data() {
    return {
      showingMenu: {}
    };
  },
  created() {},
  computed: {
    isOneChild() {
      return (children = [], menuItem) => {
        let showingChildren = children.filter((item) => {
          if (item.hidden) {
            return false;
          } else {
            this.showingMenu = item;
            return true;
          }
        });
        if (showingChildren.length == 1) {
          return true;
        }
        if (showingChildren.length === 0) {
          this.showingMenu = menuItem;
          return true;
        }
        return false;
      };
    }
  },
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    }
  },
  watch: {}
};
</script>
<style scoped lang='scss'>
</style>