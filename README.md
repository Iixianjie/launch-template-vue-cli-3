# vue-cli-3-template

<https://github.com/Iixianjie/launch-template-vue-cli-v3>

### TODOS
- [x] 常用配置整合
- [x] vuex基本配置
- [x] vue-router基本配置
- [x] api请求整合和示例
- [x] 常用的基础组件
- [x] mock

### 使用
通过[launch-cli](https://github.com/Iixianjie/launch-cli)安装

额外依赖
```
compression-webpack-plugin uglifyjs-webpack-plugin
```

- 列出了所有开发中可能会用到的配置(就个人而言)
- 更方便的配置环境变量且不用必须添加VUE_APP_前戳或新建.env文件
- 开启了webpack全局预设, 可以方便快速的访问一些全局变量如 Vue、$
- 配置别名选项 如: ~sass  ~component ~src
- 配置是否在prod阶段清除console
- 快速配置需要引入的sass全局变量、mixin等
- gizp
- 大量基础组件
- 自动化的基础组件和模块导入
- 清晰的文件结构
- 包含基于koa的简单mock服务

