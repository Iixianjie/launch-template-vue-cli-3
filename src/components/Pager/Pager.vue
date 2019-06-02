<script>
  // 使用完整功能需要引入cube-ui并作为第一个子children
  import _debounce from 'lodash/debounce';
  import scrollConfig, { pullDownConf, pullUpConf } from './scrollConfig';

  let positionCache = {};

  export default {
    name: 'Pager',
    data() {
      return {
        toTopShow: false,
      };
    },
    props: {
      left: {
        type: String,
      },
      right: {
        type: String,
      },
      top: {
        type: String,
      },
      bottom: {
        type: String,
      },
      pullDown: {
        type: Boolean,
        default: false,
      },
      pullUp: {
        type: Boolean,
        default: false,
      },
      bgColor: {
        type: String,
        default: '#fff',
      },
    },
    computed: {
      styles() {
        return {
          left: this.left || 0,
          right: this.right || 0,
          top: this.top || 0,
          bottom: this.bottom || 0,
          backgroundColor: this.bgColor
        };
      },
      scroller() {
        let firstChild = this.$children[0];
        
        if(firstChild && firstChild.$options._componentTag === 'cube-scroll') {
          return firstChild;
        }

        return null;
      },
    },
    watch: {
      pullDown(nVal) {
        if (!this.scroller) return;
        nVal ? this.scroller.scroll.openPullDown() : this.scroller.scroll.closePullDown();
      },
      pullUp(nVal) {
        if (!this.scroller) return;
        nVal ? this.scroller.scroll.openPullUp() : this.scroller.scroll.closePullUp();
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.scrollListener();
      });
    },
    render() {
      let _scrollConfig = { ...scrollConfig };
      _scrollConfig.props.options.pullDownRefresh = this.pullDown ? pullDownConf : false;
      _scrollConfig.props.options.pullUpLoad = this.pullUp ? pullUpConf : false;

      return (
        <div ref="pager" class="pager" style={this.styles}>
          {this.$scopedSlots.default({ defaultConf: scrollConfig })}
          <transition name="totop">
            {this.toTopShow && <div onClick={this.toTop} class="pager_ToTop">↑</div>}
          </transition>
        </div>
      );
    },
    methods: {
      toTop(e) {
        e.stopPropagation();
        this.scroller && this.scroller.scrollTo(0, 0, 300);
      },
      scrollListener() {
        if (!this.scroller) return;

        this.scroller.$on('scroll', _debounce((e) => {
          if (e.y < -1000 && this.toTopShow === false) {
            this.toTopShow = true;
          } else if (e.y > -1000 && this.toTopShow === true) {
            this.toTopShow = false;
          }
        }, 300));
      },

      /* ==== 以下两个方法用于配合mixin保存、还原滚动条位置 ==== */
      // 根据chidren类型保存滚动条位置
      setScroll() {
        const key = this.$attrs.name;
        if(!key) return;
  
        if (this.scroller) {
          positionCache[key] = {
            x: this.scroller.scroll.x,
            y: this.scroller.scroll.y,
          };

          return;
        };

        if(this.$refs.pager) {

          positionCache[key] = {
            x: this.$refs.pager.scrollTop
          };

          return;
        }
      },
      // 读取缓存的滚动条位置并根据children类型设置滚动高度
      getScroll() {
        const key = this.$attrs.name;
        if(!key) return;

        if (this.scroller) {
          
          let cache = positionCache[key];
          if(!cache) return;

          console.log(cache);
          this.$nextTick(() => {
            this.scroller.scrollTo(cache.x, cache.y, 0);
          })
          
          return;
        };

        if(this.$refs.pager) {

          let cache = positionCache[key];
          if(!cache) return;

          this.$nextTick(() => {
            this.$refs.pager.scrollTop = cache.x;
          })

          return;
        }
      }
    },
  };
</script>

<style lang="scss">
  .pager {
    position: absolute;
    height: auto;
    overflow: auto;

    &_ToTop {
      position: absolute;
      bottom: 24px;
      right: 24px;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.6);

      &:active {
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
      }
    }

    .cube-pullup-wrapper, .cube-pulldown-wrapper {
      color: rgba(0,0,0,0.75);
      font-size: 14px;
    }
  }

  .totop-enter-active,
  .totop-leave-active {
    transition: 0.5s;
  }

  .totop-enter {
    transform: translate3d(70px, 0, 0);
  }

  .totop-leave-to {
    transform: translate3d(70px, 0, 0);
  }
</style>