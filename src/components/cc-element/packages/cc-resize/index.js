/*
 * @Description: 
 * @Author: Devin
 * @Date: 2021-12-15 17:55:46
 * @LastEditTime: 2021-12-29 16:36:46
 * @LastEditors: Devin
 * @Reference: 
 */

import CcResize from './src/main'

CcResize.install = function(Vue) {
  Vue.component(CcResize.name, CcResize)
};

export default CcResize