/*
 * @Description:
 * @Date: 2021-09-18 13:49:40
 * @LastEditTime: 2021-09-23 13:23:48
 * @FilePath: \mds\mock\index.js
 * @Author: Devin
 */
import Mock from 'mockjs';

import select from './select';
import table from './table';
import switchMock from './switch';
import './upload'

let mocks = [...select, ...table, ...switchMock];

/**
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ');
  if (!search) {
    return {};
  }
  const obj = {};
  const searchArr = search.split('&');
  searchArr.forEach(v => {
    const index = v.indexOf('=');
    if (index !== -1) {
      const name = v.substring(0, index);
      const val = v.substring(index + 1, v.length);
      obj[name] = val;
    }
  });
  return obj;
}

function XHR2ExpressReqWrap(respond) {
  return function(options) {
    let result = null;
    if (respond instanceof Function) {
      const { body, type, url } = options;
      result = respond({
        method: type,
        body: JSON.parse(body),
        query: param2Obj(url)
      });
    } else {
      result = respond;
    }
    return Mock.mock(result);
  };
}

for (const i of mocks) {
  Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response));
}

export default Mock;