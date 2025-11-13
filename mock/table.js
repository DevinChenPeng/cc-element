/*
 * @Description:
 * @Date: 2021-09-18 13:54:20
 * @LastEditTime: 2021-10-14 14:32:21
 * @FilePath: \web-template\mock\table.js
 * @Author: Devin
 */
import Mock from 'mockjs';
const Random = Mock.Random;

let sortKey = '';
let direction = '';
function sort(a, b) {
  if (direction === 'ASC') {
    return Date.parse(a[sortKey]) - Date.parse(b[sortKey]);
  } else if (direction === 'DESC') {
    return Date.parse(b[sortKey]) - Date.parse(a[sortKey]);
  }
}

let table = [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      let query = config.body;
      let totalNum = query.limit;
      if (520 < query.pageNum * query.limit) {
        totalNum = 520 - (query.pageNum - 1) * query.limit;
      }
      let data = [];
      data = Array.from({ length: totalNum }, (_, idx) => ({
        sort: idx,
        id: Random.id(),
        date: Random.date('yyyy-MM-dd'),
        name: Random.cname(),
        email: Random.email(),
        status: Random.boolean() ? '男' : '女',
        address: Random.region(),
        list: [
          {
            phone: Random.tld(),
            id: Random.id(),
            url: Random.url()
          }
        ]
      }));
      if (query.sort) {
        sortKey = JSON.parse(query.sort).field;
        direction = JSON.parse(query.sort).direction;
        data.sort(sort);
      }
      return {
        code: 0,
        data: { records: data, total: 520 }
      };
    }
  }
];

export default table;
