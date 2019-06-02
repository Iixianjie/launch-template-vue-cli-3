/* 自动导入基础组件和指令
*  components下所有.vue文件都会被自动注册，不要把不需要自动注册的组件放到这里
*  components下所有<name>.directive.js文件都会被自动注册
**/

import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import lowerCase from 'lodash/lowerCase';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue)$/,
);

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''),
    ),
  );

  // console.log(componentName);
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig,
  );
});

/* 自动导入指令 */

const requireDirective = require.context('./', true, /\w+\.(directive)\.(js)$/);

requireDirective.keys().forEach(fileName => {

  const directiveConfig = requireDirective(fileName);

  const directiveName = lowerCase(fileName
    .split('/')
    .pop()
    .split('.')[0]);

  // 全局注册指令
  Vue.directive(
    directiveName,
    directiveConfig.default || directiveConfig,
  );
});