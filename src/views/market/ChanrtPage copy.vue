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
    <TableKLine @ChangeChartTab="ChangeChartTab" /> 
    <div class="tabs kLineTabs blockBg">
          <!-- 分时图部分 -->
          <div class="clear minuteWrap">
            <div id="minuteChart" ref="minuteDiv" v-show='Minute.IsShow'></div>
            <div id="kline" ref="klineDiv" v-show='Kline.IsShow'></div>

            <!-- 分时图右侧内容 -->
            <div class="rightMinute" v-show='!IsFiveminute && Minute.IsShow'>
                <!-- <ul class="minute-tab clear tabsTitle">
                    <li class="tableSell active-minute" @click='ChangeMinuteTab(0)' :class='{active:MinuteMenuIndex == 0}'>五档</li>
                    <li class="tableBuy" @click='ChangeMinuteTab(1)' :class='{active:MinuteMenuIndex == 1}'>明细</li>
                </ul> -->
                <div class="tabsContent">
                   
                    <!-- <div id="minute" class="tableMinuteContent" v-show='MinuteMenuIndex == 0'>
                        <table class="tableInfo">
                            <tbody>
                                <tr v-for='item in StockData.Dealer'>
                                    <td>{{item.timer}}</td>
                                    <td class="color-change symbolAve" v-bind:class="item.color">{{item.dataPrice}}</td>
                                    <td>{{item.dataVol}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> -->
                </div>

            </div>
          </div>
        </div>

    
  </div>
</template>

<script setup>
import HQChart from 'hqchart'
import $ from 'jquery'
import TableKLine from '@/components/market/Table.vue'
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
import request from '@/utils/request'
const $router = useRouter()
const $route = useRoute()
function DefaultData() { }
const collect = ref(true);
const symbol = ref('300466')
const Minute = ref({
                    JSChart:null,
                    IsShow:false,
                    Option:null
                })

const Kline = ref({
                    JSChart:null,
                    IsShow:true,
                    Option:null
                })

const IsFiveminute = ref(false)  //是否是5日
const klineDiv = ref()
const minuteDiv = ref()

DefaultData.GetKlineOption = function(symbol){
        let data = {
            Type: '历史K线图',
            Windows: [
                { Index: "均线",Modify:false,Change:false},
                { Index: "VOL",Modify:false,Change:false, IsDrawTitleBG:false },
                { Index: "MACD",Modify:false,Change:false, IsDrawTitleBG:false },
            ], //窗口指标
            Symbol: symbol,
            IsAutoUpate: true, //是自动更新数据
            CorssCursorTouchEnd: true,       //手指离开屏幕 隐藏十字光标
            IsShowRightMenu: false, //右键菜单
            CorssCursorInfo:{ Left:2, Right:0, Bottom:1, IsShowCorss:true },  //十字光标刻度设置

            KLine: {
                DragMode: 1, //拖拽模式 0 禁止拖拽 1 数据拖拽 2 区间选择
                Right: 1, //复权 0 不复权 1 前复权 2 后复权
                Period: 0, //周期 0 日线 1 周线 2 月线 3 年线
                MaxReqeustDataCount: 1000, //日线数据最近1000天
                MaxRequestMinuteDayCount: 15,    //分钟数据最近15天
                PageSize: 50, //一屏显示多少数据
                IsShowTooltip: false //是否显示K线提示信息
            },

            KLineTitle: //标题设置
            {
                IsShowName: false, //不显示股票名称
                IsShowSettingInfo: false //不显示周期/复权
            },

            Border: //边框
            {
                Left: 0, //左边间距
                Right: 1, //右边间距
                Top: 1
            },

            Frame: //子框架设置
            [
              { 
                SplitCount: 5, 
                SplitType:1,  //平均分割
                IsShowLeftText:false, 	//不显示左边刻度文字
                IsShowRightText:true,    	//显示右边刻度文字                      
                Custom:
                [
                  { 
                      Type:0,
                      Position:'left',
                  }
                ]
              },
              { SplitCount: 3, StringFormat: 0,IsShowLeftText:false,IsShowRightText:true },
              { SplitCount: 3, StringFormat: 0,IsShowLeftText:false,IsShowRightText:true }
            ],
            ExtendChart:    //扩展图形
            [
                // {Name:'KLineTooltip' }  //手机端tooltip
            ],
        };
        return data;
    }

// DefaultData.GetKLineOption = function (symbol) {
//   let data =
//   {
//     Type: '历史K线图',
//     Symbol: symbol,
//     Windows: //窗口指标
//       [
//         { Index: "MA", Modify: false, Change: false },
//         { Index: "VOL", Modify: false, Change: false }
//       ],
//     IsShowCorssCursorInfo: true,
//     KLineTitle: //标题设置
//     {
//       IsShowName: false,       //不显示股票名称
//       IsShowSettingInfo: false //不显示周期/复权
//     },
//     Frame:  //子框架设置
//       [
//         { SplitCount: 5, Height: 30 },
//         { SplitCount: 3, Height: 10 },
//       ],
//     Border: //边框
//     {
//       Left: 1,
//       Right: 0, //右边间距
//       Top: 25,
//       Bottom: 25,
//     },
//     KLine:
//     {
//       Right: 0,                       //复权 0 不复权 1 前复权 2 后复权
//       Period: 0,                      //周期: 0 日线 1 周线 2 月线 3 年线 
//       PageSize: 100,
//       IsShowTooltip: true
//     },
//   };
//   return data;
// }

DefaultData.GetMinuteOption = function(symbol){
        let data = {
            Type: '分钟走势图', //历史分钟走势图
            Symbol: symbol,
            IsAutoUpate: true, //是自动更新数据

            IsShowRightMenu: false, //右键菜单
            IsShowCorssCursorInfo: false, //是否显示十字光标的刻度信息
            DayCount: 1,
            CorssCursorTouchEnd: true,       //手指离开屏幕 隐藏十字光标
            CorssCursorInfo:{ Left:2, Right:2, Bottom:1, IsShowCorss:true },  //十字光标刻度设置

            Border: //边框
            {
                Left: 1, //左边间距
                Right: 1, //右边间距
                Top: 1,
                Bottom: 20
            },

            KLineTitle: //标题设置
            {
                IsShowName: false, //不显示股票名称
                IsShowSettingInfo: false, //不显示周期/复权
            },

            Frame: //子框架设置,刻度小数位数设置
            [
                { SplitCount: 5, StringFormat: 0 },
                { SplitCount: 3, StringFormat: 0 }
            ],
            ExtendChart:    //扩展图形
            [
                // {Name:'MinuteTooltip' }  //手机端tooltip
            ],
        };
        return data;
    }
    DefaultData.GetPeriodData=function(name)
    {
        const mapPeriod=new Map([
            ["分时",{Value:1,KLineShow:false,MinuteShow:true}],
            ["五日",{Value:5,KLineShow:false,MinuteShow:true}],
            ["日线",{Value:0,KLineShow:true,MinuteShow:false}],
            ["周线",{Value:1,KLineShow:true,MinuteShow:false}],
            ["月线",{Value:2,KLineShow:true,MinuteShow:false}],
            ["年线",{Value:3,KLineShow:true,MinuteShow:false}],
            ["1分钟",{Value:4,KLineShow:true,MinuteShow:false}],
            ["5分钟",{Value:5,KLineShow:true,MinuteShow:false}],
            ["15分钟",{Value:6,KLineShow:true,MinuteShow:false}],
            ["30分钟",{Value:7,KLineShow:true,MinuteShow:false}],
            ["60分钟",{Value:8,KLineShow:true,MinuteShow:false}],
        ]);
        if (!mapPeriod.has(name)) return null;

        return mapPeriod.get(name);
    }

// const data = reactive({
//   Symbol: '300466',
//   KLine:
//   {
//     JSChart: null,
//     Option: GetKlineOption.GetKLineOption(),
//   },

// })

onMounted(() => {
  Minute.value.Option = DefaultData.GetMinuteOption(symbol.value)
  Kline.value.Option = DefaultData.GetKlineOption(symbol.value)
  OnSize();
  // CreateKLineChart()
  Minute.value.IsShow = true
  Kline.value.IsShow = false
  CreateMinuteChart()
})
// let kline = ref()
const OnSize = () => {

  // var width = window.innerWidth;
  // var chartHeight = window.innerHeight - $(".headTitle").outerHeight(true) - $(".exchangeData").outerHeight(true) - $(".tabList").outerHeight(true) - 50;

  // if(IsFiveminute.value){
  //   $('#minuteChart').width(width);
  //   $('#minuteChart').height(chartHeight);
  // }else{
  //   $('#minuteChart').width(width - $('.rightMinute').outerWidth(true));
  //   $('#minuteChart').height(chartHeight);
  // }

  // // $('#kline').width(width - $('.phoneRight').outerWidth(true));
  // $('#kline').width(width);
  // $('#kline').height(chartHeight);
  var chartHeight = 354;
  var chartWidth = window.innerWidth;

  klineDiv.value = document.getElementById('kline')
  klineDiv.value.style.width = chartWidth + 'px';
  klineDiv.value.style.height = chartHeight + 'px';

  minuteDiv.value = document.getElementById('minuteChart')
  minuteDiv.value.style.width = chartWidth + 'px';
  minuteDiv.value.style.height = chartHeight + 'px';
}
const CreateKLineChart = () => {
  // if (Kline.value.JSChart) return;
  // Kline.value.Option.Symbol = symbol.value;
  // Kline.value.Option.NetworkFilter = (data,callback) => {NetworkFilter(data,callback)}
  // let chart = HQChart.Chart.JSChart.Init(klineDiv.value);
  // chart.SetOption(Kline.value.Option);
  // Kline.JSChart = chart;

  if (Kline.value.JSChart) return;
  Kline.value.Option.Symbol=symbol.value;
  let chart=HQChart.Chart.JSChart.Init(klineDiv.value);
  Kline.value.Option.NetworkFilter=(data, callback)=>{ NetworkFilter(data, callback); }
  chart.SetOption(Kline.value.Option);
  Kline.JSChart=chart;

}

//创建日线图
const CreateMinuteChart =()=>{
    if (Minute.value.JSChart) return;
    
    Minute.value.Option.Symbol=symbol.value;
    let chart= HQChart.Chart.JSChart.Init(minuteDiv.value);
    Minute.value.Option.NetworkFilter=(data, callback)=>{ MinuteNetworkFilter(data, callback); }
    chart.SetOption(Minute.value.Option);
    Minute.value.JSChart=chart;
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

const MinuteNetworkFilter = (data, callback) =>{
    console.log('[BitKLine::NetworkFilter] data', data);
    switch(data.Name) 
    {
        case 'MinuteChartContainer::RequestMinuteData':   //分钟全量数据下载
            RequestMinuteData(data,callback, { PageSize:100 });
            break;
        case 'KLineChartContainer::RequestMinuteRealtimeData':  //分钟实时数据更新
            this.RequestMinuteRealtimeData(data,callback);
            break;
    }
}

const RequestMinuteData = (data,callback,option) => {
  request.post('market/stock',{'symbol':symbol.value}).then(d => {
    let klineData = jsonToHQChartMinuteData(d,d['prePrice'])
    let hqChartData = {"stock":[{"symbol":d.code + ".sh","minute":klineData,"name":d.name,"yclose":d['prePrice'],"date":d.date.split("-").join("")}],"code":0}
    callback(hqChartData)
  })
}

const jsonToHQChartMinuteData = (data,yClose) => {
  let newData = []
  data.items.forEach(function(item){
    let arr = item.split(',')
    let [date,time] = arr[0].split(' ')
    let formatDate = date.replace(/-/g,'')
    let formatTime = time.replace(/:/g, '')
  
    newData.push({
      'date':parseInt(formatDate),
      'time':parseInt(formatTime),
      'open': parseFloat(arr[1]),
      'high': parseFloat(arr[3]),
      'low':parseFloat(arr[4]),
      'price': parseFloat(arr[1]),
      'vol': parseInt(arr[5]),
      'amount':parseInt(arr[6]),
      'avprice':parseFloat(arr[4]),
      // 'yclose':parseFloat(arr[2])
    })



    // yClose = arr[1]
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


const ChangeChartTab = (name,num) =>{
  console.log('----------',name,num)
  // this.TabTextIndex = num;
  let period=DefaultData.GetPeriodData(name);
  if (!period) return;
  if (period.KLineShow) ChangeKLinePeriod(period.Value);
  Kline.value.IsShow=period.KLineShow;
  // if (period.MinuteShow) this.ChangeMinutePeriod(period.Value);
  // this.Minute.IsShow=period.MinuteShow;           
}
//历史K线周期切换          
const ChangeKLinePeriod = (period)=>{
  
  if (Kline.JSChart)    //不存在创建
  {
      Kline.value.Option.KLine.Period=period;
      CreateKLineChart();
  }
  else
  {
      Kline.value.JSChart.ChangePeriod(period);
  }
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
