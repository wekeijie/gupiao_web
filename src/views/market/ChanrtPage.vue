<template>
  <div class="chanrt-box">
    <page-header>
      <template v-slot:headerCenter>
        <h2>{{ title }}（{{ symbolCodeFormat(Symbol, prefix) }}）</h2>
        <p v-show="store.state.market.stock_new_info.f292 != 2">
          <span>{{
            extractTxtValue(store.state.market.stock_new_info.f292)
          }}</span>
        </p>
      </template>
      <template v-slot:headerRight>
        <img
          class="refresh"
          src="../../assets/img/refresh.png"
          alt=""
          @click="resetDataKline"
        />
      </template>
    </page-header>
    <div
      class="flexCenter argument-box"
      :class="
        'text-' + watchStringToColor(store.state.market.stock_new_info.f170)
      "
    >
      <h2>
        {{
          marketDataFormat(
            store.state.market.stock_new_info.f43,
            store.state.market.stock_new_info.f59
          )
        }}
      </h2>
      <div>
        <p>
          {{
            marketDataFormat(
              store.state.market.stock_new_info.f169,
              store.state.market.stock_new_info.f59
            )
          }}
        </p>
        <p>
          {{
            marketDataFormat(
              store.state.market.stock_new_info.f170,
              store.state.market.stock_new_info.f59
            ) + "%"
          }}
        </p>
      </div>
    </div>
    <v-tabs grow v-model="model">
      <v-tab
        @click="ChangeChartTab(item.Name, index)"
        v-for="(item, index) in PeriodList"
        :key="index"
        >{{ item.Name }}</v-tab
      >
      <div style="width: 80px; height: 20px">
        <v-select
          v-model="select"
          :hint="`${select.Name}, ${select.Value}`"
          :items="more"
          item-title="Name"
          item-value="Value"
          label="Select"
          persistent-hint
          return-object
          single-line
          density="compact"
          hide-details
          loader-height="5"
          height="auto"
        ></v-select>
      </div>
    </v-tabs>
    <div id="app2">
      <!-- <div id="minute" ref="minute"></div> -->

      <div id="minuteChart" ref="minute" v-show="Minute.IsShow"></div>
      <div id="kline" ref="kline" v-show="Kline.IsShow"></div>
    </div>
    <div class="flexStart stati-box">
      <div class="stati-list">
        <p>最高</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f44,
            store.state.market.stock_new_info.f59
          )
        }}</span>
      </div>
      <div class="stati-list">
        <p>最低</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f45,
            store.state.market.stock_new_info.f59
          )
        }}</span>
      </div>
      <div class="stati-list">
        <p>涨停</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f51,
            store.state.market.stock_new_info.f59
          )
        }}</span>
      </div>
      <div class="stati-list">
        <p>跌停</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f52,
            store.state.market.stock_new_info.f59
          )
        }}</span>
      </div>
      <div class="stati-list">
        <p>今开</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f46,
            store.state.market.stock_new_info.f59
          )
        }}</span>
      </div>
      <div class="stati-list">
        <p>昨收</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f60,
            store.state.market.stock_new_info.f59
          )
        }}</span>
      </div>
      <div class="stati-list">
        <p>振幅</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f170,
            store.state.market.stock_new_info.f59
          ) + "%"
        }}</span>
      </div>
      <div class="stati-list">
        <p>换手率</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f168,
            store.state.market.stock_new_info.f59
          ) + "%"
        }}</span>
      </div>
      <div class="stati-list">
        <p>成交量</p>
        <span>{{
          toWanString(store.state.market.stock_new_info.f47) + "手"
        }}</span>
      </div>
      <div class="stati-list">
        <p>成交额</p>
        <span>{{ toYiString(store.state.market.stock_new_info.f48) }}</span>
      </div>
      <div class="stati-list">
        <p>市盈率</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f162,
            store.state.market.stock_new_info.f59
          ) + "%"
        }}</span>
      </div>
      <div class="stati-list">
        <p>市净率</p>
        <span>{{
          marketDataFormat(
            store.state.market.stock_new_info.f167,
            store.state.market.stock_new_info.f59
          ) + "%"
        }}</span>
      </div>
    </div>

    <div class="flexBetween trading-box">
      <div @click="pushMeQuote">
        <img
          src="../../assets/img/selef.png"
          alt=""
          v-if="store.state.watchlist.status"
        />
        <img src="../../assets/img/selefNo.png" alt="" v-else />
        <p>自选</p>
      </div>
      <!-- <div
        class="trading-btn"
        @click="goTrading('/Trading', title, Symbol, prefix_symbol)"
      >
        交易
      </div> -->
      <div>
        <v-btn rounded="0" class="rounded-s-pill px-10" size="large" to="/"
          >首页</v-btn
        >
        <v-btn
          color="#fb5c39"
          class="text-white rounded-e-pill px-10"
          rounded="0"
          size="large"
          @click="goTrading('/Trading', title, Symbol, prefix_symbol)"
          >交易</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import HQChart from "hqchart";

import "hqchart/src/jscommon/umychart.resource/css/tools.css";
import "hqchart/src/jscommon/umychart.resource/font/iconfont.css";

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
  onUnmounted,
} from "vue";

import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import request from "@/utils/request";
import { store } from "@/store";
import {
  symbolCodeFormat,
  extractTxtValue,
  marketDataFormat,
} from "@/utils/helper";

const $router = useRouter();
const $route = useRoute();
function DefaultData() {}
const select = ref({ Name: "15分钟", Value: 5 });
const collect = ref(true);
const toggleValue = ref("trade");

const TabTextIndex = ref(0);
const Name = ref("分时");
const Symbol = ref("300466");
const title = ref("");
const is_open = ref(false);
const last_update_date = ref();

const more = ref([
  { Name: "5分钟", Value: 5 },
  { Name: "15分钟", Value: 6 },
  { Name: "30分钟", Value: 7 },
  { Name: "60分钟", Value: 8 },
]);
const PeriodList = ref([
  { Name: "分时", Value: 1 },
  { Name: "日线", Value: 0 },
  { Name: "周线", Value: 1 },
  { Name: "月线", Value: 2 },
]);
watch(
  () => select.value,
  (newVlue, oldValue) => {
    ChangeChartTab(select.value.Name, select.value.Value);
  }
);

DefaultData.GetKlineOption = function (symbol) {
  let data = {
    Type: "历史K线图",
    Windows: [
      { Index: "均线", Modify: false, Change: false },
      { Index: "VOL", Modify: false, Change: false, IsDrawTitleBG: true },
      { Index: "MACD", Modify: false, Change: false, IsDrawTitleBG: true },
    ], //窗口指标
    Symbol: symbol,
    IsAutoUpate: false, //是自动更新数据

    IsShowRightMenu: false, //右键菜单

    KLine: {
      DragMode: 3, //拖拽模式 0 禁止拖拽 1 数据拖拽 2 区间选择
      Right: 1, //复权 0 不复权 1 前复权 2 后复权
      Period: 0, //周期 0 日线 1 周线 2 月线 3 年线
      MaxReqeustDataCount: 1000, //日线数据最近1000天
      MaxRequestMinuteDayCount: 15, //分钟数据最近15天
      PageSize: 50, //一屏显示多少数据
      IsShowTooltip: false, //是否显示K线提示信息
    },

    //标题设置
    KLineTitle: {
      IsShowName: false, //不显示股票名称
      IsShowSettingInfo: false, //不显示周期/复权
    },

    //边框
    Border: {
      Left: 20, //左边间距
      Right: 20, //右边间距
      Top: 1,
      Bottom: 1,
    },

    //子框架设置
    Frame: [
      {
        SplitCount: 3,
        IsShowLeftText: false, //不显示左边刻度文字
        IsShowRightText: true, //显示右边刻度文字
        Custom: [
          {
            Type: 0,
            Position: "left",
          },
        ],
      },
      { SplitCount: 2, StringFormat: 0 },
      { SplitCount: 2, StringFormat: 0 },
    ],
  };
  return data;
};

DefaultData.GetMinuteOption = function (symbol) {
  let data = {
    Type: "分钟走势图", //历史分钟走势图
    Symbol: symbol,
    IsAutoUpate: false, //是自动更新数据
    IsShowRightMenu: false, //右键菜单
    IsShowCorssCursorInfo: false, //是否显示十字光标的刻度信息
    DayCount: 1,
    //边框
    Border: {
      Left: 1,
      Right: 1, //右边间距
      Top: 25,
      Bottom: 25,
    },
    //标题设置
    KLineTitle: {
      IsShowName: false, //不显示股票名称
      IsShowSettingInfo: false, //不显示周期/复权
    },

    //子框架设置,刻度小数位数设置
    Frame: [
      { SplitCount: 5, StringFormat: 0 },
      { SplitCount: 3, StringFormat: 0 },
    ],
  };
  return data;
};

DefaultData.GetPeriodData = function (name) {
  const mapPeriod = new Map([
    ["分时", { Value: 1, KLineShow: false, MinuteShow: true }],
    ["日线", { Value: 0, KLineShow: true, MinuteShow: false }],
    ["周线", { Value: 1, KLineShow: true, MinuteShow: false }],
    ["月线", { Value: 2, KLineShow: true, MinuteShow: false }],
    ["年线", { Value: 3, KLineShow: true, MinuteShow: false }],
    ["5分钟", { Value: 5, KLineShow: true, MinuteShow: false }],
    ["15分钟", { Value: 6, KLineShow: true, MinuteShow: false }],
    ["30分钟", { Value: 7, KLineShow: true, MinuteShow: false }],
    ["60分钟", { Value: 8, KLineShow: true, MinuteShow: false }],
  ]);
  if (!mapPeriod.has(name)) return null;

  return mapPeriod.get(name);
};
const Minute = ref({
  JSChart: null,
  IsShow: true,
  Option: DefaultData.GetMinuteOption(Symbol.value),
});
const Kline = ref({
  JSChart: null,
  IsShow: false,
  Option: DefaultData.GetKlineOption(Symbol.value),
});

const prefix_symbol = ref();
const stock_date = ref();
const prefix = ref(0);

var chart;

onMounted(() => {
  title.value = $route.query.title;
  Symbol.value = $route.query.code;
  if ($route.query.prefix) {
    prefix.value = $route.query.prefix;
    prefix_symbol.value = $route.query.prefix + "." + Symbol.value;
  } else {
    prefix_symbol.value = Symbol.value;
  }
  getNewStockInfo();
  OnSize();
  // CreateKLineChart()

  ChangeChartTab(Name.value, TabTextIndex.value);
  // store.dispatch("market/getStockInfo", prefix_symbol.value);

  if (store.getters.token) {
    store.dispatch("watchlist/get", prefix_symbol.value);
    if (store.state.watchlist.status) {
      collect.value = true;
    }
  }

  chart.ChartDestroy();
});

const resetDataKline = () => {
  ChangeChartTab(Name.value, TabTextIndex.value);
};

onUnmounted(() => {
  chart.ChartDestroy();
});

const getNewStockInfo = () => {
  store.dispatch("market/getStockNewInfo", prefix_symbol.value);
};

let klineRef = ref();
let minuteRef = ref();

const OnSize = () => {
  var chartHeight = 354;
  var chartWidth = window.innerWidth;

  klineRef.value = document.getElementById("kline");
  klineRef.value.style.width = chartWidth + "px";
  klineRef.value.style.height = chartHeight + "px";

  minuteRef.value = document.getElementById("minuteChart");
  minuteRef.value.style.width = chartWidth + "px";
  minuteRef.value.style.height = chartHeight + "px";
};

const CreateMinuteChart = () =>
  //创建日线图
  {
    if (Minute.value.JSChart) return;
    Minute.value.Option.Symbol = Symbol.value;
    chart = HQChart.Chart.JSChart.Init(minuteRef.value);
    Minute.value.Option.NetworkFilter = (data, callback) => {
      MinuteNetworkFilter(data, callback);
    };
    chart.SetOption(Minute.value.Option);
    Minute.value.JSChart = chart;
  };

const CreateKLineChart = () =>
  //创建K线图
  {
    if (Kline.value.JSChart) return;
    Kline.value.Option.Symbol = Symbol.value;
    chart = HQChart.Chart.JSChart.Init(klineRef.value);
    Kline.value.Option.NetworkFilter = (data, callback) => {
      NetworkFilter(data, callback);
    };
    chart.SetOption(Kline.value.Option);
    // chart.AddEventCallback({event:JSCommon.JSCHART_EVENT_ID.ON_CLICK_INDEXTITLE, callback:this.OnClickIndexTitle});//点击事件通知回调
    Kline.value.JSChart = chart;
  };
const cutTime = () => {
  // console.log('time1321')
};

const ChangeChartTab = (name, index) => {
  // this.IsLinetype = false;
  // this.IsLinetype = false;
  // this.TabTextIndex = index;
  var period = DefaultData.GetPeriodData(name);
  if (!period) return;
  if (period.KLineShow) ChangeKLinePeriod(period.Value);
  Kline.value.IsShow = period.KLineShow;
  if (period.MinuteShow) ChangeMinutePeriod(period.Value);
  Minute.value.IsShow = period.MinuteShow;
};

//走势图多日切换
const ChangeMinutePeriod = (period) => {
  if (!Minute.value.JSChart) {
    //不存在创建
    Minute.value.Option.DayCount = period;
    CreateMinuteChart();
  } else {
    // if (period == 1) {
    //   this.IsFiveminute = false;

    // } else if (period == 5) {
    //   this.IsFiveminute = true;
    // }
    OnSize();
    Minute.value.JSChart.OnSize();
    Minute.value.JSChart.ChangeDayCount(period);
  }
};

const ChangeKLinePeriod = (
  period //历史K线周期切换
) => {
  if (!Kline.value.JSChart) {
    //不存在创建
    Kline.value.Option.KLine.Period = period;
    CreateKLineChart();
  } else {
    Kline.value.JSChart.ChangePeriod(period);
  }
};

//切换代码
// data.KLine.Option.Symbol = '000001.sz'; //000001.sz 平安银行 600999.sh 招商银行

const NetworkFilter = (data, callback) => {
  switch (data.Name) {
    case "KLineChartContainer::ReqeustHistoryMinuteData": //分钟全量数据下载
      ReqeustHistoryMinuteData(data, callback, { PageSize: 50 });
      break;
    case "KLineChartContainer::RequestHistoryData": //日线全量数据下载
      RequestHistoryData(data, callback);
      break;
    // case 'KLineChartContainer::RequestMinuteRealtimeData':  //分钟实时数据更新
    //     this.RequestMinuteRealtimeData(data,callback);
    //     break;
    // case 'KLineChartContainer::RequestRealtimeData':        //日线实时数据更新
    //     this.RequestRealtimeData(data,callback);
    //     break;
  }
};

const ReqeustHistoryMinuteData = (data, callback, option) => {
  store
    .dispatch("market/getStockKlineNew", {
      symbol: prefix_symbol.value,
      klt: 1,
    })
    .then((d) => {
      let klineData = jsonToHQChartKLineMinuteData(d.klines);
      let hqChartData = { code: 0, data: klineData };
      hqChartData.symbol = Symbol.value;
      hqChartData.name = title.value;
      data.Self.PageSize = option.PageSize;
      callback(hqChartData);
    });
  // request.post("market/stock", { symbol: prefix_symbol.value }).then((d) => {
  //   let klineData = jsonToHQChartKLineMinuteData(d.items);
  //   let hqChartData = { code: 0, data: klineData };
  //   hqChartData.symbol = d.code + ".sh";
  //   hqChartData.name = d.name;
  //   data.Self.PageSize = option.PageSize;
  //   callback(hqChartData);
  // });
};

const jsonToHQChartKLineMinuteData = (data) => {
  let new_arr = [];
  data.forEach(function (item) {
    let arr = item.split(",");
    let [date, time] = arr[0].split(" ");
    let formatDate = date.replace(/-/g, "");
    let formatTime = time.replace(/:/g, "");
    new_arr.push([
      parseInt(formatTime),
      parseFloat(arr[1]),
      parseFloat(arr[3]),
      parseFloat(arr[4]),
      parseFloat(arr[1]),
      parseInt(arr[5]),
      parseInt(arr[6]),
      parseFloat(arr[4]),
      parseInt(formatDate),
      // 'yclose':parseFloat(arr[2])
    ]);
  });
  return new_arr;
};

const MinuteNetworkFilter = (data, callback) => {
  switch (data.Name) {
    case "MinuteChartContainer::RequestMinuteData": //分钟全量数据下载
      RequestMinuteData(data, callback, { PageSize: 100 });
      break;
    // case 'KLineChartContainer::RequestMinuteRealtimeData':  //分钟实时数据更新
    //     this.RequestMinuteRealtimeData(data,callback);
    //     break;
    case "MinuteChartContainer::RequestHistoryMinuteData":
      RequestHistoryMinuteData(data, callback, { PageSize: 100 });
      break;
  }
};

const RequestHistoryMinuteData = (data, callback, option) => {
  request
    .post("market/fiveStock", { symbol: prefix_symbol.value })
    .then((d) => {
      let klineData = jsonToFiveHQChartMinuteData(d, d["prePrice"]);
      let hqChartData = {
        symbol: d.code + ".sh",
        name: d.name,
        data: klineData,
        code: 0,
      };
      callback(hqChartData);
    });
};

const RequestMinuteData = (data, callback, option) => {
  store
    .dispatch("market/getStockKlineNew", {
      symbol: prefix_symbol.value,
      klt: 1,
    })
    .then((d) => {
      let klineData = jsonToHQChartMinuteData(d.klines, "");
      let hqChartData = {
        stock: [
          {
            symbol: Symbol.value + ".sh",
            minute: klineData,
            name: title.value,
            yclose: d.prePrice,
            // date: d.split("-").join(""),
          },
        ],
        code: 0,
      };
      // stock_date.value = d.date;
      checkDateStatus();
      callback(hqChartData);
    });
  // request.post("market/stock", { symbol: prefix_symbol.value }).then((d) => {
  //   let klineData = jsonToHQChartMinuteData(d, d["prePrice"]);
  //   let hqChartData = {
  //     stock: [
  //       {
  //         symbol: d.code + ".sh",
  //         minute: klineData,
  //         name: d.name,
  //         yclose: d["prePrice"],
  //         date: d.date.split("-").join(""),
  //       },
  //     ],
  //     code: 0,
  //   };
  //   stock_date.value = d.date;
  //   checkDateStatus();
  //   callback(hqChartData);
  // });
};

const jsonToFiveHQChartMinuteData = (data, yClose) => {
  let newData = [];
  data.items.forEach(function (item) {
    item.date = item.date.replace(/-/g, "");
    item.yClose = yClose;
    let temp = [];
    item.minute.forEach(function (value) {
      let arr = value.split(",");
      let [date, time] = arr[0].split(" ");
      let formatDate = date.replace(/-/g, "");
      let formatTime = time.replace(/:/g, "");
      temp.push([
        parseInt(formatTime),
        parseFloat(arr[1]),
        parseFloat(arr[3]),
        parseFloat(arr[4]),
        parseFloat(arr[1]),
        parseInt(arr[5]),
        parseInt(arr[6]),
        parseFloat(arr[4]),
        parseInt(formatDate),
        // 'yclose':parseFloat(arr[2])
      ]);
      yClose = parseFloat(arr[2]);
    });
    item.minute = temp;
    newData.push(item);
  });
  return newData;
};

const jsonToHQChartMinuteData = (data, yClose) => {
  let newData = [];
  data.forEach(function (item) {
    let arr = item.split(",");
    let [date, time] = arr[0].split(" ");
    let formatDate = date.replace(/-/g, "");
    let formatTime = time.replace(/:/g, "");

    newData.push({
      date: parseInt(formatDate),
      time: parseInt(formatTime),
      open: parseFloat(arr[1]),
      high: parseFloat(arr[3]),
      low: parseFloat(arr[4]),
      price: parseFloat(arr[1]),
      // vol: parseInt(arr[5]),
      amount: parseInt(arr[6]),
      avprice: parseFloat(arr[4]),
      // 'yclose':parseFloat(arr[2])
    });

    // yClose = arr[1]
  });
  return newData;
};

const RequestHistoryData = (data, callback) => {
  // request.post("market/dayKLine", { symbol: prefix_symbol.value }).then((d) => {
  //   let config = {};
  //   config.name = d.name;
  //   config.symbol = d.code;
  //   resetDayFotmat(d, callback, config);
  // });
  store
    .dispatch("market/getStockKlineNew", {
      symbol: prefix_symbol.value,
      klt: "d",
    })
    .then((d) => {
      let config = {};
      config.name = title.value;
      config.symbol = Symbol.value;
      resetDayFotmat(d.klines, callback, config);
    });
};

const resetDayFotmat = (data, callback, config) => {
  let newData = [];
  let yclose = null;
  data.forEach(function (item) {
    let arr = item.split(",");
    newData.push([
      arr[0].split("-").join(""),
      yclose,
      parseFloat(arr[1]),
      parseFloat(arr[3]),
      parseFloat(arr[4]),
      parseFloat(arr[2]),
      parseFloat(arr[7]),
      parseFloat(arr[8]),
    ]);
    yclose = parseFloat(arr[2]);
  });
  config.code = 0;
  config.data = newData;
  callback(config);
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

const toWanString = (number) => {
  let convertedNumber = (number / 10000).toFixed(2);
  return convertedNumber + "万";
};

const toYiString = (number) => {
  let convertedNumber = (number / 1_000_000_000).toFixed(2);
  return convertedNumber + "亿";
};

const pushMeQuote = () => {
  if (!store.getters.token) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请现登录！",
    });
    $router.push("Login");
  }

  store
    .dispatch("watchlist/push", {
      code: parseFloat(prefix_symbol.value),
      name: title.value,
      price: marketDataFormat(
        store.state.market.stock_new_info.f43,
        store.state.market.stock_new_info.f59
      ),
      percentage: marketDataFormat(
        store.state.market.stock_new_info.f170,
        store.state.market.stock_new_info.f59
      ),
    })
    .then((d) => {
      let status = store.state.watchlist.status ? 0 : 1;
      store.dispatch("watchlist/updateStatus", status);
      if (status) {
        store.dispatch("snackbar/success", {
          active: true,
          body: "关注成功！",
        });
      } else {
        store.dispatch("snackbar/success", {
          active: true,
          body: "已取消关注！",
        });
      }
    });
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
    last_update_date.value = stock_date.value;
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

const goTrading = (path, name, code, prefix) => {
  console.log(name, code, prefix);
  $router.push({
    path,
    query: {
      code: code,
      title: name,
      prefix: prefix,
    },
  });
};
</script>
<style scoped lang="scss">
::v-deep .v-field__input {
  margin: 0;
  padding: 0;
}

.chanrt-box {
  padding-bottom: 70px;
}

.trading-box {
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 10px 20px;
  background: #fff;

  p {
    font-size: 12px;
  }

  img {
    width: 19px;
  }

  .trading-btn {
    background-color: #fb5c39;
    color: #fff;
    border-radius: 28px;
    line-height: 45px;
    width: 80%;
    align-items: center;
    font-size: 18px;
    letter-spacing: 1px;
  }
}

.stati-box {
  flex-wrap: wrap;
  padding: 15px 0;
}

.stati-list {
  display: block;
  text-align: left;
  width: 33.3%;
  padding: 10px;

  p {
    font-size: 13px;
    color: #7a7e83;
    letter-spacing: 0.5px;
  }

  span {
    font-size: 13px;
    color: #000;
  }
}

.v-field--variant-filled .v-field__overlay {
  background: none;
}

.v-tab.v-tab {
  min-width: 14%;
}

.v-tab {
  width: 5%;
}

.argument-box {
  margin-top: 20px;

  h2 {
    font-size: 30px;
    margin-right: 20px;
  }

  p {
    font-size: 14px;
  }
}

.page-title {
  text-align: center;

  h2 {
    font-size: 17px;
    font-weight: 500;

    span {
      display: inline-block;
      margin-right: 4px;
      color: #fff;
      text-align: center;
      background-color: red;
      font-size: 8px;
      padding: 0px 4px;
      color: #fff;
      text-align: center;
      height: 14px;
      // margin-top: 4px;
    }
  }

  p {
    font-size: 12px;
    text-align: center;
  }
}

.refresh {
  width: 17px;
}

#minute {
  width: 100%;
  height: 286px;
}

#minuteChart {
  width: 100%;
  height: 286px;
}
</style>
