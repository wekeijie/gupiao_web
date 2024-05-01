<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>关于我们</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245); height: 5px"></div>

    <div
      class="line-box flexBetween"
      @click="goRoute('/HelpCenter', '交易规则', 2)"
    >
      <h2>交易规则</h2>
      <img src="../../assets/img/rightImg.png" alt="" />
    </div>
    <div
      class="line-box flexBetween"
      @click="goRoute('/HelpCenter', '帮助中心', 1)"
    >
      <h2>帮助中心</h2>
      <img src="../../assets/img/rightImg.png" alt="" />
    </div>
    <div
      class="line-box flexBetween"
      @click="goRoute('/HelpCenter', '企业介绍', 3)"
    >
      <h2>企业介绍</h2>
      <img src="../../assets/img/rightImg.png" alt="" />
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

onMounted(() => {
  //   store.dispatch("helps/getList");
});
const goRoute = (path, title, id) => {
  $router.push({
    path,
    query: {
      title: title,
      id: id,
    },
  });
};
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
