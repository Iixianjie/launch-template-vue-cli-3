const webpack = require('webpack');
const myConf = require('./my.config');

function isEmptyObj(obj) {
  return Object.keys(obj).length <= 0;
}

module.exports = function(config) {
  let basePlugin = [];
  let devPlugin = [];
  let prodPlugin = [];

  /* 通用配置  */

  // 定义base环境变量
  if (!isEmptyObj(myConf.baseEnv)) {
    basePlugin.push(new webpack.DefinePlugin(myConf.baseEnv));
  }

  // 添加预设库到webpack
  if (!isEmptyObj(myConf.provide)) {
    basePlugin.push(new webpack.ProvidePlugin(myConf.provide));
  }

  // 添加别名
  if (!isEmptyObj(myConf.alias)) {
    for (let [key, val] of Object.entries(myConf.alias)) {
      config.resolve.alias[key] = val;
    }
  }

  /* 生产配置 */
  if (process.env.NODE_ENV === 'production') {
    // 定义prod环境变量
    if (!isEmptyObj(myConf.prodEnv)) {
      prodPlugin.push(new webpack.DefinePlugin(myConf.prodEnv));
    }

    // 清除console
    if (myConf.cleanConsole) {
      const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

      prodPlugin.push(
        new UglifyJSPlugin({
          sourceMap: myConf.productionSourceMap,
          uglifyOptions: {
            compress: {
              drop_console: true,
            }
          }
        })
      );
    }

    // gizp配置
    if (myConf.gzip) {
      const CompressionWebpackPlugin = require('compression-webpack-plugin');

      prodPlugin.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|css)$/,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
  } else {
    /* 开发配置 */

    // 定义prod环境变量
    if (!isEmptyObj(myConf.devEnv)) {
      devPlugin.push(new webpack.DefinePlugin(myConf.devEnv));
    }
  }

  // 应用修改后的配置
  basePlugin.length > 0 && basePlugin.forEach(v => config.plugins.push(v));
  devPlugin.length > 0 && devPlugin.forEach(v => config.plugins.push(v));
  prodPlugin.length > 0 && prodPlugin.forEach(v => config.plugins.push(v));
};
