<!--
 * @Description: 
 * @Date: 2021-09-14 13:40:35
 * @LastEditTime: 2021-10-12 15:36:19
 * @FilePath: \web-template\src\layout\components\header\index.vue
 * @Author: Devin
-->
<template>
  <div class="layout-header">
    <div class="layout-header-left">
      <div class="ghost"></div>
    </div>
    <div class="layout-header-center">
      <h2>Welcome to the microfront-end framework.</h2>
    </div>
    <div class="layout-header-right">
      <Screenfull></Screenfull>
      <div class="layout-header-right-item" title="切换语言" @click="changeI18n">
        <i class="iconfont icon-qiehuanyuyan"></i>
      </div>
      <div class="layout-header-right-item">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img
              :src="imgurl"
              style="width: 50px; height: 50px; border-radius: 50%"
            /><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="toPersonInfo()">个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="toHome()">首页</el-dropdown-item>
            <el-dropdown-item @click.native="toDcos()">Docs</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Screenfull from '@/components/Screenfull';
export default {
  components: {
    Screenfull
  },
  data() {
    return {
      imgurl:require('@/assets/gif.gif')
    };
  },
  created() {},
  computed: {},
  methods: {
    changeI18n() {
      if (this.$i18n.locale == 'zh') {
        this.$i18n.locale = 'en';
      } else {
        this.$i18n.locale = 'zh';
      }
    },
    toPersonInfo() {
      this.$router.push({ path: '/components/form' });
    },
    toHome(){
      this.$router.push({ path: '/' });
    },
    toDcos(){
      this.$router.push({ path: '/documentation' });
    },
  },
  watch: {}
};
</script>
<style scoped lang='scss'>
@keyframes hueRotate {
  100% {
    filter: hue-rotate(360deg);
  }
}
.layout-header {
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  // background: linear-gradient(45deg, #ffc107, deeppink, #9c27b0);
  // background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  background: linear-gradient(to right, #c2e59c, #64b3f4);
  animation: hueRotate 5s infinite alternate;
  &-left {
    width: 100px;
    display: flex;
    align-items: center;
  }
  &-center {
    display: flex;
    align-items: center;
    h2 {
      color: #fff;
      border-right: 0.1em solid;
      // width: 16.5em;
      width: 100%;
      margin: 2em 1em;
      white-space: nowrap;
      overflow: hidden;
      animation: typing 3s steps(26, end), cursor-blink 0.3s step-end infinite alternate;
    }

    @keyframes typing {
      from {
        width: 0;
      }
    }

    @keyframes cursor-blink {
      50% {
        border-color: transparent;
      }
    }
  }
  &-right {
    padding-right: 20px;
    &-item {
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 50px;
      color: #fff;
      float: left;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        .icon-qiehuanyuyan {
          transform: rotate(180deg);
        }
      }
      ::v-deep {
        .el-dropdown {
          color: #fff;
          .el-dropdown-link {
            display: flex;
            align-items: center;
          }
        }

        .icon-full-screen,
        .icon-qiehuanyuyan {
          transition: all 1s;
        }
        .icon-qiehuanyuyan {
          font-size: 18px;
        }
      }
    }
  }
}
.ghost {
  position: relative;
  width: 20px;
  height: 30px;
  background: radial-gradient(circle at 15px 10px, #000, #000 2px, transparent 2px),
    radial-gradient(circle at 10px 10px, #000, #000 2px, transparent 2px),
    radial-gradient(circle at 12px 12px, #fff, #fff);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: auto;
  border-radius: 10px 10px 15px 5px;
  transform: skewX(-10deg);
  animation: moveMain 2s infinite ease-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #fff;
    border-radius: 50%;
  }

  &::before {
    width: 5px;
    height: 5px;
    top: 12px;
    left: -2.5px;
    box-shadow: 0 0 0 1px #fff;
    animation: move 2s infinite ease-in;
  }

  &::after {
    width: 8px;
    height: 7px;
    top: 21px;
    left: -2.5px;
    box-shadow: 0 0 0 1px #fff;
    animation: move2 2s infinite ease-in;
  }

  @keyframes move {
    80%,
    100% {
      box-shadow: -15px 0 0 0.5px rgba(255, 255, 255, 0);
    }
  }

  @keyframes move2 {
    80%,
    100% {
      box-shadow: -25px 0 0 0.5px rgba(255, 255, 255, 0);
    }
  }

  @keyframes moveMain {
    42% {
      transform: skewX(-10deg) translate(10px, 0);
    }
  }
}
</style>