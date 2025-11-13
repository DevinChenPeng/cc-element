<template>
  <el-select
    :clearable="clearable"
    :placeholder="placeholder"
    :size="size"
    :style="styles"
    v-bind="$attrs"
    v-on="new$listeners"
  >
    <slot
      name="option"
      :optionLists="optionLists"
      :optionKeys="optionKeys"
      v-if="showOptionSlot"
    ></slot>
    <template v-else>
      <el-option
        v-for="item in optionLists"
        :key="item[optionKeys.value]"
        :label="item[optionKeys.label]"
        :disabled="isDisabled(item)"
        :value="item[optionKeys.value]"
        v-show="showItem(item)"
      >
      </el-option>
    </template>
  </el-select>
</template>
<script>
import props from './props';
import { getSelectList } from '@/api/public';
export default {
  name: 'CcSelect',
  inheritAttrs: false,
  props: props,
  data() {
    return {
      optionLists: []
    };
  },
  watch: {
    options() {
      if (this.url) {
        this.getOptions();
      } else {
        this.optionLists = this.options;
      }
    }
  },
  created() {
    if (this.url) {
      this.getOptions();
    } else {
      this.optionLists = this.options;
    }
  },
  methods: {
    /**
     * 获取下拉框的选择项数据
     */
    getOptions() {
      let { listField, params, url } = this;
      let endParams = {};
      if (params) {
        endParams = Object.assign(endParams, params);
      }
      getSelectList({ data: params, url: url, isLoading: this.isLoading }).then((response) => {
        let result = response;
        if (response && !(response instanceof Array)) {
          if (listField && listField.indexOf('.') !== -1) {
            listField.split('.').forEach((vv) => {
              result = result[vv];
            });
          } else {
            result = response[listField];
          }
        }
        if (this.dataHandler) {
          this.optionLists = result.map(this.dataHandler);
        } else {
          this.optionLists = result;
        }
        if (this.dataFilterHandler) {
          this.optionLists = result.filter(this.dataFilterHandler);
        } else {
          this.optionLists = result;
        }
        this.emitEventHandler('responseData', this.optionLists);
      });
    },
    /**
     * 判定该选项是否禁用
     * @item {Object} 该选项所有信息所在对象
     **/
    isDisabled(item) {
      if (this.disableValues.length > 0 && this.disableKey) {
        const dicList = this.disableValues;
        const itemValue = item[this.disableKey];
        const findItemIndex = dicList.findIndex((itemD) => itemD === itemValue);
        if (findItemIndex > -1) return true;
        return false;
      }
      return false;
    },
    /**
     * @description: 判断该选项是否隐藏
     * @item {Object} 该选项所有信息所在对象
     * @return {*}
     * @default:
     */
    showItem(item) {
      if (this.showValues.length > 0 && this.showKey) {
        const dicList = this.showValues;
        const itemValue = item[this.showKey];
        const findItemIndex = dicList.findIndex((itemD) => itemD === itemValue);
        if (findItemIndex > -1) return false;
        return true;
      }
      return true;
    },
    /**
     * 选择框change事件，将所选值和所选值所在的对象回传给父组件
     * @val {String} 当前选中值
     **/
    changeValue(val) {
      let valueKey = 'value';
      if (this.optionKeys) valueKey = this.optionKeys.value;
      if (this.multiple) {
        const valObjList = [];
        val.forEach((element) => {
          const valObj = this.optionLists.find((itemO) => itemO[valueKey] === element);
          valObjList.push(valObj);
        });
        this.emitEventHandler('change', val, valObjList);
      } else {
        const valOption = this.optionLists.filter((itemO) => itemO[valueKey] === val);
        const [valObj] = valOption;
        this.emitEventHandler('change', val, valObj);
      }
    },
    emitEventHandler(event) {
      this.$emit(event, ...Array.from(arguments).slice(1));
    },
    /**
     * @description: 清空列表
     * @param {*}
     * @return {*}
     * @default:
     */
    clearOptionLists() {
      this.optionLists = [];
    },
    /**
     * @description: 切换数据
     * @param {*}
     * @return {*}
     * @default:
     */
    changeOptionLists() {
      this.getOptions();
    }
  },
  computed: {
    new$listeners() {
      return Object.assign(this.$listeners, {
        change: this.changeValue
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
