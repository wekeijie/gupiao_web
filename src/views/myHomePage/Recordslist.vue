<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>{{ title }}</template>
    </page-header>

    <div class="table-box flexStart">
      <p :class="model == 0 ? 'active-tab' : ''" @click="changeStatus(0)">
        待审核
      </p>
      <p :class="model == 1 ? 'active-tab' : ''" @click="changeStatus(1)">
        审核通过
      </p>
      <p :class="model == 2 ? 'active-tab' : ''" @click="changeStatus(2)">
        审核失败
      </p>
    </div>

    <v-carousel
      :show-arrows="false"
      hide-delimiters
      v-model="model"
      height="auto"
    >
      <!-- height="auto" -->
      <v-carousel-item v-for="(slide, i) in 4" :key="i">
        <div class="new-box" v-if="i == 0">
          <v-row
            class="ma-0 pa-0 mb-3"
            v-for="item in store.state.topUp.recharge"
            :key="item.date"
          >
            <v-col cols="2" class="pa-2">
              <v-img
                :src="item.icon"
                cover
                class="rounded-circle"
                width="50"
              ></v-img>
            </v-col>
            <v-col cols="7" class="pa-2">
              <p class="text-body-1">
                {{ item.pay_title }}
                <v-btn
                  density="compact"
                  elevation="0"
                  rounded-lg
                  color="warning"
                  class="ml-2 px-1 text-caption"
                  >{{ item.status }}</v-btn
                >
              </p>
              <p class="text-caption text-grey">{{ item.date }}</p>
            </v-col>
            <v-col cols="3">
              {{ item.amount }}
            </v-col>
            <v-divider class="mt-3"></v-divider>
          </v-row>
        </div>
        <div class="new-box" v-if="i == 1">
          <v-row
            class="ma-0 pa-0 mb-3"
            v-for="item in store.state.topUp.recharge"
            :key="item.date"
          >
            <v-col cols="2" class="pa-2">
              <v-img
                :src="item.icon"
                cover
                class="rounded-circle"
                width="50"
              ></v-img>
            </v-col>
            <v-col cols="7" class="pa-2">
              <p class="text-body-1">
                {{ item.pay_title }}
                <v-btn
                  density="compact"
                  elevation="0"
                  rounded-lg
                  color="success"
                  class="ml-2 px-1 text-caption"
                  >{{ item.status }}</v-btn
                >
              </p>
              <p class="text-caption text-grey">{{ item.date }}</p>
            </v-col>
            <v-col cols="3">
              {{ item.amount }}
            </v-col>
            <v-divider class="mt-3"></v-divider>
          </v-row>
        </div>

        <div class="new-box" v-if="i == 2">
          <v-row
            class="ma-0 pa-0"
            v-for="item in store.state.topUp.recharge"
            :key="item.date"
          >
            <v-col cols="2" class="pa-2">
              <v-img
                :src="item.icon"
                cover
                class="rounded-circle"
                width="50"
              ></v-img>
            </v-col>
            <v-col cols="7" class="pa-2">
              <p class="text-body-1">
                {{ item.pay_title }}
                <v-btn
                  density="compact"
                  elevation="0"
                  rounded-lg
                  color="red-lighten-5"
                  class="text-red px-1 ml-2"
                  >{{ item.status }}</v-btn
                >
              </p>
              <p class="text-caption text-grey">{{ item.date }}</p>
            </v-col>
            <v-col cols="3">
              {{ item.amount }}
            </v-col>
            <v-col cols="12" class="px-2 py-0 text-caption">
              <div
                class="bg-grey-lighten-3 rounded-lg px-2 py-1 text-grey-darken-1"
              >
                失败原因：{{ item.summary }}
              </div>
              <v-divider class="mt-3"></v-divider>
            </v-col>
          </v-row>
        </div>

        <div class="new-box" v-if="is_none">
          <no-data class="no-data-cont"></no-data>
        </div>
      </v-carousel-item>
    </v-carousel>
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
  onUnmounted,
} from "vue";

import NoData from "../../components/noData.vue";
import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { throttle } from "lodash-es";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();

const model = ref(0);
const title = ref();
const dataList = ref([]);
const page = ref(1);
const is_none = ref(true);
let isLoading = ref(false);

onMounted(() => {
  title.value = $route.query.title || "记录列表";
  getList();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const changeStatus = (status) => {
  model.value = status;
  store.commit("topUp/clearRecharge");
  getList();
};

const getList = () => {
  store
    .dispatch("topUp/getRecharge", { page: page.value, status: model.value })
    .then((d) => {
      if (d.length > 0) {
        is_none.value = false;
        isLoading.value = false;
      }
    });
};

const updatePage = () => {
  if (isLoading.value) return;
  isLoading.value = true;
  page.value += 1;
  getList();
};

const handleScroll = throttle(() => {
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;
  let clientHeight = document.documentElement.clientHeight;

  if (scrollHeight - scrollTop <= clientHeight) {
    updatePage();
  }
}, 200); // 200 毫秒内最多执行一次
</script>
<style lang="scss" scoped>
.no-data-cont {
  padding-top: 40%;
}

.table-box {
  p {
    margin: 3px;
    padding: 8px 10px;
    color: rgb(199, 199, 199);
    font-size: 17px;
    z-index: 3;
    font-weight: bold;
    position: relative;
  }

  .active-tab {
    color: rgb(48, 48, 48);
    font-size: 17px;
    z-index: 3;
    font-weight: bold;
    color: rgb(48, 48, 48);
  }

  .active-tab::after {
    position: absolute;
    bottom: 0;
    content: "";

    width: 20px;
    height: 6px;
    border-radius: 100px;
    background-color: rgb(251, 92, 57);
    left: calc(50% - 10px);
  }
}
</style>
