import { listApi,putApi,getRechargeApi } from "@/api/topUpApi"
export default {
  namespaced: true,
  state: () => ({
    list:{},
    data:{},
    recharge:[]
  }),
  mutations: {
    setList(state,rsp){
        state.list = rsp
    },
    setData(state,ifno){
        state.data = info
    },
    setRecharge(state,rsp){
        state.recharge = rsp
    }
  },
  actions: {
    async getList(content){
        const rsp = await listApi()
        content.commit('setList',rsp)
    },
    updateData(content,info){
        content.commit('setData',info)
    },
    subPut(content,data){
        return putApi(data)
    },
    async getRecharge(content,info){
        const rsp = await getRechargeApi(info.page,info.status)
        content.commit('setRecharge',rsp)
        return rsp
    }
  }
}
