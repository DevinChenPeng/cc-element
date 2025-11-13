/*
 * @Description:
 * @Date: 2021-09-13 17:12:40
 * @LastEditTime: 2021-12-30 21:15:27
 * @FilePath: \element-ui_table_form\vue.config.js
 * @Author: Devin
 */
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  outputDir: `dist-cc`,
  publicPath: "/cc_element/",
  assetsDir: "static",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "cc-element/styles/variableRoot.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },

    // output: {
    //   library: `${packageName}-[name]`,
    //   libraryTarget: "umd", // 把微应用打包成 umd 库格式
    //   jsonpFunction: `webpackJsonp_${packageName}`,
    // },
  },
  
  devServer: {
    hot: true,
    disableHostCheck: true,
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT, // 在.env中VUE_APP_PORT=7788，与父应用的配置一致
    headers: {
      "Access-Control-Allow-Origin": "*", // 主应用获取子应用时跨域响应头
    },
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
          raw: true
      })

  },
};

