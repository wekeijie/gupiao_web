<template>
  <div class="bg-color ui-min-height">
    <page-header>
      <template v-slot:headerCenter>交割记录</template>
    </page-header>

    <div class="px-3 mt-3">
      <div>
        <a-date-picker
          v-model="selectedDate"
          size="mini"
          @change="getList"
          allow-clear
        >
          <v-text-field
            variant="outlined"
            placeholder="请选择日期"
            density="compact"
            hide-details
            append-inner-icon="mdi-chevron-down"
            v-model="selectedDate"
            bg-color="white"
            clear-icon
            @update:modelValue="searchWithDebounce"
          ></v-text-field>
        </a-date-picker>
      </div>
      <v-row
        class="ma-0 pa-0 text-center text-body-1 tab-bg py-2 rounded-t-lg tab-color mt-3"
      >
        <v-col class="pa-0" cols="4">姓名</v-col>
        <v-col class="pa-0" cols="4">买卖股票</v-col>
        <v-col class="pa-0" cols="4">成交量/成交额</v-col>
      </v-row>
      <v-row
        class="ma-0 pa-0 text-center text-body-1 py-3 bg-white"
        v-for="(item, index) in result.data"
        :key="item.user_name"
        :class="
          index == result.data.length - 1 ? 'rounded-b-lg' : 'border-b-thin'
        "
      >
        <v-col class="pa-0" cols="4">{{ item.user_name }}</v-col>
        <v-col class="pa-0" cols="4">{{ item.type }}</v-col>
        <v-col class="pa-0" cols="4">{{ item.number + "/" + item.cost }}</v-col>
      </v-row>
      <div
        class="mt-4 d-flex justify-space-between px-5"
        v-if="result.last_page > 1"
      >
        <div class="w-25">
          <v-btn size="small" @click="getUp" prepend-icon="mdi-chevron-left"
            >上一页</v-btn
          >
        </div>
        <div class="w-25">
          <v-btn size="small" @click="getNext" append-icon="mdi-chevron-right"
            >下一页</v-btn
          >
        </div>
      </div>
    </div>
    <div class="py-6"></div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, onMounted } from "vue";
import { subDeliverApi } from "@/api/agenApi";
import { debounce, throttle } from "lodash-es";
import { store } from "@/store";
const page = ref(1);
const result = ref({
  data: [],
  last_page: 1,
});
const selectedDate = ref(null);

onMounted(() => {
  getList();
});

const getList = async () => {
  const rsp = await subDeliverApi(page.value, selectedDate.value);
  result.value = rsp;
};

const searchWithDebounce = debounce(() => {
  getList();
}, 1000); // 1秒延迟

const getNext = () => {
  if (!checkPage("next")) return false;
  page.value += 1;
  getList();
};

const getUp = () => {
  if (!checkPage("up")) return false;
  page.value -= 1;
  getList();
};

const checkPage = (type = "next") => {
  if (type == "next" && page.value >= result.value.last_page) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "已经是最后一页",
    });
    return false;
  }
  if (type == "up" && page.value <= 1) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "已经是第一页",
    });
    return false;
  }
  return true;
};
</script>
<style scoped>
.tab-bg {
  background-color: #e9e9ea !important;
}
.tab-color {
  color: #666 !important;
}
</style>
