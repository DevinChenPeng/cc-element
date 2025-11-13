<!--
 * @Description: 
 * @Date: 2021-09-18 16:36:26
 * @LastEditTime: 2021-12-29 11:56:06
 * @FilePath: \mds\src\views\mds\components\virtual_rolling_select\index.vue
 * @Author: Devin
-->
<template>
  <div class="select">
    <el-card class="box-card">
      <div slot="header">
        <span class="title">模拟5000条数据</span>
        <p class="hide">
          超过100条数据自动切换为虚拟滚动的方式去加载节点，<span style="color:red">该组件存在一个缺点，不再支持filter-method自定义搜索方法，组件样式存在些许差别</span>。<a
            style="color: #0091ff"
            href="http://localhost:8080/components/select#Attributes"
            >更多详情>></a
          >
        </p>
      </div>
      <div class="template">
        <CcVirtualRollingSelect
          v-model="data"
          url="/select/list"
          placeholder="50条数据"
          :optionKeys="{ value: 'id', label: 'name' }"
          filterable
          :params="{ num: 50 }"
          style="margin-right: 20px"
        ></CcVirtualRollingSelect>
        <CcVirtualRollingSelect
          v-model="data1"
          :options="options"
          placeholder="5000条数据"
          :params="{ num: 5000 }"
          :optionKeys="{ value: 'id', label: 'name' }"
          filterable
        ></CcVirtualRollingSelect>
      </div>
      <Code>
        <div v-html="codeData.code_1"></div>
      </Code>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <p class="title">参数详情</p>
        <p class="hide">
          查看更多属性请移步
          <a href="http://localhost:8080/components/select#Attributes"
            >《基本选择器》</a
          >
        </p>
      </div>
      <div class="template">
        <MethodsTable
          :tableData="tableData"
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
import Mock from 'mockjs';
const Random = Mock.Random;
export default {
  components: { Code, ParamsTable },
  data() {
    return {
      data: '',
      data1: '',
      options: Array.from({ length: 5000 }, (_, idx) => ({
        id: Random.id(),
        date: Random.date('yyyy-MM-dd HH:mm:ss'),
        name: Random.cname(),
        email: Random.email(),
        status: Random.boolean()
      })),
      tableData: [
        {
          params: 'scrollBottom',
          explain: '当数据滑动到底部后触发的事件',
          value: 'callback()'
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