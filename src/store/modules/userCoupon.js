import { listApi, showApi } from "@/api/userCouponApi";
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
    async getList(content, info) {
      const rsp = await listApi(info.status, info.page);
      if (rsp.length > 0) {
        content.commit("setList", rsp);
      }
    },
    clearList(content) {
      content.commit("setList", []);
    },
    async getShow(content, order_id) {
      const rsp = await showApi(order_id);
      content.commit("setBody", rsp);
    },
  },
};
