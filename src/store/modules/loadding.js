export default {
  namespaced: true,
  state: () => ({
    active: false,
  }),
  mutations: {
    setInfo(state, active) {
      state.active = active;
    },
  },
  actions: {
    show(context) {
      context.commit("setInfo", true);
    },
    hide(context) {
      context.commit("setInfo", false);
    },
  },
};
