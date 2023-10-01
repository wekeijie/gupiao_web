import { marketApi,listApi,listDetailsApi,stockInfoApi,searchApi } from "@/api/marketApi"
export default {
  namespaced: true,
  state: () => ({
    index:[],
    gainian:[],
    hangye:[],
    day:{},
    list:[],
    title:"",
    stock_info:{},
    search_list :[]
  }),
  mutations: {
    setInfo(state,info){
        state.index = info.index;
        state.gainian = info.gainian;
        state.hangye = info.hangye;
        state.day = info.day
    },
    setList(state,info){
        state.list = state.list.concat(info.list)
        state.title = info.title ?? ''
    },
    updateList(state){
        state.list = []
        state.title = ''
    },
    steListDetail(state,rsp){
        state.list = state.list.concat(rsp)
    },
    setStock(state,rsp){
      state.stock_info = JSON.parse(JSON.stringify(rsp))
    },
    setSearch(state,rsp){
      state.search_list = rsp
    }
  },
  actions: {
    async get(context){
        const rsp = await marketApi()
        context.commit('setInfo',rsp)
    },
    async getList(context,info){
        const rsp = await listApi(info.type,info.page)
        context.commit('setList',rsp)
    },
    clearList(context){
        context.commit('updateList')
    },
    async getListDetail(context,info){
        const rsp = await listDetailsApi(info.code,info.page)
        context.commit('steListDetail',rsp) 
    },
    async getStockInfo(context,symbol){
      const rsp = await stockInfoApi(symbol)
      context.commit('setStock',rsp)
    },
    async search(content,keyword){
      const rsp = await searchApi(keyword)
      content.commit('setSearch',rsp)
    }
    
  }
}
