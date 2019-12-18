import Vue from 'vue';
import Vuex from 'vuex';

import modules from './autoRegisterModules';
// import saveStateToCache from './plugins/saveStateToCache';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  plugins: [
    // saveStateToCache   开缓存影响开发体验，先关掉
  ],
  modules,
});

export default store;
