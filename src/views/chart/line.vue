<template>
  <div>
    <div class="line">
      <el-row :gutter="20">
        <el-col style="width: 30%">
          <el-card class="box-card">
            <div slot="header">
              <span class="title">柱状图</span>
              <p class="hide">
                支持设置options 默认配置基本属性
                <a style="color: #0091ff" href="#Input-Attributes">更多详情>></a>
              </p>
            </div>
            <div class="template">
              <el-collapse v-model="activeNames" :accordion="accordion">
                <el-collapse-item title="多条数据源" name="0">
                  <div class="attribute">
                    <p class="fontS-12">几种数据</p>
                    <CcSelect
                      v-model="typesNum"
                      :options="types"
                      placeholder="默认选择器"
                      class="marginT-6"
                    ></CcSelect>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="canvas样式配置" name="1">
                  <div class="attribute">
                    <p class="fontS-12">canvas背景色</p>
                    <el-color-picker
                      v-model="backgroundColor"
                      show-alpha
                      class="marginT-6"
                    ></el-color-picker>
                  </div>
                  <div class="attribute">
                    <span class="fontS-12">canvas高度(xxx px || xx% 非必传)</span>
                    <CcInput v-model="lineHeight" size="mini" class="marginT-6"></CcInput>
                  </div>
                  <div class="attribute">
                    <span class="fontS-12">canvas宽度(xxx px || xx% 非必传)</span>
                    <CcInput v-model="lineWidth" size="mini" class="marginT-6"></CcInput>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">x轴是否留白 （非必传）</p>
                    <el-switch
                      v-model="boundaryGap"
                      active-text="是"
                      inactive-text="否"
                      class="marginT-6"
                    >
                    </el-switch>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">toolbox（工具栏）</p>
                    <el-switch
                      v-model="toolboxShow"
                      active-text="显示"
                      inactive-text="隐藏"
                      class="marginT-6"
                    >
                    </el-switch>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">toolbox. feature（各工具配置项。）</p>
                    <CcSelect
                      v-model="feature"
                      :options="features"
                      placeholder="默认选择器"
                      :multiple="true"
                      class="marginT-6"
                    ></CcSelect>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="title配置" name="2">
                  <div class="attribute">
                    <p class="fontS-12">title.show （非必传）</p>
                    <el-switch
                      v-model="titleOptions.show"
                      active-text="显示"
                      inactive-text="隐藏"
                      class="marginT-6"
                    >
                    </el-switch>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">title.textStyle.color(主标题颜色 非必传)</p>
                    <el-color-picker
                      v-model="titleOptions.textStyle.color"
                      show-alpha
                      class="marginT-6"
                    ></el-color-picker>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">title.subtextStyle.color(副标题颜色 非必传)</p>
                    <el-color-picker
                      v-model="titleOptions.subtextStyle.color"
                      show-alpha
                      class="marginT-6"
                    ></el-color-picker>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">title.textStyle.fontSize （非必传）</p>
                    <el-input-number
                      v-model="titleOptions.textStyle.fontSize"
                      :step="1"
                      class="marginT-6"
                      size="mini"
                    ></el-input-number>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">title.subtextStyle.fontSize （非必传）</p>
                    <el-input-number
                      v-model="titleOptions.subtextStyle.fontSize"
                      :step="1"
                      class="marginT-6"
                      size="mini"
                    ></el-input-number>
                  </div>
                  <div class="attribute">
                    <span class="fontS-12">title.text(主标题 非必传）</span>
                    <CcInput
                      :disabled="!titleOptions.show"
                      v-model="titleOptions.text"
                      size="mini"
                      class="marginT-6"
                    ></CcInput>
                  </div>
                  <div class="attribute">
                    <span class="fontS-12">title.subtext（副标题 非必传）</span>
                    <CcInput
                      :disabled="!titleOptions.show"
                      v-model="titleOptions.subtext"
                      size="mini"
                      class="marginT-6"
                    ></CcInput>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">title.left (title 组件离容器左侧的距离。px || % 非必传)</p>
                    <el-input-number
                      v-model="titleOptions.left"
                      :step="10"
                      class="marginT-6"
                      size="mini"
                    ></el-input-number>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">title.top (title 组件离容器顶部的距离。px || % 非必传)</p>
                    <el-input-number
                      v-model="titleOptions.top"
                      :step="10"
                      class="marginT-6"
                      size="mini"
                    ></el-input-number>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="legend配置（图例组件）" name="3">
                  <div class="attribute">
                    <p class="fontS-12">legend.show（图例组件显示/隐藏 非必传）</p>
                    <el-switch
                      v-model="legendOptions.show"
                      active-text="显示"
                      inactive-text="隐藏"
                      class="marginT-6"
                    >
                    </el-switch>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">legend.orient（图例列表的布局朝向。 非必传）</p>
                    <CcSelect
                      v-model="legendOptions.orient"
                      :options="orientOptions"
                      placeholder="默认选择器"
                      class="marginT-6"
                    ></CcSelect>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">
                      legend.right (legend 组件离容器右侧的距离。px || % 非必传)
                    </p>
                    <el-input-number
                      v-model="legendOptions.right"
                      :step="10"
                      class="marginT-6"
                      size="mini"
                    ></el-input-number>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">legend.top (legend 组件离容器顶部的距离。px || % 非必传)</p>
                    <el-input-number
                      v-model="legendOptions.top"
                      :step="10"
                      class="marginT-6"
                      size="mini"
                    ></el-input-number>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">legend.icon（图例项的 icon。 非必传）</p>
                    <CcSelect
                      v-model="legendOptions.icon"
                      :options="legendIcons"
                      placeholder="默认选择器"
                      class="marginT-6"
                    ></CcSelect>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">legend.itemWidth (图例标记的图形宽度。 非必传)</p>
                    <el-input-number
                      v-model="legendOptions.itemWidth"
                      :step="1"
                      class="marginT-6"
                      size="mini"
                    ></el-input-number>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">legend.itemHeight (图例标记的图形高度。 非必传)</p>
                    <el-input-number
                      v-model="legendOptions.itemHeight"
                      :step="1"
                      class="marginT-6"
                      size="mini"
                    ></el-input-number>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="series-line配置" name="4">
                  <div class="attribute">
                    <p class="fontS-12">series-line.lineStyle.type（线的类型。）</p>
                    <CcSelect
                      v-model="lineType"
                      :options="lineTypes"
                      placeholder="默认选择器"
                      class="marginT-6"
                    ></CcSelect>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">
                      series-line.areaStyle.opacity(图形透明度。支持从 0 到 1 的数字，为 0
                      时不绘制该图形。)
                    </p>
                    <el-input-number
                      v-model="areaOpacity"
                      :step="0.1"
                      class="marginT-6"
                      size="mini"
                      :max="0.5"
                      :min="0"
                    ></el-input-number>
                  </div>
                  <div class="attribute">
                    <span class="fontS-12"
                      >series-line.
                      stack（数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。为空则不堆叠）</span
                    >
                    <CcInput v-model="seriesStack" size="mini" class="marginT-6"></CcInput>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-col>
        <el-col style="width: 70%">
          <el-card class="canvasBar">
            <EchartsLine
              :id="'myChartAudit2'"
              :data="echartsData2"
              :width="lineWidth"
              :height="lineHeight"
              :boundaryGap="boundaryGap"
              :lineType="lineType"
              :areaOpacity="areaOpacity"
              :seriesStack="seriesStack"
              :toolboxShow="toolboxShow"
              :backgroundColor="backgroundColor"
              :feature="feature"
              :titleOptions="titleOptions"
              :legendOptions="legendOptions"
              ref="EchartsBar"
              class="marginT-36"
            ></EchartsLine>
          </el-card>
        </el-col>
        <el-col></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typesNum: 0,
      areaOpacity: 0,
      activeNames: ['0'],
      boundaryGap: false, //是否留空白间距X轴
      toolboxShow: true, //工具栏开启
      feature: ['saveAsImage'], //工具栏 工具项
      features: [
        { id: 'dataView', name: 'dataView(数据视图)' },
        { id: 'restore', name: 'restore(刷新)' },
        { id: 'dataZoom', name: 'dataZoom(缩放)' },
        { id: 'saveAsImage', name: 'saveAsImage(保存图片)' },
        { id: 'magicType', name: 'magicType(切换图形)' }
      ],
      seriesStack: '',
      lineType: 'solid', //折线类型
      lineTypes: [
        { id: 'solid', name: 'solid' },
        { id: 'dashed', name: 'dashed' },
        { id: 'dotted', name: 'dotted' }
      ],
      types: [
        { id: '0', name: '0' },
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' },
        { id: '5', name: '5' }
      ],
      accordion: true,
      yArr: [
        //模拟多数据
        { name: '第一类数据', value: [0, 2, 3, 4, 5, 6, 7, 18, 9, 55] },
        { name: '第二类数据', value: [5, 6, 10, 1, 7, 8, 19, 10, 11, 13] },
        { name: '第三类数据', value: [9, 2, 7, 16, 8, 9, 17, 11, 12, 60] },
        { name: '第四类数据', value: [1, 14, 10, 19, 9, 10, 15, 12, 30] },
        { name: '第五类数据', value: [2, 11, 12, 21, 10, 11, 18, 13, 32] }
      ],

      orientOptions: [
        { id: 'horizontal', name: 'horizontal' },
        { id: 'vertical', name: 'vertical' }
      ],
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
      lineWidth: '100%',
      lineHeight: '240px',
      backgroundColor: '#fff',
      echartsData2: {
        xArr: ['111', '222', '333', '444', '555', '666', '777', '888', '999'],
        yArr: [] //默认显示一类型数据
      },
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
        orient: 'horizontal',
        right: 20,
        top: 20,
        icon: 'circle',
        itemWidth: 15,
        itemHeight: 15
      }
    };
  },
  watch: {
    typesNum: {
      handler(newVal, oldVal) {
        this.echartsData2.yArr = this.yArr.slice(0, parseInt(newVal));
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.template {
  max-height: 600px;
  overflow-y: auto;
}
.line {
  height: 100%;
}
.attribute {
  max-width: 100%;
  margin: 8px 0;
  padding: 4px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.barHeight {
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
::v-deep .el-card__body {
  padding: 8px;
}
</style>
