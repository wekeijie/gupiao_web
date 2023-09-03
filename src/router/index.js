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
    path: '/IframeDemo',
    name: 'iframeDemo',
    component: () => import('@/views/common/IframeDemo.vue'),
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
    path: '/MessageLIst',
    name: 'messageLIst',
    component: () => import('@/views/myHomePage/MessageLIst.vue'),
  },
  {
    path: '/MessageDetail',
    name: 'messageDetail',
    component: () => import('@/views/myHomePage/MessageDetail.vue'),
  },
  {
    path: '/Recordslist',
    name: 'recordslist',
    component: () => import('@/views/myHomePage/Recordslist.vue'),
  },
  {
    path: '/TopUp',
    name: 'topUp',
    component: () => import('@/views/myHomePage/TopUp.vue'),
  },
  {
    path: '/Withdraw',
    name: 'withdraw',
    component: () => import('@/views/myHomePage/Withdraw.vue'),
  },
  
  {
    path: '/SetInfor',
    name: 'setInfor',
    component: () => import('@/views/myHomePage/SetInfor.vue'),
  },
  {
    path: '/SetName',
    name: 'setName',
    component: () => import('@/views/myHomePage/SetName.vue'),
  },
  {
    path: '/InCoupon',
    name: 'inCoupon',
    component: () => import('@/views/myHomePage/InCoupon.vue'),
  },
  {
    path: '/DetailsFunds',
    name: 'detailsFunds',
    component: () => import('@/views/myHomePage/DetailsFunds.vue'),
  },
  {
    path: '/BillingDetails',
    name: 'billingDetails',
    component: () => import('@/views/myHomePage/BillingDetails.vue'),
  },
  {
    path: '/StarAuthor',
    name: 'starAuthor',
    component: () => import('@/views/myHomePage/StarAuthor.vue'),
  },
  {
    path: '/Documentary',
    name: 'documentary',
    component: () => import('@/views/myHomePage/Documentary.vue'),
  },
  {
    path: '/SafetyManage',
    name: 'safetyManage',
    component: () => import('@/views/myHomePage/SafetyManage.vue'),
  },
  {
    path: '/RealName',
    name: 'realName',
    component: () => import('@/views/myHomePage/RealName.vue'),
  },
  {
    path: '/RealPhone',
    name: 'realPhone',
    component: () => import('@/views/myHomePage/RealPhone.vue'),
  },
  {
    path: '/RealEmail',
    name: 'realEmail',
    component: () => import('@/views/myHomePage/RealEmail.vue'),
  },
  {
    path: '/RealCard',
    name: 'realCard',
    component: () => import('@/views/myHomePage/RealCard.vue'),
  },
  {
    path: '/RealCipher',
    name: 'realCipher',
    component: () => import('@/views/myHomePage/RealCipher.vue'),
  },
  {
    path: '/RealTrading',
    name: 'realTrading',
    component: () => import('@/views/myHomePage/RealTrading.vue'),
  },
  {
    path: '/CardBind',
    name: 'cardBind',
    component: () => import('@/views/myHomePage/CardBind.vue'),
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
  {
    path: '/Homepage',
    name: 'homepage',
    component: () => import('@/views/partner/Homepage.vue'),
  },
  {
    path: '/Beginner',
    name: 'beginner',
    component: () => import('@/views/partner/Beginner.vue'),
  },
  {
    path: '/OneKey',
    name: 'oneKey',
    component: () => import('@/views/partner/OneKey.vue'),
  },
  {
    path: '/PartnershipRule',
    name: 'partnershipRule',
    component: () => import('@/views/partner/PartnershipRule.vue'),
  },
  {
    path: '/FollowList',
    name: 'followList',
    component: () => import('@/views/partner/FollowList.vue'),
  },
  {
    path: '/FollowNum',
    name: 'followNum',
    component: () => import('@/views/partner/FollowNum.vue'),
  },
  {
    path: '/juniorLIst',
    name: 'juniorLIst',
    component: () => import('@/views/partner/juniorLIst.vue'),
  },
  {
    path: '/TeamRecord',
    name: 'teamRecord',
    component: () => import('@/views/partner/TeamRecord.vue'),
  },
  
  
  
  
  
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
