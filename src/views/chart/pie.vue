<!--
 * @Description: 
 * @Date: 2021-09-16 13:35:10
 * @LastEditTime: 2021-09-24 18:05:38
 * @FilePath: \mds\src\views\mds\chart\index.vue
 * @Author: Devin
-->
<template>
  <div class="pie">
    <el-row :gutter="20">
      <el-col style="width: 30%">
        <el-card class="box-card">
          <div slot="header">
            <span class="title">饼状图</span>
            <p class="hide">
              支持设置options 默认配置基本属性
              <a style="color: #0091ff" href="#Input-Attributes">更多详情>></a>
            </p>
          </div>
          <div class="template">
            <el-collapse v-model="activeNames" :accordion="accordion">
              <el-collapse-item title="canvas样式配置" name="0">
                <div class="attribute">
                  <p class="fontS-12">canvas背景色</p>
                  <el-color-picker
                    v-model="backgroundColor"
                    show-alpha
                    class="marginT-6"
                  ></el-color-picker>
                  <!-- <colorPicker v-model="backgroundColor" class="marginT-6" /> -->
                </div>
                <div class="attribute">
                  <span class="fontS-12">canvas高度(xxx px || xx%)</span>
                  <CcInput v-model="pieHeight" size="mini" class="marginT-6"></CcInput>
                </div>
                <div class="attribute">
                  <span class="fontS-12">canvas宽度(xxx px || xx%)</span>
                  <CcInput v-model="pieWidth" size="mini" class="marginT-6"></CcInput>
                </div>
                <div class="attribute">
                  <p class="fontS-12">饼图的内半径</p>
                  <el-input-number
                    v-model="radius[0]"
                    :step="5"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
                <div class="attribute">
                  <p class="fontS-12">饼图的外半径</p>
                  <el-input-number
                    v-model="radius[1]"
                    :step="5"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
                <div class="attribute">
                  <p class="fontS-12">饼图的中心横坐标(px || %)</p>
                  <CcInput v-model="pieCenter[0]" size="mini" class="marginT-6"></CcInput>
                </div>
                <div class="attribute">
                  <p class="fontS-12">饼图的中心纵坐标(px || %)</p>
                  <CcInput v-model="pieCenter[1]" size="mini" class="marginT-6"></CcInput>
                </div>
              </el-collapse-item>
              <el-collapse-item title="title配置" name="1">
                <div class="attribute">
                  <p class="fontS-12">title.show</p>
                  <el-switch
                    v-model="titleOptions.show"
                    active-text="显示"
                    inactive-text="隐藏"
                    class="marginT-6"
                  >
                  </el-switch>
                </div>
                <div class="attribute">
                  <p class="fontS-12">title.textStyle.color(主标题颜色)</p>
                  <el-color-picker
                    v-model="titleOptions.textStyle.color"
                    show-alpha
                    class="marginT-6"
                  ></el-color-picker>
                  <!-- <colorPicker v-model="titleOptions.textStyle.color" class="marginT-6" /> -->
                </div>
                <div class="attribute">
                  <p class="fontS-12">title.subtextStyle.color(副标题颜色)</p>
                  <el-color-picker
                    v-model="titleOptions.subtextStyle.color"
                    show-alpha
                    class="marginT-6"
                  ></el-color-picker>
                  <!-- <colorPicker v-model="titleOptions.subtextStyle.color" class="marginT-6" /> -->
                </div>
                <div class="attribute">
                  <p class="fontS-12">title.textStyle.fontSize</p>
                  <el-input-number
                    v-model="titleOptions.textStyle.fontSize"
                    :step="1"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
                <div class="attribute">
                  <p class="fontS-12">title.subtextStyle.fontSize</p>
                  <el-input-number
                    v-model="titleOptions.subtextStyle.fontSize"
                    :step="1"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
                <div class="attribute">
                  <span class="fontS-12">title.text(主标题）</span>
                  <CcInput
                    :disabled="!titleOptions.show"
                    v-model="titleOptions.text"
                    size="mini"
                    class="marginT-6"
                  ></CcInput>
                </div>
                <div class="attribute">
                  <span class="fontS-12">title.subtext（副标题）</span>
                  <CcInput
                    :disabled="!titleOptions.show"
                    v-model="titleOptions.subtext"
                    size="mini"
                    class="marginT-6"
                  ></CcInput>
                </div>
                <div class="attribute">
                  <p class="fontS-12">title.left (title 组件离容器左侧的距离。px || %)</p>
                  <el-input-number
                    v-model="titleOptions.left"
                    :step="10"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
                <div class="attribute">
                  <p class="fontS-12">title.top (title 组件离容器顶部的距离。px || %)</p>
                  <el-input-number
                    v-model="titleOptions.top"
                    :step="10"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
              </el-collapse-item>
              <el-collapse-item title="legend配置（图例组件）" name="2">
                <div class="attribute">
                  <p class="fontS-12">legend.show（图例组件显示/隐藏）</p>
                  <el-switch
                    v-model="legendOptions.show"
                    active-text="显示"
                    inactive-text="隐藏"
                    class="marginT-6"
                  >
                  </el-switch>
                </div>
                <div class="attribute">
                  <p class="fontS-12">legend.orient（图例列表的布局朝向。）</p>
                  <CcSelect
                    v-model="legendOptions.orient"
                    :options="orientOptions"
                    placeholder="默认选择器"
                    class="marginT-6"
                  ></CcSelect>
                </div>
                <div class="attribute">
                  <p class="fontS-12">legend.right (legend 组件离容器右侧的距离。px || %)</p>
                  <el-input-number
                    v-model="legendOptions.right"
                    :step="10"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
                <div class="attribute">
                  <p class="fontS-12">legend.bottom (legend 组件离容器底部的距离。px || %)</p>
                  <el-input-number
                    v-model="legendOptions.bottom"
                    :step="10"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
                <div class="attribute">
                  <p class="fontS-12">legend.icon（图例项的 icon。）</p>
                  <CcSelect
                    v-model="legendOptions.icon"
                    :options="legendIcons"
                    placeholder="默认选择器"
                    class="marginT-6"
                  ></CcSelect>
                </div>
                <div class="attribute">
                  <p class="fontS-12">legend.itemWidth (图例标记的图形宽度。)</p>
                  <el-input-number
                    v-model="legendOptions.itemWidth"
                    :step="1"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
                <div class="attribute">
                  <p class="fontS-12">legend.itemHeight (图例标记的图形高度。)</p>
                  <el-input-number
                    v-model="legendOptions.itemHeight"
                    :step="1"
                    class="marginT-6"
                    size="mini"
                  ></el-input-number>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
      </el-col>
      <el-col style="width: 70%">
        <el-card class="canvasPie">
          <EchartsPie
            :id="'myChartAudit2'"
            :data="echartsData2"
            :radius="radius"
            :center="pieCenter"
            :width="pieWidth"
            :height="pieHeight"
            :backgroundColor="backgroundColor"
            ref="EchartsPie"
            class="marginT-36"
            :titleOptions="titleOptions"
            :legendOptions="legendOptions"
          ></EchartsPie>
        </el-card>
      </el-col>
      <el-col></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      accordion: true,
      activeNames: ['0'],
      legendIcons: [
        { id: 'circle', name: 'circle' },
        { id: 'rect', name: 'rect' },
        { id: 'roundRect', name: 'roundRect' },
        { id: 'triangle', name: 'triangle' },
        { id: 'diamond', name: 'diamond' },
        { id: 'pin', name: 'pin' },
        { id: 'arrow', name: 'arrow' },
        { id: 'none', name: 'none' }
      ],
      orientOptions: [
        { id: 'horizontal', name: 'horizontal' },
        { id: 'vertical', name: 'vertical' }
      ],
      echartsData2: [
        { value: '1', name: '吴亦凡' },
        { value: '2', name: '谢霆锋' },
        { value: '4', name: '周杰伦' },
        { value: '9', name: '林青霞' }
      ],
      radius: ['20', '60'],
      pieCenter: ['50%', '50%'],
      pieWidth: '100%',
      pieHeight: '200px',
      backgroundColor: '#ccc',
      titleOptions: {
        //标题配置项
        text: '哈哈哈',
        subtext: '嘻嘻嘻',
        show: true,
        left: 10,
        top: 10,
        textStyle: {
          //其它的参考文档 都可配
          color: 'red',
          fontSize: 16
        },
        subtextStyle: {
          color: 'red',
          fontSize: 12
        }
      },
      legendOptions: {
        show: true,
        orient: 'vertical',
        right: 20,
        bottom: 20,
        icon: 'circle',
        itemWidth: 15,
        itemHeight: 15
      }
    };
  },
  created() {},
  computed: {},
  methods: {},
  watch: {}
};
</script>
<style scoped lang="scss">
.template {
  max-height: 600px;
  overflow-y: auto;
}
.pie {
  height: 100%;
}
.attribute {
  max-width: 100%;
  margin: 8px 0;
  padding: 4px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.canvasPie {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}
::v-deep .box-card:not(:last-child) {
  margin-bottom: 0 !important;
}
::v-deep .m-colorPicker .box {
  z-index: 100 !important;
}
::v-deep .el-collapse-item__header {
  font-weight: bold;
}
</style>
