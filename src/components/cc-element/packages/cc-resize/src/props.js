/*
 * @Description: 
 * @Author: Devin
 * @Date: 2021-12-15 16:33:03
 * @LastEditTime: 2021-12-15 17:31:20
 * @LastEditors: Devin
 * @Reference: 
 */
export default {
  minLeftWidth: {
    type: Number,
    default: 100
  },
  minRightWidth: {
    type: Number,
    default: 150
  },
  initialLeftWidth: {
    type: String,
    default: '200px'
  },

  closeLeft: {
    type: Boolean,
    default: true
  },
  midWidth: {
    type: Number,
    default: 10
  },
  leftClass: {
    type: Array,
    default: () => {
      return []
    }
  },
  rightClass: {
    type: Array,
    default: () => {
      return []
    }
  },
  midClass: {
    type: Array,
    default: () => {
      return []
    }
  },
  colors: {
    type: Array,
    default: () => {
      return ['#fff', '#444444','#fff']
    }
  }
}