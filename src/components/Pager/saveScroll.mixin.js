/**
 * 搭配Pager进行保存、还原滚动位置
 * 1. 确保this.$refs.pager指向Pager组件
 * 2. 确保Pager组件包含name<str>属性,用于存放滚动数据
 * */


export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$refs.pager.getScroll();
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$refs.pager.setScroll();
    next();
    
  },
}