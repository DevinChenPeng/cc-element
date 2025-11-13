<!--
 * @Description: 
 * @Date: 2021-09-29 13:46:03
 * @LastEditTime: 2021-09-30 10:44:07
 * @FilePath: \mds\src\views\mds\components\switch\index.vue
 * @Author: Devin
-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">默认开关</p>
        <p class="hide">
          在很多时候，当我们点击一个开关需要弹出一个二次确认框点击确定的时候才去改变他的状态，但是element提供的按钮是点击过后就会将切换状态，这里组件就对这种情况进行了处理。
        </p>
        <p class="hide">
          <a style="color: #0091ff" href="#Attributes">更多详情>></a>
        </p>
      </div>
      <div class="template">
        <CcSwitch v-model="data" @change="changeValue"/>
      </div>
      <Code>
        <div v-html="codeData.code"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">打开二次弹框（状态异步更新）</p>
        <p class="hide">设置<code>openMessageBox</code>属性，默认内嵌了二次弹框，<code>confirmFun</code>是点击确认的回调函数，<code>cancelFun</code>是点击取消的函数。</p>
        <p class="hide">用户点击这个 <code>Switch</code> 组件后，会发送一个请求。请求获得正确结果后，再切换 <code>Switch</code> 组件的状态。</p>
        <p class="hide">
          这里提供了两种处理方式：
          <ul>
            <li>第一种：组件内部处理接口逻辑，只需传入接口请求地址<code>url</code>，接口请求方式<code>method</code>，请求参数<code>params</code>。当然如果你传递了<code>confirmFun</code>最后也会抛出<code>confirmFun</code>回调函数。</li>
            <li>第二种：当没传递url参数是，当点击确定会抛出一个<code>confirmFun</code>函数。</li>
          </ul>
        </p>
        <p class="hide">
          <a style="color: #0091ff" href="#Attributes">更多详情>></a>
        </p>
      </div>
      <div class="template">
      <CcSwitch
        v-model="data1"
        openMessageBox
        url="/change/switch"
        :params="{ name: 0 }"
        :confirmFun="confirmFun"
      />
      </div>
      <Code>
        <div v-html="codeData.code1"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">禁用开关</p>
        <p class="hide">设置开关属性为<code>disabled</code>。</p>
        <p class="hide">
          <a style="color: #0091ff" href="#Attributes">更多详情>></a>
        </p>
      </div>
      <div class="template">
        <CcSwitch v-model="data2" openMessageBox :disabled="true"/>
      </div>
      <Code>
        <div v-html="codeData.code2"></div>
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
        <ParamsTable
          :tableData="tableData"
          :title="'Attributes'"
          style="margin-bottom: 20px"
        ></ParamsTable>
        <MethodsTable
          :tableData="tableData1"
          :title="'Methods'"
        ></MethodsTable>
      </div>
    </el-card>
  </div>
</template>

<script>
import Code from '@/components/code';
import codeData from './code';
export default {
  components: { Code },
  data() {
    return {
      data: 1,
      data1: 2,
      data2: 1,
      tableData:[
        {
          params: 'confirm-fun',
          explain: '点击确认按钮时的回调函数，参数是当前状态的值',
          type: 'function',
          value: '',
          default: ''
        },
        {
          params: 'cancel-fun',
          explain: '点击取消按钮时的回调函数，参数是当前状态的值',
          type: 'function',
          value: '',
          default: ''
        },
        {
          params: 'open-message-box',
          explain: '是否开启二次确认弹框模式',
          type: 'boolean',
          value: 'true / false',
          default: '是否停用？'
        },
        {
          params: 'active-message',
          explain: "开启时的弹框提示语，仅当<code>openMessageBox='true'</code>时生效",
          type: 'string',
          value: '',
          default: '是否启用？'
        },
        {
          params: 'inActive-message',
          explain: "关闭时的弹框提示语，仅当<code>openMessageBox='true'</code>时生效",
          type: 'string',
          value: '',
          default: '是否停用？'
        },
        {
          params: 'url',
          explain: "请求接口的地址，仅当<code>openMessageBox='true'</code>时生效",
          type: 'string',
          value: '',
          default: ''
        },
        {
          params: 'params',
          explain: "请求参数，默认会添加一个属性是当前开关绑定的属性值",
          type: 'Object',
          value: '',
          default: '{ }'
        },
        {
          params: 'method',
          explain: "接口请求的方式",
          type: 'string',
          value: 'get / post / delete / put',
          default: 'post'
        },
        {
          params: 'field',
          explain: "绑定参数的key",
          type: 'string',
          value: '',
          default: 'status'
        },
        {
          params: 'is-loading',
          explain: "是否开启loading，仅当<code>openMessageBox='true'</code>时生效",
          type: 'string',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'disabled',
          explain: "是否禁用开关",
          type: 'boolean',
          value: 'true / false',
          default: 'false'
        }
      ],
      tableData1:[
        {
          params: 'changeValue',
          explain: '当数据改变时，触发的函数',
          value: ''
        }
      ]
    };
  },
  methods: {
    confirmFun(data) {
      this.data1 = data;
    },
    changeValue(data) {
      console.log(data);
    }
  },
  computed: {
    codeData() {
      return codeData;
    }
  }
};
</script>

<style lang="scss">
</style>