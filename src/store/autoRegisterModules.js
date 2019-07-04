import lowerCase from 'lodash/lowerCase';

const requireModules = require.context(
  '@/views',
  true,
  /\w+\.(module)\.(js)$/,
);

const requireModulesGlobal = require.context(
  './modules',
  true,
  /\w+\.(js)$/,
);

let modules = {};

importAll(requireModules);
importAll(requireModulesGlobal);

function importAll(requires) {
  requires.keys().forEach(fileName => {

    const moduleConfig = requires(fileName);
  
    const modulesName = lowerCase(fileName
      .split('/')
      .pop()
      .split('.')[0]);
  
    modules[modulesName] = moduleConfig.default || moduleConfig;
  });
}

export default modules;