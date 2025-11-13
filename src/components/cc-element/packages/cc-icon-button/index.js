/*
 * @Description: 
 * @Date: 2021-09-17 13:49:52
 * @LastEditTime: 2021-09-22 15:14:23
 * @FilePath: \mds\src\components\packages\icon_button\index.js
 * @Author: Devin
 */

import IconButton from './src/main'

IconButton.install = function(Vue) {
  Vue.component(IconButton.name, IconButton)
};

export default IconButton
