import { listApi, showApi, tradeApi, compayApi } from "@/api/helpApi";
export default {
  namespaced: true,
  state: () => ({
    list: [],
    body: {},
  }),
  mutations: {
    setList(state, rsp) {
      state.list = rsp;
    },
    setBody(state, rsp) {
      state.body = rsp;
    },
  },
  actions: {
    async getList(content, type) {
      const rsp = await listApi(type);
      content.commit("setList", rsp);
    },
    async getShow(content, id) {
      const rsp = await showApi(id);
      content.commit("setBody", rsp);
    },
    async getTrade(content) {
      const rsp = await tradeApi();
      content.commit("setList", rsp);
    },
    async getCompay(content) {
      const rsp = await compayApi();
      content.commit("setList", rsp);
    },
  },
};
