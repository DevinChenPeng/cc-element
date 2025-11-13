/*
 * @Description: 
 * @Date: 2021-10-14 17:31:31
 * @LastEditTime: 2021-12-29 11:37:56
 * @FilePath: \web-template\src\components\packages\cc-dialog\index.js
 * @Author: Devin
 */
import CcDialog from './src/main'

CcDialog.install = function(Vue) {
  Vue.component(CcDialog.name, CcDialog)
};

export default CcDialog