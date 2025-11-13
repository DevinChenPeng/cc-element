/*
 * @Description: 
 * @Date: 2021-09-29 17:35:08
 * @LastEditTime: 2021-09-30 09:40:05
 * @FilePath: \mds\mock\switch.js
 * @Author: Devin
 */
let switchMock = [
  {
    url: '/change/switch',
    type: 'post',
    response: config => {
      console.log(config);
      return {
        code: 0,
        data: config
      };
    }
  }
];

export default switchMock;
