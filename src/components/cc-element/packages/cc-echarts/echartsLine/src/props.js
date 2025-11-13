/*
 * @Description: 
 * @Date: 2021-10-13 14:43:07
 * @LastEditTime: 2021-10-13 14:43:07
 * @FilePath: \cc-common-resource\packages\cc-echarts\echartsLine\src\props.js
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
  lineBorderRadius: {
    type: Number,
    default: 8
  },
  type: {
    type: String,
    default: 'canvas'
  },
  lineType: {
    type: String,
    default: 'solid'
  },
  isClick: {
    type: Boolean,
    default: false
  },
  boundaryGap: {
    type: Boolean,
    default: false
  },
  toolboxShow: {
    type: Boolean,
    default: false
  },
  ownTooltip: {
    type: Boolean,
    default: false
  },
  areaOpacity: {
    type: Number,
    default: 0
  },
  seriesStack: {
    type: String,
    default: ''
  },
  feature: {
    type: Array,
    default: ['saveAsImage']
  }
}