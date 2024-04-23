import { bannerAndRankApi } from "@/api/bannerAndRankApi";
export default {
  namespaced: true,
  state: () => ({
    banner: {},
    rank: {},
    alert: {},
    has_alert: false,
    view_alert: false,
  }),
  mutations: {
    setBannerAndRank(state, info) {
      state.banner = info.banner;
      state.rank = info.rank;
      state.alert = info.alert;
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
    },
  },
};
