<script>
  import { Success, Error, Waiting, Warning, NotFound, ServeError } from './icon';

  const icons = {
    success: Success,
    error: Error,
    waiting: Waiting,
    warning: Warning,
    '404': NotFound,
    '500': ServeError,
  }

  export default {
    name: 'ServerErorr',
    methods: {
      historyBack() {
        this.$router.back();
      },
    },
    props: {
      type: {
        type: String,
        default: 'success',
        validator(value) {
          // 这个值必须匹配下列字符串中的一个
          return ['success', 'warning', 'error', 'waiting', '404', '500'].indexOf(value) !== -1
        }
      },
      title: {
        type: String,
        default: '操作成功!',
      },
      desc: {
        type: String,
        default: '',
      },
      btn: {  // 按钮文本，最多两位
        type: Array,
        default: () => ['返回']
      },
      disableBack: {  // 当为true时，第一个按钮的默认行为是返回上一页
        type: Boolean,
        default: false
      }
    },
    render(h) {
      const sty = this.sty;
      const Icon = icons[this.type];

      return (
        <div class={sty.wrap}>
          <div class={sty.cont}>
            <div class={sty.icon}>
              <Icon></Icon>
            </div>
            <div class={sty.title}>{this.title}</div>
            <div class={sty.desc}>{this.desc}</div>
            <button class={[sty.link, 'waves-effect']} onClick={this.btnHandle.bind(this, 1)}>{this.btn[0]}</button>
            {this.btn.length > 1 && <button class={[sty.link, sty.link_red, 'waves-effect']} onClick={this.btnHandle.bind(this, 2)}>{this.btn[1] || ''}</button>}
          </div>
        </div>
      );
    },
    methods: {
      btnHandle(type) {
        if(!this.disableBack && type === 1) {
          this.$router && this.$router.back();
        }
        this.$emit('btnClick', type)
      }
    }
  };
</script>

<style lang="scss" module="sty" src="./sty.scss"></style>

