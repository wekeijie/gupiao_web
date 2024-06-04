<template>
  <page-header>
    <template v-slot:headerCenter>订单详情</template>
  </page-header>
  <div class="bg-grey-lighten-3">
    <v-sheet class="py-4 px-3 mt-2">
      <h2>已成交</h2>
      <p class="mt-4 mb-2 text-body-2">下单时间:{{ data.date }}</p>
      <p class="text-body-2">完成时间:{{ data.success_date }}</p>
    </v-sheet>
    <v-sheet class="mt-2 py-4 px-3">
      <p class="text-h6">{{ data.title }}[{{ sysmbolFormat(data.code) }}]</p>
      <v-row class="ma-0 pa-0 mt-3">
        <v-col cols="6" class="pl-0 text-body-1 py-1">合约账户</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.contract
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">买卖方向</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.type
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">订单类型</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.order_type
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">委托价</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.trust_price
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">成交价</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.price
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">委托数量</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.trust_number
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">成交数量</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.number
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">成交额</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.amount
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">手续费</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.fee
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">过户费</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.transfer_fee
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">印花税</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.stamp_duty
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">盈亏</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.money
        }}</v-col>
        <v-col cols="6" class="pl-0 text-body-1 py-1">成交编号</v-col>
        <v-col cols="6" class="text-right text-body-2 py-1">{{
          data.id
        }}</v-col>
      </v-row>
    </v-sheet>
  </div>
</template>
<script setup>
import PageHeader from "@/components/topWrap.vue";
import { ref, onMounted } from "vue";
import { store } from "@/store";
import { useRoute } from "vue-router";
import { symbolCodeFormat } from "@/utils/helper";

const route = useRoute();

const data = ref({});

onMounted(() => {
  if (route.query.order_id) {
    store
      .dispatch("contract/getOrderDetail", route.query.order_id)
      .then((res) => {
        data.value = res;
        console.log(data.value);
      });
  }
});

const sysmbolFormat = (symbol) => {
  if (symbol) {
    let code = symbol.split(".");
    return symbolCodeFormat(code[1], code[0]);
  }
};
</script>
