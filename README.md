<center><h1>将 element-ui@2.x 进行二次封装</h1></center>

> `对element的各种主流组件进行二次封装，包括element的表格组件二次封装，element的表单组件二次封装等，让开发人员更关注业务逻辑，不在花大量时间编写重复基础的代码。`

# 下载

> npm install cc-element

**在线文档地址：https://devinchenpeng.github.io/cc-element/#/home/index**

<img src="https://devinchenpeng.github.io/cc-element/12.png" alt="image-20220106100600889" style="zoom:50%;" />

![image-20220106100646706](https://devinchenpeng.github.io/cc-element/32.png)

![image-20220106100727083](https://devinchenpeng.github.io/cc-element/34.png)

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

#### 支持自定义组件初始值

在node_modules中找到cc-element下面的js文件夹

![5](https://devinchenpeng.github.io/cc-element/5.png)

将里面的js文件复制到下图所在位置，这些js都是组件的基本配置，可以根据自己需要进行修改。

![image-20211229162749214](https://devinchenpeng.github.io/cc-element/6.png)

## 额外需要文件

> 用于表格，下拉和二次弹框的后端数据接口

![image-20211021134746371](https://devinchenpeng.github.io/cc-element/1.png)

![img](https://devinchenpeng.github.io/cc-element/2.png)

```js
import axios from '@/utils/axios/index';

export function getSelectList({ data, url, isLoading = true }) {
  return axios({
    url: url,
    method: 'get',
    data,
    isLoading: isLoading
  });
}

export function getTableList({ data, url, isLoading = true }) {
  return axios({
    url: url,
    method: 'get',
    data,
    isLoading: isLoading
  });
}

export function changeSwitchState({ data, url, isLoading, method }) {
  return axios({
    url: url,
    method: method,
    data,
    isLoading: isLoading
  });
}
```

## Keywords

> **`vue `** **`element`** **` Cc-common-resource`** **` element二次封装`**
