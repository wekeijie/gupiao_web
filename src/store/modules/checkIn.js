import { infoApi, putApi } from "@/api/checkInApi";
export default {
  namespaced: true,
  state: () => ({
    info: {},
  }),
  mutations: {
    setInfo(state, rsp) {
      state.info = rsp;
    },
  },
  actions: {
    async getInfo(content) {
      const rsp = await infoApi();
      content.commit("setInfo", rsp);
    },
    put(content) {
      return putApi();
    },
  },
};
