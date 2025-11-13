<!--
 * @Description: 
 * @Date: 2021-09-15 18:26:11
 * @LastEditTime: 2021-10-09 16:50:46
 * @FilePath: \mds\src\components\Breadcrumb\index.vue
 * @Author: Devin
-->
<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
          >{{ $t(`public.${item.meta.title}`) }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ $t(`public.${item.meta.title}`) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp';

export default {
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route(route) {
      // 如果是重定向则不需要刷新面包屑
      if (route.path.startsWith('/redirect/')) {
        return;
      }
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // 获取当前路由的所有嵌套路径片段的路由记录
      let matched = this.$route.matched.filter((item) => item.meta && item.meta.title);
      // 获取片段的第一个，用于后续操作
      const first = matched[0];
      // 判断是否为potal页，如果不是这添加potal页的路径
      if (!this.isPotal(first)) {
        matched = [{ path: '/', meta: { title: 'Potal' } }].concat(matched);
      }
      // 对面包屑进行过滤
      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
      
    },
    isPotal(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === 'Potal'.toLocaleLowerCase();
    },
    pathCompile(path) {
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    // 点击跳转
    handleLink(item) {
      const { redirect, path } = item;
      // 如果有重定向则会跳到重定向的地址中去
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    }
  }
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
