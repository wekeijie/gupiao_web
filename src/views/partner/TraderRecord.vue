<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>近22交易日操盘记录</template>
    </page-header>
    <div
      class="px-3"
      v-for="(item, key) in store.state.copyTradeList.tradeList"
      :key="key"
    >
      <div class="d-flex justify-space-between mt-4">
        <v-sheet class="">
          <p class="font-weight-bold">{{ item.symbol_title }}</p>
          <p class="text-caption">买入日期:{{ item.buy_date }}</p>
          <p class="text-body-2 font-weight-bold">
            个股盈利百分比:{{ item.unrealized_profit + "%" }}
          </p>
        </v-sheet>
        <v-sheet class="text-caption d-flex align-center">
          卖出日期:{{ item.sell_date }}
        </v-sheet>
      </div>
      <v-divider class="border-opacity-50 mt-2"></v-divider>
    </div>
    <div class="w-full bg-red py-3 ban pl-3 text-body-2">
      近22交易日总收益:{{ sum() + "%" }}
    </div>
  </div>
</template>
<script setup>
import {
  defineProps,
  defineEmits,
  defineExpose,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
} from "vue";

import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();

onMounted(() => {
  if ($route.query.id) {
    store.dispatch("copyTradeList/getTradeList", $route.query.id);
  }
});

const sum = () => {
  if (
    store.state.copyTradeList.tradeList &&
    Array.isArray(store.state.copyTradeList.tradeList)
  ) {
    return store.state.copyTradeList.tradeList.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + parseFloat(currentValue.unrealized_profit);
    },
    0);
  } else {
    return 0; // 或者返回适当的默认值
  }
};
</script>
<style>
.ban {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
