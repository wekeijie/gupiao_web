import { listApi, putApi, getRechargeApi, getMunterApi } from "@/api/topUpApi";
export default {
  namespaced: true,
  state: () => ({
    list: {},
    data: {},
    recharge: [],
  }),
  mutations: {
    setList(state, rsp) {
      state.list = rsp;
    },
    setData(state, ifno) {
      state.data = info;
    },
    setRecharge(state, rsp) {
      state.recharge = [...state.recharge, ...rsp];
    },
    clearRecharge(state) {
      state.recharge = [];
    },
  },
  actions: {
    async getList(content) {
      const rsp = await listApi();
      content.commit("setList", rsp);
    },
    updateData(content, info) {
      content.commit("setData", info);
    },
    subPut(content, data) {
      return putApi(data);
    },
    getMunter(content, orderid) {
      return getMunterApi(orderid);
    },
    async getRecharge(content, info) {
      const rsp = await getRechargeApi(info.page, info.status);
      if (rsp.length > 0) {
        content.commit("setRecharge", rsp);
      }
      return rsp;
    },
  },
};
