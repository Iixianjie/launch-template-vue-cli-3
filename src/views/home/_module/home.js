import { setState } from '@/store/util';

export const home = {
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
