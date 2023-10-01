import { applyApi, listApi } from "@/api/withdrawalApi";
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
    apply(content, info) {
      return applyApi(info);
    },
    async getList(content, info) {
      const rsp = await listApi(info.page, info.status);
      content.commit("setList", rsp);
    },
  },
};
