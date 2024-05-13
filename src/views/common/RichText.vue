<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>{{ topTitle }}</template>
    </page-header>
    <div class="rich-cont-box w-100 overflow-x-hidden pt-12">
      <!-- <div v-if="richType == 1">
        <h2 class="rich-title">{{ topTitle }}</h2>
        <p class="rich-time">{{ store.state.news.context.created_at }}</p>
      </div> -->
      <div
        v-html="store.state.news.context.content"
        style="padding: 20px 11px"
        class="w-100 content-body"
      ></div>
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
const topTitle = ref("");
const richType = ref(1); //1为有标题富文本 2为有无标题

const id = ref();
onMounted(() => {
  if ($route.query.title) topTitle.value = $route.query.title;
  id.value = $route.query.id;
  if (id.value) {
    store.dispatch("news/show", id.value);
  } else if ($route.query.key) {
    store.dispatch("news/updateContent", $route.query.key);
  }
});
</script>
<style lang="scss" scoped>
img {
  width: 100% !important;
}
.rich-cont-box img {
  width: 100% !important;
}
.rich-cont-box {
  // padding: 0px 0;
  .rich-title {
    flex-wrap: wrap;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    padding: 16px 11px;
    letter-spacing: 1px;
    border-top: 5px solid rgb(245, 245, 245);
  }
  .rich-time {
    padding: 0 11px 11px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;
    color: #bebebe;
    border-bottom: 5px solid rgb(245, 245, 245);
  }
}
.w-100.content-body img {
  width: 100% !important;
}
</style>
