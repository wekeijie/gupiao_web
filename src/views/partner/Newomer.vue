<template>
  <page-header>
    <template v-slot:headerCenter>新手跟单</template>
  </page-header>
  <div class="bg-color ui-min-height">
    <div
      class="top-bg px-3 text-center pt-6 text-white text-subtitle-1 font-weight-bold"
    >
      <img
        :src="store.state.copyTrade.rookie.avatar"
        width="70"
        class="rounded-circle"
      />
      <div class="mt-2">
        明星投资者:<span class="ml-1">{{
          store.state.copyTrade.rookie.name
        }}</span>
      </div>
      <div class="">
        分成比例:<span class="ml-1">{{
          store.state.copyTrade.rookie.commission + "%"
        }}</span>
      </div>
    </div>
    <div class="px-3 mt-n10">
      <v-sheet class="bg-white rounded-lg py-3 px-3 pb-5">
        <v-row class="ma-0 pa-0 border-bottom-line-black">
          <v-col class="px-0" cols="1">
            <v-icon color="black">mdi-currency-cny</v-icon>
          </v-col>
          <v-col cols="11">
            <input
              type="number"
              class="amount"
              placeholder="请输入金额(100的倍数)"
              v-model="money"
            />
          </v-col>
        </v-row>
        <v-btn block="" color="red" class="mt-13 text-subtitle-1" @click="sub"
          >确认跟单</v-btn
        >
      </v-sheet>
      <v-sheet class="bg-white py-3 rounded-lg mt-3 px-3">
        <img src="@/assets/static/copy_summary_03.png" width="110" />
        <div class="list-color text-body-1 mt-2">
          <p>1、新手跟单仅限新用户，且只能跟单7个交易日。</p>
          <p>2、新手跟单者的仓位以及资金门槛需要提前向明星投资者申请。</p>
        </div>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { store } from "@/store";
const route = useRoute();
const router = useRouter();
const money = ref();

onMounted(() => {
  if (route.query.type) {
    store.dispatch("copyTrade/getRookie", route.query.type);
  }
});

const sub = () => {
  if (money.value == 100 || money.value % 100 === 0) {
    store
      .dispatch("copyTrade/apply", {
        amount: money.value,
        partner_trading_id: store.state.copyTrade.rookie.id,
        type: "rookie",
      })
      .then(() => {
        store.dispatch("snackbar/success", {
          active: true,
          body: "提交成功",
        });
        router.push("/FollowList");
      });
  } else {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "金额必须是100的倍数",
    });
    return;
  }
};
</script>
<style scoped>
.top-bg {
  background: url("@/assets/static/check_icon_1_03.png") no-repeat center;
  background-size: cover;
  height: 250px;
}
input.amount::placeholder {
  color: #8e8e8e;
}
.amount {
  line-height: 22px;
  border: none;
  outline: none;
  font-size: 22px;
  color: #000;
}
.list-color {
  color: #5b5b5b;
}
</style>
