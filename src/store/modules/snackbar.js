export default {
    namespaced: true,
    state: () => ({
        active:false,
        body: "",
        color: ""
    }),
    mutations: {
        setInfo(state,info) {
            state.active = info.active,
            state.body = info.body || '',
            state.color = info.color || "primary"
        }
    },
    actions: {
        show(context,info) {
            this.commit('snackbar/setInfo',info)
        },
        error(context,info){
            info.color='error'
            this.commit('snackbar/setInfo',info) 
        },
        warning(context,info){
            info.color='warning'
            this.commit('snackbar/setInfo',info) 
        },
        success(context,info){
            info.color='success'
            this.commit('snackbar/setInfo',info) 
        },
        info(context,info){
            info.color='info'
            this.commit('snackbar/setInfo',info) 
        },
    }
}