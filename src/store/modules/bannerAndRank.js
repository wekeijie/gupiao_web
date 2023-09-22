import { bannerAndRankApi } from '@/api/bannerAndRankApi'
export default {
  namespaced: true,
  state: () => ({
    banner: {},
    rank: {}
  }),
  mutations: {
    setBannerAndRank(state, info) {
      state.banner = info.banner
      state.rank = info.rank
    }
  },
  actions: {
    async get(context) {
      const rsp = await bannerAndRankApi()
      context.commit('setBannerAndRank',rsp)
    },
  },
}
