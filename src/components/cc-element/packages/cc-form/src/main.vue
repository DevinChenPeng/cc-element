<template>
  <el-form
    :model="params"
    ref="form"
    @submit.native.prevent="searchHandler()"
    :label-position="labelPosition"
    v-bind="$attrs"
  >
    <el-row :gutter="gutter" >
      <el-col :span="form.span || 24" v-for="(form, index) in forms" :key="index">
        <el-form-item
          :key="index"
          :prop="form.prop"
          v-if="!form.hidden"
          :label="form.label"
          :rules="form.rules || []"
          :class="form.classArr"
          v-bind="$attrs"
        >
          <div slot="label" v-if="form.slotHeaderName" class="slotHeaderName">
            <slot :name="form.slotHeaderName" :params="params" :form="form" />
          </div>
          <template v-if="form.slotName">
            <slot :name="form.slotName" :params="params" :form="form" />
          </template>
          <template v-else>
            <CcInput
              v-if="form.itemType === 'input' || form.itemType === undefined"
              v-model="params[form.prop]"
              :style="itemWidth ?  `width: ${itemWidth}` :  `width: ${itemWidth}`"
              v-bind="{ ...form }"
              @clear="
                () => {
                  form.clearInput ? form.clearInput(data, thisOption, params) : '';
                }
              "
            ></CcInput>
            <CcTextarea
              v-else-if="form.itemType === 'textarea'"
              v-model="params[form.prop]"
              :autosize="{
                minRows: form.minRows || 2,
                maxRows: form.maxRows || 6
              }"
              :style="itemWidth ?  `width: ${itemWidth}` : 'width:100%'"
              v-bind="{ ...form }"
            ></CcTextarea>
            <CcSelect
              v-else-if="form.itemType === 'select'"
              v-model="params[form.prop]"
              :multiple="form.multiple || false"
              :filterable="form.filterable || true"
              :style="itemWidth ?  `width: ${itemWidth}` : 'width:100%'"
              :optionKeys="{ value: 'id', label: 'name' }"
              @change="
                (data, thisOption) => {
                  form.changeSelect ? form.changeSelect(data, thisOption, params, form) : '';
                }
              "
              @responseData="
                (data) => {
                  form.responseData ? form.responseData(data) : '';
                }
              "
              v-bind="{ ...form }"
            >
            </CcSelect>
            <CcVirtualRollingSelect
              v-else-if="form.itemType === 'scrollSelect'"
              :ref="form.ref"
              v-model="params[form.prop]"
              :filterable="form.filterable || true"
              :clearable="form.clearable || true"
              :style="itemWidth ?  `width: ${itemWidth}` : 'width:100%'"
              :url="form.url"
              :params="form.params"
              :listField="form.listField"
              :dataHandler="form.dataHandler"
              :optionKeys="{ value: 'id', label: 'name' }"
              @change="
                (data, thisOption) => {
                  form.changeSelect ? form.changeSelect(data, thisOption, params, form) : '';
                }
              "
              @responseData="
                (data) => {
                  form.responseData ? form.responseData(data) : '';
                }
              "
              v-bind="{ ...form }"
            ></CcVirtualRollingSelect>
            <CcDatePicker
              v-else-if="form.itemType === 'date'"
              v-model="params[form.prop]"
              :clearable="form.clearable || true"
              @change="
                (data) => {
                  form.changeSelect ? form.changeSelect(data, params) : '';
                }
              "
              :style="itemWidth ?  `width: ${itemWidth}` : 'width:100%'"
              v-bind="{ ...form }"
            ></CcDatePicker>
            <div
              v-else-if="form.itemType === 'text'"
              v-html="form.valueText || 'noData'"
            ></div>
          </template>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="" class="dialog-footer" v-if="showSubmitButton">
      <CcButton @click="cancelHandler" v-if="showCancelButton" type="basic">
        {{ cancelBtnText }}
      </CcButton>
      <CcButton @click="searchHandler" :loading="submitLoading">
        {{ submitBtnText }}
      </CcButton>
      <CcButton :plain="true" v-if="showResetBtn" @click="resetForm" :loading="submitLoading">
        {{ resetBtnText }}
      </CcButton>
    </el-form-item>
  </el-form>
</template>

<script>
import { formProps } from './props';

export default {
  name: 'ElSearchForm',
  props: formProps,
  inheritAttrs: false,
  data() {
    const datePrefix = 'daterange-prefix';
    return {
      params: {},
      datePrefix
    };
  },
  created() {
    this.refreshParams();
    for (let key in this.forms) {
      let v = this.forms[key];
      if (v.urlType === 'dictList') {
        this.$set(v, 'url', '/csradmin/pub/pltdict/crud/page');
        this.$set(v, 'listField', 'data.records');
        this.$set(v, 'params', {
          selectType: v.selectType
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit('params', this.params);
      this.$refs['form'].clearValidate();
    });
  },
  methods: {
    refreshParams() {
      const { forms } = this.$props;
      let params = {};
      for (let key in forms) {
        let item = forms[key];
        params[key] = item.defaultValue === undefined ? '' : item.defaultValue;
      }
      this.params = params;
    },
    cancelHandler() {
      this.$refs['form'].resetFields();
      const { backHandler } = this;
      if (backHandler) {
        backHandler();
      } else {
        throw new Error('Need to set attribute: backHandler !');
      }
    },
    searchHandler() {
      this.getParams((error, params) => {
        if (!error) {
          const { submitHandler } = this;
          if (submitHandler) {
            // this.submitLoading = true;
            submitHandler(params, (type = true) => {
              this.submitLoading = false;
              type && this.$refs['form'].resetFields();
            });
          } else {
            throw new Error('Need to set attribute: submitHandler !');
          }
        } else {
          const { submitErrorHandle } = this;
          submitErrorHandle ? submitErrorHandle(params) : '';
        }
      });
    },
    getParams(callback) {
      this.$refs['form'].validate((isValid, params) => {
        if (isValid) {
          const { params, datePrefix } = this;
          let formattedForm = {};
          Object.keys(params).forEach((v) => {
            if (v.indexOf(datePrefix) === -1) {
              formattedForm[v] = params[v];
            }
          });
          if (callback) callback(null, formattedForm);
        } else {
          this.$nextTick(() => {
            this.goBackTop();
          });
          // 校验错误，返回不符合要求的字段
          if (callback) callback(true, params);
        }
      });
    },
    resetForm() {
      this.$refs['form'].resetFields();
      const { resetBtnCallback } = this;
      if (resetBtnCallback) resetBtnCallback();
    },
    clearValidate(clearValidateArray) {
      this.$nextTick(() => {
        this.$refs['form'].clearValidate(clearValidateArray);
      });
    },
    refreshData() {
      for (let key in this.forms) {
        let item = this.forms[key];
        this.params[key] = item.defaultValue || '';
      }
    },
    goBackTop(className = 'is-error', block = 'center', behavior = 'smooth') {
      let theDom = document.getElementsByClassName(className);
      theDom[0].scrollIntoView({
        // 滚动到指定节点
        // 值有start,center,end，nearest，当前显示在视图区域中间
        block: block,
        // 值有auto、instant,smooth，缓动动画（当前是慢速的）
        behavior: behavior
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-form-item.dialog-footer {
  margin-bottom: 0px !important;
}
::v-deep .el-form--label-left .el-form-item__label {
  line-height: 40px;
  padding-bottom: 0 !important;
}
</style>
