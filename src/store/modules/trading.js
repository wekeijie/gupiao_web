import {
  getInfoApi,
  getDetailApi,
  buyApi,
  sellApi,
  activeListApi,
  endListApi,
  trustListApi,
  cancelOrderApi,
  orderInfoApi,
  successListApi,
} from "@/api/tradingApi";
export default {
  namespaced: true,
  state: () => ({
    title: "平安银行",
    code: "000001",
    prefix: "0.000001",
    info: {},
    dayDetails: [],
    active_list: [],
    end_list: [],
    trust_list: [],
    success_list: [],
  }),
  mutations: {
    updateTitleAndCode(state, info) {
      state.title = info.title;
      state.code = info.code;
    },
    setTrustList(state, rsp) {
      state.trust_list = rsp;
    },
    setSuccessList(state, rsp) {
      state.success_list = rsp;
    },
    clearTrustList(state) {
      state.trust_list = [];
    },
    setInfo(state, rsp) {
      state.info = rsp;
      state.title = rsp.f58;
      state.code = rsp.f57;
    },
    setDayDetails(state, rsp) {
      state.dayDetails = rsp;
    },
    setActive(state, rsp) {
      state.active_list = rsp;
    },
    setEndList(state, rsp) {
      state.end_list = rsp;
    },
  },
  actions: {
    changeTitle(content, info) {
      content.commit("updateTitleAndCode", info);
    },
    async getInfo(content, info) {
      if (info === null || info === undefined) {
        info = "0." + content.state.code;
      }
      const rsp = await getInfoApi(info);
      content.commit("setInfo", rsp);
    },
    async getDayDetail(content, code) {
      if (code === null || code === undefined) {
        code = "0." + content.state.code;
      }
      const rsp = await getDetailApi(code);
      content.commit("setDayDetails", rsp);
    },
    async getActiveList(content) {
      const rsp = await activeListApi();
      content.commit("setActive", rsp);
    },
    buy(content, data) {
      return buyApi(data);
    },
    sell(content, data) {
      return sellApi(data);
    },
    async getEndList(content, status) {
      const rsp = await endListApi(status);
      content.commit("setEndList", rsp);
    },
    async getTrustList(content, item) {
      const rsp = await trustListApi(item.status, item.contract_id);
      content.commit("setTrustList", rsp);
    },
    cancelOrder(content, id) {
      return cancelOrderApi(id);
    },
    getOrderInfo(content, id) {
      return orderInfoApi(id);
    },
    async getSuccessList(content, data) {
      const rsp = await successListApi(data.contract_id, data.type);
      content.commit("setSuccessList", rsp);
    },
  },
};
