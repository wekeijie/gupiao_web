<template>
  <page-header>
    <template v-slot:headerCenter>跟单明细</template>
  </page-header>
  <div class="bg-color ui-min-height">
    <v-tabs
      bg-color="white"
      center-active
      class="mt-2 tab-text-color"
      selected-class="tab-active-color"
      v-model="tab"
      @update:modelValue="changeTab"
    >
      <v-tab :value="0">申请中</v-tab>
      <v-tab :value="1">跟单中</v-tab>
      <v-tab :value="2">已结束</v-tab>
      <v-tab :value="3">已撤销</v-tab>
      <v-tab :value="4">已驳回</v-tab>
    </v-tabs>
    <div class="px-3 pt-3">
      <v-sheet
        class="bg-white rounded-lg py-3 mb-2"
        v-for="item in store.state.copyTradeList.list"
        :key="item.order_id"
      >
        <v-row class="ma-0 pa-0">
          <v-col class="pa-0 pl-3 font-weight-bold order-color" cols="8">
            单号:<span class="ml-1">{{ item.order_id }}</span>
          </v-col>
          <v-col class="pa-0 text-right pr-3 text-body-2 text-red" cols="4">{{
            item.type
          }}</v-col>
          <v-col cols="12" class="text-body-2 body-text-color">
            投资者:<span class="ml-1">{{ item.investor }}</span>
          </v-col>
          <v-col cols="12" class="text-body-2 body-text-color py-0">
            分成比例:<span class="ml-1">{{ item.profit_sharing + "%" }}</span>
          </v-col>
          <v-col cols="6" class="text-body-2 body-text-color px-0 pl-3">
            时间:<span class="ml-1">{{ item.date }}</span>
          </v-col>
          <v-col
            cols="6"
            class="text-body-2 body-text-color text-right py-0 pt-1 px-0 pr-3"
          >
            跟单资金:<span class="ml-1 font-weight-bold text-red text-h6">{{
              item.amount
            }}</span>
          </v-col>
          <v-col cols="6">
            <v-btn
              variant="outlined"
              rounded="xl"
              class="px-9"
              color="warning"
              v-if="tab == 0"
              @click="cancelSub(item.order_id)"
              >撤销</v-btn
            >
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn
              variant="outlined"
              rounded="xl"
              class="px-9"
              color="#FA8283"
              v-if="tab != 0"
              :to="'/FollowDetail?order_id=' + item.order_id"
              >查看详情</v-btn
            >
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, onMounted } from "vue";
import { store } from "@/store";

const tab = ref(0);

onMounted(() => {
  getList();
});

const getList = () => {
  store.dispatch("copyTradeList/getList", tab.value);
};
const cancelSub = (order_id) => {
  store.dispatch("copyTradeList/cancel", { order_id: order_id }).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "Success",
    });
    getList();
  });
};
const changeTab = () => {
  getList();
};
</script>
<style scoped>
.tab-text-color {
  color: #5b5b5b !important;
}
.tab-active-color {
  color: #3d55eb !important;
}
.order-color {
  color: #2d2d2d;
}
.body-text-color {
  color: #727272;
}
</style>
