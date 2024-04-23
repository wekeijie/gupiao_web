<template>
  <page-header>
    <template v-slot:headerCenter>银联充值</template>
  </page-header>
  <div class="bg-color ui-min-height px-5 pt-10">
    <v-sheet class="white rounded-lg py-4 px-3">
      <v-row class="ma-0 pa-0">
        <v-col cols="4">银行名称：</v-col>
        <v-col cols="8" class="text-red">{{ info.bank_name }}</v-col>
        <v-col cols="4">银行账号：</v-col>
        <v-col cols="8" class="text-red">{{ info.bank_code }}</v-col>
        <v-col cols="4">开户名称：</v-col>
        <v-col cols="8" class="text-red">{{ info.name }}</v-col>
      </v-row>
    </v-sheet>
    <v-sheet class="white rounded-lg py-4 px-3 mt-3 text-red text-body-2">
      <p>1、请在转账备注里面填写用户名</p>
      <p>2、转账完毕后请联系在线客服</p>
    </v-sheet>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { onMounted, ref } from "vue";
import { store } from "@/store";
import { useRoute } from "vue-router";

const route = useRoute();

const info = ref({});

onMounted(() => {
  if (route.query.orderid) {
    store.dispatch("topUp/getMunter", route.query.orderid).then((d) => {
      info.value = d;
    });
  }
});
</script>
