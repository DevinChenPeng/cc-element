<!--
 * @Description: 
 * @Date: 2021-09-13 17:11:23
 * @LastEditTime: 2021-09-24 15:31:06
 * @FilePath: \mds\src\App.vue
 * @Author: Devin
-->
<template>
  <div id="mdsapp">
    <router-view/>
  </div>
</template>

<style lang="scss">

#mdsapp {
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $TC1;
  height: 100%;
}
*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
</style>
