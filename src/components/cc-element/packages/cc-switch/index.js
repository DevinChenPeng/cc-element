/*
 * @Description: 
 * @Date: 2021-09-29 13:39:12
 * @LastEditTime: 2021-09-29 13:39:12
 * @FilePath: \mds\src\components\packages\cc-switch\index.js
 * @Author: Devin
 */
import CcSwitch from './src/main'

CcSwitch.install = function(Vue) {
  Vue.component(CcSwitch.name, CcSwitch)
};

export default CcSwitch