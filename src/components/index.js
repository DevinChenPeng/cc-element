/*
 * @Description:
 * @Date: 2021-06-15 18:53:24
 * @LastEditTime: 2022-04-06 10:54:27
 * @FilePath: \web-template\src\components\index.js
 * @Author: Devin
 */
import MethodsTable from './code/MethodsTable.vue';
import ParamsTable from './code/table.vue';
import SlotTable from './code/SlotTable.vue';
import Code from '@/components/code';
import Links from './links';
import Tinymce from "@/components/tinymce/index.vue";
// import CcDialog from "./packages/cc-dialog/index";
// import UploadCopperImage from './packages/cc-uploadCopperImage'
// import CcVirtualRollingSelect from './packages/cc-select-virtual-rolling';

export const EclinCommon = {
  install(Vue) {
    Vue.component('MethodsTable', MethodsTable);
    Vue.component('ParamsTable', ParamsTable);
    Vue.component('SlotTable', SlotTable);
    Vue.component('Code', Code);
    Vue.component('Links', Links);
    Vue.component('Tinymce', Tinymce);
    // Vue.component('CcDialog', CcDialog);
    // Vue.component('UploadCopperImage', UploadCopperImage);
    // Vue.component('CcVirtualRollingSelect', CcVirtualRollingSelect);
  }
};