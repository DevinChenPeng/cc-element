<template>
  <el-select
    :clearable="clearable"
    :placeholder="placeholder"
    :size="size"
    :style="styles"
    v-bind="$attrs"
    v-on="new$listeners"
    :popper-class="optionVirtualRollingLists.length >= 100 ? 'VirtualRollingSelect' : ''"
    @visible-change="
      (tag) => {
        emitEventHandler('visible-change', tag);
      }
    "
    :filter-method="filterMethod"
    :popper-append-to-body="true"
  >
    <slot
      name="option"
      :optionLists="optionLists"
      :optionKeys="optionKeys"
      :optionVirtualRollingLists="optionVirtualRollingLists"
      v-if="showOptionSlot"
    ></slot>
    <template v-else>
      <VirtualRolling
        :list="optionVirtualRollingLists"
        v-if="showVirtualRolling && optionVirtualRollingLists.length >= 100"
        :height="270"
        :itemHeight="34"
        :containerSizeShow="14"
        :showPopper="showPopper"
        :setStartIndex="dataIndex"
        @scrollBottom="
          () => {
            emitEventHandler('scrollBottom');
          }
        "
      >
        <template slot-scope="scope">
          <el-option
            v-for="item in scope.showLists"
            :key="item[optionKeys.value]"
            :label="item[optionKeys.label]"
            :disabled="isDisabled(item)"
            :value="item[optionKeys.value]"
            :title="item[optionKeys.label]"
            v-show="showItem(item)"
          >
          </el-option>
        </template>
      </VirtualRolling>
      <div v-if="optionVirtualRollingLists.length < 100">
        <el-option
          v-for="item in optionVirtualRollingLists"
          :key="item[optionKeys.value]"
          :label="item[optionKeys.label]"
          :title="item[optionKeys.label]"
          :disabled="isDisabled(item)"
          :value="item[optionKeys.value]"
          v-show="showItem(item)"
        >
        </el-option>
      </div>
    </template>
  </el-select>
</template>
<script>
import props from './props';
import VirtualRolling from '../../cc-virtual-rolling/src/main.vue';
import { getSelectList } from '@/api/public';
export default {
  name: 'CcVirtualRollingSelect',
  props: props,
  components: {
    VirtualRolling
  },
  data() {
    return {
      optionLists: [],
      optionVirtualRollingLists: [],
      showPopper: false,
      showVirtualRolling: false
    };
  },
  computed: {
    new$listeners() {
      return Object.assign(this.$listeners, {
        change: this.changeValue
      });
    },
    dataIndex() {
      let index = 0;
      this.optionLists.forEach((item, i) => {
        if (this.$attrs.value === item[this.optionKeys.value]) {
          index = i;
        }
      });
      return index;
    }
  },
  watch: {
    options() {
      if (this.url) {
        this.getOptions();
      } else {
        this.optionLists = this.options;
        this.showVirtualRolling = true;
      }
    },
    optionLists() {
      this.optionVirtualRollingLists = this.optionLists;
    }
  },
  created() {
    if (this.url) {
      this.getOptions();
    } else {
      this.optionLists = this.options;
      this.showVirtualRolling = true;
    }
  },
  methods: {
    /**
     * 获取下拉框的选择项数据
     */
    getOptions() {
      let { listField, params, url, isLoading } = this;
      let endParams = {};
      if (params) {
        endParams = Object.assign(endParams, params);
      }
      getSelectList({ data: params, url, isLoading: !isLoading }).then((response) => {
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
          // this.optionLists = result;
        }
        this.emitEventHandler('responseData', this.optionLists);
        this.showVirtualRolling = true;
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
      if (event == 'visible-change') {
        if (Array.from(arguments).slice(1)[0]) {
          this.optionVirtualRollingLists = this.optionLists;
        }
        this.showPopper = Array.from(arguments).slice(1)[0];
      }
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
    },
    filterMethod(data) {
      let arr = this.optionLists.filter((item) => {
        return item[this.optionKeys.label].indexOf(data) !== -1;
      });
      this.optionVirtualRollingLists = arr;
    }
  }
};
</script>
<style lang="scss">
.VirtualRollingSelect {
  .wrapper::-webkit-scrollbar-track {
    background: inherit;
  }
  .wrapper::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
  .wrapper::-webkit-scrollbar-thumb:hover {
    border-radius: 3px;
    background-color: rgba($color: #000000, $alpha: 0.3);
  }
}

// .rollingSelect {
//   position: absolute !important;
//   left: 0 !important;
//   top: 32px !important;
//   width: 100% !important;
// }
.VirtualRollingSelect {
  .el-scrollbar__bar {
    display: none;
  }
}
</style>
