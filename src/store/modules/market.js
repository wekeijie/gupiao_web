import {
  marketApi,
  listApi,
  listDetailsApi,
  stockInfoApi,
  searchApi,
  mainIndexApi,
  boardListApi,
  boardStockListApi,
  stockInfoNewApi,
  stockKlineNewApi,
  stockBuySellFiveApi,
  stockFenShiList,
} from "@/api/marketApi";
export default {
  namespaced: true,
  state: () => ({
    index: [],
    gainian: [],
    hangye: [],
    day: {},
    list: [],
    title: "",
    stock_info: {},
    search_list: [],
    board_list: [],
    stock_new_info: {
      f107: 1,
      f108: -0.313927455,
      f116: 2203201889.46,
      f117: 2203201889.46,
      f161: 80142,
      f162: 14445,
      f167: 177,
      f168: 926,
      f169: 117,
      f170: 1000,
      f292: 13,
      f43: 1287,
      f44: 1287,
      f45: 1132,
      f46: 1132,
      f47: 158558,
      f48: 193548864,
      f49: 78416,
      f50: 241,
      f51: 1287,
      f52: 1053,
      f57: "603079",
      f58: "\u5723\u8fbe\u751f\u7269",
      f59: 2,
      f60: 1170,
      f600: "-",
      f92: 7.2748805,
    },
  }),
  mutations: {
    setInfo(state, info) {
      state.index = info.index;
      state.gainian = info.gainian;
      state.hangye = info.hangye;
      state.day = info.day;
    },
    setList(state, info) {
      state.list = state.list.concat(info.list);
      state.title = info.title ?? "";
    },
    setNewStockInfo(state, info) {
      state.stock_new_info = info;
    },
    updateList(state) {
      state.list = [];
      state.title = "";
    },
    steListDetail(state, rsp) {
      state.list = state.list.concat(rsp);
    },
    setStock(state, rsp) {
      state.stock_info = JSON.parse(JSON.stringify(rsp));
    },
    setSearch(state, rsp) {
      state.search_list = rsp;
    },
  },
  actions: {
    async get(context) {
      const rsp = await marketApi();
      context.commit("setInfo", rsp);
    },
    async getList(context, info) {
      const rsp = await listApi(info.type, info.page);
      context.commit("setList", rsp);
    },
    clearList(context) {
      context.commit("updateList");
    },
    async getListDetail(context, info) {
      const rsp = await listDetailsApi(info.code, info.page);
      context.commit("steListDetail", rsp);
    },
    async getStockInfo(context, symbol) {
      const rsp = await stockInfoApi(symbol);
      context.commit("setStock", rsp);
    },
    async search(content, keyword) {
      const rsp = await searchApi(keyword);
      content.commit("setSearch", rsp);
    },
    getMainIndex(content) {
      return mainIndexApi();
    },
    getBoardList(content, data) {
      return boardListApi(data.cate, data.page, data.limit);
    },
    getBoardStockList(content, data) {
      return boardStockListApi(data.cate, data.page, data.limit);
    },
    async getStockNewInfo(content, symbol) {
      const rsp = await stockInfoNewApi(symbol);
      content.commit("setNewStockInfo", rsp);
    },
    getStockKlineNew(content, data) {
      return stockKlineNewApi(data.symbol, data.klt);
    },
    getBuySellFive(content, symbol) {
      return stockBuySellFiveApi(symbol);
    },
    getStockFenShi(content, symbol) {
      return stockFenShiList(symbol);
    },
  },
};
