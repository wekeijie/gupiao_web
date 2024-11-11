<template>
  <v-text-field
    v-model="code"
    variant="outlined"
    density="compact"
    hide-details
    placeholder="股票代码/简拼"
    class="symbol-code"
    @update:modelValue="updateCode"
  ></v-text-field>
  <v-card
    class="mx-auto position-fixed"
    max-width="300"
    v-show="isCardVisible"
    ref="cardRef"
  >
    <v-list lines="two">
      <v-list-item
        v-for="file in store.state.market.search_list"
        :key="file.Code"
        :subtitle="file.Code"
        :title="file.Name"
      ></v-list-item>
    </v-list>
  </v-card>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { store } from "@/store";

const code = ref("");
const cardRef = ref(null);
const isCardVisible = ref(false);

const updateCode = (value) => {
  if (value.length <= 0) {
    // store.dispatch("snackbar/warning", {
    //   active: true,
    //   body: "请输入名称或者编码",
    // });
    isCardVisible.value = false;
    return;
  }
  store.dispatch("market/search", value);
  isCardVisible.value = true;
};

// 点击其他区域时隐藏 v-card
const hideCard = (event) => {
  const cardElement = cardRef.value;
  // 如果点击的区域不在 v-card 内部，则隐藏它
  if (cardElement && !cardElement.contains(event.target)) {
    isCardVisible.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", hideCard);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", hideCard);
});
</script>
<style>
.symbol-code input {
  text-align: center;
}
.symbol-code input::placeholder {
  text-align: center; /* 让 placeholder 居中 */
}
</style>
