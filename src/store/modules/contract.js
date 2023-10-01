import {
  typeApi,
  limitApi,
  createApi,
  listApi,
  minListApi,
} from "@/api/contractApi";
export default {
  namespaced: true,
  state: () => ({
    typeList: [],
    limitList: [],
    list: [],
    minList: [],
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
  },
  actions: {
    async getType(content) {
      const rsp = await typeApi();
      content.commit("setTypeList", rsp);
    },
    async getLimit(content) {
      const rsp = await limitApi();
      content.commit("setLimitList", rsp);
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
    },
  },
};
