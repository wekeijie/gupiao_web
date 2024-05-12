<template>
  <page-header>
    <template v-slot:headerCenter>一键跟单</template>
  </page-header>
  <div class="bg-color ui-min-height">
    <div
      class="top-bg px-3 text-center pt-6 text-white text-subtitle-1 font-weight-bold"
    >
      <img
        :src="store.state.copyTrade.one.avatar"
        width="70"
        height="70"
        class="rounded-circle"
      />
      <div class="mt-1">
        明星投资者:<span class="ml-1">{{
          store.state.copyTrade.one.name
        }}</span>
      </div>
      <v-row class="ma-0 pa-0 text-center">
        <v-col cols="3" class="px-0">
          <div class="text-h6">{{ now_data.min }}</div>
          <div class="text-caption">最低跟单金额</div>
        </v-col>
        <v-col cols="3" class="px-0">
          <div class="text-h6">{{ now_data.max }}</div>
          <div class="text-caption">最高跟单金额</div>
        </v-col>
        <v-col cols="3" class="px-0 pt-4">
          <div class="text-h7">{{ now_data.title }}</div>
          <div class="text-caption">跟单周期</div>
        </v-col>
        <v-col cols="3" class="px-0">
          <div class="text-h6">{{ now_data.commission + "%" }}</div>
          <div class="text-caption">老师佣金</div>
        </v-col>
      </v-row>
    </div>
    <div class="px-3 mt-n16 pb-8">
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
              v-model="amount"
            />
          </v-col>
        </v-row>
        <div class="text-caption mt-3 summary-color">
          <p>跟单描述:</p>
          <p>
            一键跟单统一性强，便于操盘，分析师会在机构通道优先进场，一键跟单期内无需任何操作，跟随操作即可，解放双手，避免忘记跟单，每日盈利自动复投
          </p>
        </div>
      </v-sheet>
      <v-sheet class="bg-white rounded-lg py-5 mt-3 px-2">
        <v-row class="ma-0 pa-0 text-center">
          <v-col
            cols="3"
            class="px-1 list-bg border-line rounded mb-3 mr-1 v-col-3-diy"
            v-for="(item, key) in store.state.copyTrade.one.list"
            :key="item.id"
            @click="selectList(key)"
            :class="{ 'list-active-bg': selectIndex == key }"
          >
            <div class="text-body-2 font-weight-bold">{{ item.title }}</div>
            <div class="text-caption">{{ item.min + " ~ " + item.max }}</div>
          </v-col>
        </v-row>
        <v-btn block="" color="red" class="mt-3" @click="sub">一键跟单</v-btn>
      </v-sheet>
      <v-sheet class="bg-white py-3 rounded-lg mt-3">
        <img
          src="@/assets/static/one_key_copy_03.png"
          width="140"
          class="ml-3"
        />
        <div
          class="d-flex flex-wrap mt-2 w-100 text-center copy-list-bg text-white py-3 text-body-1"
        >
          <div class="flex-1-0 w-33">资金门槛</div>
          <div class="flex-1-0 w-33">交易周期</div>
          <div class="flex-1-0 w-33">老师佣金</div>
        </div>
        <div
          class="d-flex flex-wrap mt-2 w-100 text-center py-3 text-body-2"
          v-for="(item, key) in store.state.copyTrade.one.list"
          :key="item.id"
          :class="{ 'copy-list-line-bg': key % 2 != 0 }"
        >
          <div class="flex-1-0 w-33">{{ item.min + "-" + item.max }}</div>
          <div class="flex-1-0 w-33">{{ item.title }}</div>
          <div class="flex-1-0 w-33">{{ item.commission + "%" }}</div>
        </div>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, onMounted } from "vue";
import { store } from "@/store";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const selectIndex = ref(0);
const amount = ref();
const now_data = ref({});
onMounted(() => {
  if (route.query.type) {
    store.dispatch("copyTrade/getOne", route.query.type).then(() => {
      selectList(0);
    });
  }
});
const sub = () => {
  if (amount.value == 100 || amount.value % 100 === 0) {
    store
      .dispatch("copyTrade/apply", {
        amount: amount.value,
        partner_trading_id: now_data.value.id,
        type: "list",
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
const selectList = (key) => {
  selectIndex.value = key;
  now_data.value = store.state.copyTrade.one.list[selectIndex.value];
};
</script>
<style scoped>
.top-bg {
  background: url("@/assets/static/check_icon_1_03.png") no-repeat center;
  background-size: cover;
  height: 280px;
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
.summary-color {
  color: #5b5b5b;
}
.list-bg {
  background-color: #f7f7f7;
}
.v-col-3-diy {
  flex: 0 0 32% !important;
  max-width: 32% !important;
}
.list-active-bg {
  background-color: #445ced;
  color: #fff;
}
.copy-list-bg {
  background-color: #7ea1fa;
}
.copy-list-line-bg {
  background-color: #eff4fe;
}
</style>
