/*
 * @Description: 
 * @Date: 2021-10-13 14:45:11
 * @LastEditTime: 2021-10-13 14:45:11
 * @FilePath: \cc-common-resource\packages\cc-echarts\echartsBar\src\props.js
 * @Author: Devin
 */
export default {
  data: {
    type: Object,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  titleOptions: {
    type: Object
  },
  legendOptions: {
    type: Object
  },
  seriesName: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  backgroundColor: {
    type: String,
    default: '#fff'
  },
  barWidth: {
    type: Number,
    default: 16
  },
  barBorderRadius: {
    type: Number,
    default: 8
  },
  barGap: {
    type: Number,
    default: 1
  },
  type: {
    type: String,
    default: 'canvas'
  },
  isClick: {
    type: Boolean,
    default: false
  },
  pieType: {
    type: String,
    default: 'outside'
  },
  ownTooltip: {
    type: Boolean,
    default: false
  }
}