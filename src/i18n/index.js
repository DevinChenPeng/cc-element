/*
 * @Description:
 * @Date: 2021-09-15 15:05:09
 * @LastEditTime: 2021-10-12 11:16:42
 * @FilePath: \web-template\src\i18n\index.js
 * @Author: Devin
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementLocale from 'element-ui/lib/locale';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import enCc from './lang/en.js'
import zhCc from './lang/zh.js'

Vue.use(VueI18n);

const i18n = i18LanguageReload();

function i18LanguageReload() {
  const i18n = new VueI18n({
    locale: 'zh',
    messages: {
      zh: {
        ...zhCc,
        ...zhLocale
      },
      en: {
        ...enCc,
        ...enLocale
      }
    }
  });
  ElementLocale.i18n((key, value) => i18n.t(key, value));
  return i18n;
}

export { i18LanguageReload };

export default i18n;