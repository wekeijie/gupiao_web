<template>
  <v-select
    v-if="contracts.length > 0"
    :items="contracts"
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
    @update:modelValue="updateContractId"
    v-model="order_id"
  ></v-select>
  <div
    v-else
    class="py-3 bg-white text-center rounded-lg text-body-1"
    @click="router.push('/ApplyContract')"
  >
    申请合约
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps, defineEmits, watch } from "vue";
import { useRouter } from "vue-router";
import { store } from "@/store";

const router = useRouter();

const order_id = ref();
const contracts = ref([]);

onMounted(async () => {
  const d = await store.dispatch("contract/getList", 0);
  contracts.value = d;
  if (props.contract_id == "" && d.length > 0) {
    order_id.value == d[0].order_id;
    updateContractId(d[0].order_id);
  }
});

const props = defineProps({
  contract_id: {
    type: String,
  },
});

const initContract = (id) => {
  const result = contracts.value.find((item) => item.order_id == id);
  if (!result) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "合约不存在！",
    });
    return;
  }
  order_id.value = result.order_id;
};

watch(
  () => contracts.value,
  (newContracts) => {
    if (newContracts.length > 0 && props.contract_id != "") {
      initContract(props.contract_id);
    }
  }
);

// 定义 emit 函数
const emit = defineEmits(["update:modelValue"]);

// 创建一个方法用于更新contract_id
const updateContractId = (value) => {
  emit("update:modelValue", value);
};

const getList = () => {
  store.dispatch("contract/getList", 0);
};
</script>
