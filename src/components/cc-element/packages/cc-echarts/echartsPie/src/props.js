/*
 * @Description: 
 * @Date: 2021-10-13 14:40:06
 * @LastEditTime: 2021-10-13 14:40:06
 * @FilePath: \cc-common-resource\packages\cc-echarts\echartsPie\src\props.js
 * @Author: Devin
 */
export default {
  data: {
    type: Array,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  color: {
    type: Array,
    default: function() {
      return [
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
    }
  },
  titleOptions: {
    type: Object
  },
  legendOptions: {
    type: Object
  },
  width: {
    type: String,
    default: '100%'
  },
  backgroundColor: {
    type: String,
    default: '#fff'
  },
  height: {
    type: String,
    default: '100%'
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
  radius: {
    type: Array,
    default: function() {
      return ['20px', '60px'];
    }
  },
  center: {
    type: Array,
    default: function() {
      return ['50%', '50%'];
    }
  },
  imageHeight: String
}