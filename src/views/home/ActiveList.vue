<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>活动中心</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245); height: 5px"></div>

    <div class="active-list px-2 mb-2" v-for="item in info.data" :key="item.id">
      <img
        :src="item.thumb"
        :alt="item.title"
        v-if="item.path"
        @click="$router.push(item.path)"
        height="128"
        class="w-100 rounded"
      />
      <img
        :src="item.thumb"
        :alt="item.title"
        v-else
        @click="$router.push('/ActiveShow?id=' + item.id)"
        height="128"
        class="w-100 rounded"
      />
    </div>
    <div class="new-box" v-if="1 != 1">
      <no-data class="no-data-cont"></no-data>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NoData from "../../components/noData.vue";
import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { getListApi } from "@/api/activityApi";
const $router = useRouter();
const $route = useRoute();
const openBotom = () => {};
const goRouter = (path) => {
  $router.push(path);
};
const page = ref(1);
const info = ref({
  data: [],
  last_page: 1,
});

onMounted(() => {
  getList();
});

const getList = async () => {
  info.value = await getListApi(page.value);
};
</script>
<style lang="scss" scoped>
.active-list {
  img {
    width: 100%;
  }
}
</style>
