import { addApi, uploadApi } from "@/api/tradeApi";
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    apply(content, info) {
      return addApi(info);
    },
    uploadFile(content, file) {
      return uploadApi(file);
    },
  },
};
