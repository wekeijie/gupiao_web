import { createStore } from 'vuex'
import user from './modules/user'
import bannerAndRank from './modules/bannerAndRank'
import snackbar from './modules/snackbar'
import market from './modules/market'
import news from './modules/news'
import getters from './getters'


export const store = createStore({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    user,
    bannerAndRank,
    snackbar,
    market,
    news
  }
})
