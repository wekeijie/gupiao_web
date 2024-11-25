<template>
  <div class="bg-color">
    <page-header>
      <template v-slot:headerCenter>利息券消费</template>
    </page-header>
    <div class="mx-2">
      <v-infinite-scroll :height="730" @load="load" mode="manual">
        <template v-for="item in data" :key="item.id">
          <v-row class="ma-0 pa-0 bg-white rounded mb-2">
            <v-col cols="5" class="text-h6">¥{{ item.amount }}</v-col>
            <v-col
              cols="7"
              class="text-right text-body-2 pt-6 text-grey-darken-1"
              >{{ item.date }}</v-col
            >
            <v-col cols="12" class="pt-1 text-body-1">
              <div>{{ item.contract_title }}</div>
              <div class="text-body-2">{{ item.order_id }}</div>
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
import { logShow } from "@/api/userCouponApi";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const page = ref(1);
const order_id = ref("");
const data = ref([]);

onMounted(() => {
  if (route.query.order_id) {
    order_id.value = route.query.order_id;
    load({ done: () => {} });
  }
});

const load = ({ done }) => {
  logShow(order_id.value, page.value).then((d) => {
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
