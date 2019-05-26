/**
 * description: 每次提交action把当前state保存到session，重新进入页面后获取并替换默认值。(函数不能通过JSON.stringify, 只能存基本类型)
 */
export default store => {
  let sessionStore = sessionStorage.getItem('APP_STORE_CACHE');
  if (sessionStore) {
    store.replaceState(JSON.parse(sessionStore));
  }

  // store.subscribe((mutation, state) => {
  //   sessionStorage.setItem('APP_STORE_CACHE', JSON.stringify(state));
  // });

  window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('APP_STORE_CACHE', JSON.stringify(store.state));
  });

};