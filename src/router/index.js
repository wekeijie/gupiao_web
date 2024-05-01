// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("@/views/index/Index.vue"),
      },
      {
        path: "/My",
        name: "my",
        component: () => import("@/views/tabPage/My.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user/Index.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/news",
        name: "message",
        component: () => import("@/views/tabPage/News.vue"),
      },
      {
        path: "/Market",
        name: "market",
        component: () => import("@/views/tabPage/Market.vue"),
      },
      {
        path: "/Pact",
        name: "pact",
        component: () => import("@/views/tabPage/Pact.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/contract",
        name: "contract",
        component: () => import("@/views/contract/Index.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/PactDetail",
    name: "PactDetail",
    component: () => import("@/views/PactDetail.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Search",
    name: "Search",
    component: () => import("@/views/Search.vue"),
  },
  {
    path: "/ChanrtPage",
    name: "chanrtPage",
    component: () => import("@/views/market/ChanrtPage.vue"),
  },

  {
    path: "/Login",
    name: "login",
    component: () => import("@/views/loginBlock/Login.vue"),
  },
  {
    path: "/SignIn",
    name: "signIn",
    component: () => import("@/views/loginBlock/SignIn.vue"),
  },

  {
    path: "/ForgertPhone",
    name: "forgertPhone",
    component: () => import("@/views/loginBlock/ForgertPhone.vue"),
  },
  {
    path: "/ChangePassword",
    name: "changePassword",
    component: () => import("@/views/loginBlock/ChangePassword.vue"),
  },
  {
    path: "/Trading",
    name: "trading",
    component: () => import("@/views/home/Trading.vue"),
  },
  {
    path: "/agency",
    name: "agency",
    component: () => import("@/views/index/Agency.vue"),
  },

  {
    path: "/Invite",
    name: "invite",
    component: () => import("@/views/home/Share.vue"),
  },
  {
    path: "/Downline",
    name: "downline",
    component: () => import("@/views/home/Downline.vue"),
  },
  {
    path: "/LineList",
    name: "lineList",
    component: () => import("@/views/home/LineLIst.vue"),
  },
  {
    path: "/TradingRules",
    name: "tradingRules",
    component: () => import("@/views/home/TradingRules.vue"),
  },
  {
    path: "/CompanyIntro",
    name: "companyIntro",
    component: () => import("@/views/home/CompanyIntro.vue"),
  },
  {
    path: "/ActiveList",
    name: "activeList",
    component: () => import("@/views/home/ActiveList.vue"),
  },
  {
    path: "/InviteDetail",
    name: "inviteDetail",
    component: () => import("@/views/home/InviteDetail.vue"),
  },

  {
    path: "/RichText",
    name: "richText",
    component: () => import("@/views/common/RichText.vue"),
  },
  {
    path: "/longImg",
    name: "longImg",
    component: () => import("@/views/common/longImg.vue"),
  },

  {
    path: "/ApplyContract",
    name: "applyContract",
    component: () => import("@/views/common/ApplyContra.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/IframeDemo",
    name: "iframeDemo",
    component: () => import("@/views/common/IframeDemo.vue"),
  },

  {
    path: "/VersionNumber",
    name: "versionNumber",
    component: () => import("@/views/myHomePage/VersionNumber.vue"),
  },
  {
    path: "/CommonSet",
    name: "commonSet",
    component: () => import("@/views/myHomePage/CommonSet.vue"),
  },
  {
    path: "/MessageNotice",
    name: "messageNotice",
    component: () => import("@/views/myHomePage/MessageNotice.vue"),
  },
  {
    path: "/HelpCenter",
    name: "helpCenter",
    component: () => import("@/views/myHomePage/HelpCenter.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/views/myHomePage/About.vue"),
  },
  {
    path: "/MessageLIst",
    name: "messageLIst",
    component: () => import("@/views/myHomePage/MessageLIst.vue"),
  },
  {
    path: "/MessageDetail",
    name: "messageDetail",
    component: () => import("@/views/myHomePage/MessageDetail.vue"),
  },
  {
    path: "/Recordslist",
    name: "recordslist",
    component: () => import("@/views/myHomePage/Recordslist.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/TopUp",
    name: "topUp",
    component: () => import("@/views/user/TopUp.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/TopUp/unionpay",
    name: "unionpay",
    component: () => import("@/views/user/UnionPay.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/TopUp/manually",
    name: "topUpManually",
    component: () => import("@/views/myHomePage/rechargeManually.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Withdraw",
    name: "withdraw",
    component: () => import("@/views/user/Withdraw.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/online-service",
    name: "onlineService",
    component: () => import("@/views/user/OnlineService.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Withdraw/list",
    name: "withdrawList",
    component: () => import("@/views/myHomePage/WithdrawList.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/SetInfor",
    name: "setInfor",
    component: () => import("@/views/myHomePage/SetInfor.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/SetName",
    name: "setName",
    component: () => import("@/views/myHomePage/SetName.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/InCoupon",
    name: "InCoupon",
    component: () => import("@/views/myHomePage/CheckIn.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/DetailsFunds",
    name: "detailsFunds",
    component: () => import("@/views/myHomePage/DetailsFunds.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/BillingDetails",
    name: "billingDetails",
    component: () => import("@/views/myHomePage/BillingDetails.vue"),
  },
  {
    path: "/StarAuthor",
    name: "starAuthor",
    component: () => import("@/views/myHomePage/StarAuthor.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/InvestorPlan",
    name: "InvestorPlan",
    component: () => import("@/views/myHomePage/InvestorPlan.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Documentary",
    name: "documentary",
    component: () => import("@/views/user/CopyTrade.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/SafetyManage",
    name: "safetyManage",
    component: () => import("@/views/myHomePage/SafetyManage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("@/views/myHomePage/Setting.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/RealName",
    name: "realName",
    component: () => import("@/views/myHomePage/RealName.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/RealPhone",
    name: "realPhone",
    component: () => import("@/views/myHomePage/RealPhone.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/RealEmail",
    name: "realEmail",
    component: () => import("@/views/myHomePage/RealEmail.vue"),
  },
  {
    path: "/RealCard",
    name: "realCard",
    component: () => import("@/views/myHomePage/RealCard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/RealCipher",
    name: "realCipher",
    component: () => import("@/views/myHomePage/RealCipher.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/RealTrading",
    name: "realTrading",
    component: () => import("@/views/myHomePage/RealTrading.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/CardBind",
    name: "cardBind",
    component: () => import("@/views/myHomePage/CardBind.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/MissionCenter",
    name: "missionCenter",
    component: () => import("@/views/myHomePage/MissionCenter.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/CouponList",
    name: "couponList",
    component: () => import("@/views/myHomePage/CouponList.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/CouponDetail",
    name: "couponDetail",
    component: () => import("@/views/myHomePage/CouponDetail.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/DetailList",
    name: "detailList",
    component: () => import("@/views/market/DetailList.vue"),
  },
  {
    path: "/HotList",
    name: "hotList",
    component: () => import("@/views/market/HotList.vue"),
  },
  {
    path: "/Homepage",
    name: "homepage",
    component: () => import("@/views/partner/Index.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Beginner",
    name: "beginner",
    component: () => import("@/views/partner/Newomer.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/OneKey",
    name: "oneKey",
    component: () => import("@/views/partner/OneCopy.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/partner/list",
    name: "/partner/list",
    component: () => import("@/views/partner/Partner.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Partner/list",
    name: "/partner/list",
    component: () => import("@/views/partner/ListRule.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/partner/rule",
    name: "rule",
    component: () => import("@/views/partner/RuleShow.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/PartnershipRule",
    name: "partnershipRule",
    component: () => import("@/views/partner/PartnershipRule.vue"),
  },
  {
    path: "/FollowList",
    name: "followList",
    component: () => import("@/views/partner/CopyList.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/FollowNum",
    name: "followNum",
    component: () => import("@/views/partner/FollowNum.vue"),
  },
  {
    path: "/juniorLIst",
    name: "juniorLIst",
    component: () => import("@/views/partner/juniorLIst.vue"),
  },
  {
    path: "/TeamRecord",
    name: "teamRecord",
    component: () => import("@/views/partner/TeamRecord.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/FollowDetail",
    name: "followDetail",
    component: () => import("@/views/partner/FollowDetail.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/TradeRecordList",
    name: "TradeRecordList",
    component: () => import("@/views/partner/TraderRecord.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
