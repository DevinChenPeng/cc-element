/*
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-09-17 17:53:22
 * @FilePath: \mds\src\components\packages\iconButton\src\props.js
 * @Author: Devin
 */

let props = {
  iconType: {
    type: String,
    default: 'editor'
  },
  title: String,
  customStyle: {
    type: [String, Object, Array]
  },
  icon: String,
  type: {
    type: String,
    default: 'button'
  },
  bgColorHover: {
    type: String,
    default: 'rgba(0,0,0,0.04)'
  },
  bgColor: {
    type: String,
    default: 'rgba(0,0,0,0.0)'
  },
  color: {
    type: String,
    default: ''
  }
};

export default props;
