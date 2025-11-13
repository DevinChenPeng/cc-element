<!--
 * @Description:
 * @Date: 2021-09-22 14:52:21
 * @LastEditTime: 2022-01-04 14:57:13
 * @FilePath: \web-template\src\views\mds\components\table\index.vue
 * @Author: Devin
-->
<template>
  <div class="table">
    <CcSticky :sticky-top="200" :scroll-top="0" :right="25" target=".layout-container-main-content" :zIndex="5" class="sticky">
      <el-tabs tab-position="left" style="height:350px;">
        <el-tab-pane>
          <a slot="label" href="#box1">默认表格</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box2">远程数据</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box3">有操作栏</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box4">自定义单元格，表头内容</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box5">可拖动行排序</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box6">滚动加载</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box7">显示索引</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box8">表格排序</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box11">表格展开行</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box9">Table参数详情</a>
        </el-tab-pane>
        <el-tab-pane>
          <a slot="label" href="#box10">Table-Cloumn参数详情</a>
        </el-tab-pane>

      </el-tabs>
    </CcSticky>
    <el-card class="box-card" id="box1">
      <div slot="header">
        <p class="title">默认表格</p>
        <p class="hide">系统中有很多页面都用到了 Element 的 <code>Table</code>，<code>Pagination</code>，<code>Axios</code> 组件等。当这种页面多了之后，就会出现很多重复代码，使得业务代码的占比不高，需要花更多的时候去维护非业务代码，效率不高，也有一些风险。</p>
        <p class="hide">
          <ul>
            <li>默认使用 axios 查询远程数据，让开发人员更关注业务，不在过多关心底层代码。</li>
            <li>除了支持远程数据的分页查询展示，还支持本地数据的分页。</li>
            <li>最大化地像可配置化迈进，让你尽可能少的写 html，最大化地支持 Element 中的特性（持续更新）。</li>
            <li>设置了自动缓存分页信息，该组件会缓存你访问的表格的前4个表格的分页信息。</li>
          </ul>
        </p>
      </div>
      <div class="template">
        <CcButton type="text" @click="tableData = []">空数据表格</CcButton>
        <CcButton type="text" @click="tableData = array">有数据表格</CcButton>
        <CcTable
          type="local"
          :data="tableData"
          :columns="columns"
          :pageSizes="[5, 10, 15, 30]"
        ></CcTable>
      </div>
      <Code>
        <div v-html="codeData.code1"></div>
      </Code>
    </el-card>
    <el-card id="box2" class="box-card">
      <div slot="header">
        <p class="title">远程数据</p>
        <p class="hide">只需传递一个<code>url</code>，一个<code>params</code>即可使用，不在需要自己去编写获取分页表格数据的函数，在大多数情况下后端反的字段可能并不能满足前端的业务需求，比如要在每条数据中添加一个是否处于编辑状态的属性<code>isEditor</code>，这种情况可以使用<code>dataHandler</code>（数组数据的 map 处理函数）。<a style="color: #0091ff" href="#Table-Attributes"
            >更多详情>></a
          ></p>
      </div>
      <div class="template">
        <CcButton type="text" @click="$refs['cc-table'].refreshData()">切换数据</CcButton>
        <CcTable
          url="/table/list"
          :columns="columns4"
          :dataHandler="(item)=>{
            item.isEditor = Random.boolean();
            return item;
          }"
          table-id="template"
          :setPageIndex="2"
          ref="cc-table"
        ></CcTable>
      </div>
      <Code>
        <div v-html="codeData.code2"></div>
      </Code>
    </el-card>
    <el-card id="box3" class="box-card">
      <div slot="header">
        <p class="title">有操作栏</p>
        <p class="hide">很多业务场景下每个表格需要一个操作栏，这里保留了原生的append插槽。<a style="color: #0091ff" href="#Table-Attributes"
            >更多详情>></a
          ></p>

      </div>
      <div class="template">
        <CcTable
          url="/table/list"
          table-id="template1"
          :columns="columns"
        >
          <el-table-column
            slot="append"
            :label="$t('public.operation')"
            width="120px"
            class-name="end-operation"
          >
            <template>
              <IconButton></IconButton>
              <IconButton iconType="delete"></IconButton>
            </template>
          </el-table-column>
        </CcTable>
      </div>
      <Code>
        <div v-html="codeData.code3"></div>
      </Code>
    </el-card>
    <el-card id="box4" class="box-card">
      <div slot="header">
        <p class="title">自定义单元格，表头内容</p>
        <p class="hide">可以使用<code>columns</code>的<code>render</code>处理数据的函数，接收行数据作为参数，或者使用<code>slot</code>自定义代码块。<a style="color: #0091ff" href="#Table-Attributes"
            >更多详情>></a
          ></p>
           <p class="hide">使用slot方式就可以说实现很多功能，如行内编辑等。</p>
      </div>
      <div class="template">
        <CcTable
          url="/table/list"
          table-id="template2"
          :columns="columns1"
        >
          <template #name>
            <span style="color:red">这是自定义的表头</span>
          </template>
          <template #sex="{ row }">
            <el-tag>这是slot方式：{{ row.status }}</el-tag>
          </template>
        </CcTable>
      </div>
      <Code>
        <div v-html="codeData.code4"></div>
      </Code>
    </el-card>
    <el-card id="box5" class="box-card">
      <div slot="header">
        <p class="title">可拖动行排序</p>
        <p class="hide">
          在表格组件中设置<code>setupSort</code>属性用于开启排序。这里只做了拖动按钮才能进行拖动行。如果需要在行的任意位置拖动设置<code>sortClass=""</code>即可。
          <a style="color: #0091ff" href="#Table-Attributes">更多详情>></a>
        </p>
        <p class="hide">
          <i class="iconfont icon-tishi" style="margin-right: 8px"></i
          ><span style="color: red"
            >如果按钮所在列设置了<code>fixed</code>则不会生效。你检查元素会发现固定列不在tbody下。</span
          >
        </p>
      </div>
      <div class="template">
      <CcTable
        url="/table/list"
        :columns="columns2"
        :setupSort="true"
        row-key='id'
        class="sort-table"
        @sortTableDropHandler="sortTableDropHandler"
      >
        <el-table-column slot="append" width="120" class-name="end-operation" :label="$t('public.operation')">
          <template>
            <IconButton iconType="move" class="sortClass"></IconButton>
          </template>
        </el-table-column>
      </CcTable>
      </div>
      <Code>
        <div v-html="codeData.code5"></div>
      </Code>
    </el-card>
    <el-card id="box6" class="box-card">
      <div slot="header">
        <p class="title">滚动加载</p>
        <p class="hide">
          对于部分表格而言不需要分页控件，一次性加载又太大了，这时候就需要滚动加载。设置<code>infiniteScroll="true"</code>开启滚动加载。设置了<code>infiniteScroll</code>必须设置<code>height</code>。
          <a style="color: #0091ff" href="#Table-Attributes">更多详情>></a>
        </p>
      </div>
      <div class="template">
        <CcTable
          url="/table/list"
          :columns="columns"
          :infiniteScroll="true"
          :height="200"
        >
        </CcTable>
      </div>
      <Code>
        <div v-html="codeData.code6"></div>
      </Code>
    </el-card>
    <el-card id="box7" class="box-card">
      <div slot="header">
        <p class="title">显示索引</p>
        <p class="hide">
          这里对element的表格序号做了改动，序号将按照页数来进行叠加排序，如果你不需要这样显示可以设置<code>openIndexMethod="false"</code> <a style="color: #0091ff" href="#Table-Attributes">更多详情>></a>
        </p>
      </div>
      <div class="template">
        <CcTable
          url="/table/list"
          :columns="columns3"
        >
        </CcTable>
      </div>
      <Code>
        <div v-html="codeData.code7"></div>
      </Code>
    </el-card>
    <el-card id="box8" class="box-card">
      <div slot="header">
        <p class="title">表格排序</p>
        <p class="hide">
          对表格进行排序，可快速查找或对比数据，如果设置<code>customSort="true"</code>则会在列表请求参数上加<code>sort: { field: '', direction: '' }</code>。如果不设置<code>customSort</code>则会将<code>sort-change</code>抛出自行处理。<a style="color: #0091ff" href="#Table-Attributes">更多详情>></a>
        </p>
      </div>
      <div class="template">
        <CcTable
          url="/table/list"
          :columns="columns5"
          :customSort="true"
        >
        </CcTable>
      </div>
      <Code>
        <div v-html="codeData.code8"></div>
      </Code>
    </el-card>
    <el-card id="box11" class="box-card">
      <div slot="header">
        <p class="title">表格展开行</p>
        <p class="hide">
          当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。<a style="color: #0091ff" href="#Table-Attributes">更多详情>></a>
        </p>
      </div>
      <div class="template">
        <CcTable
          url="/table/list"
          :columns="columns6"
          :customSort="true"
        >
          <template #expand="{row}">
            <CcTable
              :data="row.list"
              type="local"
              url="/table/list"
              :columns="columns7"
              :showPagination="false"
              style="margin:20px"
            ></CcTable>
          </template>
        </CcTable>
      </div>
      <Code>
        <div v-html="codeData.code8"></div>
      </Code>
    </el-card>
    <el-card id="box9" class="box-card">
      <div slot="header">
        <p class="title">Table参数详情</p>
        <p class="hide">本文档只列举对element-ui属性进行修改过的值。</p>
        <p class="hide">
          <a href="https://element.eleme.cn/#/zh-CN/component" target="blank"
            >更多属性请移步element-ui官网</a
          >
        </p>
      </div>
      <div class="template">
        <p class="hide">支持的<code>Element UI Table</code>属性有：stripe / border / height / max-height / fit / show-header / highlight-current-row / current-row-key / row-class-name / row-style / row-key / empty-text / default-expand-all / expand-row-keys / default-sort / tooltip-effect / show-summary / sum-text / summary-method / size。（持续更新）</p>
        <ParamsTable
          :tableData="ParamsTableData"
          :title="'Table-Attributes'"
          style="margin-bottom: 20px"
        ></ParamsTable>
        <MethodsTable
          :tableData="MethodsTableData"
          :title="'Table-Methods'"
          style="margin-bottom: 20px"
        ></MethodsTable>
        <SlotTable
          :tableData="SoltTableData"
          :title="'Table-Slot'">
        </SlotTable>
      </div>
    </el-card>
    <el-card id="box10" class="box-card">
      <div slot="header">
        <p class="title">Table-Column参数详情</p>
        <p class="hide">本文档只列举对element-ui属性进行修改过的值。</p>
        <p class="hide">
          <a href="https://element.eleme.cn/#/zh-CN/component" target="blank"
            >更多属性请移步element-ui官网</a
          >
        </p>
      </div>
      <div class="template">
        <ParamsTable
          :tableData="ParamsTableColumnData"
          :title="'Table-Column-Attributes'"
        ></ParamsTable>
      </div>
    </el-card>
  </div>
</template>

<script>
import ParamsTable from '@/components/code/table.vue';

import Mock from 'mockjs';
import codeData from './code.js';
const Random = Mock.Random;
export default {
  components: { ParamsTable },
  data() {
    return {
      ParamsTableData: [
        {
          params: 'type',
          explain: '数据来源类型，包含远程和本地两种',
          type: 'string',
          value: 'remote / local',
          default: 'remote'
        },
        {
          params: 'data',
          explain: "数据集合，仅在 <code>type='local'</code> 时有效",
          type: 'array',
          value: '',
          default: ''
        },
        {
          params: 'url',
          explain: '后端数据接口',
          type: 'string',
          value: '',
          default: ''
        },
        {
          params: 'method',
          explain: '接口请求方式',
          type: 'string',
          value: 'get / post / delete / put',
          default: 'get'
        },
        {
          params: 'auto-load',
          explain: '是否默认加载数据',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'is-loading',
          explain: '远程数据模式下是否开启加载界面',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'headers',
          explain: '请求头信息',
          type: 'object',
          value: '',
          default: ''
        },
        {
          params: 'list-field',
          explain: '接口返回值对应数据的字段值',
          type: 'string',
          value: '',
          default: 'data.records'
        },
        {
          params: 'total-field',
          explain: '接口返回值对应数据总条数的字段值',
          type: 'string',
          value: '',
          default: 'data.total'
        },
        {
          params: 'params',
          explain: "请求接口参数，仅在 <code>type='remote'</code> 时有效",
          type: 'object',
          value: '',
          default: ''
        },
        {
          params: 'data-handler',
          explain: '数组数据的 map 处理函数。',
          type: 'function',
          value: '',
          default: ''
        },
        {
          params: 'columns',
          explain:
            "table column 配置对象的数组。体配置见下面<a herf='#Table-Column'>Table-Column属性</a>",
          type: 'array',
          value: '',
          default: ''
        },
        {
          params: 'show-pagination',
          explain: '是否显示分页组件，如设为 false，查询时不传分页参数',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'set-page-index',
          explain: '设置默认显示第几页',
          type: 'number',
          value: '',
          default: '1'
        },
        {
          params: 'page-sizes',
          explain: '每页显示个数的控件选项',
          type: 'array',
          value: '',
          default: '[15, 30, 50]'
        },
        {
          params: 'pagination-layout',
          explain: '分页控件的结构，每个类型用逗号分隔',
          type: 'string',
          value: 'sizes, prev, pager, next, jumper, ->, total, slot',
          default: 'total, prev, pager, next, jumper, sizes'
        },
        {
          params: 'page-index-key',
          explain: '参数：页码数 的 key 值',
          type: 'string',
          value: '-',
          default: 'pageIndex'
        },
        {
          params: 'page-size-key',
          explain: '参数：每页展示个数 的 key 值',
          type: 'string',
          value: '-',
          default: 'pageSize'
        },
        {
          params: 'table-style',
          explain: '传递给el-table的样式 style',
          type: 'string',
          value: '-',
          default: 'width:100%;margin-top:0px;'
        },
        {
          params: 'custom-sort',
          explain:
            "是否允许对表格排序查用组件默认的字段，如开启后，在请求参数中会添加<code>sort: { field: '', direction: '' }</code>",
          type: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'infinite-scroll',
          explain:
            '是否开启滚动加载,当开启则不会在显示分页控件，每次请求的条数是<code>page-sizes</code>数组中的第一个值',
          type: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'setup-sort',
          explain: '是否开启拖动排序',
          type: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'sort-class',
          explain:
            "当 setupSort 为 true 时，格式为简单css选择器的字符串，使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动，当<code>sort-class= ''</code>时则可以在行任意位置拖动",
          type: 'string',
          value: '',
          default: '.sortClass'
        }
      ],
      SoltTableData: [
        {
          params: 'prepend',
          explain: 'table 中，在最左边添加的列'
        },
        {
          params: 'append',
          explain: 'table 中，在最右边添加的列，一般可放置<code>操作列</code>'
        },
        {
          params: 'form',
          explain:
            'table 上部展示一个搜索区域，该<code>slot</code>下通过<code>scope</code>可以访问到两个属性：loading（查询中的 loading 状态值），search（搜索方法）'
        }
      ],
      MethodsTableData: [
        {
          params: 'refreshData',
          explain:
            "重新搜索数据，参数表示是否重置分页为 1，默认为 true。使用方法<code>this.$refs['el-search-table'].refreshData()</code>（例中CcTable的ref属性为el-search-table）",
          value: '{ refresPage }'
        },
        {
          params: 'request-done',
          explain: '返回表格处理过后的tableData',
          value: 'callback(tableData) | tableData: 表格的数据'
        },
        {
          params: 'request-done-all',
          explain: '返回接口的原始数据',
          value:
            'callback(responseData) | responseData: 查询表格接口的原始数据，不与tableData数组的地址共享，修改值不会影响tableData'
        },
        {
          params: 'pagination',
          explain: '当分页数据发生变化是，返回的函数',
          value:
            'callback({ pageIndex, pageSize }) | pageIndex: 当前的页数; pageSize: 当前显示的条数;'
        },
        {
          params: 'sort-table-drop-handler',
          explain: '当拖动发生发生变化时返回的函数',
          value:
            'callback({ newIndex, oldIndex }, oldData, newData) | newIndex: 现在所在数组的位置; oldIndex: 以前所在数组的位置; oldData: 以前数组对应的数据; newData: 现在数组对应的数据'
        }
      ],
      ParamsTableColumnData: [
        {
          params: 'prop',
          explain: '展示字段的字段值',
          type: 'string',
          value: '',
          default: ''
        },
        {
          params: 'label',
          explain: '列名',
          type: 'string',
          value: '',
          default: ''
        },
        {
          params: 'width',
          explain: '列宽',
          type: 'number',
          value: '',
          default: '140'
        },
        {
          params: 'minWidth',
          explain: '最小列宽',
          type: 'number',
          value: '',
          default: ''
        },
        {
          params: 'filter',
          explain: '过滤器名（只有配置在全局的<code>filter</code>才有效）',
          type: 'string',
          value: '',
          default: ''
        },
        {
          params: 'render',
          explain: '处理数据的函数，接收行数据作为参数',
          type: 'function',
          value: '',
          default: ''
        },
        {
          params: 'slotName',
          explain:
            "自定义内容，使用<code>slot</code>标记的代码块的<code>slot</code>属性值<a href='#box4'>详情请参考代码示范</a>",
          type: 'function',
          value: '',
          default: ''
        },
        {
          params: 'slotHeaderName',
          explain:
            "自定义表头内容，使用<code>slot</code>标记的代码块的<code>slot</code>属性值<a href='#box4'>详情请参考代码示范</a>",
          type: 'function',
          value: '',
          default: ''
        },
        {
          params: 'type',
          explain:
            'Element UI Table 支持的一个属性，借用这个属性来切换是否使用本组件 column 内的插槽内容',
          type: 'string',
          value: 'selection / index / expand',
          default: ''
        },
        {
          params: 'showOverflowTooltip',
          explain: '字段超出是否浮框显示',
          type: 'boolean',
          value: 'true / false',
          default: 'true'
        }
      ],
      tableData: [],
      array: Array.from({ length: 100 }, () => ({
        id: Random.id(),
        date: Random.date('yyyy-MM-dd'),
        name: Random.cname(),
        email: Random.email(),
        status: Random.boolean() ? '男' : '女',
        address: Random.region()
      })),
      columns: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'date',
          label: '生日'
        },
        {
          prop: 'email',
          label: '邮箱'
        },
        {
          prop: 'status',
          label: '性别'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
      columns5: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'date',
          label: '生日',
          sortable: 'custom'
        },
        {
          prop: 'email',
          label: '邮箱'
        },
        {
          prop: 'status',
          label: '性别'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
      columns4: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'date',
          label: '生日'
        },
        {
          prop: 'email',
          label: '邮箱'
        },
        {
          prop: 'status',
          label: '性别'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'isEditor',
          label: '是否编辑状态'
        }
      ],
      columns3: [
        {
          type: 'index',
          label: '序号'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'date',
          label: '生日'
        },
        {
          prop: 'email',
          label: '邮箱'
        },
        {
          prop: 'status',
          label: '性别'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
      columns2: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'date',
          label: '生日'
        },
        {
          prop: 'email',
          label: '邮箱'
        },
        {
          prop: 'status',
          label: '性别'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
      columns1: [
        {
          prop: 'name',
          label: '姓名',
          slotHeaderName: 'name'
        },
        {
          prop: 'date',
          label: '生日'
        },
        {
          prop: 'email',
          label: '邮箱'
        },
        {
          prop: 'status',
          label: '性别',
          slotName: 'sex'
        },
        {
          prop: 'address',
          label: '地址',
          render: (row) => {
            return '这是使用render函数处理后的地址：' + row.address;
          }
        }
      ],
      columns6: [
        {
          label: '',
          type: 'expand',
          slotName: 'expand'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'date',
          label: '生日',
          sortable: 'custom'
        },
        {
          prop: 'email',
          label: '邮箱'
        },
        {
          prop: 'status',
          label: '性别'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
      columns7: [
        {
          prop: 'phone',
          label: '别称'
        },
        {
          prop: 'id',
          label: '身份证'
        },
        {
          prop: 'url',
          label: '博客'
        }
      ],
      links: [{ herf: '#aaaa', name: '默认表格' }]
    };
  },
  created() {
    this.tableData = this.array;
  },
  computed: {
    codeData() {
      return codeData;
    },
    Random() {
      return Random;
    }
  },
  methods: {
    sortTableDropHandler(sortIndex, oldData, newData) {
      console.log(sortIndex, oldData, newData);
    }
  },
  watch: {}
};
</script>
<style scoped lang='scss'>
.sticky {
  ::v-deep .el-tabs--left {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    opacity: 0.9;
    .el-tabs__item {
      a {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>