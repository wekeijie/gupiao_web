<template>
  <v-text-field
    v-model="keyword"
    label=""
    placeholder="请输入股票名称"
    variant="solo-filled"
    height="30"
    rounded
    hide-details
    density="compact"
    single-line
    append-inner-icon="mdi-magnify"
    class="text-white"
    @keyup.enter="handleGlobalEnter"
  ></v-text-field>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { jump } from "@/utils/constName";
const keyword = ref("");

const router = useRouter();

const handleGlobalEnter = () => {
  if (keyword.value.length >= 1) {
    jump(router, "/Search", { keyword: keyword.value });
  }
};
</script>
