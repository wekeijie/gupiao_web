import router from '@/router'
import {store} from '@/store'

router.beforeEach(async (to, from, next) => {
    if ( to.matched.some(record => record.meta.requiresAuth) ) {
        if (store.getters.token) {
            // if( !store.getters.hasUserInfo ) {
            //     await store.dispatch('user/getUser')
            // }
            next()
        }else{
            next('/Login')
        }

    }else{
        if (to.path == '/Login' && store.getters.token ) { 
            // if( !store.getters.hasUserInfo ) {
            //     await store.dispatch('user/getUser')
            // }
            next('/home')
        } 
        next()
    }
})