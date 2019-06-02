import { setState } from '../util';

let delay = delay => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, delay * 1000);
  });
};

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
  actions: {
    async delayAddNum({ commit }) {
      let num = await delay(2);
      // commit({ type: 'setState', num: num }, { root: true });
      commit('setState', { num: num });
    }
  }
};
