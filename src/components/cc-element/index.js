/*
 * @Description: 
 * @Author: Devin
 * @Date: 2021-12-29 10:32:53
 * @LastEditTime: 2022-04-06 10:54:09
 * @LastEditors: Devin
 * @Reference: 
 */
import IconButton from './packages/cc-icon-button/index';
import CcButton from './packages/cc-button/index';
import CcInput from './packages/cc-input/index';
import CcSelect from './packages/cc-select';
import CcDatePicker from './packages/cc-date-picker/index';
import CcDatePickerRange from './packages/cc-data-picker-range/index';
import CcTextarea from './packages/cc-textarea/index';
import CcVirtualRollingSelect from './packages/cc-select-virtual-rolling';
import CcTable from './packages/cc-table/index';
import CcSwitch from './packages/cc-switch/index';
import CcForm from './packages/cc-form';
import CcSticky from './packages/cc-sticky/index';
import CcDialog from './packages/cc-dialog/index';
import CcResize from './packages/cc-resize/index';
import CcUploadCopperImage from './packages/cc-upload-copper-image/index';

import EchartsPie from './packages/cc-echarts/echartsPie/index';
import EchartsBar from './packages/cc-echarts/echartsBar/index';
import EchartsLine from './packages/cc-echarts/echartsLine/index';

export default {
  install(Vue) {
    Vue.component('CcButton', CcButton);
    Vue.component('IconButton', IconButton);
    Vue.component('CcInput', CcInput);
    Vue.component('CcSelect', CcSelect);
    Vue.component('CcDatePicker', CcDatePicker);
    Vue.component('CcDatePickerRange', CcDatePickerRange);
    Vue.component('CcTextarea', CcTextarea);
    Vue.component('CcTable', CcTable);
    Vue.component('CcSwitch', CcSwitch);
    Vue.component('CcForm', CcForm);
    Vue.component('CcSticky', CcSticky);
    Vue.component('CcDialog', CcDialog);
    Vue.component('CcResize', CcResize);
    Vue.component('CcUploadCopperImage', CcUploadCopperImage);
    Vue.component('CcVirtualRollingSelect', CcVirtualRollingSelect);
    Vue.component('EchartsPie', EchartsPie);
    Vue.component('EchartsBar', EchartsBar);
    Vue.component('EchartsLine', EchartsLine);
  }
};