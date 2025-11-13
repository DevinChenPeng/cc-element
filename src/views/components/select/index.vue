<!--
 * @Description: 
 * @Date: 2021-09-18 13:45:06
 * @LastEditTime: 2021-09-30 10:46:34
 * @FilePath: \mds\src\views\mds\components\select\index.vue
 * @Author: Devin
-->
<template>
  <div class="select">
    <el-card class="box-card">
      <div slot="header">
        <p class="title">默认选择器</p>
        <p class="hide">
          修改了 size 的默认值为 small，对它的 option
          的进行了封装，并且添加了远程数据模式，不在需要开发人员再关心业务代码，修改了 value 和
          label 的值绑定为 id 和 name。<a style="color: #0091ff" href="#Attributes">更多详情>></a>
        </p>
      </div>
      <div class="template">
        <CcSelect
          v-model="data0"
          :options="options"
          placeholder="默认选择器"
          style="margin-right: 20px"
          :disableValues="[]"
        ></CcSelect>
        <CcSelect
          v-model="data4"
          :options="options"
          placeholder="多选选择器"
          :multiple="true"
        ></CcSelect>
      </div>
      <Code>
        <div v-html="codeData.code_1"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">使用插槽slot，设置el-option</p>
        <p class="hide">
          对外暴露了两个数据值：optionLists，optionKeys。<a
            style="color: #0091ff"
            href="#Attributes"
            >更多详情>></a
          >
        </p>
      </div>
      <div class="template">
        <CcSelect
          v-model="data1"
          :options="options"
          placeholder="使用slot选择器"
          :showOptionSlot="true"
        >
          <template #option="{ optionLists, optionKeys }">
            <el-option
              v-for="item in optionLists"
              :key="item[optionKeys.value]"
              :label="item[optionKeys.label] + 'slot'"
              :value="item[optionKeys.value]"
            />
          </template>
        </CcSelect>
      </div>
      <Code>
        <div v-html="codeData.code_2"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">远程数据模式</p>
        <p class="hide">
          支持自定义数据的层级，支持对接口传参。<a style="color: #0091ff" href="#Attributes"
            >更多详情>></a
          >
        </p>
      </div>
      <div class="template">
        <CcSelect
          v-model="data2"
          url="/select/list"
          placeholder="远程数据模式"
          :optionKeys="{ value: 'id', label: 'name' }"
          filterable
        ></CcSelect>
      </div>
      <Code>
        <div v-html="codeData.code_3"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">禁用选项模式</p>
        <p class="hide">
          支持匹配多数据禁用。<a style="color: #0091ff" href="#Attributes"
            >更多详情>></a
          >
        </p>
      </div>
      <div class="template">
      <CcSelect
        v-model="data3"
        url="/select/list"
        placeholder="禁用数据模式"
        :optionKeys="{ value: 'id', label: 'name' }"
        :disableValues="[false]"
        disableKey="status"
        filterable
      ></CcSelect>
      </div>
      <Code>
        <div v-html="codeData.code_4"></div>
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
          :routerLink="$route.path"
          style="margin-bottom: 20px"
        ></ParamsTable>
        <MethodsTable
          :tableData="tableData1"
          :title="'Methods'"
          :routerLink="$route.path"
        ></MethodsTable>
      </div>
    </el-card>
  </div>
</template>

<script>
import Code from '@/components/code';
import ParamsTable from '@/components/code/table.vue';
import codeData from './code.js';
export default {
  components: { Code, ParamsTable },
  data() {
    return {
      data0: '',
      data1: '',
      data2: '',
      data3: '',
      data4: '',
      options: [
        { id: '1', name: '王五' },
        { id: '2', name: '李四' }
      ],
      tableData: [
        {
          params: 'size',
          explain: '尺寸',
          type: 'string',
          value: 'large / medium / small / mini',
          default: 'small'
        },
        {
          params: 'options',
          explain: '本地 option 数据',
          type: 'Array',
          value: '-',
          default: '[]'
        },
        {
          params: 'url',
          explain: '接口url',
          type: 'String',
          value: '-',
          default: '-'
        },
        {
          params: 'params',
          explain: '接口参数',
          type: 'Object',
          value: '-',
          default: '-'
        },
        {
          params: 'listField',
          explain: 'options数据层级',
          type: 'String',
          value: '-',
          default: 'data'
        },
        {
          params: 'styles',
          explain: '样式',
          type: 'String / Object / Array',
          value: '-',
          default: 'width:260px'
        },
        {
          params: 'optionKeys',
          explain: '指定选项的vaule和label',
          type: 'Object',
          value: '-',
          default: "{value: 'id',label: 'name'}"
        },
        {
          params: 'disableKey',
          explain: '禁止选择的属性名，非必传',
          type: 'String',
          value: '-',
          default: ''
        },
        {
          params: 'disableValues',
          explain: '禁止选择的属性值，非必传，当设置disableKey时，必填。',
          type: 'String',
          value: '-',
          default: ''
        },
        {
          params: 'showKey',
          explain: '显示选项的属性名，非必传',
          type: 'String',
          value: '-',
          default: ''
        },
        {
          params: 'disableValues',
          explain: '显示选项的属性名，非必传，当设置showKey时，必填。',
          type: 'String',
          value: '-',
          default: ''
        }
      ],
      tableData1: [
        {
          params: 'responseData',
          explain: '返回远程数据模式下响应并处理过后的数据',
          value: 'callback(optionLists) | optionLists：下拉选项的list'
        },
        {
          params: 'change',
          explain: '选中值发生变化时触发',
          value: 'callback(val,data) | val：当前选中选项的value，data：当前选中的对象或数组'
        },
        {
          params: 'clearOptionLists',
          explain:
            "清空选项列表。使用方法`this.$refs['el-select'].clearOptionLists()`（例中`CcSelect`的`ref`属性为`el-select`）",
          value: '-'
        },
        {
          params: 'getOptions',
          explain:
            "刷新选项列表。使用方法`this.$refs['el-select'].getOptions()`（例中`CcSelect`的`ref`属性为`el-select`）",
          value: '-'
        }
      ]
    };
  },
  created() {},
  computed: {
    codeData() {
      return codeData;
    }
  },
  methods: {},
  watch: {}
};
</script>
<style scoped lang="scss"></style>
