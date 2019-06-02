<script>
  import nodata from './img/nodata.svg';
  import nodata1 from './img/nodata1.svg';

  export default {
    name: 'FeedBack',
    props: {
      msg: {
        type: null,
        default: '暂无数据',
      },
      icon: {
        type: Number,
        default: 1,
        validator(value) {
          return [1, 2].includes(value)
        }
      },
      btnText: {
        type: String
      }
    },
    render() {
      const sty = this.sty;

      return (
        <div class={sty.cont2}>
          <div class={sty.icon2}>
            <img src={this.icon === 1 ? nodata : nodata1} />
          </div>
          <div class={sty.desc}>{this.msg}</div>
          {this.btnText && <button class={[sty.link, 'waves-effect']} onClick={this.btnHandle.bind(this, 1)}>{this.btnText}</button>}
        </div>
      );
    },
    methods: {
      btnHandle(type) {
        this.$emit('btnClick', type);
      },
    },
  };
</script>

<style lang="scss" module="sty" src="./sty.scss"></style>

