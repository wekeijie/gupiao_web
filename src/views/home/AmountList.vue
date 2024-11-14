<template>
  <div class="bg-color min-height">
    <page-header>
      <template v-slot:headerCenter>资金明细</template>
    </page-header>
    <div class="px-2">
      <v-row
        class="ma-0 pa-0 bg-white py-2 rounded-lg text-body-1 mb-2"
        v-for="item in data"
        :key="item.id"
      >
        <v-col cols="6" class="font-weight-bold">类型: {{ item.type }}</v-col>
        <v-col cols="6" class="font-weight-bold">金额: {{ item.amount }}</v-col>
        <v-col cols="6" class="text-body-2 py-1"
          >买入:{{ item.buy_price }}</v-col
        >
        <v-col cols="6" class="text-body-2 py-1"
          >卖出:{{ item.sell_price }}</v-col
        >

        <v-col cols="12" class="py-1"
          >备注：<span class="">{{ item.title }}</span></v-col
        >
        <v-col cols="12" class="py-1">时间: {{ item.created_at }}</v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import PageHeader from "../../components/topWrap.vue";
import { getFundListApi } from "@/api/tradingApi";
import { useRoute } from "vue-router";

const route = useRoute();
const data = ref([]);

onMounted(() => {
  if (route.query.order_id) {
    getList(route.query.order_id);
  }
});

const getList = async (order_id) => {
  const rsp = await getFundListApi(order_id);
  data.value = rsp;
};
</script>
