/*
 * @Description:
 * @Date: 2021-09-13 17:11:23
 * @LastEditTime: 2021-12-31 16:43:11
 * @FilePath: \element-ui_table_form\src\router\index.js
 * @Author: Devin
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '@/layout';
import componentsRoutes from './components';
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/home/index',
    hidden: true
  },
  {
    path: '/',
    redirect: '/home/index',
    hidden: true
  },
  // {
  //   path: '/potal',
  //   name: 'Potal',
  //   component: Potal,
  //   hidden: true,
  //   meta: {
  //     title: 'Potal',
  //     icon: 'icon-shouye'
  //   }
  // },
  {
    path: '/home',
    name: 'MDS',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'Home',
          icon: 'icon-shouye'
        }
      }
    ]
  },
  {
    path: '/guide',
    name: 'MDS',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        name: 'Guide',
        component: () => import('@/views/guide/index.vue'),
        meta: {
          title: 'Guide',
          icon: 'icon-yindao'
        }
      }
    ]
  },
  {
    path: '/i18n-demo',
    name: 'MDS',
    component: Layout,
    redirect: '/i18n-demo/index',
    children: [
      {
        path: 'index',
        name: 'Internationalization',
        component: () => import('@/views/i18n_demo/index.vue'),
        meta: {
          title: 'Internationalization',
          icon: 'icon-qiehuanyuyan'
        }
      }
    ]
  },
  {
    path: '/documentation',
    name: 'MDS',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Documentation',
        component: () => import('@/views/documentation/index.vue'),
        meta: {
          title: 'Documentation',
          icon: 'icon-wendang'
        }
      },
    ]
  },
  {
    path: '/generator-code',
    name: 'MDS',
    component: Layout,
    redirect: '/generator-code/index',
    children: [
      {
        path: 'index',
        name: 'GeneratorCode',
        component: () => import('@/views/generator_code/index.vue'),
        meta: {
          title: 'GeneratorCode',
          icon: 'icon-code'
        }
      }
    ]
  },
  componentsRoutes,
  {
    path: '/rich-text',
    name: 'MDS',
    component: Layout,
    redirect: '/rich-text/index',
    children: [
      {
        path: 'index',
        name: 'RichText',
        component: () => import('@/views/rich-text/index.vue'),
        meta: {
          title: 'RichText',
          icon: 'icon-fuwenben'
        }
      }
    ]
  },
  // {
  //   path: '/chart',
  //   name: 'MDS',
  //   component: Layout,
  //   redirect: '/chart/index',
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Chart',
  //       component: () => import('@/views/chart/index.vue'),
  //       meta: {
  //         title: 'Chart',
  //         icon: 'icon-echarts'
  //       }
  //     }
  //   ]
  // },
  {
    path: '/chart',
    name: 'MDS',
    component: Layout,
    redirect: '/chart/pie',
    meta: {
      title: 'Chart',
      icon: 'icon-echarts'
    },
    alwaysShow: true,
    children: [
      {
        path: 'pie',
        name: 'pie',
        component: () => import('@/views/chart/pie.vue'),
        meta: {
          title: 'pieCharts'
        }
      },
      {
        path: 'bar',
        name: 'bar',
        component: () => import('@/views/chart/bar.vue'),
        meta: {
          title: 'barCharts'
        }
      },
      {
        path: 'line',
        name: 'line',
        component: () => import('@/views/chart/line.vue'),
        meta: {
          title: 'lineCharts'
        }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    name: 'ErrorPages',
    redirect: '/error/401',
    meta: {
      title: 'ErrorPages',
      icon: 'icon-error'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error_page/401'),
        name: 'Page401',
        meta: { title: 'Page401' }
      },
      {
        path: '404',
        component: () => import('@/views/error_page/404'),
        name: 'Page404',
        meta: { title: 'Page404' }
      }
    ]
  }
];
const router = new VueRouter({
  base: '/',
  isAddAsyncMenuData: false,
  mode: 'hash',
  routes
});
// const createRouter = () => {
//   return new VueRouter({
//     base: '/',
//     mode: 'history',
//     routes: routes
//   });
// };
// const route = createRouter();

router.beforeEach((to, from, next) => {
  to.query.studyId = 123123;
  console.log(to);
  NProgress.start();
  next();
});

router.afterEach((to, from) => {
  console.log(to);
  NProgress.done();
});
export default router;
