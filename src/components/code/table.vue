<!--
 * @Description: 
 * @Date: 2021-09-18 10:31:32
 * @LastEditTime: 2021-09-18 16:21:36
 * @FilePath: \mds\src\components\code\table.vue
 * @Author: Devin
-->
<template>
  <div class="params-table">
    <h3 :id="title">{{ title }}<a :href="`#${title}`">#</a></h3>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in tableData" :key="i">
          <td>{{ item.params || '-' }}</td>
          <td v-html="item.explain || '-'"></td>
          <td>{{ item.type || '-' }}</td>
          <td>{{ item.value || '-' }}</td>
          <td>{{ item.default || '-' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    title: String,
    routerLink: String
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  watch: {}
};
</script>
<style scoped lang='scss'>
a {
  color: #409eff;
  text-decoration: none;
  margin-left: 8px;
  opacity: 0;
}
a:hover {
  opacity: 0.5;
}
.params-table > table > tbody {
  tr:nth-child(even) {
    background-color: #f8f8f8;
  }
}
.params-table > table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  line-height: 1.5em;
}
.params-table > table th {
  text-align: left;
  white-space: nowrap;
  color: #909399;
  font-weight: 400;
}
.params-table > table th,
.params-table > table td {
  border-bottom: 1px solid #dcdfe6;
  padding: 15px;
  max-width: 250px;
  ::v-deep code {
    font-family: inherit;
    color: #d63200;
    padding: 3px 5px;
    margin: 0 2px;
    border-radius: 2px;
    white-space: nowrap;
    background-color: #fff;
  }
  ::v-deep a {
    color: #409eff;
    text-decoration: none;
    margin: 0 8px;
  }
}
.params-table > table td:first-child,
.params-table > table th:first-child {
  padding-left: 10px;
}
.params-table > table td {
  color: #606266;
}
</style>