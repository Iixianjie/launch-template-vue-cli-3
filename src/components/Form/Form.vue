<script>
  export default {
    name: 'Form',
    props: {
      layout: {
        validator(value) {
          return ['row', 'col'].indexOf(value) !== -1
        }
      }
    },
    render() {
      console.log({...this});

      return (
        <form class={['bk-form', { __row: this.layout === 'row' }]} onSubmit={this.handleSubmit}>
          {this.$scopedSlots.default()}
        </form>
      )
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        console.log(e);
      }
    }
  };
</script>

<style lang="scss" src="./style.scss"></style>