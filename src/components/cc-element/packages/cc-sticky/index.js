/*
 * @Description: 
 * @Date: 2021-09-29 13:36:48
 * @LastEditTime: 2021-09-29 13:37:07
 * @FilePath: \mds\src\components\packages\cc-sticky\index.js
 * @Author: Devin
 */

import CcSticky from './src/main'

CcSticky.install = function(Vue) {
  Vue.component(CcSticky.name, CcSticky)
};

export default CcSticky
