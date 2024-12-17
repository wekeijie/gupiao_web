<template>
  <div class="bg-color ui-min-height">
    <page-header>
      <template v-slot:headerCenter>{{ title }}</template>
    </page-header>
    <div class="px-2 mt-3">
      <div class="bg-white text-black text-body-1 px-3 py-4 rounded">
        <h6 class="text-subtitle-1 text-center mb-3">{{ body.title }}</h6>
        <div v-html="body.content"></div>
        <div class="text-right">{{ body.created_at }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getShowApi } from "@/api/activityApi";

const route = useRoute();
const router = useRouter();

const title = ref("活动详情");
const body = ref({});

onMounted(async () => {
  if (route.query.id) {
    body.value = await getShowApi(route.query.id);
  }
});
</script>
