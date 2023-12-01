<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>跟单记录</template>
    </page-header>

    <div class="follow-cont">
      <div class="table-box flexStart">
        <v-tabs
          bg-color="deep-purple-darken-4"
          center-active
          v-model="tabIndex"
          @update:modelValue="changeTab"
        >
          <v-tab :value="0">申请中</v-tab>
          <v-tab :value="1">跟单中</v-tab>
          <v-tab :value="2">已结束</v-tab>
          <v-tab :value="3">已撤销</v-tab>
          <v-tab :value="4">已驳回</v-tab>
        </v-tabs>
      </div>

      <div
        class="records-list"
        v-for="item in store.state.copyTradeList.list"
        :key="item.order_id"
      >
        <div class="list-infor">
          <p class="flexBetween">
            <span>单号: {{ item.order_id }}</span>
            <span class="infor-lv" v-if="item.type == 'Seguimento Normal'">{{
              item.type
            }}</span>
            <span class="infor-okey" v-else>{{ item.type }}</span>
          </p>
          <p class="flexBetween">
            <span>投资者: {{ item.investor }}</span>
            <span>跟单资金:{{ item.amount }} </span>
          </p>
          <p class="flexBetween">
            <span>分成比例: {{ item.profit_sharing + "%" }}</span>
            <span>申请时间: {{ item.date }}</span>
          </p>
        </div>
        <div class="controls-box flexEnd">
          <v-btn
            v-if="tabIndex == 0"
            color="#6a5acd"
            @click="cancelSub(item.order_id)"
            >撤销</v-btn
          >
          <v-btn
            v-if="tabIndex != 0"
            color="#dc143c"
            @click="goRouter('/FollowDetail', item.order_id)"
            >查看详情</v-btn
          >
        </div>
      </div>

      <div class="new-box" v-if="!store.state.copyTradeList.list">
        <no-data class="no-data-cont"></no-data>
      </div>
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

import NoData from "../../components/noData.vue";
import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const tabIndex = ref(0);

onMounted(() => {
  getList();
});

const getList = () => {
  // store.dispatch("copyTradeList/clearList");
  store.dispatch("copyTradeList/getList", tabIndex.value);
};

const cancelSub = (order_id) => {
  store.dispatch("copyTradeList/cancel", { order_id: order_id }).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "Success",
    });
    getList();
  });
};

const goRouter = (path, order_id) => {
  $router.push({
    path,
    query: {
      order_id,
    },
  });
};
const model = ref(0);

const changeTab = () => {
  getList();
};
</script>
<style lang="scss" scoped>
.infor-okey {
  font-size: 15px;
  font-weight: 700;
  color: #a00;
}

::v-deep .v-btn__content {
  color: #fff !important;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  margin: 0;
  padding: 0;
}

.controls-box {
  padding: 5px;

  .v-btn {
    margin: 0 10px;
  }
}

.follow-cont {
  background-color: #f7f7f7;
}

.records-list {
  margin: 10px 5px;
  background: #fff;
  border-radius: 5px;
}

.list-infor {
  padding: 10px;
  border-bottom: 2px solid #f7f7f7;

  p {
    font-size: 13px;
    font-weight: bolder;
    margin: 2px 0;
  }

  .infor-lv {
    font-size: 15px;
    font-weight: 700;
    color: #cf8a00;
  }
}

.no-data-cont {
  padding-top: 40%;
}

.table-box {
  background: #fff;

  p {
    padding: 8px 10px;
    font-size: 14px;
    z-index: 3;
    font-weight: normal;
    color: rgb(199, 199, 199);
    position: relative;
  }

  .active-tab {
    font-size: 14px;
    z-index: 3;
    font-weight: bold;
    color: rgb(48, 48, 48);
  }

  .active-tab::after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 20px;
    height: 5px;
    border-radius: 100px;
    background-color: rgb(251, 92, 57);
    left: calc(50% - 10px);
  }
}
</style>
