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

      <v-select v-model="select" :hint="`${select.state}, ${select.abbr}`" :items="more" item-title="state"
        item-value="abbr" label="Select" persistent-hint return-object single-line></v-select>
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
const $router = useRouter()
const $route = useRoute()
function DefaultData() { }
const select = ref({ state: 'Florida', abbr: 'FL' });
const collect = ref(true);
const more = ref([
  { state: '1分', abbr: 'FL' },
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
  Symbol: '600000.sh',
  KLine:
  {
    JSChart: null,
    Option: DefaultData.GetKLineOption(),
  },

})

onMounted(() => {
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
  let chart = HQChart.Chart.JSChart.Init(kline);
  chart.SetOption(data.KLine.Option);
  data.KLine.JSChart = chart;
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
