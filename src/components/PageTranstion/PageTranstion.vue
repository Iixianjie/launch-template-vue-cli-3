<template>
  <div>
    <transition :name="transitionName">
      <keep-alive :max="4">
        <slot v-if="$route.meta.keepAlive"></slot>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <slot v-if="!$route.meta.keepAlive"></slot>
    </transition>
  </div>
</template>
<script>
  let routerList = [];
  export default {
    name: 'PageTranstion',
    data() {
      return {
        transitionName: ''
      }
    },
    props: {
      type: {
        type: String,
        default: 'fade2'
      }
    },
    created() {
      if(this.type !== 'slide') {
        this.transitionName = this.type;
      }
    },
    watch: {
      '$route': {
        handler(to, from) {
          if(this.type !== 'slide') return;

          routerList.push(from.path);
          let existPath = routerList.indexOf(to.path)

          if(existPath !== -1) {
            routerList.splice(existPath, 1)

            // 返回时需要去掉前一个路由
            let formPath = routerList.indexOf(from.path);
            routerList.splice(formPath, 1)
            this.transitionName = 'bk-slide-right';
          } else {
            this.transitionName = 'bk-slide-left';
          }

        }
      }
    },
  };
</script>