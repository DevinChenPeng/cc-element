/*
 * @Description: 
 * @Date: 2021-10-13 14:38:19
 * @LastEditTime: 2021-10-13 14:44:31
 * @FilePath: \cc-common-resource\packages\cc-echarts\echartsLine\index.js
 * @Author: Devin
 */
import EchartsLine from './src/main'

EchartsLine.install = function(Vue) {
  Vue.component(EchartsLine.name, EchartsLine)
};


export default EchartsLine
