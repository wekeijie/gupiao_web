<template>
  <page-header>
    <template v-slot:headerCenter>提现</template>

    <template v-slot:headerRight>
      <p @click="jump(router, '/Withdraw/list', { title: '提现审核记录' })">
        账单
      </p>
    </template>
  </page-header>
  <v-sheet>
    <v-row class="ma-0 pa-0 bank-bg py-3">
      <v-col cols="4" class="text-body-1 pt-5 bank-color font-weight-bold"
        >到账银行卡</v-col
      >
      <v-col cols="7">
        <div class="text-body-1">
          {{ bankInfo.bank_name }}<span>({{ bankInfo.code }})</span>
        </div>
        <div class="text-caption text-ui-grey">2小时内到账</div>
      </v-col>
      <v-col cols="1" class="pl-0 pt-4" @click="isApply = true">
        <v-icon size="x-large" color="#5B5B5B">mdi-chevron-right</v-icon>
      </v-col>
    </v-row>
  </v-sheet>

  <div class="px-3 pt-6">
    <div class="text-body-1 bank-color">提现金额</div>
    <v-text-field
      label=""
      variant="underlined"
      class="mt-3"
      hide-details
      prepend-inner-icon="mdi-currency-cny"
      placeholder="1000"
      type="number"
      required
      v-model="amount"
    ></v-text-field>
    <div class="mt-4 text-body-2 text-ui-grey">
      <span>当前余额{{ store.state.user.info.balance }}元</span
      ><span class="ml-2 text-blue-accent-2" @click="allAmount">全部提现</span>
    </div>
    <div class="w-75 mx-auto mt-15">
      <v-btn block="" color="blue-accent-4" @click="apply">提交</v-btn>
    </div>
  </div>
  <v-bottom-sheet v-model="isApply">
    <v-list>
      <v-list-subheader class="w-100">
        <v-row class="ma-0 pa-0 w-100">
          <v-col cols="6">请选择银行卡</v-col>
          <v-col cols="6" class="text-right">
            <v-btn
              density="comfortable"
              size="small"
              color="grey-darken-1"
              :to="'/RealCard'"
              >添加</v-btn
            >
          </v-col>
        </v-row>
      </v-list-subheader>
      <v-list-item
        v-for="item in store.state.bank.list"
        :key="item.code"
        :title="item.bank_name + '(' + item.code.slice(-4) + ')'"
        @click="changeBank(item)"
      ></v-list-item>
    </v-list>
  </v-bottom-sheet>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { VBottomSheet } from "vuetify/lib/labs/vBottomSheet/index";
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { jump } from "@/utils/constName";
import { store } from "@/store";

const router = useRouter();

const bankInfo = reactive({
  bank_name: "请选择卡",
  code: "",
  id: "",
});
const isApply = ref(false);
const amount = ref();

onMounted(() => {
  store.dispatch("bank/getList").then(() => {
    if (store.state.bank.list.length <= 0) {
      bankInfo.bank_name = "尚未绑定银行卡";
    } else {
      const bank = store.state.bank.list.find((item) => item.is_default == 1);
      if (bank.bank_name) {
        bankFormat(bank);
      }
    }
  });
  store.dispatch("user/userInfo");
});

const allAmount = () => {
  amount.value = store.state.user.info.balance;
};

const changeBank = (bank) => {
  isApply.value = false;
  bankFormat(bank);
};

const bankFormat = (bank) => {
  bankInfo.bank_name = bank.bank_name;
  bankInfo.code = bank.code.slice(-4);
  bankInfo.id = bank.id;
};

const apply = () => {
  if (!bankInfo.id) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "还没有绑定银行卡，请前往绑定",
    });
    return;
  }

  let money = parseFloat(amount.value).toFixed(2);
  if (amount.value <= 0 || money < 100) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "提现金额不能小于100元",
    });
    return;
  }
  store
    .dispatch("withdrawal/apply", {
      amount: amount.value,
      code_id: bankInfo.id,
    })
    .then(() => {
      store.dispatch("snackbar/success", {
        active: true,
        body: "申请提交成功，请等待审核！",
      });
      jump(router, "/Withdraw/list");
    });
};
</script>
<style scoped>
.bank-bg {
  background-color: #f5f5f5 !important;
}
.bank-color {
  color: #2d2d2d !important;
}
</style>
