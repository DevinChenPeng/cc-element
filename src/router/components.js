/*
 * @Description:
 * @Date: 2021-09-22 09:29:14
 * @LastEditTime: 2021-12-29 16:57:29
 * @FilePath: \element-ui_table_form\src\router\components.js
 * @Author: Devin
 */
import Layout from '@/layout';

const componentsRoutes = {
  path: '/components',
  name: 'MDS',
  component: Layout,
  redirect: '/components/table',
  meta: {
    title: 'Components',
    icon: 'icon-zujian'
  },
  alwaysShow: true,
  children: [{
    path: 'table',
    name: 'Table',
    component: () =>
      import('@/views/components/table'),
    meta: {
      title: 'Table'
    }
  },
  {
    path: 'icon-btn',
    name: 'IconBtn',
    component: () =>
      import('@/views/components/icon_btn'),
    meta: {
      title: 'IconBtn'
    }
  },
  {
    path: 'button',
    name: 'Button',
    component: () =>
      import('@/views/components/button'),
    meta: {
      title: 'Button'
    }
  },
  {
    path: 'input',
    name: 'Input',
    component: () =>
      import('@/views/components/input'),
    meta: {
      title: 'Input'
    }
  },
  {
    path: 'select',
    name: 'Select',
    component: () =>
      import('@/views/components/select'),
    meta: {
      title: 'Select'
    }
  },
  {
    path: 'virtual-rolling-select',
    name: 'VirtualRollingSelect',
    component: () =>
      import('@/views/components/virtual_rolling_select'),
    meta: {
      title: 'VirtualRollingSelect'
    }
  },
  {
    path: 'date-select',
    name: 'DateSelect',
    component: () =>
      import('@/views/components/date_select'),
    meta: {
      title: 'DateSelect'
    }
  },
  {
    path: 'message-box',
    name: 'MessageBox',
    component: () =>
      import('@/views/components/message_box'),
    meta: {
      title: 'MessageBox'
    }
  },
  {
    path: 'switch',
    name: 'Switch',
    component: () =>
      import('@/views/components/switch'),
    meta: {
      title: 'Switch'
    }
  },
  {
    path: 'form',
    name: 'Form',
    component: () =>
      import('@/views/components/form'),
    meta: {
      title: 'form'
    }
  },
  {
    path: 'dialog',
    name: 'Dialog',
    component: () =>
      import('@/views/components/dialog'),
    meta: {
      title: 'Dialog'
    }
  },
  {
    path: 'upload',
    name: 'Upload',
    component: () =>
      import('@/views/components/uploadCopperImage'),
    meta: {
      title: 'uploadImage'
    }
  },
  {
    path: 'resize',
    name: 'resize',
    component: () =>
      import('@/views/components/resize/index.vue'),
    meta: {
      title: 'resize'
    }
  }
  ]
};

export default componentsRoutes;