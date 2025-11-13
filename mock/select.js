/*
 * @Description:
 * @Date: 2021-09-18 13:54:29
 * @LastEditTime: 2021-09-30 11:13:23
 * @FilePath: \mds\mock\select.js
 * @Author: Devin
 */
import Mock from 'mockjs';
const Random = Mock.Random;
let select = [
  {
    url: '/select/list',
    type: 'get',
    response: config => {
      let body = config.body;
      let data = Array.from({ length: body.num || 20 }, (_, idx) => ({
        id: Random.id(),
        date: Random.date('yyyy-MM-dd HH:mm:ss'),
        name: Random.cname(),
        email: Random.email(),
        status: Random.boolean()
      }));
      return {
        code: 0,
        data: data
      };
    }
  }
];

export default select;
