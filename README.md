# vue-starter
> 把平时开发中可能会用到的自定义配置抽离到my.config.js中, 并且在my.webpack.js中新增了一些常用的配置。
> 包含store和router的起始配置和使用示例。

[github](https://github.com/qq1073830130)

### TODOS
- [x] 常用配置整合
- [x] vuex基本配置
- [x] vue-router基本配置
- [x] api请求整合和示例
- [ ] mock

### 使用
基于vue-cli3, 复制所有文件到生成的项目目录覆盖即可。

需要新增依赖
```
yarn add compression-webpack-plugin uglifyjs-webpack-plugin --dev
```

- 列出了所有开发中可能会用到的配置(就个人而言)
- 更方便的配置环境变量且不用必须添加VUE_APP_前戳或新建.env文件
- 开启了webpack全局预设, 可以方便快速的访问一些全局变量如 Vue、$
- 配置别名选项 如: ~sass  ~component ~src
- 可以配置是否在prod阶段清除console和warn
- 快速配置需要引入的sass全局变量、mixin等
- gizp


