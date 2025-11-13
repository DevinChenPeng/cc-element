<center><h1>将 element-ui@2.x 进行二次封装</h1></center>

## 下载

> npm install cc-element

## 快速开始

#### 完整引入

在 main.js 中写入以下内容：

```js
import CcElement from 'cc-element/components/index';
Vue.use(CcElement);
```

以上代码便完成了 CcElement 的引入。

#### 按需引入

```javascript
import IconButton from './packages/Cc-icon-button/index'
import CcButton from './packages/Cc-button/index'
import CcInput from './packages/Cc-input/index'
import CcSelect from './packages/Cc-select'
...

Vue.use(IconButton)
Vue.use(CcButton)
Vue.use(CcInput)
Vue.use(CcSelect)
...
```

## 浏览器支持

> 现代浏览器和Internet Explorer 10+。

## Keywords

> **`vue `** **`element`** **` Cc-common-resource`** **` element二次封装`**

## 源码地址 

[Cc-common-resource]: https://gitee.com/DevinCP/qiankun/tree/master/mds

