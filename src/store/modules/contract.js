import {
  typeApi,
  limitApi,
  createApi,
  listApi,
  minListApi,
  expandApi,
  appendApi,
  withdrawalApi,
  stopApi,
  detailApi,
  amountListApi,
  allListApi,
  orderListApi,
  orderDetail,
} from "@/api/contractApi";
export default {
  namespaced: true,
  state: () => ({
    typeList: [],
    limitList: [],
    list: [],
    minList: [],
    detail: {},
    staock_list: [],
    amountList: {},
    allList: [],
    orderList: [],
  }),
  mutations: {
    setTypeList(state, rsp) {
      state.typeList = rsp;
    },
    setLimitList(state, rsp) {
      state.limitList = rsp;
    },
    setList(state, rsp) {
      state.list = rsp;
    },
    setMinList(state, rsp) {
      state.minList = rsp;
    },
    setDetailStock(state, rsp) {
      state.detail = rsp.info;
      state.staock_list = rsp.stock;
    },
    setAmountList(state, rsp) {
      state.amountList = rsp;
    },
    setAllList(state, rsp) {
      state.allList = rsp;
    },
    setOrderList(state, rsp) {
      state.orderList = rsp;
    },
  },
  actions: {
    async getType(content) {
      const rsp = await typeApi();
      content.commit("setTypeList", rsp);
    },
    async getLimit(content, type) {
      const rsp = await limitApi(type);
      content.commit("setLimitList", rsp);
      return rsp;
    },
    create(content, info) {
      return createApi(info);
    },
    async getList(content, type) {
      const rsp = await listApi(type);
      content.commit("setList", rsp);
    },
    async getMinList(content) {
      const rsp = await minListApi();
      content.commit("setMinList", rsp);
      return rsp;
    },
    expand(content, data) {
      return expandApi(data);
    },
    append(content, data) {
      return appendApi(data);
    },
    withdrawal(content, data) {
      return withdrawalApi(data);
    },
    stop(content, data) {
      return stopApi(data);
    },
    async getDetail(content, order_id) {
      const rsp = await detailApi(order_id);
      content.commit("setDetailStock", rsp);
      return rsp;
    },
    async getAmountList(content, order_id) {
      const rsp = await amountListApi(order_id);
      content.commit("setAmountList", rsp);
    },
    async getAllList(content, order_id) {
      const rsp = await allListApi(order_id);
      content.commit("setAllList", rsp);
    },
    async getOrderList(content, order_id) {
      const rsp = await orderListApi(order_id);
      content.commit("setOrderList", rsp);
    },
    async getOrderDetail(content, order_id) {
      const rsp = await orderDetail(order_id);
      return rsp;
    },
  },
};
