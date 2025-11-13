<!--
 * @Description: 
 * @Author: Devin
 * @Date: 2021-12-15 15:13:28
 * @LastEditTime: 2021-12-29 16:36:36
 * @LastEditors: Devin
 * @Reference: 
-->
<template>
  <div class="resize-box" ref="box">
    <div class="resize-box-left" :class="leftClass" :style="{ width: initialLeftWidth }">
      <slot name="left">左侧</slot>
    </div>
    <div
      class="resize-box-resize"
      :class="midClass"
      title="收缩侧边栏"
      :style="{ width: midWidth + 'px', '--background-color': colors[0], '--color-hover': colors[1] }"
    >
      ⋮
    </div>
    <div
      class="resize-box-right"
      :style="{ width: `calc(100% - ${midWidth}px - ${initialLeftWidth})` }"
      :class="rightClass"
    >
      <slot name="right">右侧</slot>
    </div>
  </div>
</template>

<script>
import props from './props';
export default {
  name:'CcResize',
  props: props,
  methods: {
    onmouseup(resize) {
      //颜色恢复
      resize.style.background = this.colors[0];
      document.onmousemove = null;
      document.onmouseup = null;
      resize.releaseCapture && resize.releaseCapture(); //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
    },
    dragControllerDiv() {
      let resize = document.querySelector('.resize-box > .resize-box-resize');
      let left = document.querySelector('.resize-box > .resize-box-left');
      let right = document.querySelector('.resize-box > .resize-box-right');
      let box = document.querySelector('.resize-box');
      // 鼠标按下事件
      resize.onmousedown = (e) => {
        //颜色改变提醒
        resize.style.background = this.colors[2];
        let startX = e.clientX;
        resize.left = resize.offsetLeft;
        // 鼠标拖动事件
        document.onmousemove = (e) => {
          let endX = e.clientX;
          let moveLen = resize.left + (endX - startX); // （endx-startx）=移动的距离。resize.left+移动的距离=左边区域最后的宽度
          let maxT = box.clientWidth - resize.offsetWidth; // 容器宽度 - 左边区域的宽度 = 右边区域的宽度
          if (moveLen < this.minLeftWidth) {
            if (this.closeLeft && endX - startX < 0) {
              left.style.display = 'none';
              this.onmouseup(resize);
              return;
            } else {
              left.style.display = 'block';
            }
            moveLen = this.minLeftWidth;
          } // 左边区域的最小宽度为32px
          if (moveLen > maxT - this.minRightWidth) moveLen = maxT - this.minRightWidth; // 右边区域最小宽度为150px
          resize.style.left = moveLen; // 设置左侧区域的宽度
          left.style.width = moveLen + 'px';
          right.style.width = box.clientWidth - moveLen - this.midWidth + 'px';
        };
        // 鼠标松开事件
        document.onmouseup = () => {
          this.onmouseup(resize);
        };
        resize.setCapture && resize.setCapture(); //该函数在属于当前线程的指定窗口里设置鼠标捕获
        return false;
      };
    }
  },
  mounted() {
    this.dragControllerDiv();
  }
};
</script>

<style lang="scss" scoped>
/* 拖拽相关样式 */
/*包围div样式*/
.resize-box {
  width: 100%;
  height: 500px;
  position: relative;
}
/*左侧div样式*/
.resize-box-left {
  height: 100%;
  border: 1px solid;
  float: left;
}
/*拖拽区div样式*/
.resize-box-resize {
  cursor: col-resize;
  float: left;
  position: relative;
  background-color: var(--background-color);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  font-size: 32px;
  color: #444;
}
/*拖拽区鼠标悬停样式*/
.resize-box-resize:hover {
  color: var(--color-hover);
}
/*右侧div'样式*/
.resize-box-right {
  float: left;
  height: 100%;
  background: #fff;
  border: 1px solid;
}
</style>