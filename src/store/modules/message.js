import { getListApi, getDetailApi } from "@/api/messageApi";
export default {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  mutations: {
    setList(state, rsp) {
      state.list = rsp;
    },
  },
  actions: {
    async getList(content) {
      const rsp = await getListApi();
      content.commit("setList", rsp);
    },
    getShow(content, id) {
      return getDetailApi(id);
    },
  },
};
