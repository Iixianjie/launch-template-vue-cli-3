const path = require('path');

module.exports = {
  // 文件哈希
  hash: true,

  // 打包时产出map文件
  productionSourceMap: false,

  // dev时开启cssSorceMap
  devCssSourceMap: true,

  // sass全局变量、混合
  sassOption: {
    sassOptions: {
      // 这里假设你有 `src/variables.scss` 这个文件并且需要全局引入
      data: '@import "~style-base/_base/index.scss";',
    },
  },

  // 通用环境变量
  baseEnv: {
    BASE_ENV: JSON.stringify('/BASE_ENV'),
  },

  // 开发模式环境变量
  devEnv: {
    NOW_ENV: JSON.stringify('/DEV_ENV'),
  },

  // 生产模式环境变量
  prodEnv: {
    NOW_ENV: JSON.stringify('/PROD_ENV'),
  },

  // 清除console 依赖 terser-webpack-plugin
  cleanConsole: true,

  // 开启gizp   依赖 compression-webpack-plugin
  gzip: true,

  // 预设库
  provide: {
    // jQuery: 'jquery',
    // $: 'jquery'
  },

  // 别名
  alias: {
    '@': path.join(__dirname, '../src'),
  },

  // proxy
  proxy: null,
  // {
  // '/api': {
  //   target: '<url>',
  //   changeOrigin: true
  // },
  // '/foo': {
  //   target: '<other_url>',
  //   changeOrigin: true
  // }
  // },

  // 单独分离css
  cssExtract: true,

  // 启动mock服务
  mock: false,
};
