import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

/* 处理title */
router.afterEach((to, from) => {
  let title = to.matched.reduce((p, v) => {
    if (v.meta && v.meta.title) {
      return p + '-' + v.meta.title;
    }
    return p;
  }, '');

  document.title = title.slice(1);
});

export default router;
