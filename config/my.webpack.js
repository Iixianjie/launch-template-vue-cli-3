const webpack = require('webpack');
const myConf = require('./my.config');
const chalk = require('chalk');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

function isEmptyObj(obj) {
  return Object.keys(obj).length <= 0;
}

/* 启动mock服务 */
if(myConf.mock) {
  const cp = require('child_process').exec('npm run mock');

  cp.stdout.on('data', function(data) {
    if (/http:\/\/localhost/.test(data)) {
      console.log('   ' + chalk.blue('[mock] ') + data);
    }
  });
  
  cp.stderr.on('data', function(err) {
    console.log('   ' + chalk.red('[mock] ') + data);
  });
  
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
  if (isProd) {
    // 定义prod环境变量
    if (!isEmptyObj(myConf.prodEnv)) {
      prodPlugin.push(new webpack.DefinePlugin(myConf.prodEnv));
    }

    // 清除console
    if (myConf.cleanConsole) {
      const TerserJSPlugin = require('terser-webpack-plugin');

      prodPlugin.push(
        new TerserJSPlugin({
          terserOptions: {
            compress: {
              drop_console: myConf.cleanConsole
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
  }

  /* 开发配置 */
  if (isDev) {
    // 定义dev环境变量
    if (!isEmptyObj(myConf.devEnv)) {
      devPlugin.push(new webpack.DefinePlugin(myConf.devEnv));
    }
  }

  // 应用修改后的配置
  basePlugin.length > 0 && basePlugin.forEach(v => config.plugins.push(v));
  devPlugin.length > 0 && devPlugin.forEach(v => config.plugins.push(v));
  prodPlugin.length > 0 && prodPlugin.forEach(v => config.plugins.push(v));
};
