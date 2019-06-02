```jsx
<Pager 
  pullDown={this.pullDown}  // 开始下拉
  pullUp={this.pullUp}  // 开启上拉
  bottom="48px"   // 类似的还有上下左右，用于调整页面偏移给其他元素让出位置
  bgColor="red"   // 页面背景色，默认白
  scopedSlots={{
    default: ({defaultConf}) => {
    return (<cube-scroll 
      ref="scroll" 
      {...defaultConf}  // 覆盖默认配置
      onPulling-down={this.handlePulldown} 
      onPulling-up={this.handlePullup}
      data={this.items}></cube-scroll>)
  },
  }}>

</Pager>

methods: {
  handlePulldown() {
    setTimeout(() => {
      this.$refs.scroll.forceUpdate();  // 下拉结束
    }, 1000)
  },
  handlePullup() {
    setTimeout(() => {
      上拉结束，true有数据， false无数据
      this.$refs.scroll.forceUpdate(Math.random() > 0.7 ? true : false);
    }, 1000)
  }
}
```