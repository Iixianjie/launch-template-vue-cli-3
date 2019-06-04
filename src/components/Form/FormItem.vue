<script>
  export default {
    name: 'FormItem',
    data() {
      return {
        status_: '',
        tipMsg_: '',
        require: false
      }
    },
    props: {
      // 显示指定状态，会被内部的验证状态覆盖, 为空字符串是为不显示
      status: {
        type: String,
        validator (value) {
          return ['success', 'warn', 'info', 'error', ''].indexOf(value) !== -1
        }
      },
      // 提示信息，会被内部的验证状态覆盖
      tipMsg: {
        type: String
      },
      // 是否显示验证状态
      hasFeedback: {
        type: Boolean,
        default: true
      },
      // 是否有右箭头
      hasArrow: {
        type: Boolean,
        default: false
      },
      label: String,
      // 对应子表单所绑定的model key值, 用于帮助Form表达正确的将错误信息输出给FormItem
      name: String,
    },
    watch: {
      status: {
        immediate: true,
        handler(val) {
          if(val) {
            this.status_ = val;
          };
        }
      },
      tipMsg: {
        immediate: true,
        handler(val) {
          if(val) {
            this.tipMsg_ = val;
          };
        }
      },
    },
    render() {
      return (
        <label class="bk-formItem waves-effect">

          <div vShow={this.label} class="bk-formItem_label">
            {this.label}<i vShow={this.require} class="bk-formItem_require">*</i>
          </div>
          <div class="bk-formItem_cont">

            <div class="bk-formItem_contMain">
              {this.$scopedSlots.default()}
            </div>

            <div vShow={this.hasFeedback && this.tipMsg_ && this.status_} class={['bk-formItem_info', `__${this.status_}`]}>
              {this.tipMsg_}
            </div>
          </div>

          <i vShow={this.hasArrow} class="bk-formItem_arrow bl-icon icon-next"></i>

          <transition name="bk-fade">
            <div vShow={this.hasFeedback && this.status_} class={['bk-formItem_statusIcon', `__${this.status_}`]}></div>
          </transition>

        </label>
      )
    },
  };
</script>