<template>
  <div class="bg-color ui-min-height">
    <div class="top-bg px-3">
      <v-row class="ma-0 pa-0 pt-8">
        <v-col cols="3" class="">
          <img src="@/assets/static/trade_avatar.png" width="60" />
        </v-col>
        <v-col cols="5" class="px-0">
          <div class="text-h6 text-white">
            {{ store.state.user.info.user_name }}
            <img
              src="@/assets/img/vip/7.png"
              v-if="store.state.user.info.level_id == 7"
              width="70"
            />
            <img
              src="@/assets/img/vip/6.png"
              v-else-if="store.state.user.info.level_id == 6"
              width="70"
            />
            <img
              src="@/assets/img/vip/5.png"
              v-else-if="store.state.user.info.level_id == 5"
              width="70"
            />
            <img
              src="@/assets/img/vip/4.png"
              v-else-if="store.state.user.info.level_id == 4"
              width="70"
            />
            <img
              src="@/assets/img/vip/3.png"
              v-else-if="store.state.user.info.level_id == 3"
              width="70"
            /><img src="@/assets/img/vip/2.png" v-else width="70" />
          </div>
          <div class="text-subtitle-2 copy-text-color">
            推荐码 <span>{{ store.state.user.info.code }}</span>
            <v-icon class="ml-2" @click="copy">mdi-content-copy</v-icon>
          </div>
        </v-col>
        <v-col cols="4" class="text-white px-0 text-right">
          <svg
            v-if="!store.state.user.info.message_has"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            class="mr-2"
            @click="jump(router, '/messages')"
          >
            <path
              fill="#ffffff"
              d="M5 19q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18t-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6T9.175 7.175T8 10z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            class="mr-2"
            @click="jump(router, '/messages')"
            v-else
          >
            <path
              fill="#ea580c"
              d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-7-3q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.325q-.275.55-.4 1.125T13 6.125q-.25-.05-.488-.088T12 6q-1.65 0-2.825 1.175T8 10v7h8v-6.425q.45.2.963.313T18 11v6h1q.425 0 .713.288T20 18t-.288.713T19 19zM18 9q-1.25 0-2.125-.875T15 6t.875-2.125T18 3t2.125.875T21 6t-.875 2.125T18 9"
            />
          </svg>

          <v-icon
            size="large"
            class="mr-2 mt-n4"
            @click="jump(router, '/online-service')"
            >mdi-face-agent</v-icon
          >
          <v-icon size="large" @click="jump(router, '/setting')" class="mt-n4"
            >mdi-cog-outline</v-icon
          >
        </v-col>
      </v-row>
      <v-row class="ma-0 pa-0 text-white text-center">
        <v-col cols="4">
          <div class="text-h6">{{ store.state.user.info.balance }}</div>
          <div class="text-subtitle-1">余额</div>
        </v-col>
        <v-col cols="4">
          <div class="text-h6">{{ store.state.user.info.interest_amount }}</div>
          <div class="text-subtitle-1">利息券</div>
        </v-col>
        <v-col cols="4">
          <div class="text-h6">
            {{ store.state.user.info.collateral_total }}0
          </div>
          <div class="text-subtitle-1">保证金</div>
        </v-col>
      </v-row>
    </div>
    <v-sheet class="amount-bg rounded-t-xl pt-7 pb-16 px-3 mt-n9">
      <div
        class="d-flex flex-wrap w-100 text-center text-color text-subtitle-1"
      >
        <div class="flex-1-0 w-20" @click="jump(router, '/TopUp')">
          <img src="@/assets/static/user_01_11.png" width="36" />
          <div>充值</div>
        </div>
        <div class="flex-1-0 w-20" @click="jump(router, '/Withdraw')">
          <img src="@/assets/static/user_01_13.png" width="36" />
          <div>提现</div>
        </div>
        <div class="flex-1-0 w-20" @click="jump(router, '/InCoupon')">
          <img src="@/assets/static/user_01_16.png" width="36" />
          <div>签到</div>
        </div>
        <div class="flex-1-0 w-20" @click="jump(router, '/Agency')">
          <img src="@/assets/static/user_01_18.png" width="36" />
          <div class="mt-n1">推广赚钱</div>
        </div>
        <div class="flex-1-0 w-20" @click="jump(router, '/DetailsFunds')">
          <img src="@/assets/static/user_01_20.png" width="36" />
          <div>明细</div>
        </div>
      </div>
    </v-sheet>
    <div class="px-3 mt-n10 pb-8">
      <div class="activity-bg bg-white rounded-b-lg">
        <v-row class="ma-0 pa-0 px-3 pt-3">
          <v-col
            cols="6"
            class="pa-0 pr-1"
            @click="jump(router, '/MissionCenter')"
          >
            <img src="@/assets/static/user_01_28.png" class="w-100" />
          </v-col>
          <v-col
            cols="6"
            class="pa-0 pl-1"
            @click="jump(router, '/ActiveList')"
          >
            <img src="@/assets/static/user_01_30.png" class="w-100" />
          </v-col>
          <v-col cols="12" class="pa-0" @click="jump(router, '/Invite')">
            <img src="@/assets/static/user_01_35.png" class="w-100" />
          </v-col>
        </v-row>
      </div>
      <v-sheet class="bg-white rounded-lg mt-3 pt-3 pb-1 list-text-color">
        <v-row class="ma-0 pa-0">
          <v-col cols="2" class="text-center">
            <img src="@/assets/static/user_01_38.png" width="26" />
          </v-col>
          <v-col
            class="text-body-1 pl-0"
            cols="8"
            @click="jump(router, '/InvestorPlan')"
            >明星投资者</v-col
          >
          <v-col cols="2" @click="jump(router, '/InvestorPlan')">
            <v-icon size="large" color="#8E8E8E">mdi-chevron-right</v-icon>
          </v-col>
          <v-divider color="#3E5AF7"></v-divider>
          <v-col cols="2" class="text-center">
            <img src="@/assets/static/user_01_42.png" width="26" />
          </v-col>
          <v-col
            class="text-body-1 pl-0 pt-3"
            cols="8"
            @click="jump(router, '/Documentary')"
            >我要跟单</v-col
          >
          <v-col cols="2" @click="jump(router, '/Documentary')">
            <v-icon size="large" color="#8E8E8E">mdi-chevron-right</v-icon>
          </v-col>
          <v-divider color="#3E5AF7"></v-divider>
          <v-col cols="2" class="text-center">
            <img src="@/assets/static/user_01_46.png" width="24" />
          </v-col>
          <v-col
            class="text-body-1 pl-0 pt-4"
            cols="8"
            @click="jump(router, '/FollowList')"
            >跟单明细</v-col
          >
          <v-col cols="2" @click="jump(router, '/FollowList')">
            <v-icon size="large" color="#8E8E8E">mdi-chevron-right</v-icon>
          </v-col>
          <v-divider color="#3E5AF7"></v-divider>
          <v-col cols="2" class="text-center">
            <img src="@/assets/static/user_01_49.png" width="24" />
          </v-col>
          <v-col
            class="text-body-1 pl-0 pt-4"
            cols="8"
            @click="jump(router, '/About')"
            >关于我们</v-col
          >
          <v-col cols="2" @click="jump(router, '/HelpCenter')">
            <v-icon size="large" color="#8E8E8E">mdi-chevron-right</v-icon>
          </v-col>
          <v-divider color="#3E5AF7"></v-divider>
          <v-col cols="2" class="text-center">
            <img src="@/assets/static/user_01_51.png" width="24" />
          </v-col>
          <v-col class="text-body-1 pl-0 pt-4" cols="8">系统版本</v-col>
          <v-col cols="2" class="list-text-color pt-5"> V1.0 </v-col>
        </v-row>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { jump, SERVICE_LINK } from "@/utils/constName";
import { store } from "@/store";
import useClipboard from "vue-clipboard3";
const router = useRouter();
const { toClipboard } = useClipboard();
onMounted(() => {
  store.dispatch("user/userInfo");
});

const onOpenLink = () => {
  window.open(SERVICE_LINK, "_blank");
};

const copy = async () => {
  try {
    await toClipboard(store.state.user.info.code);
    store.dispatch("snackbar/success", {
      active: true,
      body: "复制成功！",
    });
  } catch (e) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "操作错误！",
    });
  }
};
</script>
<style scoped>
.top-bg {
  background: url("@/assets/static/check_icon_1_03.png") no-repeat center;
  background-size: cover;
  height: 250px;
}
.copy-text-color {
  color: #ced4fd;
}
.text-color {
  color: #424242;
}
.activity-bg {
  background: url("@/assets/static/user_bg.png") no-repeat;
  background-size: contain;
  height: 223px;
}
.list-text-color {
  color: #2d2d2d;
}
.amount-bg {
  background-color: #f6f6f6;
}
</style>
