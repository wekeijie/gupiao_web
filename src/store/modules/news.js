import { newsListApi,newShowApi,newFlashApi } from "@/api/newsApi"
export default {
  namespaced: true,
  state: () => ({
    list:[],
    context:{},
    flash_day:"",
    flash_item:[]
  }),
  mutations: {
    setList(state,info){
        state.list = info
    },
    setContext(state,info){
        state.context = info
    },
    setFlash(state,info){
        state.flash_day = info.date
        state.flash_item = info.items
    }
  },
  actions: {
    async list(context,info){
        const rsp = await newsListApi(info)
        context.commit('setList',rsp)
    },
    async show(context,id){
        const rsp = await newShowApi(id)
        context.commit('setContext',rsp)
    },
    async flash(context){
        const rsp = await newFlashApi()
        context.commit('setFlash',rsp)
    }
  }
}
