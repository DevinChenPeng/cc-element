<!--
 * @Description: 
 * @Date: 2021-10-15 11:32:38
 * @LastEditTime: 2021-10-15 14:55:38
 * @FilePath: \web-template\src\views\mds\components\dialog\index.vue
 * @Author: Devin
-->
<template>
  <div class="dialog">
    <el-card class="box-card">
      <div slot="header">
        <p class="title">基本对话框</p>
        <p class="hide">这里只是改变了<code>dialog</code>的可拖拽效果，并未任何样式。</p>
      </div>
      <div class="template">
        <CcButton @click="visible = true">基本对话框</CcButton>
      </div>
      <Code>
        <div v-html="codeData.code"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">阻止关闭对话框</p>
        <p class="hide">
          使用<code>stopCloseFun</code>，关闭前的回调，会暂停<code>Dialog</code>的关闭，<code>function(done)</code>，<code
            >done</code
          >
          用于关闭 <code>Dialog</code>
        </p>
      </div>
      <div class="template">
        <CcButton @click="visible1 = true">阻止关闭对话框</CcButton>
      </div>
      <Code>
        <div v-html="codeData.code1"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">参数详情</p>
        <p class="hide">本文档只列举对element-ui属性进行修改过的值。</p>
        <p class="hide">
          <a href="https://element.eleme.cn/#/zh-CN/component" target="blank"
            >更多属性请移步element-ui官网</a
          >
        </p>
      </div>
      <div class="template">
        <ParamsTable :tableData="tableData" :title="'Attributes'"></ParamsTable>
      </div>
    </el-card>
    <CcDialog
      :visible.sync="visible"
      @close="visible = false"
      @handleCancel="visible = false"
      @open="open"
      >基本对话框</CcDialog
    >
    <CcDialog
      :visible.sync="visible1"
      @close="visible1 = false"
      @handleCancel="visible1 = false"
      :stopCloseFun="stopCloseFun"
    >
      阻止关闭对话框
    </CcDialog>
  </div>
</template>

<script>
import Code from '@/components/code';
import codeData from './code.js';
export default {
  components: {
    Code
  },
  data() {
    return {
      visible: false,
      visible1: false,
      tableData: [
        {
          params: 'visible',
          explain: '是否显示 Dialog，支持 .sync 修饰符',
          type: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'dialogDrag',
          explain: '是否开启对话框可拖动',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'title',
          explain: 'Dialog 的标题',
          type: 'string',
          value: '',
          default: '标题'
        },
        {
          params: 'close-on-click-modal',
          explain: '是否可以通过点击 modal 关闭 Dialog',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'show-footer',
          explain: '是否采用默认的 Dialog 按钮操作区的内容',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'stop-close-fun',
          explain: '关闭前的回调，会暂停 Dialog 的关闭',
          type: 'function(done)，done 用于关闭 Dialog',
          value: '',
          default: ''
        },
        {
          params: 'cancelBtnText',
          explain: 'Dialog 按钮操作区的取消按钮文字',
          type: 'string',
          value: '',
          default: '取消'
        },
        {
          params: 'confirmBtnText',
          explain: 'Dialog 按钮操作区的确定按钮文字',
          type: 'string',
          value: '',
          default: '确定'
        },
        {
          params: 'handleCancel',
          explain: '取消方法',
          type: 'function',
          value: '',
          default: ''
        },
        {
          params: 'handleConfirm',
          explain: '确定方法',
          type: 'function',
          value: '',
          default: ''
        },
      ]
    };
  },
  created() {},
  computed: {
    codeData() {
      return codeData;
    }
  },
  methods: {
    stopCloseFun(done) {
      this.$cc_message_confirm(
        {},
        () => done(),
        () => this.$cc_message.success('阻止关闭')
      );
    },
    open() {
      this.$cc_message.success('弹框打开');
    }
  },
  watch: {}
};
</script>
