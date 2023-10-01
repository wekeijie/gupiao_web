import { addApi,listApi,deleteApi,changeDefaultApi } from "@/api/userBankApi"
export default {
  namespaced: true,
  state: () => ({
     list:[] 
  }),
  mutations: {
    setList(state,rsp){
        state.list = rsp
    }
  },
  actions: {
    create(content,info){
        return addApi(info)
    },
    async getList(content){
        const rsp = await listApi()
        content.commit('setList',rsp)
    },
    delete(content,info){
        return deleteApi(info)
    },
    changeDefault(content,info){
        return changeDefaultApi(info)
    }
  }
}
