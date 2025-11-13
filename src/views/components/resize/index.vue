<!--
 * @Description: 
 * @Author: Devin
 * @Date: 2021-12-15 15:13:28
 * @LastEditTime: 2021-12-29 16:57:46
 * @LastEditors: Devin
 * @Reference: 
-->
<template>
  <CcResize :leftClass="['left']" :rightClass="['right']">
    <template #left>
      <CcUploadCopperImage
        :isSlot="true"
        title="裁剪"
        :imgWidth="168"
        :imgHeight="168"
        @corpperImage="corpperImage"
      >
        <div class="upload-img">
          点击上传
          <img :src="url" alt="" />
          <div class="img-bg"></div>
        </div>
      </CcUploadCopperImage>
    </template>
    <template #right>
      <CcTable
        url="/mds/table/list"
        :columns="columns4"
        :dataHandler="
          (item) => {
            item.isEditor = Random.boolean();
            return item;
          }
        "
        :setPageIndex="2"
        ref="ecc-table"
      ></CcTable>
    </template>
  </CcResize>
</template>

<script>
import CcUploadCopperImage from '@/components/cc-element/packages/cc-upload-copper-image/src/index.vue';
import Mock from 'mockjs';
const Random = Mock.Random;
export default {
  omponents: { CcUploadCopperImage },
  computed:{
    Random() {
      return Random;
    }
  },
  data() {
    return {
      columns4: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'date',
          label: '生日'
        },
        {
          prop: 'email',
          label: '邮箱'
        },
        {
          prop: 'status',
          label: '性别'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'isEditor',
          label: '是否编辑状态'
        }
      ],
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110429%2F25-11042ZT11562.jpg&refer=http%3A%2F%2Fimg.taopic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636880490&t=7e41117d1e6e951bb97534c1ed397100'
    };
  },
  methods: {
    corpperImage(uploadId, url) {
      this.url = url;
    }
  }
  
};
</script>

<style lang="scss" scoped>
::v-deep .left {
  overflow: auto;
}
::v-deep .right{
  padding: 10px;
}
.upload-img {
  width: 168px;
  height: 168px;
  position: relative;
  margin: 100px 0;
  line-height: 168px;
  overflow: hidden;
  .img-bg,
  img {
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