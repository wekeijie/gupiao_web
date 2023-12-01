import { addApi, uploadApi, searchApi } from "@/api/tradeApi";
export default {
  namespaced: true,
  state: () => ({
    info: {},
  }),
  mutations: {
    setInfo(state, rsp) {
      state.info = rsp;
    },
  },
  actions: {
    apply(content, info) {
      return addApi(info);
    },
    uploadFile(content, file) {
      return uploadApi(file);
    },
    async getInfo(content, name) {
      content.commit("setInfo", {});
      const rsp = await searchApi(name);
      content.commit("setInfo", rsp);
    },
  },
};
