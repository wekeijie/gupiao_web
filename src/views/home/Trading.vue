<template>
  <div>
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
    <div class="hores-race-lamp flexStart">
      <img src="../../assets/img/tab8.png" alt="" class="refresh-data" />
      <marquee-text :repeat="1"
        ><span style="color: #f90">
          该平台可以直接扩大股票配资客户的交易资金，使股票配资客户获得充裕的资金，成本低，盈利100%属于用户。</span
        >
      </marquee-text>
    </div>
    <div class="row-tab-box flexBetween">
      <h2>合约</h2>
      <div class="flexEnd" @click="isApply = true">
        <p>{{ heyuename }}</p>
        <img src="../../assets/img/rightImg.png" alt="" class="img-right" />
      </div>
    </div>
    <div class="row-tab-box flexBetween">
      <h2>股票名称/代码</h2>
      <div class="flexEnd">
        <p>
          {{ store.state.market.stock_new_info.f58
          }}<span
            >({{
              symbolCodeFormat(
                store.state.market.stock_new_info.f57,
                store.state.market.stock_new_info.f107
              )
            }})</span
          >
        </p>
        <img
          src="../../assets/img/search.png"
          alt=""
          class="img-search"
          @click="goRouter('/Search')"
        />
      </div>
    </div>

    <div class="flexBetween new-title-box">
      <p>
        最新
        <span
          v-if="store.state.market.stock_new_info.f169 != '-'"
          :class="
            'text-' +
            watchStringToColor(
              marketDataFormat(
                store.state.market.stock_new_info.f169,
                store.state.market.stock_new_info.f59
              )
            )
          "
          >{{
            marketDataFormat(
              store.state.market.stock_new_info.f43,
              store.state.market.stock_new_info.f59
            )
          }}
          {{
            updateStrIcon(
              marketDataFormat(
                store.state.market.stock_new_info.f169,
                store.state.market.stock_new_info.f59
              )
            )
          }}
          {{
            updateStrIcon(
              marketDataFormat(
                store.state.market.stock_new_info.f170,
                store.state.market.stock_new_info.f59
              )
            ) + "%"
          }}</span
        >
        <span v-else>
          {{ store.state.market.stock_new_info.f43 }}
          {{ store.state.market.stock_new_info.f169 }}
          {{ store.state.market.stock_new_info.f170 }}</span
        >
      </p>
      <div>
        <img
          src="../../assets/img/pixelsImg.png"
          alt=""
          @click="
            gotrade(
              '/ChanrtPage',
              store.state.market.stock_new_info.f58,
              store.state.market.stock_new_info.f57,
              store.state.market.stock_new_info.f107
            )
          "
          class="img-right"
        />
        <img src="../../assets/img/lineImg.png" alt="" class="img-right" />
      </div>
    </div>
    <div class="flexBetween controls-box">
      <div style="" class="controls-left">
        <div class="flexBetween buy-sell-box">
          <p class="buy-box">买入</p>
        </div>
        <div class="buy" v-if="buyTab == 0">
          <!-- <div class="contracts-box flexCenter">
            <p>市价委托</p>
            <img src="../../assets/img/downPac.png" alt="" />
          </div> -->
          <v-select
            label="类型"
            :items="tradeType"
            item-title="title"
            item-value="key"
            v-model="postTradeType"
            variant="solo-filled"
            hide-details
            class="mt-2"
          ></v-select>
          <div class="up-down-number flexBetween">
            <p>
              涨停<span class="roseColor">{{
                marketDataFormat(
                  store.state.market.stock_new_info.f51,
                  store.state.market.stock_new_info.f59
                )
              }}</span>
            </p>
            <p>
              跌停<span class="fallColor">{{
                marketDataFormat(
                  store.state.market.stock_new_info.f52,
                  store.state.market.stock_new_info.f59
                )
              }}</span>
            </p>
          </div>

          <div class="input-box" style="margin-top: 15px">
            <v-text-field
              type="string"
              v-model="entr_price"
              placeholder="请输入数值"
              clearable
              :disabled="false"
              density="default"
              variant="outlined"
              single-line
              hide-details
              label="价格"
              v-show="postTradeType == 'limit_price'"
            ></v-text-field>
            <v-text-field
              type="number"
              v-model="numberValue"
              placeholder="请输入数值"
              clearable
              :disabled="false"
              density="default"
              variant="outlined"
              single-line
              hide-details
            >
              <template v-slot:append>
                <v-icon
                  color="black"
                  @click="changeNUmberValue('c')"
                  class="down-num"
                >
                  mdi-minus
                </v-icon>
                <v-icon
                  color="black"
                  @click="changeNUmberValue('a')"
                  class="up-num"
                >
                  mdi-plus
                </v-icon>
              </template>
            </v-text-field>
          </div>

          <div class="component-box flexBetween">
            <p
              :class="componentIndx == 1 ? 'redBg' : ''"
              @click="changeOrderNUmber(4, 1)"
            >
              1/4
            </p>
            <p
              :class="componentIndx == 2 ? 'redBg' : ''"
              @click="changeOrderNUmber(3, 2)"
            >
              1/3
            </p>
            <p
              :class="componentIndx == 3 ? 'redBg' : ''"
              @click="changeOrderNUmber(2, 3)"
            >
              1/2
            </p>
            <p
              :class="componentIndx == 4 ? 'redBg' : ''"
              @click="changeOrderNUmber(1, 4)"
            >
              全仓
            </p>
          </div>

          <div class="up-down-number flexBetween">
            <p>
              交易额<span class="roseColor">{{ tradeAmount }}</span>
            </p>
            <p>
              可买股数<span class="fallColor">{{ yu_order.limit }}</span>
            </p>
          </div>
        </div>
        <div class="sell py-10" v-if="buyTab == 1">
          <v-select
            label="请选择股票"
            v-model="sellId"
            :items="store.state.trading.active_list"
            item-title="title"
            item-value="id"
            variant="underlined"
            @update:modelValue="updateSellId"
          >
            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :subtitle="item.raw.number + `/` + item.raw.unrealized_profit"
              ></v-list-item>
            </template>
          </v-select>
          <v-btn block="" class="mt-4" color="success" @click="sellSub"
            >卖出</v-btn
          >
        </div>
      </div>
      <div class="controls-right">
        <v-carousel
          :show-arrows="false"
          hide-delimiters
          v-model="model"
          height="auto"
        >
          <!-- height="auto" -->
          <v-carousel-item v-for="(slide, i) in 2" :key="i">
            <div class="new-box" v-if="i == 0">
              <div>
                <div
                  class="flexBetween records-list"
                  v-for="(item, key) in buySellFiveList.sell"
                  :key="key"
                >
                  <p>卖{{ buySellFiveList.sell.length - key }}</p>
                  <p class="fallColor">{{ item.price }}</p>
                  <p>{{ item.vol }}</p>
                </div>

                <div
                  style="
                    background-color: rgb(245, 245, 245);
                    height: 2px;
                    margin: 5px 0;
                  "
                ></div>
                <div
                  class="flexBetween records-list"
                  v-for="(item, key) in buySellFiveList.buy"
                  :key="key"
                >
                  <p>买{{ key + 1 }}</p>
                  <p class="pinkColor">{{ item.price }}</p>
                  <p>{{ item.vol }}</p>
                </div>
              </div>
            </div>
            <div class="new-box" v-if="i == 1">
              <div class="flexBetween records-list pr-2">
                <p>时间</p>
                <p>价格</p>
                <p>量</p>
              </div>
              <div
                v-for="(item, index) in fenshi_list"
                :key="index"
                class="flexBetween records-list pr-2"
              >
                <p>{{ timeToFormat(item.date) }}</p>
                <p class="pinkColor">{{ item.price }}</p>
                <p>{{ item.limit }}</p>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>

    <div class="flexAroud">
      <v-btn class="sure-btn" @click="submitOK" v-if="buyTab == 0">交易</v-btn>

      <div class="flexCenter cut-detail">
        <p :class="model == 0 ? 'roseColor' : ''" @click="model = 0">+档</p>
        <p :class="model == 1 ? 'roseColor' : ''" @click="model = 1">明细</p>
      </div>
    </div>

    <div
      style="background-color: rgb(245, 245, 245); height: 5px; margin: 10px 0"
    ></div>

    <div class="table-box flexStart">
      <p :class="tabIndex == 0 ? 'active-tab' : ''" @click="tabIndex = 0">
        持仓
      </p>
      <p :class="tabIndex == 1 ? 'active-tab' : ''" @click="tabIndex = 1">
        订单
      </p>
    </div>

    <v-carousel
      :show-arrows="false"
      hide-delimiters
      v-model="tabIndex"
      height="auto"
    >
      <!-- height="auto" -->
      <v-carousel-item v-for="(slide, i) in 2" :key="i">
        <div class="new-box" v-if="i == 0">
          <table>
            <tbody>
              <tr class="tr-list">
                <th style="text-align: left">名称|市值</th>
                <th style="text-align: right">现价|成本</th>
                <th style="text-align: right">可用|持仓</th>
                <th style="text-align: right" class="cutUp">浮动|盈亏</th>
                <th style="text-align: right" class="cutUp">操作</th>
              </tr>

              <div
                style="background-color: rgb(245, 245, 245); height: 2px"
              ></div>
              <tr
                class="tr-list"
                v-for="item in store.state.trading.active_list"
                :key="item.code"
              >
                <td class="tr-one">
                  <p>{{ item.title }}</p>
                  <span>{{
                    (parseFloat(item.sell) * item.number).toFixed(2)
                  }}</span>
                </td>
                <td class="tr-two text-right">
                  <div class="tr-two-number">{{ item.sell }}</div>
                  <span>{{ item.price }}</span>
                </td>
                <td class="tr-three" style="text-align: right">
                  <div v-if="item.active">0</div>
                  <div v-else>{{ item.number }}</div>
                  <span>{{ item.number }}</span>
                </td>
                <td class="tr-four" style="text-align: right">
                  <div>
                    {{ fuyingAmount(item.price, item.sell, item.number) }}
                  </div>
                  <span>{{ coileBuyPrice(item.price, item.sell) }} %</span>
                </td>
                <th class="text-right">
                  <v-btn
                    variant="outlined"
                    color="red"
                    :to="'/Sell?order_id=' + item.id"
                    size="x-small"
                  >
                    卖出
                  </v-btn>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="new-box" v-if="i == 1">
          <div class="tab-box">
            <v-tabs
              v-model="orderIndex"
              bg-color="white"
              color="black"
              align-tabs="left"
            >
              <v-tab @click="changeOrderList(0)">待成交</v-tab>
              <v-tab @click="changeOrderList(1)">已成交</v-tab>
              <v-tab @click="changeOrderList(2)">已撤单</v-tab>
            </v-tabs>
          </div>

          <table>
            <tbody v-if="orderIndex == 0">
              <tr class="tr-list">
                <th style="text-align: left">名称|代码</th>
                <th style="text-align: right">价格</th>
                <th style="text-align: right">数量|类型</th>
                <th style="text-align: right" class="cutUp">时间</th>
                <th>操作</th>
              </tr>

              <div
                style="background-color: rgb(245, 245, 245); height: 2px"
              ></div>
              <tr
                class="tr-list"
                v-for="item in store.state.trading.trust_list"
                :key="item.code"
              >
                <td class="tr-one">
                  <p>{{ item.title }}</p>
                  <span>{{ item.code }}</span>
                </td>
                <td class="tr-two" style="text-align: right">
                  <div class="tr-two-number">{{ item.buy_price }}</div>
                </td>
                <td class="tr-three" style="text-align: right">
                  <span>{{ item.number }}/委托</span>
                </td>
                <td class="tr-four" style="text-align: right">
                  <p>{{ item.date }}</p>
                </td>
                <th @click="cancelOrder(item.id)">撤销</th>
              </tr>
            </tbody>
            <tbody v-if="orderIndex == 1">
              <tr class="tr-list">
                <th style="text-align: left">名称|代码</th>
                <th style="text-align: right">金额</th>
                <th style="text-align: right">数量|类型</th>
                <th style="text-align: right" class="cutUp">时间</th>
              </tr>

              <div
                style="background-color: rgb(245, 245, 245); height: 2px"
              ></div>
              <tr
                class="tr-list"
                v-for="item in store.state.trading.success_list"
                :key="item.symbol_code"
              >
                <td class="tr-one">
                  <p>{{ item.title }}</p>
                  <span>{{ item.symbol_code }}</span>
                </td>
                <td class="tr-two" style="text-align: right">
                  <div class="tr-two-number">{{ item.amount_f }}</div>
                </td>
                <td class="tr-three" style="text-align: right">
                  <span>{{ item.number }}/{{ item.type_string }}</span>
                </td>
                <td class="tr-four" style="text-align: right">
                  <p>{{ item.date }}</p>
                </td>
              </tr>
            </tbody>

            <tbody v-if="orderIndex == 2">
              <tr class="tr-list">
                <th style="text-align: left">名称|代码</th>
                <th style="text-align: right">价格</th>
                <th style="text-align: right">数量|类型</th>
                <th style="text-align: right" class="cutUp">时间</th>
              </tr>

              <div
                style="background-color: rgb(245, 245, 245); height: 2px"
              ></div>
              <tr
                class="tr-list"
                v-for="item in store.state.trading.trust_list"
                :key="item.code"
              >
                <td class="tr-one">
                  <p>{{ item.title }}</p>
                  <span>{{ item.code }}</span>
                </td>
                <td class="tr-two" style="text-align: right">
                  <div class="tr-two-number">{{ item.buy_price }}</div>
                </td>
                <td class="tr-three" style="text-align: right">
                  <span>{{ item.number }}/委托</span>
                </td>
                <td class="tr-four" style="text-align: right">
                  <p>{{ item.date }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-carousel-item>
    </v-carousel>

    <v-bottom-sheet v-model="isApply">
      <v-list class="pb-5">
        <div class="flexBetween sheet-top">
          <div class="sheet-sure">请选择您的合约<span>[新开合约]</span></div>
          <img
            src="../../assets/img/close.png"
            alt=""
            @click="isApply = false"
          />
        </div>
        <v-list-item
          class="flexCenter"
          v-for="(tile, index) in store.state.contract.minList"
          :key="tile.order_id"
          @click="
            isApply = false;
            selectHeyue(index);
          "
        >
          <div class="flexBetween type-list">
            <v-list-item-title>
              <h3>
                {{ tile.contract_type_title + tile.contract_limit_limit }}倍-
                <span>{{ tile.balance }}</span
                >元
              </h3>
              <p>合约号:{{ tile.order_id }}</p>
            </v-list-item-title>
            <img
              class="list-select"
              src="../../assets/img/select.png"
              alt=""
              v-show="index == typeIndex"
            />
          </div>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
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
import {
  symbolCodeFormat,
  marketDataFormat,
  fuyingAmount,
} from "@/utils/helper";
import { VBottomSheet } from "vuetify/lib/labs/vBottomSheet/index";
import PageHeader from "../../components/topWrap.vue";
import MarqueeText from "vue-marquee-text-component";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
import request from "@/utils/request";
const $router = useRouter();
const $route = useRoute();
const numberValue = ref(0);
const componentIndx = ref(1);
const tabIndex = ref(0);
const model = ref(0);
const orderIndex = ref(0);
const buyTab = ref(0);
const sellId = ref(null);
const entr_price = ref("");

const isApply = ref(false);

const is_open = ref(false);
const stock_date = ref("");
const yu_order = reactive({
  amount: 0,
  limit: 0,
  order_id: "",
});
const heyue_info = {};
const prefix = ref("0.000001");
const title = ref("平安银行");
const code = ref("000001");
const buySellFiveList = reactive({
  buy: [],
  sell: [],
});

const postTradeType = ref("market_price");

const tradeType = [
  { title: "市价交易", key: "market_price" },
  { title: "限价委托", key: "limit_price" },
];

const fenshi_list = ref([]);
const tradeAmount = ref(0);
watch(numberValue, (val, old) => {
  let temp =
    marketDataFormat(
      store.state.market.stock_new_info.f43,
      store.state.market.stock_new_info.f59
    ) * val;

  tradeAmount.value = temp.toFixed(2);
});

onMounted(() => {
  if ($route.query.code) {
    code.value = $route.query.code;
  }
  if ($route.query.prefix) {
    prefix.value = $route.query.prefix;
  } else {
    prefix.value = store.state.trading.prefix;
  }
  if ($route.query.title) {
    title.value = $route.query.title;
  } else {
    title.value = store.state.trading.title;
  }
  resetUpdateStock();

  // store.dispatch("trading/getInfo", prefix.value);
  // store.dispatch("trading/getDayDetail", prefix.value);
  if (store.getters.token) {
    store.dispatch("contract/getMinList");
  } else {
    heyuename.value = "请登录选择合约";
  }

  getFenShiList();

  // request.post("market/stock", { symbol: prefix.value }).then((d) => {
  //   stock_date.value = d.date;
  //   checkDateStatus();
  // });
  getActiveList();
  getTrustList(0);
});

const coileBuyPrice = (buyprice, sellprice) => {
  let profit = ((sellprice - buyprice) / buyprice) * 100;
  return profit.toFixed(2);
};

const resetUpdateStock = () => {
  let now_code =
    store.state.market.stock_new_info.f107 +
    "." +
    store.state.market.stock_new_info.f57;
  if (now_code != prefix.value) {
    store.dispatch("market/getStockNewInfo", prefix.value);
  }
  if (store.state.market.stock_new_info.f107 < 2) {
    store.dispatch("market/getBuySellFive", prefix.value).then((d) => {
      buySellFiveList.buy = d.buy;
      buySellFiveList.sell = d.sell;
    });
  }
};

const changeOrderList = (index) => {
  orderIndex.value = index;
  let status = 0;
  if (index == 0 || index == 2) {
    store.commit("trading/clearTrustList");
    getTrustList(index);
  } else if (index == 1) {
    getEndList();
  }
};

const updateSellId = () => {
  console.log(sellId.value);
};
const getActiveList = () => {
  store.dispatch("trading/getActiveList");
};

const getFenShiList = async () => {
  const rsp = await store.dispatch("market/getStockFenShi", prefix.value);
  fenshi_list.value = fenshiDataFormat(rsp);
  fenshi_list.value.reverse();
};

const fenshiDataFormat = (rsp) => {
  const result = rsp.map((item) => {
    const parts = item.split(",");
    return {
      date: parts[0],
      price: parseFloat(parts[1]),
      limit: parseInt(parts[2], 10),
    };
  });
  return result;
};

const getEndList = () => {
  store.dispatch("trading/getSuccessList");
};

const cancelOrder = (id) => {
  store.dispatch("trading/cancelOrder", id).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "取消成功！",
    });
    getTrustList(0);
  });
};

const sellSub = () => {
  if (!sellId.value) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请选择订单！",
    });
    return;
  }
  store.dispatch("trading/sell", { key: sellId.value }).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "Success",
    });
    getActiveList();
    getEndList();
  });
};

const changeNUmberValue = (f) => {
  if (f == "a") {
    numberValue.value = numberValue.value + 100;
  }
  if (f == "c" && numberValue.value > 0) {
    let temp_amount = numberValue.value - 100;
    if (temp_amount > 0) {
      numberValue.value = temp_amount;
    } else {
      numberValue.value = 0;
    }
  }
};

const submitOK = () => {
  if (!store.getters.token) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请登录！",
    });
    return;
  }
  if (yu_order.order_id == "") {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请选择合约！",
    });
    return;
  }
  const postData = {
    symbol: prefix.value,
    number: numberValue.value,
    contract: yu_order.order_id,
    type: postTradeType.value,
    title: title.value,
    price: entr_price.value,
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
    store.dispatch("contract/getMinList").then(() => {
      selectHeyue(tabIndex.value);
    });
    getActiveList();
    getTrustList(0);
  });
};

const goRouter = (path) => {
  $router.push(path);
};
const goToSell = (path, item, code = "") => {
  $router.push({
    path,
    query: {
      title: item,
      code: code,
    },
  });
};

const getTrustList = (status) => {
  store.dispatch("trading/getTrustList", status);
};

const checkDateStatus = () => {
  let beijingDate = new Date()
    .toLocaleDateString("zh-CN", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
  let beijingTime = new Date().toLocaleString("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour12: false,
    timeStyle: "short",
  });

  if (beijingDate != stock_date.value || checkTime() == false) {
    is_open.value = true;
  }
};

const checkTime = () => {
  let currentBeijingTime = new Date(
    new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
      hour12: false,
    })
  );
  let morningStart = new Date(currentBeijingTime);
  morningStart.setHours(9, 30, 0, 0); // 设置时间为当天的9:30:00.000

  let morningEnd = new Date(currentBeijingTime);
  morningEnd.setHours(11, 30, 0, 0); // 设置时间为当天的11:30:00.000

  let afternoonStart = new Date(currentBeijingTime);
  afternoonStart.setHours(13, 0, 0, 0); // 设置时间为当天的13:00:00.000

  let afternoonEnd = new Date(currentBeijingTime);
  afternoonEnd.setHours(15, 0, 0, 0); // 设置时间为当天的15:00:00.000

  if (currentBeijingTime > morningStart && currentBeijingTime < morningEnd) {
    return true;
  }
  if (
    currentBeijingTime > afternoonStart &&
    currentBeijingTime < afternoonEnd
  ) {
    return true;
  }
  return false;
};

const changeOrderNUmber = (number, index) => {
  if (yu_order.limit <= 0) {
    return false;
  }
  let temp_amount = Math.floor(yu_order.limit / number);
  if (temp_amount >= 100) {
    let temp = adjustToNextHundred(temp_amount);
    if (temp > yu_order.limit) {
      numberValue.value = temp - 100;
    } else {
      numberValue.value = temp;
    }
  } else {
    numberValue.value = 100;
  }

  componentIndx.value = index;
};

const adjustToNextHundred = (numberValue) => {
  const remainder = numberValue % 100;
  if (remainder === 0) {
    return numberValue;
  } else {
    const adjustedValue = numberValue + (100 - remainder);
    return adjustedValue;
  }
};

const watchStringToColor = (price) => {
  if (price < 0) {
    return "green";
  } else if (price === 0 || price === "") {
    return "black";
  } else if (price > 0) {
    return "red";
  }
};

const heyuename = ref("请选择合约");
const typeIndex = ref(0);
const selectHeyue = (index) => {
  typeIndex.value = index;
  heyuename.value =
    store.state.contract.minList[index].contract_type_title +
    store.state.contract.minList[index].contract_limit_limit +
    "倍";
  yu_order.amount = store.state.contract.minList[index].balance;
  yu_order.limit = parseFloat(
    yu_order.amount /
      marketDataFormat(
        store.state.market.stock_new_info.f43,
        store.state.market.stock_new_info.f59
      )
  ).toFixed(2);
  yu_order.order_id = store.state.contract.minList[index].order_id;
};

const priceToFormat = (price) => {
  return (price * 0.001).toFixed(2);
};

const timeToFormat = (timeStr) => {
  timeStr = timeStr.toString();
  return timeStr.replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2");
};

const updateStrIcon = (price) => {
  if (price > 0) {
    return "+" + price;
  } else {
    return price;
  }
};
const gotrade = (path, name, code, prefix) => {
  $router.push({
    path,
    query: {
      code: code,
      title: name,
      prefix: prefix,
    },
  });
};
const reloadPage = () => {
  window.location.reload();
};
</script>
<style lang="scss" scoped>
.v-list-item__content {
  overflow: inherit !important;
}

.sheet-top {
  padding: 12px 13px 30px 13px;
  font-size: 17px;
  line-height: 25px;

  img {
    width: 24px;
  }

  .sheet-sure {
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 700;
    color: #2c2e3a;
  }
}

.type-list {
  padding: 0 25px 0 10px;
  width: 100vw;

  h3 {
    font-size: 14px;
    color: #2c2e3a;

    span {
      color: #fb5c39;
    }
  }

  p {
    font-size: 12px;
    color: #7f829a;
  }

  .list-select {
    width: 15px;
  }
}

.v-slide-group__container {
  .v-slide-group-item--active {
    line-height: 13px;
    color: #000;
    font-size: 13px;
    z-index: 3;
    font-weight: bold;
    color: rgb(48, 48, 48);

    .v-tab__slider {
      width: 10px;
      align-items: center;
    }
  }

  .v-slide-group-item--active::after {
    .v-btn__overlay {
      color: red !important;
    }
  }
}

.v-tab--selected::after {
  color: red !important;
}

table {
  width: 100%;
  height: auto;
  padding: 0px 10px 0px 10px;

  .tr-list {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }

  .cutUp {
    display: flex;
    justify-content: flex-end;

    img {
      width: 20px;
    }
  }

  .tr-one {
    p {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #000;
    }

    span {
      font-size: 8px;
      // background-color: #f33;
      border-radius: 2px;
      // color: #fff;
    }
  }

  .tr-two {
    .tr-two-number {
      font-size: 12px;
      font-weight: 600;
      color: #000;
    }
  }

  .tr-three {
    span {
      text-align: center;
      // width: ;
      border-radius: 4px;
      font-size: 12px;
      padding: 2px 4px;
      font-size: 12px;
      // font-weight: 600;
      // color: red;
    }
  }

  th {
    width: 33.3%;
    color: #8f8f94;
    font-size: 12px;
    line-height: 20px;
    padding: 1px 0 0px 0;
  }

  td {
    width: 33%;
    font-size: 12px;
  }
}

.table-box {
  p {
    padding: 10px;
    color: rgb(199, 199, 199);
    font-size: 15px;
    position: relative;
  }

  .active-tab {
    font-size: 15px;
    font-weight: bold;
    color: rgb(48, 48, 48);
  }

  .active-tab::after {
    position: absolute;
    bottom: 0;
    content: "";

    width: 12px;
    height: 6px;
    border-radius: 100px;
    background-color: rgb(251, 92, 57);
    left: calc(50% - 6px);
  }
}

.sure-btn {
  background-color: #fb5c39;
  border-radius: 5px;
  width: 150px;
  align-items: center;
  line-height: 35px;
  color: #fff;
}

.cut-detail {
  border: solid 1px #c8c7cc;
  letter-spacing: 0.5px;
  color: #000;
  border-radius: 10px;
  width: 40%;
  line-height: 25px;

  p {
    width: 50%;
    text-align: center;
  }

  p:first-child {
    border-right: solid 1px #c8c7cc;
  }
}

.records-list {
  font-size: 12px;
  line-height: 25px;

  p {
    width: 33%;
  }

  p:last-child {
    text-align: right;
  }
}

.new-box {
  height: 280px;
  overflow-y: scroll;
}

.controls-right {
  overflow-y: scroll;
  width: 50%;
  height: auto;
}

.component-box {
  padding-top: 10px;

  p {
    width: 23%;
    line-height: 30px;
    background-color: #eee;
    text-align: center;
    font-size: 14px;
    align-items: center;
    border-radius: 4px;
    text-align: center;
  }
}

.input-box {
  // width: 300px;
  // height: 50px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
}

::v-deep .v-input--horizontal .v-input__append {
  margin-inline-start: 0;
}

::v-deep .v-text-field input.v-field__input {
  min-height: 20px !important;
  padding: 5px 0 !important;
  text-align: center;
  width: 100%;
}

.v-field__input {
  padding: 10px 0 !important;
}

.v-input--horizontal .v-input__append {
  margin-inline-start: 0;
}

.up-num {
  width: 25px;
  height: 100%;
}

.down-num {
  width: 25px;
  display: block;
  border-right: solid 1px #dcdcdc;
  height: 100%;
  display: flex;
  align-items: center;
}

.up-down-number {
  color: #303133;
  font-size: 12px;
  margin: 8px 0;
}

.controls-box {
  width: 100%;
  padding: 0 10px;
}

.controls-left {
  width: 49%;
  border-right: solid 0.5px #dcdcdc;
  padding-right: 5px;
  margin-right: 5px;
}

.contracts-box {
  border: solid 0.5px #dcdcdc;
  border-radius: 4px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    padding: 6px 0;
    width: 80%;
    text-align: center;
    position: relative;
    border-right: solid 0.5px #dcdcdc;
    display: block;
    height: 100%;
    background: none;
    opacity: 1;
    font-size: 13px;
  }

  img {
    width: 15px;
    margin-left: 6px;
    // width: 20%;
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    // align-items: center;
    // height: 30px;
  }
}

.buy-sell-box {
  position: relative;
  width: 100%;

  .buy-box {
    color: #8f8f94;
    font-weight: 700;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: #f0f0f0;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    background: #fb5c39;
    color: #fff;
    font-weight: 700;
    text-align: center;
  }

  .sell-box {
    color: #8f8f94;
    font-weight: 700;
    width: 50%;
    height: 35px;
    line-height: 35px;
    background-color: #f0f0f0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    text-align: center;
  }

  .parallelogram {
    position: absolute;
    left: calc(50% - 7px);
    top: 0;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 13px;
    height: 37px;
    background: #fff;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }
}

.new-title-box {
  padding: 10px;
  align-content: center;

  p {
    font-size: 14px;
    font-family: PingFang SC;
    letter-spacing: 0.5px;
    width: 70%;
    text-align: left;

    span {
      color: #1aad19;
    }
  }

  img {
    width: 27px;
    margin: 0 5px;
  }
}

.refresh-data {
  width: 22px;
  margin-right: 20px;
}

.hores-race-lamp {
  background: #fdf6ec;
  padding: 10px;

  img {
    width: 18px;
  }

  p {
    color: #f90;
  }
}

.row-tab-box {
  padding: 15px 10px;
  border-bottom: 2px solid #f5f5f5;

  h2 {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 700;
    color: #2c2e3a;
  }

  p {
    font-size: 14px;
    color: #a4a4a4;
    text-align: right;
  }

  span {
    color: #fb5c39;
  }

  .img-right {
    margin-left: 15px;
    width: 7px;
  }

  .img-search {
    width: 19px;
    margin-left: 15px;
  }
}
</style>
