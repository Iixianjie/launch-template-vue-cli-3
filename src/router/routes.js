import { loadable } from './util';

export default [
  {
    path: '/',
    component: require('@/views/_layout/Base').default,
    meta: { title: '主页' },
    children: [
      {
        path: '/',
        component: loadable(import('@/views/home/home/Home'))
      },
    ]
  },
  {
    path: '/user',
    component: require('@/views/_layout/User').default,
    meta: { title: '用户' },
    children: [
      // 没有合适的根页面就定向到其他页面
      {
        path: '',
        redirect: '/user/login'
      },
      {
        path: '/user/login',
        component: loadable(import('@/views/user/login/Login')),
        meta: { title: '登录' }
      },
      {
        path: '/user/register',
        component: loadable(import('@/views/user/register/Register')),
        meta: { title: '注册' }
      }
    ]
  },
  {
    path: '*',
    component: require('@/views/_common/NotFound/NotFound').default
  }
];
