import {pushApi,getApi, listApi} from '@/api/watchlistApi'

export default {
  namespaced: true,
  state: () => ({
    status:0,
    list:[]
  }),
  mutations: {
    setStatus(state,status){
        state.status = status
    },
    setList(state,rsp){
        state.list = rsp
    }
  },
  actions: {
   
    push(content,info){
        return pushApi(info)
    },
    async get(content,symbol){
        const rsp = await getApi(symbol)
        content.commit('setStatus',rsp)
    },
    updateStatus(content,status){
        content.commit('setStatus',status)
    },
    async getList(content){
        const rsp = await listApi()
        content.commit('setList',rsp)
    }
  }
}
