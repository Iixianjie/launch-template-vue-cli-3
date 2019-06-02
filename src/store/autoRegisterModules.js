import lowerCase from 'lodash/lowerCase';

const requireModules = require.context(
  '@/views',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\w+\.(module)\.(js)$/,
);

const requireModulesGlobal = require.context(
  './modules',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\w+\.(js)$/,
);

let modules = {};

importAll(requireModules);
importAll(requireModulesGlobal);

function importAll(requires) {
  requires.keys().forEach(fileName => {

    const moduleConfig = requires(fileName);
  
    const directiveName = lowerCase(fileName
      .split('/')
      .pop()
      .split('.')[0]);
  
    modules[directiveName] = moduleConfig.default || moduleConfig;
  });
}

export default modules;