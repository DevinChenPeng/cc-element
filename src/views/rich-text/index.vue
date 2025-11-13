<!--
 * @Description: 
 * @Date: 2021-09-16 13:37:32
 * @LastEditTime: 2021-10-09 14:45:42
 * @FilePath: \mds\src\views\mds\rich-text\index.vue
 * @Author: Devin
-->
<template>
  <div class="rich-text">
    <el-card class="box-card">
      <div slot="header">
        <p class="title">富文本</p>
        <p class="hide">这里使用的tinymce版本是<code>5.8.2</code></p>
        <p class="hide">本文内置了一些属性，需要其他属性功能请移步 <a target="blank" style="color: #0091ff" href="http://tinymce.ax-z.cn/configure/integration-and-setup.php"
            >TinyMCE中文文档</a
          ></p>
      </div>
      <div class="template">
        <Tinymce v-model="value" ref="tinymce" :min_height="300" :height="500"></Tinymce>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: ''
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  watch: {}
};
</script>
<style scoped lang='scss'>
.rich-text {
  height: 100%;
}
</style>