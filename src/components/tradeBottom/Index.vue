<template>
  <v-sheet class="py-2 rounded-lg">
    <div>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
        class="tab-color"
        selected-class="select-active-color"
        @update:modelValue="changePlan"
      >
        <v-tab :value="1" min-width="75">持仓</v-tab>
        <v-tab :value="2" min-width="75">委托</v-tab>
        <v-tab :value="3" min-width="75">成交</v-tab>
        <v-tab :value="4" min-width="75">自选</v-tab>
      </v-tabs>
      <div>
        <div v-show="tab == 1">
          <div class="px-3 bg-grey-lighten-3 mt-2 mb-2">
            <v-row
              class="ma-0 pa-0 py-2 font-weight-bold text-body-2 text-center text-grey-darken-2"
            >
              <v-col cols="3" class="pa-0"> 市值 </v-col>
              <v-col cols="3" class="pa-0"> 盈亏 </v-col>
              <v-col cols="3" class="pa-0"> 持仓/可用 </v-col>
              <v-col cols="3" class="pa-0"> 成本/现价 </v-col>
            </v-row>
          </div>
          <div>
            <v-row
              class="ma-0 pa-0 text-center px-3 text-body-2 pt-2"
              v-for="item in activeList"
              :key="item.code"
              @click="selectActiveCode(item.id)"
            >
              <v-col cols="3" class="pa-0"> {{ item.title }} </v-col>
              <v-col cols="3" class="pa-0">
                {{ fuyingAmount(item.price, item.sell, item.number) }}
              </v-col>
              <v-col cols="3" class="pa-0">
                {{ item.number }}
              </v-col>
              <v-col cols="3" class="pa-0"> {{ item.price }} </v-col>
              <v-col cols="3" class="pa-0">
                {{ (parseFloat(item.sell) * item.number).toFixed(2) }}
              </v-col>
              <v-col cols="3" class="pa-0">
                {{ coileBuyPrice(item.price, item.sell) }} %</v-col
              >
              <v-col cols="3" class="pa-0">
                <div v-if="item.active">0</div>
                <div v-else>{{ item.number }}</div>
              </v-col>
              <v-col cols="3" class="pa-0"> {{ item.sell }} </v-col>
              <v-divider class="mt-2"></v-divider>
            </v-row>
          </div>
        </div>
        <div v-show="tab == 2">
          <div class="px-3 bg-grey-lighten-3 mt-2 mb-2">
            <v-row
              class="ma-0 pa-0 py-2 font-weight-bold text-body-2 text-center text-grey-darken-2"
            >
              <v-col cols="3" class="pa-0"> 名称/代码 </v-col>
              <v-col cols="4" class="pa-0"> 价格/时间 </v-col>
              <v-col cols="3" class="pa-0"> 数量/类型 </v-col>
              <v-col cols="2" class="pa-0"> 操作</v-col>
            </v-row>
          </div>
          <div>
            <v-row
              class="ma-0 pa-0 text-center px-3 text-body-2 pt-2"
              v-for="item in store.state.trading.trust_list"
              :key="item.code"
            >
              <v-col cols="3" class="pa-0"> {{ item.title }} </v-col>
              <v-col cols="4" class="pa-0">
                {{ item.buy_price }}
              </v-col>
              <v-col cols="3" class="pa-0">
                {{ item.number }}
              </v-col>
              <v-col cols="2" class="pa-0">
                <v-btn
                  variant="outlined"
                  size="x-small"
                  color="red"
                  @click="cancelOrder(item.id)"
                >
                  撤销
                </v-btn>
              </v-col>
              <v-col cols="3" class="pa-0">
                {{ item.code }}
              </v-col>
              <v-col cols="4" class="pa-0 text-caption"> {{ item.date }}</v-col>
              <v-col cols="3" class="pa-0">
                <span v-if="item.type == 'BUY'">买入</span>
                <span v-if="item.type == 'SELL'">卖出</span>
              </v-col>
              <v-col cols="2" class="pa-0"> </v-col>
              <v-divider class="mt-2"></v-divider>
            </v-row>
          </div>
        </div>
        <div v-show="tab == 3">
          <div class="px-3 bg-grey-lighten-3 mt-2 mb-2">
            <v-row
              class="ma-0 pa-0 py-2 font-weight-bold text-body-2 text-center text-grey-darken-2"
            >
              <v-col cols="3" class="pa-0"> 名称/代码 </v-col>
              <v-col cols="3" class="pa-0"> 金额 </v-col>
              <v-col cols="3" class="pa-0"> 数量/类型 </v-col>
              <v-col cols="3" class="pa-0"> 时间 </v-col>
            </v-row>
          </div>
          <div>
            <v-row
              class="ma-0 pa-0 text-center px-3 text-body-2 pt-2"
              v-for="item in store.state.trading.success_list"
              :key="item.symbol_code"
            >
              <v-col cols="3" class="pa-0">
                <div>{{ item.title }}</div>
                <div>{{ item.symbol_code }}</div>
              </v-col>
              <v-col cols="3" class="pa-0">
                {{ item.amount_f }}
              </v-col>
              <v-col cols="3" class="pa-0">
                <span>{{ item.number }}/{{ item.type_string }}</span>
              </v-col>
              <v-col cols="3" class="pa-0"> {{ item.date }} </v-col>
              <v-divider class="mt-2"></v-divider>
            </v-row>
          </div>
        </div>
        <div v-show="tab == 4">
          <div class="px-3 bg-grey-lighten-3 mt-2 mb-2">
            <v-row
              class="ma-0 pa-0 py-2 font-weight-bold text-body-2 text-center text-grey-darken-2"
            >
              <v-col cols="4" class="pa-0"> 名称/代码 </v-col>
              <v-col cols="4" class="pa-0"> 最新价格 </v-col>
              <v-col cols="4" class="pa-0"> 涨跌幅 </v-col>
            </v-row>
          </div>
          <div>
            <v-row
              class="ma-0 pa-0 text-center px-3 text-body-2 pt-2"
              v-for="item in store.state.watchlist.list"
              :key="item.code"
              @click="selectWtachCode(item.code)"
            >
              <v-col cols="4" class="pa-0">
                <div>{{ item.name }}</div>
                <div>{{ item.code }}</div>
              </v-col>
              <v-col cols="4" class="pa-0 pt-2">
                {{ item.price }}
              </v-col>
              <v-col cols="4" class="pa-0 pt-2">
                {{ item.percentage + "%" }}
              </v-col>
              <v-divider class="mt-2"></v-divider>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { fuyingAmount } from "@/utils/helper";
import { store } from "@/store";
const tab = ref();

const props = defineProps({
  activeList: {
    type: Array,
    default: () => [],
  },
  contract_id: {
    type: String,
    default: "",
  },
});
const coileBuyPrice = (buyprice, sellprice) => {
  let profit = ((sellprice - buyprice) / buyprice) * 100;
  return profit.toFixed(2);
};

const changePlan = (id) => {
  if (id == 2) {
    getTrustList();
  } else if (id == 3) {
    getEndList();
  } else if (id == 4) {
    getWatchList();
  }
};

const emit = defineEmits(["update:watchList", "update:activeInfo"]);

const selectWtachCode = (code) => {
  emit("update:watchList", code);
};

const selectActiveCode = (id) => {
  emit("update:activeInfo", id);
};

const getTrustList = () => {
  store.dispatch("trading/getTrustList", {
    status: 0,
    contract_id: props.contract_id,
  });
};

const cancelOrder = (id) => {
  store.dispatch("trading/cancelOrder", id).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "取消成功！",
    });
    getTrustList();
  });
};

const getEndList = () => {
  store.dispatch("trading/getSuccessList", {
    contract_id: props.contract_id,
    type: "d",
  });
};

const getWatchList = () => {
  store.dispatch("watchlist/getList");
};
</script>
