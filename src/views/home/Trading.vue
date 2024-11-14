<template>
  <div class="bg-color min-height">
    <page-header>
      <template v-slot:headerCenter>交易</template>
      <template v-slot:headerRight>
        <img
          src="../../assets/img/refresh.png"
          alt=""
          class="refresh-data"
          @click="reloadPage"
        />
      </template>
    </page-header>
    <div class="pt-3 px-3">
      <SelectContract
        :contract_id="contract_id"
        @update:modelValue="updateOrderId"
      />
    </div>
    <div class="bg-white mt-3 px-3">
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
        class="tab-color"
        selected-class="select-active-color"
      >
        <v-tab :value="1" min-width="">买入</v-tab>
        <v-tab :value="2" min-width="">卖出</v-tab>
        <v-tab :value="3" min-width="">查询</v-tab>
      </v-tabs>
    </div>
    <div class="px-3 mt-3">
      <v-sheet class="py-4 px-2 rounded-lg" v-show="tab == 1">
        <v-row class="ma-0 pa-0">
          <v-col class="pa-0" cols="7">
            <SelectSymbol
              @updateSymbolCode="changeSymbolCode"
              :symbolCode="myCodeUpdate"
            />
            <v-select
              :items="tradeType"
              item-value="key"
              item-title="title"
              variant="outlined"
              density="compact"
              hide-details
              placeholder="请选择类型"
              class="mt-2"
              v-model="constuserPost.type"
            ></v-select>
            <v-text-field
              v-if="constuserPost.type == 'market_price'"
              variant="outlined"
              append-inner-icon="mdi-plus"
              @click:appendInner="userAddPrice"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              class="mt-3 symbol-code"
              v-model="constuserPost.price"
              disabled
            ></v-text-field>
            <v-text-field
              v-if="constuserPost.type == 'limit_price'"
              variant="outlined"
              append-inner-icon="mdi-plus"
              @click:appendInner="userAddPrice"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              class="mt-3 symbol-code"
              v-model="constuserPost.price"
            ></v-text-field>
            <div class="d-flex text-body-2 mt-2">
              <div class="w-50">
                涨停 <span>{{ chart_data.up }}</span>
              </div>
              <div class="w-50 text-right">
                跌停 <span>{{ chart_data.stop }}</span>
              </div>
            </div>
            <v-text-field
              variant="outlined"
              append-inner-icon="mdi-plus"
              @click:appendInner="userAddNumber"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              @click:prependInner="userDeductNumber"
              class="mt-3 symbol-code"
              v-model="constuserPost.number"
            ></v-text-field>
            <v-row class="ma-0 pa-0 mt-2 text-body-2">
              <v-col
                v-for="(option, index) in options"
                :key="index"
                :class="['pa-0', index === 0 ? 'pr-1' : 'pl-1']"
                cols="3"
              >
                <div
                  class="w-100 py-1 bg-grey-lighten-2 text-center rounded"
                  :class="{ 'number-active-color': selected === index }"
                  @click="selectOption(index)"
                >
                  {{ option }}
                </div>
              </v-col>
            </v-row>
            <div class="d-flex text-caption mt-2">
              <div class="w-50">
                交易额
                <span class="text-red">{{ chart_data.trading_amount }}</span>
              </div>
              <div class="w-50 text-right">
                可买股数
                <span class="text-green">{{ chart_data.buy_number }}</span>
              </div>
            </div>
            <v-btn color="red" block="" @click="buy" class="mt-4" rounded="lg"
              >买入</v-btn
            >
          </v-col>
          <v-col cols="5" class="pa-0 pl-1">
            <div class="border-sm py-1">
              <FiveTable
                :buy_five="chart_data.buy_five"
                :sell_five="chart_data.sell_five"
                @update:fivePrive="changeLimitPrive"
              />
            </div>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet class="py-4 px-2 rounded-lg" v-show="tab == 2">
        <v-row class="ma-0 pa-0">
          <v-col class="pa-0" cols="7">
            <SelectSymbol
              @updateSymbolCode="changeSymbolCode"
              :symbolCode="myCodeUpdate"
            />
            <v-select
              :items="tradeType"
              item-value="key"
              item-title="title"
              variant="outlined"
              density="compact"
              hide-details
              placeholder="请选择类型"
              class="mt-2"
              v-model="constuserPost.type"
            ></v-select>
            <v-text-field
              v-if="constuserPost.type == 'market_price'"
              variant="outlined"
              append-inner-icon="mdi-plus"
              @click:appendInner="userAddPrice"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              class="mt-3 symbol-code"
              v-model="constuserPost.price"
              disabled
            ></v-text-field>
            <v-text-field
              v-if="constuserPost.type == 'limit_price'"
              variant="outlined"
              append-inner-icon="mdi-plus"
              @click:appendInner="userAddPrice"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              class="mt-3 symbol-code"
              v-model="constuserPost.price"
            ></v-text-field>
            <div class="d-flex text-body-2 mt-2">
              <div class="w-50">
                涨停 <span>{{ chart_data.up }}</span>
              </div>
              <div class="w-50 text-right">
                跌停 <span>{{ chart_data.stop }}</span>
              </div>
            </div>
            <v-text-field
              variant="outlined"
              append-inner-icon="mdi-plus"
              @click:appendInner="userAddNumber"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              @click:prependInner="userDeductNumber"
              class="mt-3 symbol-code"
              v-model="constuserPost.number"
            ></v-text-field>
            <v-row class="ma-0 pa-0 mt-2 text-body-2">
              <v-col
                v-for="(option, index) in options"
                :key="index"
                :class="['pa-0', index === 0 ? 'pr-1' : 'pl-1']"
                cols="3"
              >
                <div
                  class="w-100 py-1 bg-grey-lighten-2 text-center rounded"
                  :class="{ 'number-active-color': selected === index }"
                  @click="selectOption(index)"
                >
                  {{ option }}
                </div>
              </v-col>
            </v-row>
            <div class="d-flex text-caption mt-2">
              <div class="w-50">
                交易额
                <span class="text-red">{{
                  chart_data.sell_trading_amount
                }}</span>
              </div>
              <div class="w-50 text-right">
                可卖股数
                <span class="text-green">{{ chart_data.sell_number }}</span>
              </div>
            </div>
            <v-btn
              color="#445CED"
              block=""
              @click="sellSub"
              class="mt-4 text-white"
              rounded="lg"
              >卖出</v-btn
            >
          </v-col>
          <v-col cols="5" class="pa-0 pl-1">
            <div class="border-sm py-1">
              <FiveTable
                :buy_five="chart_data.buy_five"
                :sell_five="chart_data.sell_five"
                @update:fivePrive="changeLimitPrive"
              />
            </div>
          </v-col>
        </v-row>
      </v-sheet>
      <div class="px-2 rounded-lg" v-show="tab == 3">
        <v-list density="compact" class="bg-color ma-0 pa-0">
          <v-list-item
            v-for="(item, i) in inquireList"
            :key="i"
            :title="item.name"
            :value="item.path"
            color="primary"
            append-icon="mdi-chevron-right"
            class="mb-3 bg-white py-4 rounded-lg text-body-2"
            @click="router.push('/' + item.path + '?order_id=' + contract_id)"
          ></v-list-item>
        </v-list>
      </div>
    </div>
    <div class="px-3 mt-3" v-show="tab != 3">
      <TabSelect
        :activeList="contract_data.stock"
        :contract_id="contract_id"
        @update:watchList="changeTabeAndSymbol"
        @update:activeInfo="changeActiveInfo"
      />
    </div>
    <div class="py-7"></div>
  </div>
</template>

<script setup>
import PageHeader from "../../components/topWrap.vue";
import SelectContract from "@/components/contract/Index.vue";
import SelectSymbol from "@/components/tradeSearch/Index.vue";
import TabSelect from "@/components/tradeBottom/Index.vue";
import FiveTable from "@/components/tradeBottom/stockFive.vue";
import { marketDataFormat, setContractID, getContractID } from "@/utils/helper";
import { ref, onMounted, watch, onUnmounted } from "vue";
import { store } from "@/store";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const tab = ref(1);
const code = ref("");
const myCodeUpdate = ref("");
const amount = ref(0);
const contract_id = ref("");
const base_number = 100;
const base_price = 0.01;
const options = ["全仓", "1/2", "1/3", "1/4"];
const inquireList = [
  { path: "history_trade", name: "历史成交" },
  { path: "history_trust", name: "历史委托" },
  { path: "amount_list", name: "资金明细" },
];
let intervalId;

const selected = ref(null);

const selectOption = (index) => {
  selected.value = index;
  changeBuyNumber(index);
};

const contract_data = ref({
  info: {},
  stock: [],
});
const tradeType = [
  { title: "市价交易", key: "market_price" },
  { title: "限价委托", key: "limit_price" },
];

const constuserPost = ref({
  price: 0,
  number: 0,
  type: "market_price",
});

const sell_data = ref({
  number: 0,
  price: "10.23",
});

onMounted(() => {
  if (route.query.contract_order_id) {
    contract_id.value = route.query.contract_order_id;
  }
  const cache_contract_id = getContractID();

  if (cache_contract_id.length > 0) {
    contract_id.value = cache_contract_id;
  }

  if (route.query.prefix) {
    code.value = route.query.prefix;
  }
  intervalId = setInterval(getBuySellFive, 5000);
});

onUnmounted(() => {
  // 清除定时器，避免内存泄漏
  clearInterval(intervalId);
});

watch(
  () => code.value,
  (newCode) => {
    if (newCode.length > 0) {
      getBuySellFive(true);
      getSymbolInfo();
    }
  }
);

watch(
  () => contract_id.value,
  (newCode) => {
    if (newCode.length > 0) {
      getContractInfo();
      setContractID(newCode);
    }
  }
);

watch(
  () => constuserPost.value.number,
  (newValue) => {
    chart_data.value.trading_amount = (newValue * chart_data.value.new).toFixed(
      2
    );
  }
);

watch(
  () => constuserPost.value.price,
  (newValue) => {
    ceilUserTotalNumber(newValue);
  }
);

watch(
  () => tab.value,
  (newValue) => {
    if (newValue == 1 && chart_data.value.sell_id > 0) {
      getActiveCodeInfo();
    }
  }
);

const chart_data = ref({
  up: "-",
  stop: "-",
  trading_amount: "-",
  buy_number: "-",
  sell_number: "-",
  sell_trading_amount: "-",
  buy_five: [],
  sell_five: [],
  new: 0,
  sell_id: 0,
});

const changeSymbolCode = (code_id) => {
  console.log("changeSymbolCode", code_id);
  code.value = code_id;
};

const updateOrderId = (order_id) => {
  contract_id.value = order_id;
};

const buy = () => {
  if (!store.getters.token) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请登录！",
    });
    return;
  }
  if (contract_data.value.info.length <= 0) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请选择合约！",
    });
    return;
  }
  const postData = {
    symbol: code.value,
    number: constuserPost.value.number,
    contract: contract_data.value.info.order_id,
    type: constuserPost.value.type,
    title: myCodeUpdate.value,
    price: constuserPost.value.price,
  };
  if (postData.number < 100 && postData.number % 100 !== 0) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "数量必须是100的倍数",
    });
    return;
  }
  store.dispatch("trading/buy", postData).then((d) => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "购买成功",
    });
    getContractInfo();
  });
};

const getBuySellFive = async (isDefault = false) => {
  if (code.value == 0 || code.value.length <= 0) {
    return false;
  }
  if (!isDefault && !isMarketOpen()) {
    return false;
  }

  const rsp = await store.dispatch("market/getBuySellFive", code.value);
  chart_data.value.buy_five = rsp.buy;
  chart_data.value.sell_five = rsp.sell;
};

const getSymbolInfo = async () => {
  const rsp = await store.dispatch("market/getStockNewInfo", code.value);
  chart_data.value.up = marketDataFormat(rsp.f51, rsp.f59);
  chart_data.value.stop = marketDataFormat(rsp.f52, rsp.f59);
  chart_data.value.new = marketDataFormat(rsp.f43, rsp.f59);
  myCodeUpdate.value = rsp.f58;
  ceilUserTotalNumber();
};

const getContractInfo = async () => {
  const rsp = await store.dispatch("contract/getDetail", contract_id.value);

  contract_data.value = rsp;
  ceilUserTotalNumber();
};

const getActiveCodeInfo = async () => {
  const rsp = await store.dispatch(
    "trading/getOrderInfo",
    chart_data.value.sell_id
  );
  chart_data.value.sell_id = rsp.id;
  chart_data.value.sell_number = rsp.number;
  code.value = rsp.code;
  sell_data.value = rsp;
};

const sellSub = () => {
  if (chart_data.value.sell_id == "") {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请选择订单！",
    });
    return;
  }
  if (
    constuserPost.value.type == "limit_price" &&
    constuserPost.value.price == ""
  ) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "限价委托价格不能为空！",
    });
    return;
  }

  if (constuserPost.value.number > sell_data.value.number) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "交易数量超出拥有数量",
    });
    return;
  }

  store
    .dispatch("trading/sell", {
      order_id: chart_data.value.sell_id,
      number: constuserPost.value.number,
      type: constuserPost.value.type,
      price: constuserPost.value.price,
    })
    .then(() => {
      store.dispatch("snackbar/success", {
        active: true,
        body: "卖出成功",
      });
      getContractInfo();
    });
};

const ceilUserTotalNumber = (price = 0) => {
  if (tab.value == 2) {
    return chart_data.value.sell_number;
  }
  if (price == 0) {
    if (contract_data.value.info.balance > 0 && chart_data.value.new > 0) {
      chart_data.value.buy_number = Math.floor(
        contract_data.value.info.balance / chart_data.value.new
      );
      return chart_data.value.buy_number;
    }
  }
  if (contract_data.value.info.balance > 0 && price > 0) {
    chart_data.value.buy_number = Math.floor(
      contract_data.value.info.balance / price
    );

    return chart_data.value.buy_number;
  }
};

const userDeductNumber = () => {
  const temp_number = constuserPost.value.number - base_number;
  if (temp_number < 0) {
    return;
  }
  constuserPost.value.number = temp_number;
};

const userAddNumber = () => {
  const temp_number = constuserPost.value.number + base_number;
  if (temp_number > chart_data.value.buy_number) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "超出余额可购买金额",
    });
    return;
  }
  constuserPost.value.number = temp_number;
};

const changeBuyNumber = (type) => {
  let balance = 0;
  let number = chart_data.value.buy_number;

  if (tab.value == 2) {
    number = chart_data.value.sell_number;
  }
  if (type == 0) {
    balance = ceilUserTotalNumber();
  } else if (type == 1) {
    balance = Math.floor(number / 2);
  } else if (type == 2) {
    balance = Math.floor(number / 3);
  } else if (type == 3) {
    balance = Math.floor(number / 4);
  }
  balance = Math.floor(balance / 100) * 100;
  constuserPost.value.number = balance;
};

const userAddPrice = () => {
  if (constuserPost.value.price <= 0) {
    constuserPost.value.price = Number(
      (chart_data.value.new + base_price).toFixed(2)
    );
  }
  constuserPost.value.price = Number(
    (constuserPost.value.price + base_price).toFixed(2)
  );
};

const changeTabeAndSymbol = (code_id) => {
  tab.value = 1;
  changeSymbolCode(code_id);
};

const changeActiveInfo = (id) => {
  tab.value = 2;
  chart_data.value.sell_id = id;
  getActiveCodeInfo();
};

const changeLimitPrive = (price) => {
  constuserPost.value.price = price;
  constuserPost.value.type = "limit_price";
};

function isMarketOpen() {
  // 获取当前时间，并转化为北京时间
  const now = new Date();
  const beijingTime = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "short",
    hourCycle: "h23",
  }).formatToParts(now);

  // 提取北京时间的小时、分钟、星期几
  const hours = parseInt(beijingTime.find((p) => p.type === "hour").value);
  const minutes = parseInt(beijingTime.find((p) => p.type === "minute").value);
  const day = beijingTime.find((p) => p.type === "weekday").value;

  // 判断是否为周一至周五
  const isWeekday = ["周一", "周二", "周三", "周四", "周五"].includes(day);

  // 判断是否为开市时间
  const isMorningSession =
    (hours === 9 && minutes >= 30) ||
    (hours > 9 && hours < 11) ||
    (hours === 11 && minutes <= 30);
  const isAfternoonSession =
    hours === 13 ||
    (hours > 13 && hours < 15) ||
    (hours === 15 && minutes === 0);

  return isWeekday && (isMorningSession || isAfternoonSession);
}
</script>
<style>
.refresh-data {
  width: 22px;
  margin-right: 20px;
}
.tab-color {
  color: #2d2d2d !important;
}
.select-active-color {
  color: #445ced !important;
}
.symbol-code input {
  text-align: center;
}
.symbol-code input::placeholder {
  text-align: center; /* 让 placeholder 居中 */
}
.number-active-color {
  background-color: #ffcdce !important;
  border: 1 solid red !important;
  color: #e84346 !important;
}
</style>
