const myConf = require('./config/my.config');
const customWebpackConf = require('./config/my.webpack');

module.exports = {
  publicPath: './',    // 静态资源的访问路径
  outputDir: 'dist',    // 打包后输出到的目录
  assetsDir: 'static',    // 存放静态资源的目录名
  indexPath: './index.html',   // 生成的html相对 outputDir 的位置
  filenameHashing: myConf.hash,
  productionSourceMap: myConf.productionSourceMap,
  css: {
    extract: process.env.NODE_ENV === 'development' ? false : myConf.cssExtract,
    sourceMap: myConf.devCssSourceMap,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: myConf.sassVars
    }
  },
  configureWebpack: customWebpackConf,
  devServer: {
    proxy: myConf.proxy
  }
};