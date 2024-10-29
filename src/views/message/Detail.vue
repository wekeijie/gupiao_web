<template>
  <div class="bg-color min-height">
    <page-header>
      <template v-slot:headerCenter>{{ title }}</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245); height: 5px"></div>
    <div class="px-3">
      <v-sheet class="pa-3 rounded-lg">
        <div class="text-center text-subtitle-1 font-weight-medium">
          {{ body.title }}
        </div>
        <v-divider class="mt-3"></v-divider>
        <div v-html="body.content" class="mt-4"></div>
        <div class="text-right mr-9">{{ body.date }}</div>
      </v-sheet>
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  defineExpose,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
} from "vue";

import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const title = ref("通知内容");
let body = ref({
  title: "",
  content: "",
  date: "",
});
onMounted(async () => {
  if ($route.query.id) {
    const rsp = await store.dispatch("message/getShow", $route.query.id);
    body.value = rsp;
  }
});
</script>
<style lang="scss" scoped>
.line-box {
  padding: 15px;
  border-bottom: solid 0.5px #e5e5e5;

  h2 {
    font-size: 15px;
    letter-spacing: 0.5px;
    width: 90%;
    color: #2c2e3a;
  }

  img {
    width: 7px;
  }
}
</style>
