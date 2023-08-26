// Composables
import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [{
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "home" */ '@/views/tabPage/Home.vue'),
    }, {
      path: '/My',
      name: 'my',
      component: () => import('@/views/tabPage/My.vue'),
    }, {
      path: '/Message',
      name: 'message',
      component: () => import('@/views/tabPage/Message.vue'),
    }, {
      path: '/Market',
      name: 'market',
      component: () => import('@/views/tabPage/Market.vue'),
    }, {
      path: '/Pact',
      name: 'pact',
      component: () => import('@/views/tabPage/Pact.vue'),
    }, ]
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '/ChanrtPage',
    name: 'chanrtPage',
    component: () => import('@/views/market/ChanrtPage.vue'),
  },

  {
    path: '/Login',
    name: 'login',
    component: () => import('@/views/loginBlock/Login.vue'),
  },
  {
    path: '/SignIn',
    name: 'signIn',
    component: () => import('@/views/loginBlock/SignIn.vue'),
  },
  {
    path: '/ForgertPhone',
    name: 'forgertPhone',
    component: () => import('@/views/loginBlock/ForgertPhone.vue'),
  },
  {
    path: '/ChangePassword',
    name: 'changePassword',
    component: () => import('@/views/loginBlock/ChangePassword.vue'),
  },
  {
    path: '/Trading',
    name: 'trading',
    component: () => import('@/views/home/Trading.vue'),
  },
  {
    path: '/Agency',
    name: 'agency',
    component: () => import('@/views/home/Agency.vue'),
  },
  {
    path: '/Invite',
    name: 'invite',
    component: () => import('@/views/home/Invite.vue'),
  },
  {
    path: '/Downline',
    name: 'downline',
    component: () => import('@/views/home/Downline.vue'),
  },
  {
    path: '/LineList',
    name: 'lineList',
    component: () => import('@/views/home/LineLIst.vue'),
  },
  {
    path: '/TradingRules',
    name: 'tradingRules',
    component: () => import('@/views/home/TradingRules.vue'),
  },
  {
    path: '/CompanyIntro',
    name: 'companyIntro',
    component: () => import('@/views/home/CompanyIntro.vue'),
  },
  {
    path: '/ActiveList',
    name: 'activeList',
    component: () => import('@/views/home/ActiveList.vue'),
  },
  {
    path: '/InviteDetail',
    name: 'inviteDetail',
    component: () => import('@/views/home/InviteDetail.vue'),
  },


  {
    path: '/RichText',
    name: 'richText',
    component: () => import('@/views/common/RichText.vue'),
  },
  {
    path: '/ApplyContract',
    name: 'applyContract',
    component: () => import('@/views/common/ApplyContract.vue'),
  },
  {
    path: '/VersionNumber',
    name: 'versionNumber',
    component: () => import('@/views/myHomePage/VersionNumber.vue'),
  },
  {
    path: '/CommonSet',
    name: 'commonSet',
    component: () => import('@/views/myHomePage/CommonSet.vue'),
  },
  {
    path: '/MessageNotice',
    name: 'messageNotice',
    component: () => import('@/views/myHomePage/MessageNotice.vue'),
  },
  {
    path: '/HelpCenter',
    name: 'helpCenter',
    component: () => import('@/views/myHomePage/HelpCenter.vue'),
  },


  {
    path: '/DetailList',
    name: 'detailList',
    component: () => import('@/views/market/DetailList.vue'),
  },
  {
    path: '/HotList',
    name: 'hotList',
    component: () => import('@/views/market/HotList.vue'),
  },




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
