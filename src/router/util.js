import LoadingComponent from './status/Loading';
import ErrorComponent from './status/Error';

export function loadable(AsyncView) {
  const AsyncHandler = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: AsyncView,
    // 异步组件加载时使用的组件
    loading: LoadingComponent,
    // 加载失败时使用的组件
    error: ErrorComponent,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 2000,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 8000
  });
  
  // 使用这种加载方式会导致组件内置路由钩子失效
  return Promise.resolve({
    name: 'Loadable',
    functional: true,
    render(h, { data, children }) {
      console.log(data);
      return h(AsyncHandler, data, children);
    }
  });
}
