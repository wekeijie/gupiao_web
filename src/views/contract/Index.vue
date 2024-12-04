<template>
  <div class="bg-color ui-min-height">
    <div class="top-bg mt-n8 px-4">
      <v-btn
        class="mt-124 text-blue bg-white"
        variant="outlined"
        rounded="xl"
        color="white"
        :to="'/ApplyContract'"
        >立即申请</v-btn
      >
    </div>
    <div class="px-3 mt-n6">
      <div class="pt-0 pb-4 rounded-lg">
        <v-tabs
          center-active
          class="tab-color rounded-t-xl"
          selected-class="tab-active-color"
          v-model="tab"
          @update:modelValue="cheangeModel"
          bg-color="white"
        >
          <v-tab class="text-subtitle-1" value="0">有效合约</v-tab>
          <v-tab class="text-subtitle-1" value="1">历史合约</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-window v-model="tab">
          <v-window-item value="0" class="">
            <div
              v-for="(item, key) in store.state.contract.list"
              :key="item.order_id"
              class="bg-white rounded-b-xl pb-4 mb-3"
              :class="{ 'rounded-t-xl': key != 0 }"
            >
              <div class="px-3 pt-3">
                <v-row class="ma-0 pa-0 order-border order-bg rounded-lg">
                  <v-col cols="10" class="px-0 pl-2 text-body-2 order-color">
                    {{ item.type_title + item.contract_limit }}[{{
                      item.order_id
                    }}]
                  </v-col>
                  <v-col cols="1" class="pa-0 pt-1">
                    <v-icon color="#8E8E8E" size="x-large" class="ml-5"
                      >mdi-chevron-down</v-icon
                    >
                  </v-col>
                </v-row>
                <v-row class="ma-0 pa-0 mt-4 text-body-2">
                  <v-col cols="3" class="text-center px-0">
                    <div class="font-weight-bold">{{ item.total_amount }}</div>
                    <div class="text-caption order-color">操盘资金</div>
                  </v-col>
                  <v-col cols="3" class="text-center px-0">
                    <div class="font-weight-bold">{{ item.balance }}</div>
                    <div class="text-caption order-color">可用余额</div>
                  </v-col>
                  <v-col cols="3" class="text-center px-0">
                    <div class="font-weight-bold">{{ item.caution_line }}</div>
                    <div class="text-caption order-color">触发警戒</div>
                  </v-col>
                  <v-col cols="3" class="text-center px-0">
                    <div class="font-weight-bold">{{ item.stop_loss }}</div>
                    <div class="text-caption order-color">触发止损</div>
                  </v-col>
                  <v-col cols="12" class="px-0">
                    <v-row
                      class="ma-0 pa-0 text-body-2 date-bg text-white rounded"
                    >
                      <v-col cols="3" class="px-0 pl-2">持仓时间</v-col>
                      <v-col cols="9" class="px-0 text-caption">{{
                        item.start_time + "~" + item.stop_time
                      }}</v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" class="px-0 pt-0">
                    <v-row
                      class="ma-0 pa-0 text-body-2 date-bg text-white rounded"
                    >
                      <v-col cols="6" class="px-0 pl-2">资金利用率</v-col>
                      <v-col cols="6" class="px-0 text-right pr-2">{{
                        item.contract_rate + "%"
                      }}</v-col>
                    </v-row>
                    <v-col
                      cols="12"
                      class="px-0"
                      @click="
                        jump(router, '/PactDetail', { code: item.order_id })
                      "
                    >
                      <v-row
                        class="ma-0 pa-0 text-body-2 date-bg text-white rounded"
                      >
                        <v-col cols="12" class="px-0 pl-2">持仓明细</v-col>
                      </v-row>
                    </v-col>
                  </v-col>
                </v-row>
              </div>
              <v-divider class="mt-2"></v-divider>
              <div
                class="d-flex flex-wrap w-100 text-body-2 pt-3 bottom-nav-color"
              >
                <div
                  class="flex-1-0 w-20 text-center"
                  @click="
                    jump(router, '/Trading?contractOrderId=' + item.order_id)
                  "
                >
                  <img
                    src="@/assets/static/contract_icon_1_09.png"
                    width="25"
                  />
                  <div class="">交易</div>
                </div>
                <div
                  class="flex-1-0 w-20 text-center"
                  @click="showModel('追加', item, 2)"
                >
                  <img
                    src="@/assets/static/contract_icon_1_07.png"
                    width="25"
                  />
                  <div class="">追加</div>
                </div>
                <div
                  class="flex-1-0 w-20 text-center"
                  @click="showModel('扩大', item, 1)"
                >
                  <img
                    src="@/assets/static/contract_icon_1_05.png"
                    width="25"
                  />
                  <div class="">扩大</div>
                </div>
                <div
                  class="flex-1-0 w-20 text-center"
                  @click="showModel('提盈', item, 3)"
                >
                  <img
                    src="@/assets/static/contract_icon_1_11.png"
                    width="25"
                  />
                  <div class="">提盈</div>
                </div>
                <div
                  class="flex-1-0 w-20 text-center"
                  @click="showModel('结算', item, 0)"
                >
                  <img
                    src="@/assets/static/contract_icon_1_03.png"
                    width="25"
                  />
                  <div class="">结算</div>
                </div>
              </div>
            </div>
          </v-window-item>

          <v-window-item value="1" class="">
            <div
              v-for="(item, key) in store.state.contract.list"
              :key="item.order_id"
              class="bg-white rounded-b-xl pb-4 mb-3"
              :class="{ 'rounded-t-xl': key != 0 }"
            >
              <div class="px-3 pt-3">
                <v-row class="ma-0 pa-0 order-border order-bg rounded-lg">
                  <v-col cols="10" class="px-0 pl-2 text-body-2 order-color">
                    {{ item.type_title + item.contract_limit }}[{{
                      item.order_id
                    }}]
                  </v-col>
                  <v-col cols="1" class="pa-0 pt-1">
                    <v-icon color="#8E8E8E" size="x-large" class="ml-5"
                      >mdi-chevron-down</v-icon
                    >
                  </v-col>
                </v-row>
                <v-row class="ma-0 pa-0 mt-4 text-body-2">
                  <v-col cols="3" class="text-center px-0">
                    <div class="font-weight-bold">{{ item.total_amount }}</div>
                    <div class="text-caption order-color">操盘资金</div>
                  </v-col>
                  <v-col cols="3" class="text-center px-0">
                    <div class="font-weight-bold">{{ item.balance }}</div>
                    <div class="text-caption order-color">可用余额</div>
                  </v-col>
                  <v-col cols="3" class="text-center px-0">
                    <div class="font-weight-bold">{{ item.caution_line }}</div>
                    <div class="text-caption order-color">触发警戒</div>
                  </v-col>
                  <v-col cols="3" class="text-center px-0">
                    <div class="font-weight-bold">{{ item.stop_loss }}</div>
                    <div class="text-caption order-color">触发止损</div>
                  </v-col>
                  <v-col cols="12" class="px-0">
                    <v-row
                      class="ma-0 pa-0 text-body-2 date-bg text-white rounded"
                    >
                      <v-col cols="3" class="px-0 pl-2">持仓时间</v-col>
                      <v-col cols="9" class="px-0 text-caption">{{
                        item.start_time + "~" + item.stop_time
                      }}</v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" class="px-0 pt-0">
                    <v-row
                      class="ma-0 pa-0 text-body-2 date-bg text-white rounded"
                    >
                      <v-col cols="6" class="px-0 pl-2">资金利用率</v-col>
                      <v-col cols="6" class="px-0 text-right pr-2">{{
                        item.contract_rate + "%"
                      }}</v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    class="px-0 pt-0"
                    @click="
                      jump(router, '/PactDetail', { code: item.order_id })
                    "
                  >
                    <v-row
                      class="ma-0 pa-0 text-body-2 date-bg text-white rounded"
                    >
                      <v-col cols="12" class="px-0 pl-2">持仓明细</v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
              <v-divider class="mt-2"></v-divider>
              <div
                class="d-flex flex-wrap w-100 text-body-2 pt-3 bottom-nav-color"
              >
                <div
                  class="flex-1-0 w-20 text-center"
                  @click="
                    jump(router, '/Trading?contractOrderId=' + item.order_id)
                  "
                >
                  <img
                    src="@/assets/static/contract_icon_1_09.png"
                    width="25"
                  />
                  <div class="">交易</div>
                </div>
                <div class="flex-1-0 w-20 text-center">
                  <img
                    src="@/assets/static/contract_icon_1_07.png"
                    width="25"
                  />
                  <div class="">追加</div>
                </div>
                <div class="flex-1-0 w-20 text-center">
                  <img
                    src="@/assets/static/contract_icon_1_05.png"
                    width="25"
                  />
                  <div class="">扩大</div>
                </div>
                <div class="flex-1-0 w-20 text-center">
                  <img
                    src="@/assets/static/contract_icon_1_11.png"
                    width="25"
                  />
                  <div class="">提盈</div>
                </div>
                <div class="flex-1-0 w-20 text-center">
                  <img
                    src="@/assets/static/contract_icon_1_03.png"
                    width="25"
                  />
                  <div class="">结算</div>
                </div>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </div>
  <v-dialog v-model="dialog" class="w-100">
    <v-card>
      <v-card-title class="text-center">{{ model_title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row class="ma-0 pa-0" v-if="!has_stop">
          <v-col cols="6" class="text-caption px-0 py-1">合约名称</v-col>
          <v-col cols="6" class="text-caption text-right py-1">{{
            order.type_title + order.contract_limit
          }}</v-col>
          <v-col cols="4" class="text-caption px-0 py-1">合约编号</v-col>
          <v-col cols="8" class="text-caption text-right py-1">{{
            order.order_id
          }}</v-col>
          <v-col cols="6" class="text-caption px-0 py-1">余额</v-col>
          <v-col
            cols="6"
            class="text-caption text-right py-1"
            v-if="model_title == '提盈'"
            >{{ order.unrealized_profit }}</v-col
          >
          <v-col cols="6" class="text-caption text-right py-1" v-else>{{
            order.balance
          }}</v-col>
        </v-row>
        <div v-else class="my-3">您确定要终止该合约吗?</div>
        <v-text-field
          v-if="!has_stop"
          label=""
          variant="underlined"
          v-model="amount"
          ><template v-slot:prepend-inner>
            <p class="" style="font-size: 30px">¥</p>
          </template></v-text-field
        >
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-row class="ma-0 pa-0">
          <v-col cols="6" class="px-1">
            <v-btn
              color="blue-darken-1"
              variant="text"
              block=""
              @click="dialog = false"
            >
              取消
            </v-btn>
          </v-col>
          <v-col cols="6" class="px-1">
            <v-btn
              color="blue-darken-1"
              variant="text"
              block=""
              @click="submitok"
            >
              确认
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import { store } from "@/store";
import { useRouter } from "vue-router";
import { jump } from "@/utils/constName";
import { rmContractID } from "@/utils/helper";

const router = useRouter();

const tab = ref(0);
const dialog = ref(false);
const has_stop = ref(false);
const amount = ref();

let order = reactive({});
const model_title = ref("");
const popType = ref();

onMounted(() => {
  getList();
});

const cheangeModel = () => {
  getList();
};

const submitok = () => {
  if (order === null || order === undefined) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请选择订单！",
    });
    return;
  }
  dialog.value = false;
  if (popType.value == 1) {
    expend();
  } else if (popType.value == 2) {
    appendAmount();
  } else if (popType.value == 3) {
    withdrawal();
  } else if (popType.value == 0) {
    stopPact();
  }
  amount.value = 0;
};

const showModel = (title, item, stop) => {
  dialog.value = true;
  has_stop.value = stop === 0 ? true : false;
  popType.value = stop;
  model_title.value = title;
  order = item;
};
const stopPact = () => {
  store.dispatch("contract/stop", { order_id: order.order_id }).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "操作成功",
    });
    getList();
    rmContractID(order.order_id);
  });
};

const withdrawal = () => {
  if (amount.value < 100) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "提现不能低于100",
    });
    return;
  }
  const data = {
    order_id: order.order_id,
    amount: amount.value,
  };
  store.dispatch("contract/withdrawal", data).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "操作成功",
    });
    getList();
  });
};

const appendAmount = () => {
  if (amount.value < 100) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "最低金额不能小于100",
    });
    return;
  }
  const data = {
    order_id: order.order_id,
    amount: amount.value,
  };
  store.dispatch("contract/append", data).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "操作成功",
    });
    getList();
  });
};

const expend = () => {
  if (amount.value < 100) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "最低金额不能小于100",
    });
    return;
  }
  const data = {
    order_id: order.order_id,
    amount: amount.value,
  };
  store.dispatch("contract/expand", data).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "操作成功",
    });
    getList();
  });
};
const getList = () => {
  store.dispatch("contract/getList", tab.value);
};
</script>
<style scoped>
.top-bg {
  background-image: url("@/assets/static/contract_top_bg_01.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}
.mt-124 {
  margin-top: 124px;
}
.tab-color {
  color: #5e5e5e;
}
.tab-active-color {
  color: #3652f5;
}
.order-bg {
  background-color: #f7f7f7;
}
.order-border {
  border: 1px solid #dadada;
}
.order-color {
  color: #2d2d2d;
}
.date-bg {
  background-color: #74a1fa;
}
.bottom-nav-color {
  color: #3c3c3c;
}
</style>
