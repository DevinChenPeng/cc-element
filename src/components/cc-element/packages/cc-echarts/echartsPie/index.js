/*
 * @Description: 
 * @Date: 2021-10-13 14:38:19
 * @LastEditTime: 2021-10-13 14:41:15
 * @FilePath: \cc-common-resource\packages\cc-echarts\echartsPie\index.js
 * @Author: Devin
 */
import EchartsPie from './src/main'

EchartsPie.install = function(Vue) {
  Vue.component(EchartsPie.name, EchartsPie)
};


export default EchartsPie

