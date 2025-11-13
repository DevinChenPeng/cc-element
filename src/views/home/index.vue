<!--
 * @Description: 
 * @Date: 2021-09-14 11:43:40
 * @LastEditTime: 2021-12-31 16:44:02
 * @FilePath: \web-template\src\views\mds\home\index.vue
 * @Author: Devin
-->
<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="conic conic-demo" @click="toRouter('documentation/index')">文档</div></el-col
      >
      <el-col :span="6"
        ><div class="conic conic-demo" @click="toRouter('components')">组件</div></el-col
      >
      <el-col :span="6"
        ><div class="conic conic-demo" @click="toRouter('rich-text')">富文本</div></el-col
      >
      <el-col :span="6"><div class="conic conic-demo" @click="toRouter('chart')">图表</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  },
  computed: {},
  methods: {
    toRouter(path) {
      this.$router.push({ path: '/' + path });
    }
  },
  watch: {}
};
</script>
<style scoped lang='scss'>
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.conic {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  color: white;
  line-height: 230px;
  text-align: center;
  font-size: 50px;
  font-family: cursive;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #1a232a;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
    animation: rotate 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #000;
    border-radius: 5px;
  }
}
.conic-demo::after {
  animation: opacityChange 5s infinite linear;
}

@keyframes opacityChange {
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>