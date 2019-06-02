import { setState } from '@/store/util';

export default {
  namespaced: true,
  state: {
    num: 0
  },
  getters: {
    num2(state) {
      return state.num + 5;
    }
  },
  mutations: {
    setState
  },
};
