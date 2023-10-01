import { createStore } from "vuex";
import user from "./modules/user";
import bannerAndRank from "./modules/bannerAndRank";
import snackbar from "./modules/snackbar";
import market from "./modules/market";
import news from "./modules/news";
import getters from "./getters";
import watchlist from "./modules/watchlist";
import trading from "./modules/trading";
import topUp from "./modules/topUp";
import bank from "./modules/bank";
import withdrawal from "./modules/withdrawal";
import fundrecord from "./modules/fundrecord";
import contract from "./modules/contract";
import trade from "./modules/trade";

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
    news,
    watchlist,
    trading,
    topUp,
    bank,
    withdrawal,
    fundrecord,
    contract,
    trade,
  },
});
