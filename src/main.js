import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* 基础样式 */
import 'style-base/main.scss';

/* 功能组件 */
import './components/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
