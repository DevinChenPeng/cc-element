<!--
 * @Description: 
 * @Date: 2021-09-17 16:08:25
 * @LastEditTime: 2021-10-15 14:42:26
 * @FilePath: \web-template\src\views\mds\components\input\index.vue
 * @Author: Devin
-->
<template>
  <div class="input">
    <el-card class="box-card">
      <div slot="header">
        <p class="title">默认输入框</p>
        <p class="hide">
          失焦自动去除了首尾空格，默认大小改为了small，改变了输入字数统计的呈现方式，包含所有element-ui的功能，在业务功能中任何输入框都应有长度限制，这里增加了最大字数显示单行文本为64，多行输入为500。<a style="color: #0091ff" href="#Input-Attributes"
            >更多详情>></a
          >
        </p>
      </div>
      <div class="template">
        <CcInput v-model="data0" size="mini" style="margin-bottom: 20px"></CcInput>
        <CcInput v-model="data6" style="margin-bottom: 20px"></CcInput>
        <CcInput v-model="data7" size="medium" style="margin-bottom: 20px"></CcInput>
        <CcInput v-model="data8" size="large" style="margin-bottom: 20px"></CcInput>
      </div>
      <Code>
        <div v-html="codeData.code_1"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">复合型输入框</p>
        <p class="hide">可前置或后置元素，一般为标签或按钮。<a style="color: #0091ff" href="#Input-Attributes"
            >更多详情>></a
          ></p>
      </div>
      <div class="template">
        <CcInput v-model="data1" style="margin-bottom: 20px">
          <template slot="append"><i class="el-icon-search"></i></template>
        </CcInput>
        <CcInput v-model="data4" style="margin-bottom: 20px">
          <template slot="prepend">Http://</template>
        </CcInput>
        <CcInput v-model="data5">
          <template slot="prepend">Http://</template>
          <template slot="append"><i class="el-icon-search"></i></template>
        </CcInput>
      </div>
      <Code>
        <div v-html="codeData.code_2"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">禁用状态</p>
      </div>
      <div class="template">
        <CcInput v-model="data2" disabled style="margin-bottom: 20px"></CcInput>
        <CcTextarea v-model="data10" disabled></CcTextarea>
      </div>
      <Code>
        <div v-html="codeData.code_3"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">文本域</p>
        <p class="hide">
          默认设置了minRows为2，maxRows为6，失焦自动去除了首尾空格，改变了输入字数统计的呈现方式。<a style="color: #0091ff" href="#Input-Attributes"
            >更多详情>></a
          >
        </p>
      </div>
      <div class="template">
        <CcTextarea v-model="data3"></CcTextarea>
      </div>
      <Code>
        <div v-html="codeData.code_4"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">是否显示字数统计</p>
        <p class="hide">
          默认设置了为true，因为需要获取焦点过后才显示字数，则对原有的element-ui的Attributes中的show-word-limit进行了修改为openShowLimit。<a style="color: #0091ff" href="#Input-Attributes"
            >更多详情>></a
          >
        </p>
      </div>
      <div class="template">
        <CcInput v-model="data12" style="margin-bottom: 20px" :openShowLimit="false"></CcInput>
        <CcTextarea v-model="data11" :openShowLimit="false"></CcTextarea>
      </div>
      <Code>
        <div v-html="codeData.code_5"></div>
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
          :title="'Input-Attributes'"
          :routerLink="$route.path"
          style="margin-bottom: 20px"
        ></ParamsTable>
        <ParamsTable
          :tableData="tableData1"
          :title="'Textarea-Attributes'"
          :routerLink="$route.path"
        ></ParamsTable>
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
      data5: '',
      data6: '',
      data7: '',
      data8: '',
      data9: '',
      data10: '',
      data11: '',
      data12: '',
      tableData: [
        {
          params: 'size',
          explain: '尺寸',
          type: 'string',
          value: 'large / medium / small / mini',
          default: 'small'
        },
        {
          params: 'openShowLimit',
          explain: '显示字符限制',
          type: 'Boolean',
          value: '-',
          default: 'true'
        },
        {
          params: 'maxlength',
          explain: '最大长度',
          type: 'String / Number',
          value: '-',
          default: '64'
        }
      ],
      tableData1: [
        {
          params: 'autosize',
          explain: '行数限制',
          type: 'Object',
          value: '-',
          default: '{ minRows: 2, maxRows: 6 }'
        },
        {
          params: 'openShowLimit',
          explain: '显示字符限制',
          type: 'Boolean',
          value: '-',
          default: 'true'
        },
        {
          params: 'maxlength',
          explain: '最大长度',
          type: 'String / Number',
          value: '-',
          default: '500'
        },
        {
          params: 'resize',
          explain: '控制是否能被用户缩放',
          type: 'string',
          value: 'none / both / horizontal / vertical',
          default: 'none'
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
<style scoped lang='scss'>
</style>