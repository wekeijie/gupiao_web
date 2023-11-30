import { listApi } from "@/api/agenApi";
export default {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  mutations: {
    setList(state, rsp) {
      state.list = rsp;
    },
  },
  actions: {
    async getList(content) {
      const rsp = await listApi();
      content.commit("setList", rsp);
    },
  },
};
