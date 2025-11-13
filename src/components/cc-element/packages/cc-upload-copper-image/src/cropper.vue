<template>
  <div>
    <CcDialog 
      :visible.sync="cropperShow"
      @close="dialogClosed" 
      custom-class="cropperDialog"
      :title="title"
      width="750px"
      @handleCancel="handleImageCopper('cancel')"
      @handleConfirm="handleImageCopper('confirm')"
      >
      <div>
        <div class="cropper-content">
          <div class="left">
            <!-- 预览 -->
            <div class="title">预览</div>
            <div
              class="show-preview"
              :style="{'width': imgWidth + 'px', 'height': imgHeight + 'px','visibility':isReview?'visible':'hidden'}"
            >
              <div :style="previews.div" class="preview">
                <img :src="previews.url" :style="previews.img" />
              </div>
            </div>
          </div>
          <div class="right">
            <!-- 改变尺寸 -->
            <div class="title">改变尺寸</div>
            <div class="cropper">
              <VueCropper
                ref="cropper"
                :img="cropperImg"
                :outputSize="option.outputSize"
                :outputType="option.outputType"
                :info="true"
                :full="option.full"
                :canMove="option.canMove"
                :canMoveBox="option.canMoveBox"
                :original="option.original"
                :autoCrop="option.autoCrop"
                :autoCropWidth="option.autoCropWidth"
                :autoCropHeight="option.autoCropHeight"
                :fixedBox="option.fixedBox"
                @realTime="realTime"
                :canScale="option.canScale"
              ></VueCropper>
            </div>
            <div class="tools">
              <!-- 放大 -->
              <div style="flex:1;">
                <el-slider 
                  v-model="large" 
                  @input="dragging"
                  :show-tooltip="false"
                ></el-slider>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </CcDialog>
  </div>
</template>

<script>

import { VueCropper } from "vue-cropper"
import { fileUpload, lookPhoto } from '@/api/upload'

export default {
  props: {
    cropperShow: {
      type: Boolean,
      default: false
    },
    cropperImg: {
      type: String,
      default: ''
    },
    imgWidth: {
      type: [String, Number],
      default: 260
    },
    imgHeight: {
      type: [String, Number],
      default: 130
    },
    fileName: String,
    title: String
  },
  components: { 
    VueCropper
  },
  data() {
    return {
      previews: {}, //预览数据
      large: [0, 0],
      //剪切图片上传
      crap: false,
      isReview: true,
      autoUpload: false, //是否自动上传
      scale: 0,
    }
  }, 
  watch: {
    scale(newVal, oldVal) {
      if (newVal >= oldVal) {
        this.changeScale(1);
      } else {
        this.changeScale(-1);
      }
    }
  },
  computed: {
    option () {
      return {
        //裁剪图片的配置信息
        img: "",
        outputSize: 1, //剪切后的图片质量（0.1-1）
        full: false, //输出原图比例截图 props名full 
        outputType: "png", //png
        canMove: true,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        autoCropWidth: this.imgWidth,
        autoCropHeight: this.imgHeight, 
        fixedBox: true,
        canScale: true //图片允许滚轮缩放
      }
    }
  }, 
  methods: { 
    dialogClosed () {
      this.$emit('cropperClose')
    },
    //滑块拖动事件
    dragging(e, index) {
      this.scale = e;
    },
    //放大/缩小
    changeScale(num) {
      this.$refs.cropper.changeScale(num)
    },
    // 实时预览函数
    realTime(data) {
      this.previews = data
    },
    //图片裁剪
    handleImageCopper(type) {
      if (type === 'confirm') {
        this.$refs.cropper.getCropBlob(data => {
          let form = new FormData()
          form.append("file", data, this.fileName)
          // 上传接口
          fileUpload(form).then(res => {
            const uploadId = res.data
            if (res.code === 0) {
              // 查看图片回显
              lookPhoto(uploadId, 15000).then((res) => {
                if (res.code === 0) {
                  const url = res.data
                  this.$emit("corpperDone", uploadId, url)
                  this.dialogClosed()
                }
              })
            }
          }).catch(() => {
            this.$emit("corpperDone")
            this.dialogClosed()
          })
        })
      } else {
        this.$emit("corpperDone")
        this.dialogClosed()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tools {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 24px;
    color: #192646;
    > span {
      margin-right: 10px;
    }
  }
  .cropper-content {
    display: flex;
    justify-content: center;
    .left {
      margin-right: 60px; 
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .cropper {
      width: 455px;
      height: 300px;
    }
    .show-preview {
      flex: 1;
      -webkit-flex: 1;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      -webkit-justify-content: center;
      .preview {
        overflow: hidden;
        border-radius: 2px;
        border: 1px solid #eaeef6;
        margin-left: 40px;
        border-radius: 50%;
      }
    }
    .left, .right {
      .title {
        margin-bottom: 10px; 
      }
    }
  }
  .cropper-content .show-preview .preview {
    margin-left: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .uploadItem {
    margin-right: 24px;
    .uploadContent {
      width: 205px;
      height: 105px;
      border-radius: 6px;
      border: 1px dashed rgba(208, 209, 216, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        width: 100%;
        height: 100%;
      }
      .icon {
        font-size: 28px;
      }
    }
  }
</style>

<style lang="scss"> 
.cropperDialog {
  width: 960px;  
}
.cropper-face, .cropper-view-box {
  border-radius: 50%;
}
</style>