<!--
 * @Description: 
 * @Date: 2021-10-09 16:25:51
 * @LastEditTime: 2022-01-20 14:09:43
 * @FilePath: /CC_element/src/components/cc-element/packages/cc-table/src/main.vue
 * @Author: Devin
-->
<template>
  <div class="cc-table">
    <slot name="form" :loading="loading" :search="searchHandler" />
    <slot />
    <el-table
      :class="[
        { endCol: endCol, infiniteScroll: infiniteScroll },
        'el-search-table',
        { 'sort-table': setupSort }
      ]"
      v-loading.lock="loading"
      v-scrollTable="infiniteScroll ? loadMoer : false"
      v-bind="$attrs"
      ref="table"
      :data="tableData"
      :border="border"
      :size="size"
      :stripe="stripe"
      :height="height"
      :max-height="maxHeight"
      :fit="fit"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
      :current-row-key="currentRowKey"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :row-key="rowKey"
      :empty-text="emptyText"
      :default-expand-all="defaultExpandAll"
      :expand-row-keys="expandRowKeys"
      :default-sort="defaultSort"
      :tooltip-effect="tooltipEffect"
      :show-summary="showSummary"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      :span-method="spanMethod"
      :style="tableStyle"
      element-loading-text="加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.7)"
      @select="(selection, row) => emitEventHandler('select', selection, row)"
      @select-all="(selection) => emitEventHandler('select-all', selection)"
      @selection-change="(selection) => emitEventHandler('selection-change', selection)"
      @cell-mouse-enter="
        (row, column, cell, event) => emitEventHandler('cell-mouse-enter', row, column, cell, event)
      "
      @cell-mouse-leave="
        (row, column, cell, event) => emitEventHandler('cell-mouse-leave', row, column, cell, event)
      "
      @cell-click="
        (row, column, cell, event) => emitEventHandler('cell-click', row, column, cell, event)
      "
      @cell-dblclick="
        (row, column, cell, event) => emitEventHandler('cell-dblclick', row, column, cell, event)
      "
      @row-click="(row, event, column) => emitEventHandler('row-click', row, event, column)"
      @row-dblclick="(row, event) => emitEventHandler('row-dblclick', row, event)"
      @row-contextmenu="(row, event) => emitEventHandler('row-contextmenu', row, event)"
      @header-click="(column, event) => emitEventHandler('header-click', column, event)"
      @sort-change="(args) => emitEventHandler('sort-change', args)"
      @filter-change="(filters) => emitEventHandler('filter-change', filters)"
      @current-change="
        (currentRow, oldCurrentRow) => emitEventHandler('current-change', currentRow, oldCurrentRow)
      "
      @header-dragend="
        (newWidth, oldWidth, column, event) =>
          emitEventHandler('header-dragend', newWidth, oldWidth, column, event)
      "
      @expand-change="(row, expanded) => emitEventHandler('expand-change', row, expanded)"
    >
      <slot name="prepend" />

      <template v-for="(column, columnIndex) in columns">
        <el-table-column
          :key="columnIndex"
          :column-key="column.columnKey"
          :prop="column.prop"
          :label="column.label"
          :width="column.minWidth ? '-' : column.width"
          :minWidth="column.minWidth || column.width"
          :fixed="column.fixed"
          :render-header="column.renderHeader"
          :sortable="column.sortable"
          :sort-by="column.sortBy"
          :sort-method="column.method"
          :resizable="column.resizable"
          :formatter="column.formatter"
          :show-overflow-tooltip="column.showOverflowTooltip === false ? false : true"
          :align="column.align"
          :header-align="column.headerAlign || column.align"
          :class-name="column.className"
          :label-class-name="column.labelClassName"
          :selectable="column.selectable"
          :reserve-selection="column.reserveSelection"
          :filters="column.filters"
          :filter-placement="column.filterPlacement"
          :filter-multiple="column.filterMultiple"
          :filter-method="column.filterMethod"
          :filtered-value="column.filteredValue"
          v-if="column.type === undefined && !column.hidden"
        >
          <!-- 表头自定义 -->
          <template slot="header" v-if="column.slotHeaderName" class="slotHeaderName">
            <template v-if="column.required">
              <span class="start">*</span>
              {{ column.label }}
            </template>
            <template v-else>
              <slot :name="column.slotHeaderName" :column="column" />
            </template>
          </template>
          <template slot-scope="scope" :scope="newSlotScope ? 'scope' : false">
            <span v-if="column.filter">
              {{ Vue.filter(column['filter'])(scope.row[column.prop]) }}
            </span>
            <span
              v-else-if="column.slotName && column.slotName != 'editor'"
              :class="column.slotName"
            >
              <slot :name="column.slotName" :row="scope.row" :$index="scope.$index"> </slot>
            </span>
            <span v-else-if="column.slotName && column.slotName == 'editor'">
              <span
                v-if="showText(scope.row)"
                :class="{ showInputStyle: showInputStyle(scope.row) }"
                @click="showRealInput(scope.row)"
                >{{ scope.row[column.prop] + '' || 'noData' }}</span
              >
              <template v-if="column.maxLength">
                <el-input
                  v-model="scope.row[column.prop]"
                  size="small"
                  v-if="showInput(scope.row)"
                  v-focus="column.focus"
                  :maxlength="column.maxLength"
                  clearable
                  e
                  @blur="showPhonyInput(scope.row)"
                ></el-input>
              </template>
              <template v-else>
                <el-input
                  v-model="scope.row[column.prop]"
                  size="small"
                  v-if="showInput(scope.row)"
                  v-focus="column.focus"
                  clearable
                  @blur="showPhonyInput(scope.row)"
                ></el-input>
              </template>
            </span>
            <span v-else-if="column.render" v-html="column.render(scope.row)"> </span>
            <span v-else-if="column.formatter">
              {{ column.formatter(scope.row, scope.column, scope.row[column.prop], scope.$index) }}
            </span>
            <span v-else>
              {{ scope.row[column.prop] + '' || 'noData' }}
            </span>
          </template>
          <!-- 表头自定义 -->
          <template slot="header">
            <slot name="header" :row="column"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-bind="column"
          :key="columnIndex"
          v-if="column.type == 'expand' && !column.hidden"
        >
          <template slot-scope="scope" :scope="newSlotScope ? 'scope' : false">
            <slot :name="column.slotName" :row="scope.row" :$index="scope.$index" />
          </template>
        </el-table-column>
        <el-table-column
          v-bind="column"
          :key="columnIndex"
          v-if="column.type != 'expand' && column.type != undefined && !column.hidden"
          :align="column.type == 'index' ? 'center' : column.align"
          :index="indexMethod"
        >
        </el-table-column>
      </template>

      <slot name="append" :loading="loading" :tableData="tableData" />
    </el-table>
    <div v-if="showPagination && !infiniteScroll" style="margin-top: 10px; text-align: center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.pageIndex"
        :page-sizes="pageSizes"
        :page-size="pagination.pageSize"
        :layout="paginationLayout"
        :total="total * 1"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import props from './props';
import infiniteScrollTable from '../infiniteScrollTable';
import { getTableList } from '@/api/public';
import Sortable from 'sortablejs';

export default {
  name: 'CcTable',
  props,
  data() {
    const _this = this;
    return {
      Vue,
      pagination: {
        pageIndex: 1,
        pageSize: (() => {
          const { pageSizes } = _this;
          if (pageSizes.length > 0) {
            return pageSizes[0];
          }
          return 20;
        })()
      },
      total: 0,
      loading: false,
      tableData: [],
      cacheLocalData: [],
      requestStartTime: '',
      requestEndTime: '',
      lastTime: 0,
      isLoadMore: true
    };
  },
  directives: {
    scrollTable: infiniteScrollTable,
    focus: {
      inserted: function (el, data) {
        data.value && el.querySelectorAll('input')[0].focus();
      }
    }
  },
  computed: {
    newSlotScope() {
      return Number(Vue.version.replace(/\./g, '')) >= 250;
    },
    showText() {
      return (data) => {
        return !data.isEditor || !data.phonyEditor;
      };
    },
    showInputStyle() {
      return (data) => {
        return !data.isEditor && data.phonyEditor;
      };
    },
    showInput() {
      return (data) => {
        return data.isEditor && data.phonyEditor;
      };
    }
  },
  methods: {
    /**
     * @description: 设置本地缓存分页
     * @param  {*}
     * @return {*}
     */
    setLocalPagination() {
      let pagArr = JSON.parse(localStorage.getItem('LocalPagination')) || [];
      // 先判断缓存内的数组是否超出
      if (pagArr.length < 4) {
        this.changeLocalPagination(pagArr);
      } else {
        pagArr.pop();
        this.changeLocalPagination(pagArr);
      }
      localStorage.setItem('LocalPagination', JSON.stringify(pagArr));
    },
    /**
     * @description: 改变缓存的数组
     * @param  {*}
     * @return {*}
     * @param {*} pagArr
     */
    changeLocalPagination(pagArr) {
      // 判断是否需要缓存分页数据
      if (this.tableId) {
        let flag = false;
        pagArr.forEach((item) => {
          // 如果存在已缓存的，则将需要替换
          if (item[this.tableId]) {
            item[this.tableId] = this.pagination;
            flag = true;
          }
        });
        // 如果是替换，则直接退出
        if (flag) {
          return;
        } else {
          pagArr.unshift({ [this.tableId]: this.pagination });
        }
      }
    },
    /**
     * @description: 去取当前tableId对应的缓存分页数据
     * @param  {*}
     * @return {*}
     */
    getLocalPagination() {
      let pagArr = JSON.parse(localStorage.getItem('LocalPagination')) || [];
      let pagination = {};
      let flag = false;
      pagArr.forEach((item) => {
        // 如果存在已缓存的,则取出
        if (item[this.tableId]) {
          pagination = item[this.tableId];
          flag = true;
        }
      });
      return { flag, pagination };
    },
    indexMethod(index) {
      if (!this.infiniteScroll) {
        if (this.openIndexMethod) {
          return index + 1 + (this.pagination.pageIndex - 1) * this.pagination.pageSize;
        } else {
          return index + 1;
        }
      } else {
        return index + 1;
      }
    },
    handleSizeChange(size) {
      this.pagination.pageSize = size;
      this.pagination.pageIndex = 1;
      this.setLocalPagination();
      this.$emit('pagination', this.pagination);
      this.dataChangeHandler();
    },
    handleCurrentChange(pageIndex) {
      this.pagination.pageIndex = pageIndex;
      this.setLocalPagination();
      this.$emit('pagination', this.pagination);
      this.dataChangeHandler();
    },
    searchHandler(resetPageIndex = true) {
      if (resetPageIndex) {
        this.pagination.pageIndex = 1;
        this.setLocalPagination();
        if (this.infiniteScroll) {
          this.tableData = [];
        }
      }
      this.dataChangeHandler(arguments[0]);
    },
    dataChangeHandler() {
      const { type } = this;
      if (type === 'local') {
        this.dataFilterHandler(arguments[0]);
      } else if (type === 'remote') {
        this.fetchHandler(arguments[0]);
      }
    },
    dataPaginationFilter(data) {
      const { pageIndex, pageSize } = this.pagination;
      return data.filter((v, i) => {
        return i >= (pageIndex - 1) * pageSize && i < pageIndex * pageSize;
      });
    },
    refreshData(refresPage = true, vparam = {}) {
      const { isDeleteOne = false } = vparam;
      this.$nextTick(() => {
        if (refresPage) {
          this.pagination.pageIndex = 1;
          if (this.infiniteScroll) {
            this.tableData = [];
            this.isLoadMore = false;
          }
        } else {
          // 最后一页最后一条删除和已读，页码到前一页
          if (isDeleteOne) {
            this.total = this.total - 1;
            const pageSize = this.pagination.pageSize;
            const totalPage = Math.ceil(this.total / pageSize);
            const current =
              this.pagination.pageIndex > totalPage ? totalPage : this.pagination.pageIndex;
            this.pagination.pageIndex = current < 1 ? 1 : current;
            this.setLocalPagination();
          }
        }
        this.dataChangeHandler();
      });
    },
    dataFilterHandler() {
      const { cacheLocalData } = this;
      this.total = cacheLocalData.length;
      if (this.showPagination) {
        this.tableData = this.dataPaginationFilter(cacheLocalData);
      }
      // this.tableData = cacheLocalData.map(this.dataHandler);
      this.$emit('requestDone', this.tableData);
    },
    fetchHandler(formParams = {}) {
      this.isLoading ? (this.loading = true) : '';
      this.requestStartTime = new Date().valueOf();
      let {
        method,
        url,
        listField,
        pageIndexKey,
        pageSizeKey,
        totalField,
        params,
        showPagination,
        pagination
      } = this;

      params = JSON.parse(JSON.stringify(Object.assign(params, formParams)));

      if (showPagination) {
        params = Object.assign(params, {
          [pageIndexKey]: pagination.pageIndex,
          [pageSizeKey]: pagination.pageSize
        });
      }

      let requestObject = null;
      method = method.toLowerCase();
      requestObject = getTableList({
        data: params,
        url: url,
        isLoading: !this.isLoading
      });
      requestObject
        .then((response) => {
          this.requestEndTime = new Date().valueOf();
          let result = response;
          this.$emit('requestDoneAll', response);
          if (response && !(response instanceof Array)) {
            if (listField && listField.indexOf('.') !== -1) {
              listField.split('.').forEach((vv) => {
                result = result[vv];
              });
            } else {
              result = response[listField];
            }
          }
          if (!result || !(result instanceof Array)) {
            throw new Error(`The result of key:${listField} is not Array.`);
          }
          if (this.dataHandler) {
            if (this.infiniteScroll) {
              this.tableData =
                response.data.current && response.data.current === 1
                  ? result.map(this.dataHandler)
                  : this.tableData.concat(result.map(this.dataHandler));
            } else {
              this.tableData = result.map(this.dataHandler);
            }
          } else {
            if (this.infiniteScroll) {
              this.tableData =
                response.data.current && response.data.current === 1
                  ? result
                  : this.tableData.concat(result);
            } else {
              this.tableData = result;
            }
          }

          let totalValue = response;
          if (Object.prototype.toString.call(response) === '[object Array]') {
            totalValue = response.length;
          } else if (typeof response === 'object') {
            if (totalField && totalField.indexOf('.') !== -1) {
              totalField.split('.').forEach((vv) => {
                totalValue = totalValue[vv];
              });
            } else {
              totalValue = response[totalField];
            }
          } else {
            totalValue = 0;
          }
          this.total = totalValue;
          this.$emit('requestDone', this.tableData, {
            total: this.total,
            page: this.pagination.pageIndex
          });
          this.closeLoading();
          this.isLoadMore = true;
        })
        .catch((error) => {
          this.loading = false;
          this.isLoadMore = true;
          this.closeLoading();
          this.tableData = [];
        });
    },
    closeLoading() {
      if (this.requestEndTime - this.requestStartTime < 300) {
        setTimeout(() => {
          this.loading = false;
        }, 300);
      } else {
        this.loading = false;
      }
    },
    emitEventHandler(event) {
      if (event == 'sort-change' && this.customSort) {
        if (Array.from(arguments).slice(1)[0].prop && Array.from(arguments).slice(1)[0].order) {
          if (this.params.sort) {
            this.params.sort.field = Array.from(arguments).slice(1)[0].prop;
            this.params.sort.direction =
              Array.from(arguments).slice(1)[0].order == 'descending' ? 'DESC' : 'ASC';
          } else {
            this.params.sort = { field: '', direction: '' };
            this.params.sort.field = Array.from(arguments).slice(1)[0].prop;
            this.params.sort.direction =
              Array.from(arguments).slice(1)[0].order == 'descending' ? 'DESC' : 'ASC';
          }
        } else {
          this.params.sort.field = '';
          this.params.sort.direction = '';
        }
        this.refreshData();
      } else {
        this.$emit(event, ...Array.from(arguments).slice(1));
      }
    },
    loadLocalData(data) {
      const { autoLoad } = this;
      if (!data) {
        throw new Error(
          `When the type is 'local', you must set attribute 'data' and 'data' must be a array.`
        );
      }
      const cacheData = data;
      this.cacheLocalData = cacheData;
      if (autoLoad) {
        if (this.showPagination) {
          this.tableData = this.dataPaginationFilter(cacheData);
        } else {
          this.tableData = this.cacheLocalData;
        }
        this.total = cacheData.length;
        this.$emit('requestDone', this.tableData);
      }
    },
    loadMoer() {
      if (this.isLoadMore) {
        //获取当前时间的时间戳
        let now = new Date().valueOf();
        //第一次点击
        if (this.lastTime == 0) {
          this.lastTime = now;
          this.infiniteScrollFun();
        } else {
          if (now - this.lastTime > 100) {
            //重置上一次点击时间
            this.lastTime = now;
            //添加自己要调用的方法
            this.infiniteScrollFun();
          }
        }
      }
    },
    infiniteScrollFun() {
      if (this.infiniteScroll) {
        let maxPageIndex = Math.ceil(this.total / this.pageSizes[0]);
        if (this.pagination.pageIndex < maxPageIndex) {
          this.pagination.pageIndex = this.pagination.pageIndex + 1;
          this.dataChangeHandler();
        }
      }
    },
    tableRowDropSort() {
      let tbody = null;
      tbody = document.querySelector('.sort-table .el-table__body-wrapper tbody');
      console.log(tbody);
      const _this = this;
      let oldData = {};
      let newData = {};
      new Sortable(tbody, {
        handle: this.sortClass,
        ghostClass: 'SortTable-background-class',
        onStart(evt) {},
        onEnd(evt) {
          if (evt.oldIndex == evt.newIndex) {
            return;
          } else {
            oldData = _this.tableData[evt.oldIndex];
            newData = _this.tableData[evt.newIndex];
            _this.emitEventHandler(
              'sortTableDropHandler',
              { newIndex: evt.newIndex, oldIndex: evt.oldIndex },
              oldData,
              newData
            );
            // this.$refs.table.doLayout();
          }
        }
      });
    },
    showRealInput(data) {
      if (data.phonyEditor) {
        data.isEditor = true;
      }
    },
    showPhonyInput(data) {
      if (this.isEditorAll) {
        data.isEditor = false;
      }
    }
  },
  mounted() {
    document.body.ondrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    // event: expand changed to `expand-change` in Element v2.x
    this.$refs['table'].$on('expand', (row, expanded) =>
      this.emitEventHandler('expand', row, expanded)
    );
    const { type, autoLoad, data, params } = this;
    if (type === 'remote' && autoLoad) {
      this.fetchHandler(params);
    } else if (type === 'local') {
      this.loadLocalData(data);
    }
    if (this.setupSort) {
      this.$nextTick(() => {
        this.tableRowDropSort();
      });
    }
  },
  created() {
    this.pagination.pageIndex = this.setPageIndex;
    // 获取缓存的分页数据
    if (this.tableId && this.getLocalPagination().flag) {
      this.pagination = this.getLocalPagination().pagination;
    }
  },
  watch: {
    data: function (value) {
      this.loadLocalData(value);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
