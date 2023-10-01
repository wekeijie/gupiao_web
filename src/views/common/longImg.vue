<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>{{ topTitle }}</template>
    </page-header>

    <div class="rich-cont-box">
      <img
        src="../../assets/img/longPicture/beginner.jpg"
        v-if="srcImg == '1'"
      />
      <img
        src="../../assets/img/longPicture/InviteRewards.jpg"
        v-if="srcImg == '2'"
      />
      <img
        src="../../assets/img/longPicture/FollowRule.png"
        v-if="srcImg == '3'"
      />
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
const $router = useRouter();
const $route = useRoute();
const topTitle = ref("新闻");
const richType = ref(1); //1为有标题富文本 2为有无标题
const srcImg = ref();
onMounted(() => {
  if ($route.query.title) topTitle.value = $route.query.title;
  if ($route.query.type) richType.value = $route.query.type;
  if ($route.query.srcImg) srcImg.value = $route.query.srcImg;
});
</script>
<style lang="scss" scoped>
.rich-cont-box {
  width: 100%;
  height: 100%;

  padding: 16px 11px;

  // padding: 0px 0;
  img {
    width: calc(100vw - 22px);
  }
}
</style>
