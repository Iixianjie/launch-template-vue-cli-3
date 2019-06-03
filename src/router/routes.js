import { loadable } from './util';

export default [
  {
    path: '/',
    component: require('@/views/_layout/Base').default,
    meta: { title: '主页' },
    children: [
      {
        path: '/',
        component: () => import('@/views/home/Home')
      },
      {
        path: '/test',
        component: () => import('@/views/home/Test')
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
        component: () => import('@/views/user/Login'),
        meta: { title: '登录' }
      },
      {
        path: '/user/register',
        component: () => import('@/views/user/Register'),
        meta: { title: '注册' }
      }
    ]
  },
  {
    path: '/404',
    component: require('@/components/Result/NotFound').default
  },
  {
    path: '/500',
    component: require('@/components/Result/ServerErorr').default
  },
  {
    path: '/ResultPage',
    component: require('@/components/Result/ResultPage').default
  },
  {
    path: '*',
    redirect: '/404'
  },
];
