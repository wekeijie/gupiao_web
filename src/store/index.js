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
import helps from "./modules/helps";
import userCoupon from "./modules/userCoupon";
import agen from "./modules/agen";
import copyTrade from "./modules/copyTrade";
import copyTradeList from "./modules/copyTradeList";
import loadding from "./modules/loadding";
import checkIn from "./modules/checkIn";

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
    helps,
    userCoupon,
    agen,
    copyTrade,
    copyTradeList,
    loadding,
    checkIn,
  },
});
