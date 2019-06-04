<script>
  import validate from './validateOpts';
  import * as util from '@lxjx/utils';

  export default {
    name: 'Form',
    data() {
      return {
        errors: {},
      };
    },
    props: {
      layout: {
        validator(value) {
          return ['row', 'col'].indexOf(value) !== -1;
        },
      },
      models: {
        type: Object,
        default: () => ({}),
      },
      rules: {
        type: Object,
        default: () => ({}),
      },
    },
    computed: {
      /* 所有formItem子组件，只获取直接子级（处于不生成包裹的组件如 template、transition中时例外） */
      childrens() {
        return this.$children.filter(v => v.$options._componentTag === 'formItem');
      },
    },
    created() {
      let modelsIsEmpty = util.isEmpty(this.models);
      !modelsIsEmpty && this.initFieldsWatcher();
    },
    render() {
      return (
        <form class={['bk-form', { __row: this.layout === 'row' }]} onSubmit={this.handleSubmit}>
          {this.$scopedSlots.default()}
        </form>
      );
    },
    methods: {
      /* 为每一个表单model创建监听者, 并在验证有误时触发单个验证 */
      initFieldsWatcher() {
        for(let key of Object.keys(this.models)) {
          this.$watch(`models.${key}`, n => {
            this.singleVerify(key, n);
          });
        }

        this.$nextTick(() => {
          // 根据rule设置必选状态
          this.childrens && this.childrens.forEach(nowFormItem => {
            let name = nowFormItem.name;
            console.log(name, this.rules);
            if(this.rules[name] && this.rules[name].presence) {
              nowFormItem.require = true;
            }
          });
        })
      },
      /* 对单个表单项发起验证并根据prop.name值传递验证结果给对应组件 */
      singleVerify(key, val) {
        let err = validate.single(val, this.rules[key]);
        let isPass = util.isEmpty(err);
        let nowFormItem = this.childrens.find(v => v.name === key);

        let status = isPass ? 'success' : 'error';
        let tipMsg = isPass ? '' : err[0];

        nowFormItem.status_ = status;
        nowFormItem.tipMsg_ = tipMsg;
      },
      /* 提交事件，这里会对每一个表单进行验证 */
      handleSubmit(e) {
        e.preventDefault();
        let errors = validate.validate(this.models, this.rules)
        let isPass = util.isEmpty(errors);

        if(!isPass) {
          // 这里不复用singleVerify方法是因为对于全部验证来说，singleVerify每次验证都会无条件遍历所有formItem。
          this.childrens.forEach(nowFormItem => {
            let name = nowFormItem.name;
            let err = errors[name];
            let pass = util.isEmpty(err);

            let status = pass ? 'success' : 'error';
            let tipMsg = pass ? '' : err[0];

            nowFormItem.status_ = status;
            nowFormItem.tipMsg_ = tipMsg;

          })

        }

        this.$emit('submit', {
          isPass,
          errors,
          data: this.models,
        })
      },
    },
  };
</script>

<style lang="scss" src="./style.scss"></style>