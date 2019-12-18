import BaseLayout from '@/views/_layout/Base';
import UserLayout from '@/views/_layout/User';

export default [
  {
    path: '/',
    component: BaseLayout,
    meta: { title: '主页' },
    children: [
      {
        path: '/',
        component: () => import('@/views/home/Home'),
      },
    ],
  },
  {
    path: '/user',
    component: UserLayout,
    meta: { title: '用户' },
    children: [
      // 没有合适的根页面就定向到其他页面
      {
        path: '',
        redirect: '/user/register',
      },
      {
        path: '/user/register',
        component: () => import('@/views/user/Register'),
        meta: { title: '注册' },
      },
    ],
  },
  // {
  //   path: '/404',
  //   component: require('@/components/Result/NotFound').default
  // },
  // {
  //   path: '/500',
  //   component: require('@/components/Result/ServerErorr').default
  // },
  // {
  //   path: '/ResultPage',
  //   component: require('@/components/Result/ResultPage').default
  // },
  {
    path: '*',
    redirect: '/404',
  },
];
