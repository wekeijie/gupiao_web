import { typeListApi, listApi } from "@/api/fundrecordApi";
export default {
  namespaced: true,
  state: () => ({
    typeList: [],
    list: [],
  }),
  mutations: {
    setTypeList(state, rsp) {
      state.typeList = rsp;
    },
    setList(state, rsp) {
      state.list = rsp;
    },
  },
  actions: {
    async getTypeList(content) {
      const rsp = await typeListApi();
      content.commit("setTypeList", rsp);
    },
    async getList(content, info) {
      const rsp = await listApi(info.page, info.type, info.date);
      console.log("rsp", rsp);
      if (rsp.length > 0) {
        content.commit("setList", rsp);
      }
    },
  },
};
