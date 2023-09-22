import { registerApi,loginApi } from '@/api/registerApi'
import { smsSendApi } from '@/api/smsApi'
import { userInfoApi } from '@/api/userApi'
import { setItem, getItem, removeAllItem,removeItem } from "@/utils/storage"
import router from "@/router"

export default {
  namespaced: true,
  state: () => ({
    token:getItem('token') || '',
    info:{}
  }),
  mutations: {
    setToken(state,token){
      state.token = token
      setItem('token',token)
    },
    setInfo(state,info){
      state.info = info
    }
  },
  actions: {
    register(context, info) {
      return registerApi(info)
    },
    sendSms(context, mobile) {
      return smsSendApi(mobile)
    },
    login(context,data){
      return new Promise((resolv,reject) => {
        loginApi(data).then(d => {
          context.commit('setToken',d.token)
          resolv(d)
        })
      }).catch(e=>{
        reject(e)
      })
    },
    async userInfo(context){
      const rsp = await userInfoApi()
      context.commit('setInfo',rsp)
    },
    logout(context){
      if(context.state.token){
        this.commit('user/setToken','')
        this.commit('user/setInfo',{})
        removeAllItem()
        router.push('/Login')
    }
    }
  }
}
