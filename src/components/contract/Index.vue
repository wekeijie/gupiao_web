<template>
  <v-select
    v-if="store.state.contract.list.length > 0"
    :items="store.state.contract.list"
    variant="outlined"
    density="comfortable"
    hide-details
    rounded="lg"
    item-title="balance"
    item-value="order_id"
    class="elevation-0"
    bg-color="#ffffff"
    base-color="#ffffff"
    placeholder="请选择合约"
  ></v-select>
  <div v-else class="py-3 bg-white text-center rounded-lg text-body-1">
    申请合约
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { store } from "@/store";

const contract_id = ref();

onMounted(() => {
  getList();
});

const getList = () => {
  store.dispatch("contract/getList", 0);
};
</script>
