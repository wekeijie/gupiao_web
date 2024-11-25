<template>
  <div class="bg-color">
    <page-header>
      <template v-slot:headerCenter>利息券明细</template>
    </page-header>
    <div class="px-2 mt-1">
      <v-infinite-scroll :height="730" @load="load" mode="manual">
        <template v-for="item in data" :key="item.order_id">
          <v-row class="ma-0 pa-0 bg-white rounded mb-2">
            <v-col cols="8" class="">
              <div class="text-h6">¥{{ item.amount }}</div>
              <div class="text-body-2">ID:{{ item.order_id }}</div>
            </v-col>
            <v-col cols="4" class="text-right">
              <v-chip color="green" size="small">{{ item.status }}</v-chip>
              <v-chip color="primary" size="small"
                >余¥{{ item.balance }}</v-chip
              >
            </v-col>
            <v-col cols="8" class="text-body-2 pt-1"> {{ item.title }} </v-col>
            <v-col cols="4" class="text-body-2 pt-0">
              <v-btn
                variant="plain"
                size="small"
                @click="
                  router.push('/user/interest-show?order_id=' + item.order_id)
                "
              >
                查看明细<v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </template>
        <template v-slot:load-more="{ props }">
          <v-btn
            icon="mdi-refresh"
            size="small"
            variant="text"
            v-bind="props"
          ></v-btn>
        </template>
        <template v-slot:empty>
          <v-alert type="info" variant="tonal">没有更多数据了</v-alert>
        </template>
      </v-infinite-scroll>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { logList } from "@/api/userCouponApi";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const data = ref([]);
const page = ref(1);

onMounted(() => {
  load({ done: () => {} });
});

const load = ({ done }) => {
  logList(page.value).then((d) => {
    if (d.length > 0) {
      data.value = [...data.value, ...d];
      done("ok");
      page.value++;
    } else {
      done("empty");
    }
  });
};
</script>
