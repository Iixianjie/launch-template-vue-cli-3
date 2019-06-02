export default {
  props: {
    options: {
      observeDOM: true,
      click: true,
      probeType: 1,
      scrollbar: true,
    },
    scrollEvents: ['scroll']
  }
};

export const pullDownConf = {
  txt: '刷新完成',
};

export const pullUpConf = {
  txt: {
    more: '上拉加载更多',
    noMore: '没有更多了'
  },
};