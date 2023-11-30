import {
  listApi,
  cancelApi,
  showApi,
  tradeListApi,
} from "@/api/copyTradeListApi";
export default {
  namespaced: true,
  state: () => ({
    list: [],
    order: {
      info: {},
      list: [],
      tradeList: [],
    },
  }),
  mutations: {
    setList(state, rsp) {
      state.list = rsp;
    },
    setOrder(state, rsp) {
      state.order = rsp;
    },
    setTradeList(state, rsp) {
      state.tradeList = rsp;
    },
  },
  actions: {
    async getList(content, status) {
      const rsp = await listApi(status);
      content.commit("setList", rsp);
    },
    async getOrder(content, order_id) {
      const rsp = await showApi(order_id);
      content.commit("setOrder", rsp);
    },
    async getTradeList(content, id) {
      const rsp = await tradeListApi(id);
      content.commit("setTradeList", rsp);
    },
    cancel(content, order) {
      return cancelApi(order);
    },
    clearList(content) {
      content.commit("setList", []);
    },
  },
};
