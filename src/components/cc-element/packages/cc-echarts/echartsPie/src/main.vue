<!--
 * @Description
 * @Date: 2021-10-13 14:38:14
 * @LastEditTime: 2021-10-21 11:27:49
 * @FilePath: \cc-common-resource\packages\cc-echarts\echartsPie\src\main.vue
 * @Author: Devin
-->
<template>
  <div :style="`width:${width};height:${height}`" class="echarts_pie">
    <div :id="id" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import Props from './props';
export default {
  name: 'EchartsPie',
  props: Props,
  data() {
    return {
      showImg: false
    };
  },
  computed: {
    isEmpty() {
      return this.data.length === 0 ? true : false;
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    changeData() {
      this.drawLine();
    },
    hasData() {
      if (this.data.length > 0) {
        const idx = this.data.findIndex(v => {
          return v.value !== 0;
        });
        if (idx === -1) {
          this.data = [];
          this.showImg = true;
        }
      } else {
        this.showImg = true;
      }
    },
    drawLine() {
      const _this = this;
      this.hasData();
      if (document.getElementById(this.id).hasAttribute('_echarts_instance_')) {
        document.getElementById(this.id).removeAttribute('_echarts_instance_');
        document.getElementById(this.id).innerHTML = '';
      }
      var myChart = this.$echarts.init(document.getElementById(this.id), null, {
        devicePixelRatio: 2,
        renderer: this.type
      });
      myChart.clear();
      myChart.setOption(this.optionFun(), true);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      this.$nextTick(() => {
        // 绘制图表
        if (this.isClick) {
          myChart.on('click', function(params) {
            _this.$emit('clickChart', params);
          });
        } else {
          myChart.on('legendselectchanged', function(params) {
            var option = this.getOption();
            option.legend[0].selected[params.name] = true; //相当于取消点击事件
            this.setOption(option, true);
          });
        }
        myChart.resize();
      });
    },
    optionFun() {
      const options = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        backgroundColor: this.backgroundColor,
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
        series: this.isEmpty ? this.emptySeriesFun() : this.dataSeriesFun()
      };
      return options;
    },
    emptySeriesFun() {
      const _this = this;
      const series = [
        {
          name: '',
          type: 'pie',
          hoverOffset: 0,
          radius: this.radius,
          center: this.center,
          hoverAnimation: false,
          tooltip: {
            show: false,
            formatter() {
              return 'noData'
            }
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            color: '#D1DEF9'
          },
          emphasis: {
            scale: false,
            itemStyle: {
              color: '#D1DEF9'
            },
            label: {
              show: false
            }
          },
          data: [{ value: 0, name: '-' }]
        }
      ];
      return series;
    },
    dataSeriesFun() {
      const series = [
        {
          name: '',
          type: 'pie',
          hoverOffset: 0,
          radius: this.radius,
          center: this.center,
          hoverAnimation: false,
          tooltip: {
            formatter: function(obj) {
              let num = Math.floor(obj.data.name.length / 40);
              let string = '';
              for (let index = 0; index < num; index++) {
                string = string + obj.data.name.slice(index * 40, (index + 1) * 40) + '<br>';
              }
              string = string + obj.data.name.slice(num * 40);
              return `${string}: ${obj.value}`;
            }
          },
          label: {
            show: true,
            position: this.pieType,
            color: '#00215F',
            fontSize: 10,
            normal: {
              show: true,
              position: this.pieType, //标签的位置
              textStyle: {
                color: '#00215F',
                fontSize: 10 //文字的字体大小
              },
              formatter: '{d}%'
            }
          },
          labelLine: {
            show: true,
            length: 5
          },
          itemStyle: {
            emphasis: {
              shadowBlur: this.isEmpty ? 0 : 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
              color: params => {
                if (this.isEmpty) {
                  return '#D1DEF9';
                }
                //自定义颜色
                var colorList = this.color;
                return colorList[params.dataIndex];
              }
            }
          },
          emphasis: {
            scale: false,
            itemStyle: {
              shadowBlur: 0,
              shadowColor: 'red'
            }
          },
          data: this.data
        }
      ];
      return series;
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
