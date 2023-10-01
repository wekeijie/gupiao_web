import {getInfoApi,getDetailApi} from '@/api/tradingApi'
export default {
  namespaced: true,
  state: () => ({
    title:'平安银行',
    code:'000001',
    info:{},
    dayDetails:[]
  }),
  mutations: {
    updateTitleAndCode(state,info){
        state.title = info.title
        state.code = info.code
    },
    setInfo(state,rsp){
        state.info = rsp
        state.title = rsp.f58
        state.code = rsp.f57
    },
    setDayDetails(state,rsp){
        state.dayDetails = rsp
    }
  },
  actions: {
    changeTitle(content,info){
        content.commit('updateTitleAndCode',info)
    },
    async getInfo(content,info){
        if (info === null || info === undefined){
            info = '0.' + content.state.code
        }
       const rsp = await getInfoApi(info)
       content.commit('setInfo',rsp)
    },
    async getDayDetail(content,code){
        if (code === null || code === undefined){
            code = '0.' + content.state.code
        }
        const rsp = await getDetailApi(code)
        content.commit('setDayDetails',rsp)
    }
  }
}
