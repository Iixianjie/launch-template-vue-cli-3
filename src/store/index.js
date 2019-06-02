import Vue from 'vue';
import Vuex from 'vuex';

import modules from './autoRegisterModules';
import saveStateToCache from './plugins/saveStateToCache';
import storeMixin from './storeMixin';

Vue.use(Vuex);
Vue.mixin(storeMixin);

const store = new Vuex.Store({
  strict: true,
  plugins: [
    // saveStateToCache   开缓存影响开发体验，先关掉
  ],
  modules,
});

export default store;
