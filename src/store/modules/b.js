export default {
  namespaced: true,
  state: {
    num: 0,
  },
  mutations: {
    setState (state, payload) {
      state.num = state.num + payload.num;
    },
  },
};
