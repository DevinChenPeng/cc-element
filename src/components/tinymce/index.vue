<!--
 * @Description:
 * @Date: 2021-10-08 17:04:35
 * @LastEditTime: 2021-10-18 09:35:54
 * @FilePath: \web-template\src\components\tinymce\index.vue
 * @Author: Devin
-->
<template>
  <div v-if="inline" :id="selectorId"></div>
  <div :id="selectorId" v-else></div>
</template>

<script>
import './tinymce.min.js';
import './icons/default/icons.min.js';
import './themes/silver/theme.min.js';
import './langs/zh_CN.js';
import { fontsize_formats, font_formats } from './font_formats';
import plugins from './plugins';
import toolbar from './toolbar';
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    plugins: {
      type: [String, Array, Boolean],
      default: () => plugins
    },
    /*
    自定义工具栏

    指定工具栏上显示的按钮，使用空格分隔，用 | 分组。

    如要隐藏菜单栏，将其值设为false即可。
  */
    toolbar: {
      type: [String, Array, Boolean],
      default: () => toolbar
    },
    // 隐藏右下角技术支持
    branding: {
      type: Boolean,
      default: false
    },
    /*
    界面语言

    设置TinyMCE的界面语言，tiny默认是英文的，要变中文需要下载汉化包放到指定目录内，然后使用该配置：

    language:'zh_CN'
  */
    language: {
      type: String,
      default: 'zh_CN'
    },
    // 容器的id
    selectorId: {
      type: String,
      default: `tinymce-id-${new Date().getTime()}`
    },
    /*
    1级菜单

    指定哪些一级菜单显示，或调整菜单顺序。

    如要隐藏菜单栏，将其值设为false即可。
   */
    menubar: {
      type: [String, Boolean],
      default: 'bar1 file edit insert view format table'
    },
    /*
    自定义菜单

    指定菜单栏及下拉菜单上放置的项目（其还提供创建自定义标题菜单的方法）。

    其值是一个包含菜单项目的对象，由 菜单项:{ 标题 , 子菜单项 } 组成。

    如果只需要指定哪些一级菜单显示，或调整菜单顺序，可使用menubar。
   */
    menu: Object,
    /*  */
    fontsize_formats: {
      type: String,
      default: fontsize_formats
    },
    /*  */
    font_formats: {
      type: String,
      default: font_formats
    },
    /*
    预置链接列表

    在对话框中提供一个链接备选列表供用户选择。
  */
    link_list: Object,
    /*
    提供一个预先定义好的图片下拉列表，其值为一个数组，每一项都必须含有标题title和图片地址value。
  */
    image_list: {
      type: Array,
      default: () => {
        return [
          { title: '预置图片1', value: 'https://www.tiny.cloud/images/glyph-tinymce@2x.png' },
          { title: '预置图片2', value: 'https://www.baidu.com/img/bd_logo1.png' }
        ];
      }
    },
    /* 为图片属性对话框提供一个class选择列表 */
    image_class_list: {
      type: Array,
      default: () => {
        return [
          { title: 'None', value: '' },
          { title: 'Some class', value: 'class-name' }
        ];
      }
    },
    /*
    在编辑器右下角有一个可以拖动的标记，鼠标按住它可以改变编辑器的大小。
    默认resize: true

    可选值为：true（仅允许改变高度）, false（完全不让你动）, 'both'（宽高都能改变，注意引号）

    如要禁止用户拖动改变编辑器大小，设为false即可。
  */
    resize: {
      type: [Boolean, String],
      default: true
    },
    /*
    是否显示状态栏

    状态栏指的是编辑器最底下、左侧显示dom信息、右侧显示Tiny版权链接和调整大小的那一条。
  */
    statusbar: {
      type: Boolean,
      default: true
    },
    // 是否固定工具栏
    toolbar_sticky: {
      type: Boolean,
      default: true
    },
    // 如果设为true，则新引入的样式会附加到原有的末尾，并替换默认格式。
    importcss_append: {
      type: Boolean,
      default: true
    },
    // 当关闭或跳转URL时，弹出提示框提醒用户仍未保存变更内容。默认开启提示。
    autosave_ask_before_unload: Boolean,
    // 编辑器高度
    height: {
      type: Number,
      default: 650
    },
    // 编辑器最小高度
    min_height: {
      type: Number,
      default: 400
    },
    // 自动保存的时间间隔
    autosave_interval: {
      type: String,
      default: '30s'
    },
    // 自动保存的数据存储的最大时间
    autosave_retention: {
      type: String,
      default: '30m'
    },
    object_resizing: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    init() {
      // 由于tinymce是全局的因此二次加载时不会再次渲染，这里需要将老的tinymce清除
      if (this.$tinymce.editors.length > 0) {
        this.$tinymce.editors.forEach((item, i) => {
          if (item.id == this.selectorId) {
            this.$tinymce.editors[i].remove();
          }
        });
      }
      this.$tinymce.init({
        selector: `#${this.selectorId}`,
        doctype: '<!DOCTYPE html>',
        entities: '160,nbsp,162,cent,8364,euro,163,pound',
        toolbar_mode: 'sliding',
        language: this.language,
        content_css: [
          'http://tinymce.ax-z.cn/static/tiny/skins/ui/oxide/content.min.css',
          '/tinymce-content.css'
        ],
        inline: this.inline,
        branding: this.branding,
        // 菜单栏
        menubar: this.menubar,
        menu: this.menu,
        // 工具栏
        toolbar: this.toolbar,
        // 插件 preview:预览插件
        plugins: this.plugins,
        // 监听 tinymce 初始化完成事件
        setup: (editor) => {
          editor.on('init', (e) => {
            editor.setContent(this.value);
          });
        },
        // 监听 input 和 change 事件,实时更新 value
        init_instance_callback: (editor) => {
          editor.on('input', (e) => {
            this.$emit('input', e.target.innerHTML);
          });
          editor.on('change', (e) => {
            this.$emit('input', e.level.content);
          });
          editor.on('fous', (e) => {
            console.log(1111);
            //  this.$emit('blur', e.level.content);
          });
        },
        // 自动保存的时间间隔
        autosave_interval: this.autosave_interval,
        // 自动保存的数据存储的最大时间
        autosave_retention: this.autosave_retention,
        // 当关闭或跳转URL时，弹出提示框提醒用户仍未保存变更内容。默认开启提示。
        autosave_ask_before_unload: this.autosave_ask_before_unload,
        // 在编辑器右下角有一个可以拖动的标记，鼠标按住它可以改变编辑器的大小
        resize: this.resize,
        // 是否显示状态栏
        statusbar: this.statusbar,
        // 编辑器高度
        height: this.height,
        // 编辑器最小高度
        min_height: this.min_height,
        // 字体大小
        fontsize_formats: this.fontsize_formats,
        // 字体类型
        font_formats: this.font_formats,
        link_list: this.link_list,
        image_list: this.image_list,
        image_class_list: this.image_class_list,
        importcss_append: this.importcss_append,
        toolbar_sticky: this.toolbar_sticky,
        object_resizing: 'table',
        quickbars_insert_toolbar: this.quickbars_insert_toolbar,
        quickbars_selection_toolbar: this.quickbars_selection_toolbar,
        ...this.$attrs
      });
    }
  },

  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="scss">
@import url('./skins/ui/oxide/skin.min.css');
</style>
