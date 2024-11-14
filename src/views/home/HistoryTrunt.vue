<template>
  <div class="bg-color min-height">
    <page-header>
      <template v-slot:headerCenter>历史委托</template>
    </page-header>
    <div class="px-2 bg-grey-lighten-3 mt-2 mb-2">
      <v-row
        class="ma-0 pa-0 py-2 font-weight-bold text-body-2 text-center text-grey-darken-2"
      >
        <v-col cols="3" class="pa-0"> 名称/代码 </v-col>
        <v-col cols="4" class="pa-0"> 价格/时间 </v-col>
        <v-col cols="3" class="pa-0"> 数量/类型 </v-col>
        <v-col cols="2" class="pa-0"> 状态 </v-col>
      </v-row>
    </div>
    <div>
      <v-row
        class="ma-0 pa-0 text-center px-3 text-body-2 pt-2"
        v-for="item in store.state.trading.trust_list"
        :key="item.code"
      >
        <v-col cols="3" class="pa-0"> {{ item.title }} </v-col>
        <v-col cols="4" class="pa-0">
          {{ item.buy_price }}
        </v-col>
        <v-col cols="3" class="pa-0">
          {{ item.number }}
        </v-col>
        <v-col cols="2" class="pa-0"></v-col>
        <v-col cols="3" class="pa-0">
          {{ item.code }}
        </v-col>
        <v-col cols="4" class="pa-0 text-caption"> {{ item.date }}</v-col>
        <v-col cols="3" class="pa-0">
          <span v-if="item.type == 'BUY'">买入</span>
          <span v-if="item.type == 'SELL'">卖出</span>
        </v-col>
        <v-col cols="2" class="pa-0">
          <span v-if="item.status == 1">成交</span>
          <span v-else>撤销</span>
        </v-col>
        <v-divider class="mt-2"></v-divider>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { store } from "@/store";
import { useRoute } from "vue-router";
import PageHeader from "../../components/topWrap.vue";

const route = useRoute();

onMounted(() => {
  if (route.query.order_id) {
    getTrustList(route.query.order_id);
  }
});

const getTrustList = (order_id) => {
  store.dispatch("trading/getTrustList", {
    status: 1,
    contract_id: order_id,
  });
};
</script>
