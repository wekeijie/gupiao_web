<template>
  <div class="chanrt-box">

    <page-header>
      <template v-slot:headerCenter>
        <h2> <span>sh</span> 上证指数（000001.sh）</h2>
        <p>休市中 08-25 15:59:33</p>
      </template>
      <template v-slot:headerRight>
        <img class="refresh" src="../../assets/img/refresh.png" alt="" />
      </template>
    </page-header>
    <div class="flexCenter argument-box" :class="2 > 1 ? 'roseColor' : 'fallColor'">
      <h2>3064.07</h2>
      <div>
        <p>-18.17</p>
        <p>-0.59%</p>
      </div>
    </div>
    <v-tabs grow v-model="model">
      <v-tab @click='ChangeChartTab(item.Name, index)' v-for="item, index in PeriodList" :key="index">{{ item.Name
      }}</v-tab>
      <div style="width: 80px;height: 20px;">
        <v-select v-model="select" :hint="`${select.Name}, ${select.Value}`" :items="more" item-title="Name"
          autofocus="false" item-value="Value" label="Select" persistent-hint return-object single-line density="compact"
          hide-details loader-height="5" height="auto"></v-select>
      </div>
    </v-tabs>
    <div id="app2">
      <!-- <div id="minute" ref="minute"></div> -->

      <div id="minuteChart" ref="minute"></div>
      <!-- v-show='Minute.IsShow' -->
      <!-- <div id="kline" style="margin-left:39px;" ref="kline" v-show='Kline.IsShow'></div> -->
    </div>
    <div class="flexStart stati-box">
      <div class="stati-list" v-for="itme in 9" :key="itme">
        <p>最高</p>
        <span>1021.65</span>
      </div>

    </div>

    <div class="flexBetween trading-box">
      <div @click="collect = !collect">
        <img src="../../assets/img/selefNo.png" alt="" v-if="collect">
        <img src="../../assets/img/selef.png" alt="" v-else>
        <p>自选</p>
      </div>
      <div class="trading-btn">交易</div>

    </div>
  </div>
</template>

<script setup>
import HQChart from 'hqchart'

import HQData from "hqchart/lib/umychart.NetworkFilterTest.vue"

import 'hqchart/src/jscommon/umychart.resource/css/tools.css'
import 'hqchart/src/jscommon/umychart.resource/font/iconfont.css'

import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
// HQChart.Chart.JSChart.SetDomain('http://opensource.zealink.com')
// HQChart.Chart.JSComplier.SetDomain('http://opensource.zealink.com')

const $router = useRouter()
const $route = useRoute()
function DefaultData() { }
const select = ref({ state: 'Florida', abbr: 'FL' });
const collect = ref(true);

const TabTextIndex = ref(0)
const Name = ref('分时')
const Symbol = ref('600000.sh')


const more = ref([
  // { state: '1分', abbr: 'FL' },
  // { state: '5分', abbr: 'GA' },
  // { state: '15分', abbr: 'NE' },
  // { state: '30分', abbr: 'CA' },
  // { state: '60分', abbr: 'NY' },

  { Name: "1分钟", Value: 4 },
  { Name: "5分钟", Value: 5 },
  { Name: "15分钟", Value: 6 },
  { Name: "30分钟", Value: 7 },
  { Name: "60分钟", Value: 8 }
],)
const PeriodList = ref([
  { Name: "分时", Value: 1 },
  { Name: "五日", Value: 5 },
  { Name: "日线", Value: 0 },
  { Name: "周线", Value: 1 },
  { Name: "月线", Value: 2 },
])
const currentitem = ref('tab-Web')
DefaultData.GetKLineOption = function () {
  let data =
  {
    Type: '历史K线图',

    Windows: //窗口指标
      [
        { Index: "MA", Modify: false, Change: false },
        { Index: "VOL", Modify: false, Change: false }
      ],

    IsShowCorssCursorInfo: true,

    Border: //边框
    {
      Left: 1,
      Right: 1, //右边间距
      Top: 25,
      Bottom: 25,
    },

    KLine:
    {
      Right: 1,                            //复权 0 不复权 1 前复权 2 后复权
      Period: 0,                           //周期: 0 日线 1 周线 2 月线 3 年线 
      PageSize: 70,
      IsShowTooltip: true
    },

  };

  return data;
}

DefaultData.GetMinuteOption = function (symbol) {
  let data = {
    Type: '分钟走势图横屏', //历史分钟走势图
    Symbol: symbol,
    IsAutoUpate: true, //是自动更新数据

    IsShowRightMenu: false, //右键菜单
    IsShowCorssCursorInfo: false, //是否显示十字光标的刻度信息
    DayCount: 1,


    Border: //边框
    {
      Left: 1,
      Right: 1, //右边间距
      Top: 25,
      Bottom: 25,
    },
    KLineTitle: //标题设置
    {
      IsShowName: false, //不显示股票名称
      IsShowSettingInfo: false, //不显示周期/复权
    },

    // Frame: //子框架设置,刻度小数位数设置
    //   [
    //     { SplitCount: 5, StringFormat: 0 },
    //     { SplitCount: 3, StringFormat: 0 }
    //   ]
  };
  return data;
}

DefaultData.GetPeriodData = function (name) {
  const mapPeriod = new Map([
    ["分时", { Value: 1, KLineShow: false, MinuteShow: true }],
    ["五日", { Value: 5, KLineShow: false, MinuteShow: true }],
    ["日线", { Value: 0, KLineShow: true, MinuteShow: false }],
    ["周线", { Value: 1, KLineShow: true, MinuteShow: false }],
    ["月线", { Value: 2, KLineShow: true, MinuteShow: false }],
    ["年线", { Value: 3, KLineShow: true, MinuteShow: false }],
    ["1分钟", { Value: 4, KLineShow: true, MinuteShow: false }],
    ["5分钟", { Value: 5, KLineShow: true, MinuteShow: false }],
    ["15分钟", { Value: 6, KLineShow: true, MinuteShow: false }],
    ["30分钟", { Value: 7, KLineShow: true, MinuteShow: false }],
    ["60分钟", { Value: 8, KLineShow: true, MinuteShow: false }]
  ]);
  if (!mapPeriod.has(name)) return null;

  return mapPeriod.get(name);
}
const Minute = ref({
  JSChart: null,
  IsShow: true,
  Option: DefaultData.GetMinuteOption(Symbol.value)
})
// const Kline = ref({
//   JSChart: null,
//   IsShow: false,
//   // Option: DefaultData.GetKlineOption(Symbol.value)
// })
const data = reactive({
  Symbol: '600000.sh',
  KLine:
  {
    JSChart: null,
    Option: DefaultData.GetKLineOption(),
  },

})

onMounted(() => {
  OnSize();
  // CreateKLineChart()

  ChangeChartTab(Name.value, TabTextIndex.value);
})
let kline = ref()
let minuteRef = ref()

const OnSize = () => {

  var chartHeight = 354;
  var chartWidth = window.innerWidth;

  // kline = document.getElementById('minute')
  // kline.style.width = chartWidth + 'px';
  // kline.style.height = chartHeight + 'px';
  // if (data.KLine.JSChart) data.KLine.JSChart.OnSize();


  minuteRef.value = document.getElementById('minuteChart')
  minuteRef.value.style.width = chartWidth + 'px';
  minuteRef.value.style.height = chartHeight + 'px';
}
const CreateKLineChart = () => {
  if (data.KLine.JSChart) return;
  data.KLine.Option.Symbol = data.Symbol;
  let chart = HQChart.Chart.JSChart.Init(kline);
  console.log(data.KLine.Option, 'data.KLine.Option', chart)
  data.KLine.Option.NetworkFilter = (data, callback) => { NetworkFilter(data, callback); }

  chart.SetOption(data.KLine.Option);

  data.KLine.JSChart = chart;
}
const NetworkFilter = (data, callback) => {
  HQData.HQData.NetworkFilter(data, callback);
}
const CreateMinuteChart = () => //创建日线图
{
  if (Minute.value.JSChart) return;
  Minute.value.Option.Symbol = Symbol.value;
  let chart = HQChart.Chart.JSChart.Init(minuteRef.value);
  Minute.value.Option.NetworkFilter = (data, callback) => { NetworkFilter(data, callback); }
  chart.SetOption(Minute.value.Option);
  Minute.value.JSChart = chart;
}


const ChangeChartTab = (name, index) => {
  // this.IsLinetype = false;
  // this.IsLinetype = false;
  // this.TabTextIndex = index;
  var period = DefaultData.GetPeriodData(name);
  if (!period) return;
  // if (period.KLineShow) ChangeKLinePeriod(period.Value);
  // this.Kline.IsShow = period.KLineShow;
  if (period.MinuteShow) ChangeMinutePeriod(period.Value);
  Minute.value.IsShow = period.MinuteShow;
}


//走势图多日切换
const ChangeMinutePeriod = (period) => {
  if (!Minute.value.JSChart)   //不存在创建
  {
    console.log(Minute, 'Minute')
    Minute.value.Option.DayCount = period;
    CreateMinuteChart();
  }
  else {
    if (period == 1) {
      this.IsFiveminute = false;

    } else if (period == 5) {
      this.IsFiveminute = true;
    }
    this.OnSize();
    this.Minute.JSChart.OnSize();
    this.Minute.JSChart.ChangeDayCount(period);
  }
}

const ChangeKLinePeriod = (period) =>  //历史K线周期切换
{
  if (!this.Kline.JSChart)    //不存在创建
  {
    this.Kline.Option.KLine.Period = period;
    this.CreateKLineChart();
  }
  else {
    this.Kline.JSChart.ChangePeriod(period);
  }
}



const cutTime = (number) => {
  // return
  // console.log(data.KLine.Option.KLine.Period, 'kline', data.KLine.JSChart)
  data.KLine.Option.KLine.Period = 0

  let chart = HQChart.Chart.JSChart.Init(kline);
  chart.SetOption(data.KLine.Option);

  //切换代码
  // data.KLine.Option.Symbol = '000001.sz'; //000001.sz 平安银行 600999.sh 招商银行
  // HQChart.Chart.ChangeSymbol(data.KLine.Option.Symbol);
}


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
