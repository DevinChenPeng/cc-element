<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: adrian
 * @Date: 2021-09-26 11:20:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-13 14:30:05
-->
<template>
  <div>
    <div class="bar">
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
                    <CcInput v-model="barHeight" size="mini" class="marginT-6"></CcInput>
                  </div>
                  <div class="attribute">
                    <span class="fontS-12">canvas宽度(xxx px || xx% 非必传)</span>
                    <CcInput v-model="barWidth" size="mini" class="marginT-6"></CcInput>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="title配置" name="1">
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
                <el-collapse-item title="series配置（柱状图）" name="4">
                  <div class="attribute">
                    <p class="fontS-12">series-bar.itemStyle.borderWidth (柱条的描边宽度 非必传)</p>
                    <el-input-number
                      v-model="txBarWidth"
                      :step="1"
                      class="marginT-6"
                      size="mini"
                      :max="40"
                      :min="10"
                    ></el-input-number>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">
                      series-bar.itemStyle.borderRadius (柱条的圆角大小 非必传)
                    </p>
                    <el-input-number
                      v-model="barBorderRadius"
                      :step="1"
                      class="marginT-6"
                      size="mini"
                      :min="0"
                      :max="20"
                    ></el-input-number>
                  </div>
                  <div class="attribute">
                    <p class="fontS-12">
                      series-bar.barGap (柱条的间距 非必传)
                    </p>
                    <el-input-number
                      v-model="barGap"
                      :step="1"
                      class="marginT-6"
                      size="mini"
                      :min="-1"
                      :max="10"
                    ></el-input-number>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-col>
        <el-col style="width: 70%">
          <el-card class="canvasBar">
            <EchartsBar
              :id="'myChartAudit2'"
              :data="echartsData2"
              :width="barWidth"
              :height="barHeight"
              :barWidth="txBarWidth"
              :barBorderRadius="barBorderRadius"
              :barGap="barGap"
              :backgroundColor="backgroundColor"
              :titleOptions="titleOptions"
              :legendOptions="legendOptions"
              ref="EchartsBar"
              class="marginT-36"
            ></EchartsBar>
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
      activeNames: ['0'],
      barGap: 1,
      types: [
        { id: '0', name: '0' },
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' }
      ],
      accordion: true,
      yArr: [
        //模拟多数据
        { name: '第一类数据', value: [6, 2, 3, 4] },
        { name: '第二类数据', value: [5, 6, 10, 1] },
        { name: '第三类数据', value: [9, 2, 7, 16] },
        { name: '第四类数据', value: [1, 14, 10, 19] }
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
      barWidth: '100%',
      barHeight: '240px',
      txBarWidth: 16,
      barBorderRadius: 8,
      backgroundColor: '#fff',
      echartsData2: {
        xArr: ['呵呵', '兮兮', '哈哈', '滴滴'],
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
        top: 10,
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
.bar {
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
::v-deep .el-card__body{
  padding: 8px;
} 
</style>
