import { bannerAndRankApi } from "@/api/bannerAndRankApi";
export default {
  namespaced: true,
  state: () => ({
    list: [],
    has_alert: false,
    view_alert: false,
    three: {
      total_day: 0,
      total_trade: 0,
      total_user_rae: 0,
    },
  }),
  mutations: {
    setBannerAndRank(state, info) {
      state.list = info;
      state.three = info.three;
    },
    updateAlertActive(state, value) {
      state.has_alert = value;
      state.view_alert = true;
    },
  },
  actions: {
    async get(context) {
      const rsp = await bannerAndRankApi();
      context.commit("setBannerAndRank", rsp);
      return rsp;
    },
  },
};
