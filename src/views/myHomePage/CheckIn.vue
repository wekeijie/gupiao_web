<template>
  <div class="bg-color ui-min-height">
    <div class="top-bg px-3">
      <v-row class="ma-0 pa-0">
        <v-col cols="1" class="px-0" @click="router.go(-1)">
          <v-icon color="white" size="x-large">mdi-chevron-left</v-icon>
        </v-col>
        <v-col
          cols="11"
          class="px-0 text-center text-white text-h6 font-weight-regular"
          >签到有好礼</v-col
        >
      </v-row>
      <div class="text-center mt-6 text-white">
        <v-btn
          class="px-11 text-indigo-accent-2"
          size="large"
          rounded="xl"
          @click="checkPut"
          >签到</v-btn
        >
        <div class="text-body-1 mt-6">
          已累计签到{{ store.state.checkIn.info.total }}天
        </div>
        <div class="text-body-1 mt-1">
          累计已获得{{ store.state.checkIn.info.total_coup }}元利息券
        </div>
      </div>
    </div>
    <div class="px-3 mt-n80 pb-8">
      <v-sheet class="bg-white rounded-lg py-3 px-3">
        <seting-data
          :check_day="store.state.checkIn.info.check_day"
        ></seting-data>
      </v-sheet>
      <v-sheet class="bg-white rounded-lg pa-3 mt-3">
        <img src="@/assets/static/check_in_help.png" width="150" />
        <div
          class="mt-2 text-subtitle-2 help-color line-height-24 font-weight-regular"
        >
          <p>1、每次签到都会送利息券，直接到达您个人账户。</p>
          <p>
            2、首次签到送2元利息券，连续签到每日送的利息券逐日递增，连续签到日越多，每次领取的利息券越多。
          </p>
          <p>
            3、断签后中断赠送利息券的金额递增，次日签到从2元的基础上重新累计签到日，每月1日重置签到。
          </p>
          <p>4、利息券仅可用于合约利息抵扣，其他特殊签到送利息券规则如下：</p>
          <p>当月连续签到10天,额外奖励利息券29元</p>
          <p>当月连续签到20天,额外奖励利息券59元</p>
          <p>当月连续签到满月,额外奖励利息券99元</p>
        </div>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import setingData from "../../components/setingData.vue";
import { store } from "@/store";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  getInfo();
});
const getInfo = () => {
  store.dispatch("checkIn/getInfo");
};
const checkPut = () => {
  if (store.state.checkIn.info.is) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "你今日已签到！",
    });
    return;
  }
  store.dispatch("checkIn/put").then((d) => {
    getInfo();
    store.dispatch("snackbar/success", {
      active: true,
      body: "签到成功!",
    });
  });
};
</script>
<style scoped>
.top-bg {
  background: url("@/assets/static/check_icon_1_03.png") no-repeat center;
  background-size: cover;
  height: 300px;
}
.mt-n80 {
  margin-top: -80px;
}
.help-color {
  color: #5b5b5b;
}
</style>
