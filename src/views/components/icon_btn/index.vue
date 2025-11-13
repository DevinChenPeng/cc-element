<!--
 * @Description: 
 * @Date: 2021-09-17 13:18:12
 * @LastEditTime: 2021-09-27 13:43:38
 * @FilePath: \mds\src\views\mds\components\icon_btn\index.vue
 * @Author: Devin
-->
<template>
  <div class="icon-btn">
    <el-card class="box-card">
      <div slot="header">
        <p class="title">内置图标按钮</p>
      </div>
      <div class="template">
        <IconButton></IconButton>
        <IconButton iconType="delete"></IconButton>
        <IconButton iconType="cancel"></IconButton>
        <IconButton iconType="move"></IconButton>
        <IconButton iconType="confirm"></IconButton>
        <IconButton iconType="uploading"></IconButton>
        <IconButton iconType="download"></IconButton>
      </div>

      <Code>
        <div v-html="codeData.code_built_in"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">自定义图标</p>
      </div>
      <div class="template"><IconButton icon="icon-echarts" title="Echarts"></IconButton></div>
      <Code>
        <div v-html="codeData.code_2"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">自定义背景，hover，字体颜色</p>
      </div>
      <div class="template">
        <IconButton bg-color="#000"></IconButton>
        <IconButton bg-color-hover="red"></IconButton>
        <IconButton color="#000"></IconButton>
      </div>
      <Code>
        <div v-html="codeData.code_3"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <span class="title">禁用按钮</span>
      </div>
      <div class="template">
        <IconButton disabled></IconButton>
      </div>
      <Code>
        <div v-html="codeData.code_4"></div>
      </Code>
    </el-card>

    <el-card class="box-card">
      <div slot="header">
        <p class="title">参数详情</p>
        <p class="hide">本文档只列举对element-ui属性进行修改过的值。</p>
      </div>
      <div class="template">
        <ParamsTable
          :tableData="tableData"
          :title="'Attributes'"
          :routerLink="$route.path"
          style="margin-bottom: 20px"
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
  components: {
    Code,
    ParamsTable
  },
  data() {
    return {
      tableData: [
        {
          params: 'iconType',
          explain: '图标类型',
          type: 'string',
          value: 'editor / delete / confirm / look / download / uploading / cancel / move',
          default: 'editor'
        },
        {
          params: 'title',
          explain: '鼠标划入title文字提示',
          type: 'String',
          value: '-',
          default: '-'
        },
        {
          params: 'bgColor',
          explain: '背景色',
          type: 'String',
          value: '-',
          default: 'rgba(0,0,0,0.0)'
        },
        {
          params: 'bgColorHover',
          explain: '鼠标划入背景色',
          type: 'String',
          value: '-',
          default: 'rgba(0,0,0,0.04)'
        },
        {
          params: 'color',
          explain: '文字颜色',
          type: 'String',
          value: '-',
          default: '#0091ff'
        },
        {
          params: 'icon',
          explain: '自定义图标样式名',
          type: 'String',
          value: '-',
          default: '-'
        },

        {
          params: 'customStyle',
          explain: '通用样式',
          type: 'String / Object / Array',
          value: '-',
          default: '-'
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
