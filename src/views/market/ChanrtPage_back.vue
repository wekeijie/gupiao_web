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
      <v-tab @click="cutTime(0)">分时</v-tab>
      <v-tab @click="cutTime(1)">5日</v-tab>
      <v-tab @click="cutTime(2)">日K</v-tab>
      <v-tab @click="cutTime(3)">周K</v-tab>
      <v-tab @click="cutTime(3)">月K</v-tab>
      <div style="width: 80px;height: 20px;">
        <v-select v-model="select" :hint="`${select.state}, ${select.abbr}`" :items="more" item-title="state"
          autofocus="false" item-value="abbr" label="Select" persistent-hint return-object single-line density="compact"
          loader-height="5" height="auto"></v-select>
      </div>
    </v-tabs>
    <div id="app2">
      <div id="minute" ref="minute"></div>
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

import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
import request from '@/utils/request'
const $router = useRouter()
const $route = useRoute()
function DefaultData() { }
const select = ref({ state: 'Florida', abbr: 'GA' });
const collect = ref(true);
let symbol = ref(300466)
const more = ref([
  { state: '5分', abbr: 'GA' },
  { state: '15分', abbr: 'NE' },
  { state: '30分', abbr: 'CA' },
  { state: '60分', abbr: 'NY' },
],)
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
    KLineTitle: //标题设置
    {
      IsShowName: false,       //不显示股票名称
      IsShowSettingInfo: false //不显示周期/复权
    },
    Frame:  //子框架设置
      [
        { SplitCount: 5, Height: 30 },
        { SplitCount: 3, Height: 10 },
      ],
    Border: //边框
    {
      Left: 1,
      Right: 0, //右边间距
      Top: 25,
      Bottom: 25,
    },
    KLine:
    {
      Right: 0,                       //复权 0 不复权 1 前复权 2 后复权
      Period: 0,                      //周期: 0 日线 1 周线 2 月线 3 年线 
      PageSize: 100,
      IsShowTooltip: true
    },
  };
  return data;
}
const data = reactive({
  Symbol: '300466',
  KLine:
  {
    JSChart: null,
    Option: DefaultData.GetKLineOption(),
  },

})

onMounted(() => {
  // HQChart.Chart.JSChart.SetDomain('http://gupiao.test:8080')
  OnSize();
  CreateKLineChart()
})
let kline = ref()
const OnSize = () => {

  var chartHeight = 354;
  var chartWidth = window.innerWidth;

  kline = document.getElementById('minute')
  console.log(kline, 'ref')
  kline.style.width = chartWidth + 'px';
  kline.style.height = chartHeight + 'px';
  if (data.KLine.JSChart) data.KLine.JSChart.OnSize();
}
const CreateKLineChart = () => {
  if (data.KLine.JSChart) return;
  data.KLine.Option.Symbol = data.Symbol;
  data.KLine.Option.NetworkFilter = (data,callback) => {NetworkFilter(data,callback)}
  let chart = HQChart.Chart.JSChart.Init(kline);
  chart.SetOption(data.KLine.Option);
  data.KLine.JSChart = chart;
}

const NetworkFilter = (data, callback) =>{
    console.log('[BitKLine::NetworkFilter] data', data);
    switch(data.Name) 
    {
        case 'KLineChartContainer::ReqeustHistoryMinuteData':   //分钟全量数据下载
            ReqeustHistoryMinuteData(data,callback,{ PageSize:50 });
            break;
        case 'KLineChartContainer::RequestHistoryData':         //日线全量数据下载
            RequestHistoryData(data,callback);
            break;
        // case 'KLineChartContainer::RequestMinuteRealtimeData':  //分钟实时数据更新
        //     this.RequestMinuteRealtimeData(data,callback);
        //     break;
        // case 'KLineChartContainer::RequestRealtimeData':        //日线实时数据更新
        //     this.RequestRealtimeData(data,callback);
        //     break;
    }
}

const ReqeustHistoryMinuteData = (data,callback,option) => {
  request.post('market/stock',{'symbpl':symbol.value}).then(d => {
    klineData = jsonToHQChartMinuteData(d)
    let hqChartData = {code:0,data:klineData,name:d.name,symbol:d.code}
    console.log('----------hqChartData-----------------',hqChartData)
    callback(hqChartData)
  })
}

const jsonToHQChartMinuteData = (data) => {
  let newData = []
  let yClose = null
  data.items.forEach(function(item){
    let arr = item.split(',')
    let [date,time] = arr[0].split(' ')
    let formatDate = date.replace(/-/g,'')
    let formatTime = time.replace(/:/g, '')
    newData.push([
      formatTime,
      parseFloat(arr[1]),
      parseFloat(yClose),
      parseFloat(arr[3]),
      parseFloat(arr[4]),
      parseFloat(arr[5]),
      parseFloat(arr[6]),
      parseFloat(arr[7]),
      formatDate
    ])
    yClose = arr[4]
  })
  return newData
}

const RequestHistoryData = (data,callback) => {
  request.post('market/dayKLine',{'symbol':symbol.value}).then(d => {
    let config = {}
    config.name = d.name;
    config.symbol = d.code;
    resetDayFotmat(d,callback,config) 
  })
}

const resetDayFotmat = (data,callback,config) => {
  let newData = []
  let yclose = null
  data.items.forEach(function(item){
    let arr = item.split(',')
    newData.push([arr[0].split("-").join(""),
    yclose,
    parseFloat(arr[1]),
    parseFloat(arr[3]),
    parseFloat(arr[4]),
    parseFloat(arr[2]),
    parseFloat(arr[7]),
    parseFloat(arr[8])])
    yclose = parseFloat(arr[2])
  })
  config.code = 0
  config.data = newData
  callback(config)
}

const cutTime = (number) => {
  return
  console.log(data.KLine.Option.KLine.Period, 'kline', data.KLine.JSChart)
  data.KLine.Option.KLine.Period = 0

  let chart = HQChart.Chart.JSChart.Init(kline);
  chart.SetOption(data.KLine.Option);
}

</script>
<style scoped lang="scss">
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
</style>
