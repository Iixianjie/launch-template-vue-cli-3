<script>
function getRandWidth (baseP) {
  let rand = Math.floor(Math.random() * 50);
  return rand + baseP + '%';
}

export default {
  name: 'Skeleton',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    // 总条数
    count: {
      type: Number,
      default: 3,
    },
    // 内容线条的数量
    lineCount: {
      type: Number,
      default: 3,
    },
    // 是否显示头像框
    img: {
      type: Boolean,
      default: false,
    },
  },
  render () {
    let { count, img, show, sty, $slots, lineCount } = this;

    let Skeletons = Array.apply(null, { length: count }).map(i => (
      <div key={i} class={sty.wrap}>
        <div class={sty.item}>
          {img && <div class={sty.img} />}
          <div class={sty.cont}>
            <div class={sty.title} style={{ width: getRandWidth(30) }} />
            {Array.apply(null, { length: lineCount }).map(item => (
              <div class={sty.textCont}>
                <div class={sty.text} style={{ width: getRandWidth(10) }} />
                <div class={sty.text} style={{ width: getRandWidth(10) }} />
                <div class={sty.text} style={{ width: getRandWidth(10) }} />
                <div class={sty.text} style={{ width: getRandWidth(10) }} />
              </div>
            ))}
            <div class={sty.text} style={{ width: getRandWidth(10) }} />
          </div>
        </div>
      </div>
    ));

    return show ? <div class={sty.wrap}>{Skeletons}</div> : $slots.default;
  },
};
</script>

<style lang="scss" module="sty" src="./sty.scss"></style>
