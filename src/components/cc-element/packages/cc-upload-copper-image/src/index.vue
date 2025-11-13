<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      accept="image/png,image/jpg,image/jpeg"
      :http-request="httpUploadRequest"
      action=""
    >
      <CcButton v-if="!isSlot">{{ $t('public.uploadImg.button') }}</CcButton>
      <slot></slot>
    </el-upload>
    <MyCorpper :cropperShow="cropperShow" 
      :cropperImg="cropperImg" 
      :fileName="fileName"
      :imgWidth="imgWidth" 
      :imgHeight="imgHeight"
      :title="title"
      @corpperDone="corpperDone"
      @cropperClose="cropperClose"
    />
  </div>
</template>

<script>
import MyCorpper from './cropper'
export default {
  components: {
    MyCorpper
  },
  props: {
    isSlot:{
      type: Boolean,
      defalut: false
    },
    maxSize: {
      type: Number,
      default: 1
    },
    imgWidth: {
      type: [Number, String],
      defalut: 200
    },
    imgHeight: {
      type: [Number, String],
      defalut: 200
    },
    title: String
  },
  data() {
    return {
      cropperImg: '',
      fileName: '',
      cropperShow: false
    }
  },
  methods: {
    httpUploadRequest(option) {
      this.cropperShow = false
      let file = option.file
      let reader = new FileReader()
      let isValid = this.beforeAvatarUpload(file)
      if (!isValid) {
        return
      }
      if (file) {
        reader.readAsDataURL(file)
      }
      let _this = this
      // base64
      reader.onload = () => {
        let src = reader.result
        _this.cropperShow = true
        _this.cropperImg = src
      }
    },
    beforeAvatarUpload(file) {
      this.fileName = file.name
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isMaxSize = file.size / 1024 / 1024 < this.maxSize;
      if (!isJPG && !isPNG) {
        this.$message({type: 'error', message: `请上传图片格式 png、jpg、jpeg`})
        return false
      }
      if (!isMaxSize) {
        this.$message({type: 'error', message: `图片大小不能超过${this.maxSize}M`})
        return false
      }
      return true
    },
    corpperDone(uploadId, url) {
      if (uploadId) {
        this.$emit('corpperImage', uploadId, url)
      } 
    },
    cropperClose() {
      this.cropperShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-uploader {
  text-align: center;
}
</style>