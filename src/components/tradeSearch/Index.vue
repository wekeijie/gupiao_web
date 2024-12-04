<template>
  <v-text-field
    v-model="code"
    variant="outlined"
    density="compact"
    hide-details
    placeholder="股票代码/简拼"
    class="symbol-code"
    @update:modelValue="updateCode"
    @update:focused="changeFocused"
  ></v-text-field>
  <v-card
    class="mx-auto position-fixed"
    max-width="300"
    v-show="isCardVisible"
    ref="cardRef"
    style="z-index: 999"
  >
    <v-list lines="two">
      <v-list-item
        v-for="file in store.state.market.search_list"
        :key="file.Code"
        :subtitle="file.Code"
        :title="file.Name"
        @click="updateSymbolCode(file.QuoteID)"
      ></v-list-item>
    </v-list>
  </v-card>
</template>
<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  defineEmits,
  defineProps,
  watch,
} from "vue";
import { store } from "@/store";
import { debounce, throttle } from "lodash-es";

const code = ref("");

const cardRef = ref(null);
const isCardVisible = ref(false);

const throttledSearch = throttle((value) => {
  store.dispatch("market/search", value);
}, 1000);

const searchWithDebounce = debounce((value) => {
  if (value.length > 0) {
    store.dispatch("market/search", value);
    isCardVisible.value = true;
  } else {
    isCardVisible.value = false;
  }
}, 1000); // 1秒延迟

const changeFocused = () => {
  if (code.value) {
    updateCode(code.value);
  }
};

const updateCode = (value) => {
  // if (value.length <= 0) {
  //   // store.dispatch("snackbar/warning", {
  //   //   active: true,
  //   //   body: "请输入名称或者编码",
  //   // });
  //   isCardVisible.value = false;
  //   return;
  // }
  // store.dispatch("market/search", value);
  // isCardVisible.value = true;
  searchWithDebounce(value);
};

watch(
  () => props.symbolCode,
  (newVal, oldVal) => {
    code.value = newVal;
    console.log("symbolCode 发生变化：", oldVal, "=>", newVal);
    // 在这里执行你的逻辑，例如根据新值做进一步处理
  }
);

const props = defineProps({
  symbolCode: {
    type: String,
  },
});

const emit = defineEmits(["updateSymbolCode"]);
const updateSymbolCode = (quoteID) => {
  isCardVisible.value = false;
  emit("updateSymbolCode", quoteID);
};

// 点击其他区域时隐藏 v-card
const hideCard = (event) => {
  const cardElement = cardRef.value?.$el || cardRef.value;
  // 确保 cardElement 存在并且是 DOM 元素
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
