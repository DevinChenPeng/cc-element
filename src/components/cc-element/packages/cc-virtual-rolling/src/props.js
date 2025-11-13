/*
 * @Description:
 * @Date: 2021-08-02 10:11:06
 * @LastEditTime: 2021-12-29 16:00:48
 * @FilePath: \mds-web\src\components\elementUIpackage\virtual_rolling\src\props.js
 * @Author: Devin
 */
import { config } from "@/utils/cc-components-config/virtual-rolling";
let props = {
  // 原始数据
  list: {
    type: Array,
    default: () => {
      return config.list;
    }
  },
  // 最小高度是50
  height: {
    type: Number,
    default: config.height
  },
  // 每条数据的高度
  itemHeight: {
    type: Number,
    default: config.itemHeight
  },
  containerSizeShow: Number,
  //设置开始位置的索引
  setStartIndex: {
    type: Number,
    default: config.setStartIndex
  },
  showPopper: Boolean
};

export default props;
