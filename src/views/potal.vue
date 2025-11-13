<!--
 * @Description:
 * @Date: 2021-09-13 17:11:23
 * @LastEditTime: 2021-10-18 15:16:37
 * @FilePath: \web-template\src\views\potal.vue
 * @Author: Devin
-->
<template>
  <div class="potal">
    <div
      v-for="item in sysList"
      :key="item.id"
      :class="{ rainbow: item.id === '1', conic: item.id === '2', 'conic-demo': item.id === '2' }"
      class="potal-item"
      @click="changSys(item)"
    >
      <div :data-text="item.name" class="potal-name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'potal',

  data() {
    return {
      sysList: [
        { name: 'MDS', id: '1', path: '/home' },
        { name: 'CTMS', id: '2', path: '/ctms' }
      ]
    };
  },
  methods: {
    changSys(item) {
      this.$actions.setGlobalState({
        userInfo: 'user',
        globalConfig: 'globalConfig',
        routers: 'routers'
      });
      this.$router.push({ path: item.path });
    }
  }
};
</script>
<style lang="scss" scoped>
.potal {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $subMenuHover;
  &-item {
    width: 323px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    color: white;
    cursor: pointer;
  }
}
.potal-name {
  position: relative;
  margin: auto;
  font-size: 5rem;
  word-spacing: 0.2em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  color: transparent;
  background-color: #e8a95b;
  background-clip: text;
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 0rem,
      white 11rem,
      transparent 11.15rem,
      transparent 15rem,
      rgba(255, 255, 255, 0.3) 20rem,
      transparent 25rem,
      transparent 27rem,
      rgba(255, 255, 255, 0.6) 32rem,
      white 33rem,
      rgba(255, 255, 255, 0.3) 33.15rem,
      transparent 38rem,
      transparent 40rem,
      rgba(255, 255, 255, 0.3) 45rem,
      transparent 50rem,
      transparent 100%
    );
    background-clip: text;
    background-size: 150% 100%;
    background-repeat: no-repeat;
    animation: shine 2s infinite linear;
  }
  @keyframes shine {
    0% {
      background-position: 50% 0;
    }
    100% {
      background-position: -190% 0;
    }
  }
}
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.rainbow {
  position: relative;
  z-index: 0;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  color: black;
  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300),
      linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
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
    background: white;
    border-radius: 5px;
    animation: opacityChange 3s infinite alternate;
  }
}

.conic {
  position: relative;
  z-index: 0;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;

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
    opacity: 0.5;
  }
}
</style>
