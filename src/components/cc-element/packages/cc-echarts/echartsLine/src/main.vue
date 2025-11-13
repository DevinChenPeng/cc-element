<!--
 * @Description: 
 * @Date: 2021-10-13 14:38:14
 * @LastEditTime: 2021-10-21 11:27:14
 * @FilePath: \cc-common-resource\packages\cc-echarts\echartsLine\src\main.vue
 * @Author: Devin
-->
<template>
  <div :style="`width:${width};height:${height}`" class="echarts_pie">
    <div :id="id" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
const colorList = [
  '#FF7171',
  '#667A9F',
  '#FDC331',
  '#EE8A1D',
  '#75C140',
  '#55C4F2',
  '#60EDFF',
  '#2E98FF',
  '#6F6DFF',
  '#C16DFF',
  '#D1DEF9'
];
import Props from './props';
export default {
  name: 'EchartsLine',
  props: Props,
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      if (this.data.xArr == 0 || this.data.yArr.length === 0) {
        // 以下是暂无数据显示样式(样式根据本身需求进行调整)
        let html = `
        <div class="nodata" style="display: flex;justify-content: center;align-items: center;height:100%;">
            <img src="${require('../../barNo.png')}" style="height:120px">
        </div>`;
        document.getElementById(this.id).innerHTML = html;
        document.getElementById(this.id).removeAttribute('_echarts_instance_');
        return;
      }
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById(this.id), null, {
        devicePixelRatio: 2,
        renderer: this.type
      });
      this.$nextTick(() => {
        myChart.resize();
      });
      myChart.clear();
      myChart.setOption(this.getOption(this.data), true);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
    getOption({ xArr, yArr }) {
      //自定义颜色
      const _this = this;
      let legendNameList = [];
      let seriesList = [];
      yArr.forEach((item, index) => {
        legendNameList.push(item.name);
        seriesList.push({
          name: item.name,
          type: 'line',
          data: item.value,
          stack: this.seriesStack,
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowOffsetX: 0,
              shadowColor: '#fff'
              // borderType: 'dashed',
              // borderColor: function(params) {
              //   return colorList[params.dataIndex];
              // }
            }
          },
          lineStyle: {
            type: this.lineType
          },
          areaStyle: {
            opacity: this.areaOpacity,
            origin: 'start',

            shadowColor: function(params) {
              return colorList[params.dataIndex];
            },
            shadowBlur: 10
          }
        });
      });
      let option = {
        color: colorList,
        backgroundColor: this.backgroundColor,
        toolbox: {
          show: this.toolboxShow,
          showTitle: false,
          right: 20,
          top: -4,
          feature: {
            dataView: {
              //数据视图
              show: this.feature.indexOf('dataView') == '-1' ? false : true,
              title: '数据视图'
            },
            restore: {
              //重置
              show: this.feature.indexOf('restore') == '-1' ? false : true,
              title: '重置'
            },
            dataZoom: {
              //数据缩放视图
              show: this.feature.indexOf('dataZoom') == '-1' ? false : true,
              title: {
                zoom: '缩放视图',
                back: '缩放视图还原'
              }
            },
            saveAsImage: {
              //保存图片
              show: this.feature.indexOf('saveAsImage') == '-1' ? false : true,
              title: '保存图片'
            },
            magicType: {
              //动态类型切换
              show: this.feature.indexOf('magicType') == '-1' ? false : true,
              type: ['bar', 'line', 'stack', 'tiled'],
              title: {
                line: '切换为折线图',
                bar: '切换为柱状图',
                stack: '切换堆叠',
                tiled: '切换平铺'
              }
            }
          },
          tooltip: {
            // 和 option.tooltip 的配置项相同
            show: true,
            formatter: function(param) {
              return '<div>' + param.title + '</div>'; // 自定义的 DOM 结构
            },
            backgroundColor: '#fff',
            textStyle: {
              fontSize: 12,
              color: '#00215F'
            },
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);' // 自定义的 CSS 样式
          }
        },
        title: Object.assign(
          {
            show: false,
            text: '',
            left: 'auto',
            top: 'auto',
            textStyle: {
              color: '#00215F',
              fontSize: 16,
              fontWeight: 'bold'
            }
          },
          this.titleOptions
        ),
        legend: Object.assign(
          {
            data: legendNameList,
            show: true,
            type: 'scroll',
            orient: 'vertical',
            right: '20',
            bottom: '15%',
            formatter: function(name) {
              return name.length > 8 ? name.slice(0, 8) + '...' : name;
            },
            textStyle: {
              fontSize: 12
            },
            itemWidth: 12,
            itemHeight: 12,
            tooltip: {
              show: this.isEmpty ? false : true,
              formatter: function(obj) {
                let num = Math.floor(obj.name.length / 40);
                let string = '';
                for (let index = 0; index < num; index++) {
                  string = string + obj.name.slice(index * 40, (index + 1) * 40) + '<br>';
                }
                string = string + obj.name.slice(num * 40);
                return `${string}`;
              }
            }
          },
          this.legendOptions
        ),
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter(params) {
            // 自定义
            if (_this.ownTooltip) {
              let str = '';
              params.forEach((item, index) => {
                str += `${params[index].marker}${_this.data.fullName[params[index].dataIndex]}: ${
                  params[index].value
                }<br />`;
              });
              return str;
            } else {
              let str = '';
              params.forEach((item, index) => {
                str += `${params[index].marker}${params[index].seriesName}: ${params[index].value}<br />`;
              });
              return str;
            }
          }
        },
        grid: {
          left: 'center',
          top: '25%',
          containLabel: true,
          height: '70%',
          width: '80%',
          bottom: '80%'
        },
        xAxis: {
          type: 'category',
          nameGap: 10,
          data: xArr,
          boundaryGap: this.boundaryGap,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#EAEEF6'
            }
          },
          axisLabel: {
            color: '#00215F',
            interval: 0,
            formatter: function(value, idx) {
              if (_this.ownTooltip && this.$storage.getLocal('language') === 'zh-CN') {
                const fullName = _this.data.fullName;
                if (fullName.length === 5) {
                  const name = fullName[idx].split('');
                  const first =
                    idx === fullName.length - 1
                      ? name.splice(0, 3).join('')
                      : name.splice(0, 2).join('');
                  const last = name.join('');
                  return '{firstLine|' + first + '}\n' + last;
                } else {
                  return value;
                }
              } else {
                return value;
              }
            },
            rich: {
              firstLine: {
                padding: [3, 0, 0, 0]
              }
            }
          }
        },
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            startValue: 0,
            endValue: 7, //只显示五个数据
            show: xArr.length > 8,
            zoomLock: true,
            handlesize: 0,
            height: 10,
            bottom: 0,
            filterMode: 'filter'
          }
        ],
        yAxis: [
          {
            type: 'value',
            minInterval: 1,
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#EAEEF6',
                width: 1 //这里是为了突出显示加上的
              }
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: '#EAEEF6',
                type: 'dashed'
              }
            },
            axisLabel: {
              color: '#00215F'
            }
          }
        ],
        series: seriesList
      };
      return option;
    }
  },

  watch: {
    $props: {
      handler(newVal, oldVal) {
        this.drawLine();
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">
.nodata {
  img {
    max-width: 90%;
  }
}
</style>
