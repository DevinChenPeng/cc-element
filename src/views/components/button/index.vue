<!--
 * @Description: 
 * @Date: 2021-09-17 13:18:12
 * @LastEditTime: 2021-12-29 11:42:55
 * @FilePath: \web-template\src\views\mds\components\button\index.vue
 * @Author: Devin
-->
<template>
  <div class="icon-btn">
    <el-card class="box-card">
      <div slot="header">
        <p class="title">默认按钮</p>
        <p class="hide">这里只是改变了element按钮的样式和修改了size的默认尺寸，没有改变其功能。</p>
      </div>
      <div class="template">
        <CcButton @click="visible = true">添加</CcButton>
        <CcButton type="basic" @click="aaaa">取消性质按钮</CcButton>
        <CcButton type="text">文字按钮</CcButton>
        <CcButton type="textAdd">添加</CcButton>
      </div>

      <Code>
        <div v-html="codeData.code_built_in"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">禁用按钮和文字按钮</p>
      </div>
      <div class="template">
        <CcButton disabled>禁用按钮</CcButton>
        <CcButton disabled type="basic">禁用取消性质按钮</CcButton>
        <CcButton type="text" disabled>文字按钮</CcButton>
      </div>
      <Code>
        <div v-html="codeData.code_2"></div>
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
    </el-card>
    <CcDialog
      :visible.sync="visible"
      @close="visible = false"
      @handleCancel="visible = false"
      :stopCloseFun="stopCloseFun"
    ></CcDialog>
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
      visible: false
    };
  },
  created() {},
  computed: {
    codeData() {
      return codeData;
    }
  },
  methods: {
    aaaa(){
      this.$cc_message.success('阻止取消')
    },
    stopCloseFun(done) {
      this.$cc_message_confirm(
        {},
        () => done(),
        () => this.$cc_message.success('阻止取消')
      );
    }
  },
  watch: {}
};
</script>
