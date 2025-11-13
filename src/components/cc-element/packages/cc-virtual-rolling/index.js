/*
 * @Description:
 * @Date: 2021-08-02 10:10:06
 * @LastEditTime: 2021-08-02 10:38:11
 * @FilePath: \web-template\src\components\virtual_rolling\index.js
 * @Author: Devin
 */
import VirtualRolling from './src/main'

VirtualRolling.install = function(Vue) {
  Vue.component(VirtualRolling.name, VirtualRolling)
};

export default VirtualRolling
