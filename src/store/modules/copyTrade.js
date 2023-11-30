import {
  partnerListApi,
  infoApi,
  rookieApi,
  applyApi,
  oneKeyApi,
} from "@/api/copyTradeApi";
export default {
  namespaced: true,
  state: () => ({
    partner: [],
    info: {
      name: "",
      partner: {
        start_limit: 0,
        start_title: "",
        new_title: "",
        new_limit: 0,
      },
      team: {
        team_number: 0,
        team_number_all: 0,
        tree_number: 0,
        recharge_number: 0,
      },
      me: {
        copy_number: 0,
        day_copy_number: 0,
        day_total: 0,
        total: 0,
      },
    },
    rookie: {
      name: "",
      commission: 0,
    },
    one: {
      name: "",
      list: [],
    },
  }),
  mutations: {
    setPartner(state, rsp) {
      state.partner = rsp;
    },
    setInfo(state, rsp) {
      state.info = rsp;
    },
    setRookie(state, rsp) {
      state.rookie = rsp;
    },
    setOne(state, rsp) {
      state.one = rsp;
    },
  },
  actions: {
    async getPartner(content) {
      const rsp = await partnerListApi();
      content.commit("setPartner", rsp);
    },
    async getInfo(content, id) {
      const rsp = await infoApi(id);
      content.commit("setInfo", rsp);
    },
    async getRookie(content, id) {
      const rsp = await rookieApi(id);
      content.commit("setRookie", rsp);
    },
    apply(content, data) {
      return applyApi(data);
    },
    async getOne(content, id) {
      const rsp = await oneKeyApi(id);
      content.commit("setOne", rsp);
    },
  },
};
