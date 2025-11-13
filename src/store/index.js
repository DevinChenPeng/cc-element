/*
 * @Description: 
 * @Date: 2021-09-16 10:08:12
 * @LastEditTime: 2021-09-16 11:05:13
 * @FilePath: \mds\src\store\index.js
 * @Author: Devin
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
Vue.use(Vuex)

// require.context 出自 https://webpack.js.org/guides/dependency-management/#requirecontext
// 搜索modules目录下的所有以.js结尾的文件
const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // 将'./app.js'转换为 app
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const store = new Vuex.Store({
  modules,
  getters
})

export default store
