<template>
  <div class="bg-color min-height">
    <page-header>
      <template v-slot:headerCenter>历史成交</template>
    </page-header>
    <div class="px-3 bg-grey-lighten-3 mt-2 mb-2">
      <v-row
        class="ma-0 pa-0 py-2 font-weight-bold text-body-2 text-center text-grey-darken-2"
      >
        <v-col cols="3" class="pa-0"> 名称/代码 </v-col>
        <v-col cols="3" class="pa-0"> 金额/盈亏 </v-col>
        <v-col cols="3" class="pa-0"> 数量/类型 </v-col>
        <v-col cols="3" class="pa-0"> 时间 </v-col>
      </v-row>
    </div>
    <div>
      <v-row
        class="ma-0 pa-0 text-center px-3 text-body-2 pt-2"
        v-for="item in store.state.trading.success_list"
        :key="item.symbol_code"
      >
        <v-col cols="3" class="pa-0">
          <div>{{ item.title }}</div>
          <div>{{ item.symbol_code }}</div>
        </v-col>
        <v-col cols="3" class="pa-0">
          {{ item.amount_f }}<br />{{ item.proif }}
        </v-col>
        <v-col cols="3" class="pa-0">
          <span>{{ item.number }}/{{ item.type_string }}</span>
        </v-col>
        <v-col cols="3" class="pa-0"> {{ item.date }} </v-col>
        <v-divider class="mt-2"></v-divider>
      </v-row>
    </div>
    <div class="py-6"></div>
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
    getEndList(route.query.order_id);
  }
});

const getEndList = (order_id) => {
  store.dispatch("trading/getSuccessList", {
    contract_id: order_id,
    type: "",
  });
};
</script>
