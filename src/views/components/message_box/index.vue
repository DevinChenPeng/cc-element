<!--
 * @Description:
 * @Date: 2021-09-22 11:15:19
 * @LastEditTime: 2021-09-27 13:45:45
 * @FilePath: \mds\src\views\mds\components\message_box\index.vue
 * @Author: Devin
-->
<template>
  <div class="message_box">
    <el-card class="box-card">
      <div slot="header">
        <p class="title">默认弹框</p>
        <p class="hide">对弹框进行二次封装，使其更适用于我们的业务。</p>
      </div>
      <div class="template">
        <CcButton @click="showMessageBox()">打开confirm弹框</CcButton>
        <CcButton @click="showMessageBox1()">打开alert弹框</CcButton>
      </div>
      <Code>
        <div v-html="codeData.code"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">参数详情</p>
        <p class="hide">本文档只列举对element-ui属性进行修改过的值。</p>
        <p class="hide">
          使用方式：参数1： 弹框的配置项，参数2：确定的回调，参数3：取消的回调
          <ul>
            <li><code>this.$cc_message_confirm(options, callback, callback);</code></li>
            <li><code>this.$cc_message_alert(options, callback, callback);</code></li>
          </ul>
        </p>
        <p class="hide">
          <a href="https://element.eleme.cn/#/zh-CN/component" target="blank"
            >更多属性请移步element-ui官网</a
          >
        </p>
      </div>
      <div class="template">
        <ParamsTable
          :tableData="tableData"
          :title="'Options'"
          :routerLink="$route.path"
        ></ParamsTable>
      </div>
    </el-card>
  </div>
</template>

<script>
import ParamsTable from '@/components/code/table.vue';
import Code from '@/components/code';
import codeData from './code.js';
export default {
  components: {
    Code,
    ParamsTable
  },
  data() {
    return {
      tableData: [
        {
          params: 'title',
          explain: 'MessageBox 标题',
          type: 'string',
          value: '',
          default: '提示'
        },
        {
          params: 'message',
          explain: 'MessageBox 消息正文内容',
          type: 'string',
          value: '',
          default: '是否继续？'
        },
        {
          params: 'type',
          explain: '消息类型，用于显示图标',
          type: 'string',
          value: 'success / info / warning / error',
          default: 'warning'
        },
        {
          params: 'confirmButtonText',
          explain: '确定按钮的文本内容',
          type: 'string',
          value: '',
          default: '确定'
        },
        {
          params: 'cancelButtonText',
          explain: '取消按钮的文本内容',
          type: 'string',
          value: '',
          default: '取消'
        },
        {
          params: 'cancelButtonClass',
          explain: '取消按钮的自定义类名',
          type: 'string',
          value: '',
          default: 'cancelButtonClass'
        },
        {
          params: 'confirmButtonClass',
          explain: '确定按钮的自定义类名',
          type: 'string',
          value: '',
          default: 'confirmButtonClass'
        },
        {
          params: 'closeOnClickModal',
          explain: '是否可通过点击遮罩关闭 MessageBox（以 confirm 方式调用时生效）',
          type: 'boolean',
          value: '',
          default: 'false'
        }
      ]
    };
  },
  created() {
    console.log(this);
  },
  computed: {
    codeData() {
      return codeData;
    }
  },
  methods: {
    showMessageBox() {
      this.$cc_message_confirm(
        {},
        () => this.$cc_message.success('这是确定的回调'),
        () => this.$cc_message.success('这是取消的回调')
      );
    },
    showMessageBox1() {
      this.$cc_message_alert(
        {},
        () => this.$cc_message.success('这是确定的回调'),
        () => this.$cc_message.success('这是取消的回调')
      );
    }
  },
  watch: {}
};
</script>