/*
 * @Description:
 * @Date: 2021-09-13 17:11:23
 * @LastEditTime: 2021-12-31 15:17:21
 * @FilePath: \element-ui_table_form\src\main.js
 * @Author: Devin
 */
import './public-path';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss';
import i18n from './i18n';
import { EclinCommon } from './components';
import CcElement from '@/components/cc-element/index';
import '../mock/index.js';
import '@/utils/vue/vuePrototype';

Vue.config.productionTip = false;

let echarts = require('echarts');
require('echarts/lib/chart/pie'); //饼图
require('echarts/lib/chart/bar'); //柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/dataZoom'); //公共
Vue.prototype.$echarts = echarts;
// import vcolorpicker from 'vcolorpicker';
import '../src/utils/vue/vuePrototype'

// 全局方法
import prototypei18Fun from '@/utils/vue/vuePrototype';
prototypei18Fun();

let instance = null;

function render(props = {}) {
  const { container } = props;
  Vue.use(ElementUI);
  Vue.use(EclinCommon);
  Vue.use(CcElement);
  instance = new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#mdsapp') : '#mdsapp');
}

// 独立运行时
// if (!window.__POWERED_BY_QIANKUN__) {
render();
// }

// export async function bootstrap(props) {
//   console.log('[vue] vue app bootstraped', props);
// }
// export async function mount(props) {
//   console.log('[vue] props from main framework', props);
//   // common.initGlobalState(store, props);

//   render(props);
// }
// export async function unmount() {
//   location.href = '/home';
//   instance.$destroy();
//   instance.$el.innerHTML = '';
//   instance = null;
// }