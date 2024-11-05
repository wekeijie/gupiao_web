<template>
  <page-header>
    <template v-slot:headerCenter>申请合约</template>
  </page-header>
  <div class="bg-color ui-min-height">
    <div class="topup-bg">
      <div class="px-3 pt-10">
        <v-row class="ma-0 pa-0 border-bottom-line">
          <v-col class="px-0" cols="1">
            <v-icon color="white">mdi-currency-cny</v-icon>
          </v-col>
          <v-col cols="11">
            <input
              type="number"
              class="amount"
              placeholder="请输入保证金金额"
              v-model="amount"
            />
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="px-3 mt-n16">
      <v-sheet class="bg-white rounded-lg py-3">
        <v-row class="ma-0 pa-0">
          <v-col cols="6" class="text-body-1">钱包可用余额</v-col>
          <v-col cols="6" class="text-body-1 text-right"
            >¥{{ store.state.user.info.balance }}</v-col
          >
        </v-row>
        <v-divider></v-divider>
        <v-row class="ma-0 pa-0 mt-2">
          <v-col cols="6" class="text-body-1">合约类型</v-col>
          <v-col
            cols="6"
            class="text-body-1 text-right"
            @click="isApply = true"
          >
            <span class="text-red">{{
              typeIndex.title + "-操盘" + typeIndex.day + "天"
            }}</span>
            <v-icon size="large" color="#8E8E8E">mdi-chevron-right</v-icon>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet class="bg-white rounded-lg py-3 mt-3 px-3">
        <div class="text-body-1 mb-3">请选择申请额度</div>
        <v-row class="ma-0 pa-0">
          <v-col
            cols="3"
            class="text-center list-bg border-line rounded-lg mr-7 mb-3"
            v-for="(item, index) in store.state.contract.limitList"
            :key="item.title"
            @click="selelctLimitApply(item, index)"
            :class="{ 'active-style': selectIndex == index }"
          >
            <div class="text-h6">{{ item.title }}</div>
            <div class="text-body-2">{{ item.limit * amount }}</div>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </div>
  <v-btn
    block=""
    color="#445CED"
    class="text-white rounded-0 py-7 text-h6 fixed"
    style="bottom: 0px"
    @click="applySub"
    >立即申请</v-btn
  >
  <v-bottom-sheet v-model="isApply">
    <v-list>
      <v-list-subheader class="w-100"> 选择合约类型 </v-list-subheader>
      <v-list-item
        v-for="item in store.state.contract.typeList"
        :key="item.title"
        :title="item.title + item.day + '天'"
        @click="selectType(item)"
      ></v-list-item>
    </v-list>
  </v-bottom-sheet>
  <v-dialog v-model="dialog" persistent width="1024">
    <v-card>
      <v-card-title>
        <span class="text-h6">合约详情</span>
      </v-card-title>
      <v-card-text>
        <v-row class="mx-0 pa-0 text-body-1 text-grey-darken-1">
          <v-col cols="6" class="py-1">总操盘资金</v-col>
          <v-col cols="6" class="py-1 text-right">{{ applyInfo.total }}</v-col>
          <v-col cols="6" class="py-1">保证金/本金</v-col>
          <v-col cols="6" class="py-1 text-right">{{ amount }}</v-col>
          <v-col cols="6" class="py-1">配资资金</v-col>
          <v-col cols="6" class="py-1 text-right"
            >{{ applyInfo.expand }}/{{ limit_data.limit }}</v-col
          >
          <v-col cols="6" class="py-1">亏损预警线</v-col>
          <v-col cols="6" class="py-1 text-right">{{
            applyInfo.loss_waring
          }}</v-col>
          <v-col cols="6" class="py-1">亏损平仓线</v-col>
          <v-col cols="6" class="py-1 text-right">{{
            applyInfo.loss_fail
          }}</v-col>
          <v-col cols="6" class="py-1">利率</v-col>
          <v-col cols="6" class="py-1 text-right">{{
            limit_data.rate + "%"
          }}</v-col>
          <v-col cols="6" class="py-1">产生利息</v-col>
          <v-col cols="6" class="py-1 text-right"
            >{{ applyInfo.rate.toFixed(2) }}元</v-col
          >
          <v-col cols="6" class="py-1">资金使用时间</v-col>
          <v-col cols="6" class="py-1 text-right"
            >{{ typeIndex.day }}天后自动续期</v-col
          >
          <v-col cols="6" class="py-1">可用利息券</v-col>
          <v-col cols="6" class="py-1 text-right"
            >{{ store.state.user.info.interest_amount }}元</v-col
          >
          <v-col cols="6" class="py-1">准备资金</v-col>
          <v-col cols="6" class="py-1 text-right">{{ applyInfo.expand }}</v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row class="ma-0 pa-0">
          <v-col cols="6" class="px-0">
            <v-btn
              color="blue-darken-1"
              block=""
              variant="text"
              @click="dialog = false"
            >
              取消
            </v-btn>
          </v-col>
          <v-col cols="6" class="px-0">
            <v-btn
              color="blue-darken-1"
              block=""
              variant="text"
              @click="submitHandle"
            >
              提交
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { VBottomSheet } from "vuetify/lib/labs/vBottomSheet/index";
import { ref, onMounted, reactive } from "vue";
import { store } from "@/store";
import { useRouter } from "vue-router";
const router = useRouter();
const money = ref();
const isApply = ref(false);
const typeIndex = ref({
  title: "",
  day: "",
});
const limit_data = ref({});
const selectIndex = ref(0);
const amount = ref(500);
const dialog = ref(false);

const applyInfo = reactive({
  total: 0,
  expand: 0,
  loss_waring: 0,
  loss_fail: 0,
  rate: 0,
});

onMounted(() => {
  store.dispatch("user/userInfo");
  store.dispatch("contract/getType").then(() => {
    selectType(store.state.contract.typeList[0]);
  });
});
const submitHandle = () => {
  const data = {
    amount: amount.value,
    type_id: typeIndex.value.id,
    limit_id: limit_data.value.id,
  };
  store.dispatch("contract/create", data).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "申请成功！",
    });
    dialog.value = false;
    router.push("/contract");
  });
};
const selectType = (item) => {
  typeIndex.value = item;
  getLimit(item.id);
  isApply.value = false;
};
const getLimit = (type) => {
  store.dispatch("contract/getLimit", type).then(() => {
    selelctLimitApply(0);
  });
};

const selelctLimitApply = (item, index) => {
  selectIndex.value = index;
  limit_data.value = item;
};
const applySub = () => {
  if (amount.value > store.state.user.info.balance) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "保证金不足，请存款！",
    });
    return;
  }

  applyInfo.expand = amount.value * limit_data.value.limit;
  applyInfo.total = applyInfo.expand + amount.value;
  applyInfo.loss_waring = applyInfo.expand + amount.value * 0.5;
  applyInfo.loss_fail = applyInfo.expand + amount.value * 0.2;
  applyInfo.rate = applyInfo.expand * (limit_data.value.rate / 100);
  dialog.value = true;
};
</script>
<style scoped>
.topup-bg {
  background-image: url("@/assets/static/topup_bg.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
}
input.amount::placeholder {
  color: white;
}
.amount {
  line-height: 22px;
  border: none;
  outline: none;
  font-size: 22px;
  color: white;
}
.list-bg {
  background-color: #f7f7f7;
}
.active-style {
  background-color: #445ced;
  color: #fff;
}
</style>
