<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span class="title">个人信息</span>
      </div>
      <div class="template">
        <CcForm
          :forms="forms"
          :submit-handler="submitHandler"
          :submit-error-handle="submitErrorHandle"
          :backHandler="onClose"
          ref="ElSearchForm"
          labelPosition="right"
          labelWidth="120px"
          itemWidth="80%"
          :showResetBtn="true"
        >
          <template #slotSex="{ params }">
            <el-radio-group v-model="params.porp" size="small">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
            </el-radio-group>
          </template>
        </CcForm>
      </div>
      <Code>
        <div v-html="codeData.code1"></div>
        <div v-html="codeData.code2"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">Form</p>
        <p class="hide">本文档只列举对element-ui属性进行修改过的值。</p>
        <p class="hide">
          <a href="https://element.eleme.cn/#/zh-CN/component" target="blank"
            >更多属性请移步element-ui官网</a
          >
        </p>
      </div>
      <div class="template">
        <ParamsTable
          :tableData="tableDataForm"
          :title="'Attributes'"
          style="margin-bottom: 20px"
        ></ParamsTable>
      </div>
    </el-card>
    <el-card class="box-card" id="FormItem">
      <div slot="header">
        <span class="title">Form Item</span>
      </div>
      <div class="template">
        <ParamsTable
          :tableData="tableDataFormItem"
          :title="'Attributes'"
          style="margin-bottom: 20px"
        ></ParamsTable>
      </div>
    </el-card>
  </div>
</template>

<script>
import nation56 from './nation';
import codeData from './code.js';

export default {
  data() {
    return {
      forms: {
        name: {
          prop: 'name',
          label: '姓名',
          itemType: 'input',
          span: 24,
          maxlength: 30,
          rules: [this.$requiredInput]
        },
        sex: {
          prop: 'sex',
          label: '性别',
          span: 24,
          slotName: 'slotSex'
        },
        birth: {
          prop: 'birth',
          label: '出生年月',
          itemType: 'date',
          span: 24,
          disabledTimeRange: {
            type: 'after'
          },
          rules: [this.$requiredSelect]
        },
        education: {
          prop: 'education',
          label: '学历',
          span: 24,
          itemType: 'select',
          options: [
            { id: '0', name: '博士' },
            { id: '1', name: '硕士' },
            { id: '2', name: '本科' },
            { id: '3', name: '大专' },
            { id: '4', name: '高中' },
            { id: '5', name: '初中' }
          ],
          disableValues: ['5'],
          disableKey: 'id',
          changeSelect: this.educationChange
        },
        school: {
          porp: 'school',
          label: '学校',
          span: 12,
          itemType: 'select',
          options: [
            { id: '0', name: '四川大学' },
            { id: '1', name: '成都电子科技大学' },
            { id: '2', name: '其他' }
          ],
          hidden: true
        },
        nation: {
          prop: 'nation',
          label: '民族',
          itemType: 'select',
          options: nation56,
          optionKeys: { value: 'id', label: 'name' }
        },
        phone: {
          porp: 'phone',
          label: '联系电话',
          itemType: 'input',
          maxlength: 30
        },
        email: {
          prop: 'email',
          label: '电子邮箱',
          itemType: 'input',
          maxlength: 30
        },
        address: {
          prop: 'address',
          label: '家庭住址',
          itemType: 'textarea',
          maxlength: 500
        }
      },
      codeData,
      tableDataForm: [
        {
          params: 'forms',
          explain: "<code>form</code>表单对象, 用法见上面案例代码说明或查看<a href='#FormItem'>FormItem</a>",
          type: 'object',
          value: '-',
          default: '-'
        },
        {
          params: 'size',
          explain: '用于控制该表单内组件的尺寸',
          type: 'string',
          value: 'medium / small / mini	',
          default: 'small'
        },
        {
          params: 'labelPosition',
          explain: '表单域标签的位置，如果值为 <code>left</code> 或者 <code>right</code> 时，则需要设置 <code>label-width</code>',
          type: 'string',
          value: 'right / left / top',
          default: 'top'
        },
        {
          params: 'gutter',
          explain: '每个<code>form item</code>的间隔',
          type: 'number',
          value: '-',
          default: '20'
        },
        {
          params: 'showResetBtn',
          explain: '是否显示取消按钮',
          type: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'showCancelButton',
          explain: '取消按钮是否显示',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'showSubmitButton',
          explain: '确认按钮是否显示',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'submitLoading',
          explain: '确认按钮是否添加<code>loading</code>',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'submitBtnText',
          explain: '确认按钮显示文本',
          type: 'string',
          value: '-',
          default: '确认'
        },
        {
          params: 'cancelBtnText',
          explain: '取消按钮显示文本',
          type: 'string',
          value: '-',
          default: '取消'
        },
        {
          params: 'resetBtnText',
          explain: '重置按钮显示文本',
          type: 'string',
          value: '-',
          default: '重置'
        },
        {
          params: 'resetBtnCallback',
          explain: '重置按钮事件',
          type: 'function',
          value: '-',
          default: '-'
        },
        {
          params: 'submit-handler',
          explain: '提交表单，默认返回表单对象',
          type: 'function',
          value: '-',
          default: '-'
        },
        {
          params: 'submit-error-handle',
          explain: '提交表单，校验失败，返回错误的字段对象',
          type: 'function',
          value: '-',
          default: '-'
        },
        {
          params: 'back-handler',
          explain: '取消按钮事件',
          type: 'function',
          value: '-',
          default: '-'
        }
      ],
      tableDataFormItem: [
        {
          params: 'porp',
          explain: '表单参数',
          type: 'string',
          value: '-',
          default: '-'
        },
        {
          params: 'label',
          explain: '字段名',
          type: 'string | number',
          value: '-',
          default: '-'
        },
        {
          params: 'itemType',
          explain: '表单类型',
          type: 'string',
          value: 'input / textarea / select / scrollSelect / date / text',
          default: 'input'
        },
        {
          params: 'span',
          explain: '每个<code>item</code>所占的份数	',
          type: 'string',
          value: '1-24',
          default: '24'
        },
        {
          params: 'itemWidth',
          explain: '表单长度',
          type: 'number',
          value: '-',
          default: '30 / 500'
        },
        {
          params: 'maxlength',
          explain: '最大值',
          type: 'number',
          value: '-',
          default: '30 / 500'
        },
        {
          params: 'hidden',
          explain: '是否隐藏',
          type: 'boolean',
          value: '-',
          default: '-'
        },
        {
          params: 'rules',
          explain: '表单验证规则',
          type: 'array',
          value: '-',
          default: '-'
        },
        {
          params: 'options',
          explain: '下拉选项',
          type: 'array',
          value: '-',
          default: '-'
        },
        {
          params: 'optionKeys',
          explain: '<code>itemType</code>为<code>select</code>、<code>scrollSelect</code>时，下拉<code>option</code>的属性值',
          type: 'object',
          value: '-',
          default: `{ value: 'id', label: 'name' }`
        },
        {
          params: 'url',
          explain: '<code>itemType</code>为<code>select</code>、<code>scrollSelect</code>时，远程接口-地址',
          type: 'string',
          value: '-',
          default: '-'
        },
        {
          params: 'params',
          explain: '<code>itemType</code>为<code>select</code>、<code>scrollSelect</code>时，远程接口-参数',
          type: 'object',
          value: '-',
          default: '{}'
        },
        {
          params: 'listField',
          explain: '<code>itemType</code>为<code>select</code>、<code>scrollSelect</code>时，远程接口-返回数据的对象指向',
          type: 'string',
          value: '-',
          default: 'data.records'
        },
        {
          params: 'changeSelect',
          explain: '<code>itemType</code>为<code>select</code>、<code>scrollSelect</code>时，切换下拉',
          type: 'function',
          value: '-',
          default: '-'
        },
        {
          params: 'responseData',
          explain: '<code>itemType</code>为<code>select</code>、<code>scrollSelect</code>时，远程接口-返回数据完毕',
          type: 'function',
          value: '-',
          default: '-'
        }
      ]
    };
  },
  methods: {
    educationChange(val, valObj, params) {
      params.school = '';
      if (val) {
        this.forms['education'].span = 12;
        this.forms['school'].hidden = false;
      } else {
        this.forms['education'].span = 24;
        this.forms['school'].hidden = true;
      }
    },
    submitHandler(params) {
      console.log('submitHandler', params);
    },
    submitErrorHandle(inValidObj) {
      console.log('submitErrorHandle', inValidObj);
    },
    onClose() {}
  }
};
</script>

<style lang="scss" scoped>
</style>