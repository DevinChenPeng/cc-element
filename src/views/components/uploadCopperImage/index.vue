<!--
 * @Author: Devin
 * @Date: 2022-03-01 10:34:55
 * @LastEditors: Devin
 * @LastEditTime: 2022-04-06 10:55:17
-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span class="title">裁剪及上传图片</span>
        <p class="hide">现在是 mock 上传，生成了一个固定的 url 用于回显，实际项目可自行调整上传地址， 可打开控制台查看</p>
      </div>
      <UploadCopperImage 
        :isSlot="true" 
        title="裁剪"
        :imgWidth="168"
        :imgHeight="168"
        @corpperImage="corpperImage"
      >
        <div class="upload-img">
          点击上传
          <img :src="url" alt="">
          <div class="img-bg"></div>
        </div>
      </UploadCopperImage>
    </el-card>
  </div>
</template>

<script>
import UploadCopperImage from '@/components/cc-element/packages/cc-upload-copper-image/index'
export default {
  components: { UploadCopperImage },
  data() {
    return {
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110429%2F25-11042ZT11562.jpg&refer=http%3A%2F%2Fimg.taopic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636880490&t=7e41117d1e6e951bb97534c1ed397100'
    }
  },
  methods: {
    corpperImage(uploadId, url) {
      this.url = url
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-img {
  width: 168px;
  height: 168px;  
  position: relative;
  margin: 100px 0;
  line-height: 168px;
  overflow: hidden;
  .img-bg, img {
    box-shadow: 0 0 0 50px rgb(0 0 0 / 40%);
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-fit: contain;
  }
}
</style>