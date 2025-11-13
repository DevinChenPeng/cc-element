/*
 * @Author: your name
 * @Date: 2021-01-15 10:18:44
 * @LastEditTime: 2021-12-29 11:35:26
 * @LastEditors: Devin
 * @Description: In User Settings Edit
 * @FilePath: \element-ui_table_form\src\utils\vue\vuePrototype.js
 */
import Vue from 'vue';
import { basicConfirm, basicAlert } from 'cc-element/packages/cc-message-box';
Vue.prototype.$cc_message_confirm = basicConfirm;
Vue.prototype.$cc_message_alert = basicAlert;
import i18n from '@/i18n'

// import { message } from 'cc-element/cc-message-box/resetMessage'; //不重复弹窗
import { ccMessage } from '@/components/cc-element/packages/cc-message-box/resetMessage';
import tinymce from '@/components/tinymce/tinymce.min.js';

Vue.prototype.$tinymce = tinymce;
Vue.prototype.$cc_message = ccMessage;

function prototypei18Fun() {
  Vue.prototype.$validator = {
    validator: (rule, value, callback) => {
      if (!value.trim()) {
        return callback(new Error(i18n.t("public.requiredInput")))
      } else {
        callback();
      }
    },
    trigger: ["blur"],
  }

  /**
   * @description: 输入框必填
   * @param {*}
   * @return {*}
   */
  Vue.prototype.$requiredInput = {
    required: true,
    message: i18n.t('public.requiredInput'),
    trigger: ['blur', 'change'],
  }

  /**
   * @description: 选择框必填
   * @param {*}
   * @return {*}
   */
  Vue.prototype.$requiredSelect = {
    required: true,
    message: i18n.t('public.requiredSelect'),
    trigger: ['blur', 'change']
  }

  /**
   * @description: 输入框长度
   * @param {*}
   * @return {*}
   */
  Vue.prototype.$validatorMaxLength = (length) => {
    return {
      max: length,
      message: i18n.t("public.maxLength") + `${length}`,
      trigger: ["blur", "change"],
    }
  }

  /**
   * @description: 输入框长度
   * @param {*}
   * @return {*}
   */
  Vue.prototype.$validatorLengthBlur = (min, max) => {
    return {
      min: min,
      max: max,
      message: i18n.t("public.length") + `${min}~${max}`,
      trigger: ["blur"],
    }
  }

}

export default prototypei18Fun