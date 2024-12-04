<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>
        <h2>{{ title }}（{{ showSymbolCode }}）</h2>
      </template>
      <template v-slot:headerRight>
        <img class="refresh" src="../../assets/img/refresh.png" alt="" />
      </template>
    </page-header>

    <div
      class="w-50 mx-auto mt-3 d-flex"
      :class="
        'text-' + watchStringToColor(store.state.market.stock_new_info.f170)
      "
    >
      <div
        class="w-50 text-h5 font-weight-bold d-flex justify-center align-center"
      >
        {{
          marketDataFormat(
            store.state.market.stock_new_info.f43,
            store.state.market.stock_new_info.f59
          )
        }}
      </div>
      <div class="w-50 text-body-2">
        <div>
          {{
            marketDataFormat(
              store.state.market.stock_new_info.f169,
              store.state.market.stock_new_info.f59
            )
          }}
        </div>
        <div>
          {{
            marketDataFormat(
              store.state.market.stock_new_info.f170,
              store.state.market.stock_new_info.f59
            ) + "%"
          }}
        </div>
      </div>
    </div>
    <div class="mt-4">
      <v-tabs
        v-model="currentItem"
        fixed-tabs
        @update:modelValue="userChangePeroid"
      >
        <v-tab
          v-for="item in items"
          :key="item"
          :text="item"
          :value="item"
          min-width="70"
        ></v-tab>

        <v-menu v-if="more.length">
          <template v-slot:activator="{ props }">
            <v-btn
              class="align-self-center me-4"
              height="100%"
              rounded="0"
              variant="plain"
              v-bind="props"
            >
              {{ showFiveTitle }}

              <v-icon icon="mdi-menu-down" end></v-icon>
            </v-btn>
          </template>

          <v-list class="bg-grey-lighten-3">
            <v-list-item
              v-for="item in more"
              :key="item"
              :title="item"
              @click="changeFiveKile(item)"
            ></v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </div>
    <div id="app" ref="DivApp" class="">
      <div>
        <div id="kline" ref="DivKLine" class="hqchart"></div>
      </div>
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
          @click="
            goTrading('/Trading', title, HQChartData.Symbol, HQChartData.Symbol)
          "
          >交易</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "../../components/topWrap.vue";
import HQChart from "hqchart";

import "hqchart/src/jscommon/umychart.resource/css/tools.css";
import "hqchart/src/jscommon/umychart.resource/font/iconfont.css";

import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { store } from "@/store";
import {
  symbolChartCodeFormat,
  symbolCodeFormat,
  extractTxtValue,
  marketDataFormat,
} from "@/utils/helper";

const periodToKlt = { 0: "d", 1: "w", 2: "m" };
const klt = ref("d");
const title = ref("");

const items = ref(["分时", "日线", "周线", "月线"]);
const more = ref(["5分", "15分", "30分", "60分"]);
const currentItem = ref("");
const showFiveTitle = ref("5分钟");
const route = useRoute();
const router = useRouter();
const showSymbolCode = ref("");
const collect = ref(true);

const userChangePeroid = (item) => {
  if (item == "分时") {
    ChangeMinute();
  } else if (item == "日线") {
    ChangePeriod(0);
  } else if (item == "周线") {
    ChangePeriod(1);
  } else if (item == "月线") {
    ChangePeriod(2);
  }
};

const changeFiveKile = (id) => {
  if (id == "15分") {
    showFiveTitle.value = id;
    ChangePeriod(6);
  } else if (id == "30分") {
    showFiveTitle.value = id;
    ChangePeriod(7);
  } else if (id == "60分") {
    showFiveTitle.value = id;
    ChangePeriod(8);
  } else if (id == "5分") {
    showFiveTitle.value = id;
    ChangePeriod(5);
  }
};

function DefaultData() {}

DefaultData.GetKLineOption = function () {
  //K线配置信息
  var option = {
    Type: "历史K线图", //创建图形类型

    //窗口指标
    Windows: [
      { Index: "均线", Modify: true, Change: false },
      // { Index: "MA", Modify: true, Change: true },
      { Index: "VOL", Modify: true, Change: true, Close: true },
      { Index: "MACD", Modify: false, Change: false, IsDrawTitleBG: true },
    ],

    IsAutoUpdate: true, //是自动更新数据
    AutoUpdateFrequency: 10000, //数据更新频率
    IsShowRightMenu: false, //右键菜单
    ToolbarButtonStyle: 1,

    IsApiPeriod: true, //复权,周期都使用后台数据

    //CorssCursorTouchEnd:true,
    //StepPixel:5,        //移动一个K线需要的手势移动的像素(默认4)
    //ZoomStepPixel:8,    //缩放一次,2个手指需要移动的间距像素(默认5)

    //K线设置
    KLine: {
      DragMode: 1, //拖拽模式 0 禁止拖拽 1 数据拖拽 2 区间选择
      Right: 0, //复权 0 不复权 1 前复权 2 后复权
      Period: 0, //周期 0 日线 1 周线 2 月线 3 年线
      MaxReqeustDataCount: 1000, //数据个数
      MaxRequestMinuteDayCount: 10, //分钟数据取5天
      PageSize: 40, //一屏显示多少数据
      IsShowTooltip: false, //是否显示 div K线提示信息 (手机端要填false)
      DrawType: 0, //K线类型 0=实心K线柱子 1=收盘价线 2=美国线 3=空心K线柱子 4=收盘价面积图
      RightSpaceCount: 1,
    },

    //标题设置
    KLineTitle: {
      IsShowName: true, //不显示股票名称
      IsShowSettingInfo: true, //不显示周期/复权
    },

    //边框
    Border: {
      Left: 1, //左边间距
      Right: 30, //右边间距
      Bottom: 25, //底部间距
      Top: 25, //顶部间距
    },

    //子框架设置
    Frame: [
      // {
      //   SplitCount: 3,
      //   IsShowLeftText: false,
      //   Height: 8,
      //   Custom: [{ Type: 0, Position: "right" }],
      // },
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

      // { SplitCount: 2, IsShowLeftText: false, Height: 2 },
      { SplitCount: 2, StringFormat: 0, IsShowLeftText: false },
      { SplitCount: 2, StringFormat: 0, IsShowLeftText: false },
    ],

    //扩展图形
    ExtendChart: [
      //{Name:'KLineTooltip' }  //手机端tooltip
    ],
  };

  return option;
};

DefaultData.GetMinuteOption = function () {
  //分时图配置信息
  var option = {
    Type: "分钟走势图", //创建图形类型
    //Type:'分钟走势图横屏',

    //窗口指标
    Windows: [
      { Index: "MACD", Modify: true, Change: false, Close: false },
      // { Index: "涨跌趋势", Modify: false, Change: false },
    ],

    IsAutoUpdate: true, //是自动更新数据
    AutoUpdateFrequency: 1000, //数据更新频率
    DayCount: 1, //1 最新交易日数据 >1 多日走势图
    IsShowRightMenu: true, //是否显示右键菜单

    //CorssCursorInfo:{  Left:2, Right:2, Bottom:1,RightTextFormat:1 },
    CorssCursorInfo: {
      Left: 2,
      Right: 1,
      Bottom: 1,
      RightTextFormat: 0,
      IsFixXLastTime: true,
      RightButton: { Enable: true },
      PriceFormatType: 0,
      DataFormatType: 0,
    },

    MinuteLine: {
      IsDrawAreaPrice: true, //是否画价格面积图
      // IsShowAveragePrice: true, //不显示均线
    },

    MinuteTitle: {
      IsShowTime: true,
      IsShowName: true,
      IsShowDate: false,
      IsShowVolTitle: true,
    },

    //EnableBorderDrag:false,

    MinuteVol: {
      BarColorType: 1,
    },

    EnableBorderDrag: true,

    IsDrawPictureXY: true,

    SelectedChart: { EnableSelected: true, EnableMoveOn: true },

    EnableIndexChartDrag: true,

    EnableSelectRect: true,

    //边框
    Border: {
      Left: 1, //左边间距
      Right: 1, //右边间距
      Top: 25,
      Bottom: 25,
    },

    //子框架设置
    Frame: [
      {
        SplitCount: 5,
        Custom: [
          {
            Type: 1,
            Position: "left",
            LineType: 0,
            Data: [
              {
                Value: 15.8,
                Color: "rgb(0,34,255)",
                TextColor: "rgb(255,255,255)",
              },
            ],
          },
        ],
      },
      { SplitCount: 3 },
    ],

    //扩展图形
    ExtendChart: [
      //{Name:'MinuteTooltip' }  //手机端tooltip
    ],
  };

  return option;
};

HQChart.Chart.MARKET_SUFFIX_NAME.GetMarketStatus = function (symbol) {
  var nowDate = new Date();
  var day = nowDate.getDay();
  var time = nowDate.getHours() * 100 + nowDate.getMinutes();

  if (day == 6 || day == 0) return 0; //周末

  //9:30 - 15:40
  if (time > 1530) return 0;
  if (time < 925) return 1;
  return 2;
};

let HQChartData = {
  Symbol: "0.000001", //代码
  Chart: null, //图形控件
};

if (route.query.prefix) {
  HQChartData.Symbol = route.query.prefix + "." + route.query.code;
} else {
  HQChartData.Symbol = route.query.code;
}

onMounted(() => {
  if (route.query.title) {
    title.value = route.query.title;
  }
  const parts = HQChartData.Symbol.split(".");
  showSymbolCode.value = symbolCodeFormat(parts[1], parts[0]);

  getNewStockInfo();
  window.onresize = () => {
    OnSize();
  };

  OnSize(); //子组件的mounted在父组件的mounted之前执行了
  // CreateKLineChart(0);
  ChangeMinute();
  if (store.getters.token) {
    store.dispatch("watchlist/get", HQChartData.Symbol);
    if (store.state.watchlist.status) {
      collect.value = true;
    }
  }
});

onUnmounted(() => {
  // HQChart.Chart.ChartDestroy();
  if (HQChartData.Chart) {
    HQChartData.Chart.ChartDestroy();
    HQChartData.Chart = null;
  }
});

var DivApp = ref(null);
var DivKLine = ref(null);
var DivButtons = ref(null);

//内部接口
const OnSize = function () {
  var app = DivApp.value;
  //获取屏幕大小 动态设置K线的div大小
  // var height = window.innerHeight;
  var height = 554;
  var width = document.documentElement.clientWidth;
  var kline = DivKLine.value;
  kline.style.width = width + "px";
  kline.style.height = height - 60 + "px";

  if (HQChartData.Chart) HQChartData.Chart.OnSize();
};

const ClearChart = function () {
  if (HQChartData.Chart) {
    HQChartData.Chart.ChartDestroy();
    HQChartData.Chart = null;
  }

  var divKLine = document.getElementById("kline");
  while (divKLine.hasChildNodes()) {
    divKLine.removeChild(divKLine.lastChild);
  }
};

//创建走势图
const CreateKLineChart = function (period) {
  ClearChart();

  var option = DefaultData.GetKLineOption();
  option.Symbol = HQChartData.Symbol;
  option.Period = period;
  option.KLine.Period = period;

  var divKLine = document.getElementById("kline");
  var chart = HQChart.Chart.JSChart.Init(divKLine);
  option.NetworkFilter = (data, callback) => {
    KLineNetworkFilter(data, callback);
  };
  chart.SetOption(option);
  HQChartData.Chart = chart;
  HQChart.Chart.JSChart.GetResource().FrameLogo.Text = null;
};

const ChangePeriod = function (
  period //K线图切换周期
) {
  if (period < 3) {
    updateKlt(period);
  } else {
    if (period == 4) {
      klt.value = 1;
    } else if (period == 5) {
      klt.value = 5;
    } else if (period == 6) {
      klt.value = 15;
    } else if (period == 7) {
      klt.value = 30;
    } else if (period == 8) {
      klt.value = 60;
    } else {
      klt.value = 15;
    }
  }
  CreateKLineChart(period);
  // if (IsKLineChart()) {
  //   // HQChartData.Chart.ChangePeriod(period);
  //   CreateKLineChart(period);
  // } else {
  //   CreateKLineChart(period);
  // }
};

const ChangeMinute = function () //分时图
{
  if (IsMinuteChart()) return;
  else {
    klt.value = 1;
    CreateMinuteChart();
  }
};

const ChangeSymbol = function (
  symbol //切换股票
) {
  HQChartData.Symbol = symbol;
  HQChartData.Chart.ChangeSymbol(HQChartData.Symbol);
};

const IsKLineChart = function () {
  if (!HQChartData.Chart || !HQChartData.Chart.JSChartContainer) return;
  return HQChartData.Chart.JSChartContainer.ClassName == "KLineChartContainer";
};

const IsMinuteChart = function () {
  if (!HQChartData.Chart || !HQChartData.Chart.JSChartContainer) return;
  return HQChartData.Chart.JSChartContainer.ClassName == "MinuteChartContainer";
};

const KLineNetworkFilter = function (data, callback) {
  data.PreventDefault = true; //设置hqchart不请求数据
  RequestHistoryData(data, callback);
  // HQData.HQData.NetworkFilter(data, callback);
};

const MinuteNetworkFilter = function (data, callback) {
  data.PreventDefault = true;
  if (data.Name == "MinuteChartContainer::RequestMinuteData") {
    RequestHoursMinuteData(data, callback, { PageSize: 100 });
  }
  // HQData.HQData.NetworkFilter(data, callback);
};

const RequestHoursMinuteData = (data, callback, option) => {
  store
    .dispatch("market/getStockKlineNew", {
      symbol: HQChartData.Symbol,
      klt: klt.value,
    })
    .then((d) => {
      let klineData = jsonToHQChartMinuteData(d.klines, "");
      let hqChartData = {
        stock: [
          {
            symbol: symbolChartCodeFormat(d.code, d.market),
            minute: klineData,
            name: d.name,
            yclose: d.prePrice,
            // date: d.split("-").join(""),
          },
        ],
        code: 0,
      };
      // stock_date.value = d.date;
      callback(hqChartData);
    });
  getNewStockInfo();
};
const jsonToHQChartMinuteData = (data, yClose) => {
  let newData = [];
  if (!data) {
    return newData;
  }
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
  store
    .dispatch("market/getStockKlineNew", {
      symbol: HQChartData.Symbol,
      klt: klt.value,
    })
    .then((d) => {
      let config = {};
      config.name = d.name;
      config.symbol = d.code;
      config.code = 0;
      let data = {};
      if (klt.value == "d" || klt.value == "w" || klt.value == "m") {
        data = GetDaySymbolDataFormat(d.klines, config);
      } else if (
        klt.value == 1 ||
        klt.value == 5 ||
        klt.value == 15 ||
        klt.value == 30 ||
        klt.value == 60
      ) {
        data = GetMinuteSymbolDataFormat(d.klines, config);
      }

      callback(data);
    });
  getNewStockInfo();
};

const GetMinuteSymbolDataFormat = (data, config) => {
  let newData = [];
  let yclose = 0;
  data.forEach(function (item) {
    let arr = item.split(",");
    const [date, time] = arr[0].split(" ");
    newData.push([
      date.replace(/-/g, ""),
      yclose,
      parseFloat(arr[1]),
      parseFloat(arr[3]),
      parseFloat(arr[4]),
      parseFloat(arr[2]),
      parseFloat(arr[5]),
      parseFloat(arr[6]),
      time.replace(":", ""),
    ]);
    yclose = parseFloat(arr[2]);
  });
  config.data = newData;
  return config;
};

const GetDaySymbolDataFormat = (data, config) => {
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

  config.data = newData;
  return config;
};

//创建分时图
const CreateMinuteChart = function () {
  ClearChart();

  var option = DefaultData.GetMinuteOption();
  option.Symbol = HQChartData.Symbol;

  var divKLine = document.getElementById("kline");
  var chart = HQChart.Chart.JSChart.Init(divKLine);
  option.NetworkFilter = (data, callback) => {
    MinuteNetworkFilter(data, callback);
  };
  chart.SetOption(option);
  HQChartData.Chart = chart;
  HQChart.Chart.JSChart.GetResource().FrameLogo.Text = null;
};
const updateKlt = (period) => {
  if (periodToKlt.hasOwnProperty(period)) {
    klt.value = periodToKlt[period];
  } else {
    klt.value = "d";
  }
};

const getNewStockInfo = () => {
  store.dispatch("market/getStockNewInfo", HQChartData.Symbol);
};
const toWanString = (number) => {
  let convertedNumber = (number / 10000).toFixed(2);
  return convertedNumber + "万";
};

const toYiString = (number) => {
  let convertedNumber = (number / 1_000_000_000).toFixed(2);
  return convertedNumber + "亿";
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
const goTrading = (path, name, code, prefix) => {
  router.push({
    path,
    query: {
      code: code,
      title: name,
      prefix: prefix,
    },
  });
};
const pushMeQuote = () => {
  if (!store.getters.token) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请现登录！",
    });
    router.push("Login");
  }

  store
    .dispatch("watchlist/push", {
      code: parseFloat(HQChartData.Symbol),
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
.test button {
  margin-right: 5px;
  background-color: #fb5c39;
  color: #fff;
}
</style>
