<!--
 * @Description: 
 * @Date: 2021-09-18 13:45:13
 * @LastEditTime: 2021-10-11 14:24:15
 * @FilePath: \web-template\src\views\mds\components\date_select\index.vue
 * @Author: Devin
-->
<template>
  <div class="input">
    <el-card class="box-card">
      <div slot="header">
        <p class="title">默认日期选择器</p>
        <p class="hide">
          设置了默认的时间格式<code>value-format</code>，修改了<code>size</code>的默认值，定制了禁用的时间书写方式。
        </p>
      </div>
      <div class="template">
        <CcDatePicker v-model="data0" style="margin-right: 20px" type="datetime"></CcDatePicker>
      </div>
      <Code>
        <div v-html="codeData.code_1"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">限制过去未来时间</p>
        <p class="hide">
          不在需要写重复繁琐<code>picker-options</code>更高的复用性，更简单的方式，简单的一个属性<code>disabledTimeRange</code>即可实现。
        </p>
      </div>
      <div class="template">
        <CcDatePicker
          v-model="data1"
          :disabledTimeRange="{
            type: 'after'
          }"
          placeholder="禁用未来时间"
          style="margin-right: 20px"
        ></CcDatePicker>
        <CcDatePicker
          v-model="data2"
          :disabledTimeRange="{
            type: 'before'
          }"
          placeholder="禁用过去时间"
        ></CcDatePicker>
      </div>
      <Code>
        <div v-html="codeData.code_2"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">设置可以选择的时间范围</p>
        <p class="hide">
          设置一个开始<code>startValue</code>的时间和设置一个结束<code>endValue</code>的时间。必须设置你传入的的开始时间和结束时间的时间格式<code>dateFormat</code>，当然这里开始时间和结束时间只是一个变量值，没有限制开始时间必须早于结束时间，该组件会自动判断时间的先后顺序。
        </p>
      </div>
      <div class="template">
        <div class="item">
          <div class="item-name">只能选择<code>2021-07-01 - 2021-10-01</code></div>
          <CcDatePicker
            v-model="data3"
            :disabledTimeRange="{
              type: 'range',
              startValue: '2021-07-01',
              endValue: '2021-10-01',
              dateFormat: 'YYYY-MM-DD'
            }"
            placeholder="禁用某段时间"
          ></CcDatePicker>
        </div>
        <div class="item">
          <div class="item-name">只能选择 <code>2021-09-15 - 今天</code></div>
          <CcDatePicker
            v-model="data4"
            :disabledTimeRange="{
              type: 'range',
              startValue: '2021-09-15',
              endValue: newDate,
              dateFormat: 'YYYY-MM-DD'
            }"
            placeholder="禁用某段时间"
          ></CcDatePicker>
        </div>
      </div>
      <Code>
        <div v-html="codeData.code_3"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">设置日期和时间范围</p>
        <p class="hide">
          这里默认设置了时间格式和默认的<code>placeholder</code>，并对<code>null</code>值做了处理<code>null => ['', '']</code>。
        </p>
      </div>
      <div class="template">
        <CcDatePickerRange v-model="data5"></CcDatePickerRange>
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
          <i class="iconfont icon-tishi" style="margin-right: 8px"></i
          ><span style="color: red"
            >如果设置了<code>picker-options</code>则<code>disabled-time-range</code>不会生效。</span
          >
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
          :title="'Attributes'"
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
import dayjs from 'dayjs';
export default {
  components: { Code, ParamsTable },
  data() {
    return {
      data0: '',
      data1: '',
      data2: '',
      data3: '',
      data4: '',
      data5: ['', ''],
      newDate: dayjs(new Date(), ['YYYY-MM-DD']),
      tableData: [
        {
          params: 'size',
          explain: '尺寸',
          type: 'string',
          value: 'large / medium / small / mini',
          default: 'small'
        },
        {
          params: 'prefix-icon',
          explain: '自定义头部图标的类名',
          type: 'String',
          value: '-',
          default: 'iconfont icon-riqi'
        },
        {
          params: 'value-format',
          explain: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
          type: 'String',
          value: '-',
          default: 'yyyy-MM-dd HH:mm:ss'
        },
        {
          params: 'disabled-time-range',
          explain:
            '日期可选的范围，该属性对象有4个键值，分别为｛type、startValue、endValue、dateFormat｝，其中type代表需要禁用的类型，分别有after（禁用未来时间），before（禁用过去时间），range（可选范围），当type = range 时需要设置 startValue 、 endValue 和 dateFormat（必须和startValue和endValue时间格式一致）。',
          type: 'Object',
          value: '',
          default: "{ type: '' }"
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