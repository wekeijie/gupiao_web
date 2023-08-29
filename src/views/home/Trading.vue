<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>交易</template>
      <template v-slot:headerRight>
        <img src="../../assets/img/refresh.png" alt="" class="refresh-data" />
      </template>
    </page-header>
    <div class="hores-race-lamp flexStart">
      <img src="../../assets/img/tab8.png" alt="" class="refresh-data" /> <marquee-text :repeat="1"><span
          style="color:#f90">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna.</span>
      </marquee-text>
    </div>
    <div class="row-tab-box flexBetween">
      <h2>合约</h2>
      <div class="flexEnd" @click="isApply = true">
        <p v-if="1 == 1">按天配资2倍<span>(1500.00元)</span></p>
        <p v-else>请选择合约</p>
        <img src="../../assets/img/rightImg.png" alt="" class="img-right" />
      </div>
    </div>
    <div class="row-tab-box flexBetween">
      <h2>股票名称/代码</h2>
      <div class="flexEnd">
        <p>平安银行<span>(sz23123231)</span>
        </p>
        <img src="../../assets/img/search.png" alt="" class="img-search" @click="goRouter('/Search')" />
      </div>
    </div>

    <div class="flexBetween new-title-box">
      <p>
        最新
        <span :class="1 == 1 ? 'roseColor' : 'fallColor'">11.32 - 0.24 - 2.08%</span>
      </p>
      <div>
        <img src="../../assets/img/pixelsImg.png" alt="" class="img-right" />
        <img src="../../assets/img/lineImg.png" alt="" class="img-right" />
      </div>
    </div>
    <div class="flexBetween controls-box">
      <div style="" class="controls-left">
        <div class="flexBetween buy-sell-box">
          <p class="buy-box">买入</p>
          <p class="sell-box">卖出</p>
          <div class="parallelogram"></div>
        </div>
        <div class="contracts-box flexCenter">
          <p>市价委托</p>
          <img src="../../assets/img/downPac.png" alt="">
        </div>
        <div class="up-down-number flexBetween">
          <p>涨停<span class="roseColor">12.35</span></p>
          <p>跌停<span class="fallColor">10.11</span></p>
        </div>

        <div class="input-box">
          <v-text-field type="number" v-model="numberValue" placeholder="请输入数值" clearable :disabled="false"
            density="default" variant="outlined" single-line hide-details>
            <template v-slot:append>
              <v-icon color="black" @click="--numberValue" class="down-num">
                mdi-minus
              </v-icon>
              <v-icon color="black" @click="++numberValue" class="up-num">
                mdi-plus
              </v-icon>
            </template>
          </v-text-field>
        </div>

        <div class="input-box" style="margin-top: 15px;">
          <v-text-field type="number" v-model="numberValue" placeholder="请输入数值" clearable :disabled="false"
            density="default" variant="outlined" single-line hide-details>
            <template v-slot:append>
              <v-icon color="black" @click="--numberValue" class="down-num">
                mdi-minus
              </v-icon>
              <v-icon color="black" @click="++numberValue" class="up-num">
                mdi-plus
              </v-icon>
            </template>
          </v-text-field>
        </div>

        <div class="component-box flexBetween">
          <p :class="componentIndx == 1 ? 'redBg' : ''" @click="componentIndx = 1">1/4 </p>
          <p :class="componentIndx == 2 ? 'redBg' : ''" @click="componentIndx = 2">1/3</p>
          <p :class="componentIndx == 3 ? 'redBg' : ''" @click="componentIndx = 3">1/2</p>
          <p :class="componentIndx == 4 ? 'redBg' : ''" @click="componentIndx = 4">全仓</p>
        </div>


        <div class="up-down-number flexBetween">
          <p>交易额<span class="roseColor">12.35</span></p>
          <p>可买股数<span class="fallColor">10.11</span></p>
        </div>


      </div>
      <div class="controls-right">

        <v-carousel :show-arrows="false" hide-delimiters v-model="model" height="auto">

          <!-- height="auto" -->
          <v-carousel-item v-for="(slide, i) in 2" :key="i">
            <div class="new-box" v-if="i == 0">

              <div>
                <div v-for="item, index in 10" :key="index" class="flexBetween records-list">
                  <p>卖 {{ index + 1 }}</p>
                  <p class="fallColor">11.39</p>
                  <p>2391</p>
                </div>

                <div style="background-color: rgb(245, 245, 245);height: 2px;margin: 5px 0;"></div>
                <div v-for="item, index in 10" :key="index" class="flexBetween records-list">
                  <p>买 {{ index + 1 }}</p>
                  <p class="pinkColor">11.39</p>
                  <p>2391</p>
                </div>
              </div>
            </div>
            <div class="new-box" v-if="i == 1">
              <div class="flexBetween records-list">
                <p>时间</p>
                <p>价格</p>
                <p>量</p>
              </div>
              <div v-for="item, index in 10" :key="index" class="flexBetween records-list">
                <p>卖 {{ index + 1 }}</p>
                <p class="pinkColor">11.39</p>
                <p>2391 <span class="pinkColor">B</span></p>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>

      </div>
    </div>


    <div class="flexAroud">

      <v-btn class="sure-btn">交易</v-btn>

      <div class="flexCenter cut-detail">
        <p :class="model == 0 ? 'roseColor' : ''" @click="model = 0">+档</p>
        <p :class="model == 1 ? 'roseColor' : ''" @click="model = 1">明细</p>
      </div>
    </div>



    <div style="background-color: rgb(245, 245, 245);height: 5px;margin: 10px 0"></div>

    <div class="table-box flexStart">
      <p :class="tabIndex == 0 ? 'active-tab' : ''" @click="tabIndex = 0">持仓</p>
      <p :class="tabIndex == 1 ? 'active-tab' : ''" @click="tabIndex = 1">订单</p>
    </div>



    <v-carousel :show-arrows="false" hide-delimiters v-model="tabIndex" height="auto">

      <!-- height="auto" -->
      <v-carousel-item v-for="(slide, i) in 2" :key="i">
        <div class="new-box" v-if="i == 0">



          <table>
            <tbody>
              <tr class="tr-list">
                <th style="text-align: left;">名称|代码</th>
                <th style="text-align: right;">现价|成本</th>
                <th style="text-align: right;">可用|持仓</th>
                <th style="text-align: right;" class="cutUp">浮动盈亏 </th>
              </tr>

              <div style="background-color: rgb(245, 245, 245);height: 2px;"></div>
              <tr class="tr-list" v-for="item in 10" :key="item">
                <td class="tr-one">
                  <p>维尔利</p>
                  <span>sz300123</span>
                </td>
                <td class="tr-two" style="text-align: right;">
                  <div class="tr-two-number">11.31/11.31</div>
                </td>
                <td class="tr-three" style="text-align: right;">
                  <span>100/买入</span>
                </td>
                <td class="tr-four" style="text-align: right;">

                  <p>22.29:05
                  </p>
                  <p>2023-08-29
                  </p>
                </td>
              </tr>
            </tbody>
          </table>





        </div>
        <div class="new-box" v-if="i == 1">

          <div class="tab-box">
            <v-tabs v-model="orderIndex" bg-color="white" color="black" align-tabs="left">
              <v-tab @click="orderIndex = 0">待成交</v-tab>
              <v-tab @click="orderIndex = 1">已成交</v-tab>
              <v-tab @click="orderIndex = 2">已撤单</v-tab>
            </v-tabs>
          </div>


          <table>
            <tbody v-if="orderIndex == 0 || orderIndex == 1">
              <tr class="tr-list">
                <th style="text-align: left;">名称|代码</th>
                <th style="text-align: right;">现价|委托</th>
                <th style="text-align: right;">数量|类型</th>
                <th style="text-align: right;" class="cutUp">时间 </th>
              </tr>

              <div style="background-color: rgb(245, 245, 245);height: 2px;"></div>
              <tr class="tr-list" v-for="item in 10" :key="item">
                <td class="tr-one">
                  <p>维尔利</p>
                  <span>sz300123</span>
                </td>
                <td class="tr-two" style="text-align: right;">
                  <div class="tr-two-number">11.31/11.31</div>
                </td>
                <td class="tr-three" style="text-align: right;">
                  <span>100/买入</span>
                </td>
                <td class="tr-four" style="text-align: right;">
                  <p>22.29:05
                  </p>
                  <p>2023-08-29
                  </p>
                </td>
              </tr>
            </tbody>

            <tbody v-if="orderIndex == 2">
              <tr class="tr-list">
                <th style="text-align: left;">委托股票</th>
                <th style="text-align: right;">价格|类型</th>
                <th style="text-align: right;">已成|委托</th>
                <th style="text-align: right;" class="cutUp">状态 </th>
              </tr>

              <div style="background-color: rgb(245, 245, 245);height: 2px;"></div>
              <tr class="tr-list" v-for="item in 10" :key="item">
                <td class="tr-one">
                  <p>维尔利</p>
                  <span>sz300123</span>
                </td>
                <td class="tr-two" style="text-align: right;">
                  <div class="tr-two-number">11.31/11.31</div>
                </td>
                <td class="tr-three" style="text-align: right;">
                  <span>100/买入</span>
                </td>
                <td class="tr-four" style="text-align: right;">
                  <p>22.29:05
                  </p>
                  <p>2023-08-29
                  </p>
                </td>
              </tr>
            </tbody>
          </table>






        </div>
      </v-carousel-item>
    </v-carousel>





    <v-bottom-sheet v-model="isApply">
      <v-list>
        <div class="flexBetween sheet-top">
          <div class="sheet-sure">请选择您的合约<span>[新开合约]</span></div>
          <img src="../../assets/img/close.png" alt="" @click="isApply = false">
        </div>
        <v-list-item class="flexCenter" v-for="tile, index in tiles" :key="tile.title"
          @click="typeIndex = index; isApply = false">
          <div class="flexBetween type-list">
            <v-list-item-title>
              <h3>按天配资2倍- <span>369.00</span>元</h3>
              <p>合约号:CN202308112021289732290036</p>
            </v-list-item-title>
            <img class="list-select" src="../../assets/img/select.png" alt="" v-show="index == typeIndex">
          </div>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>




  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import { VBottomSheet } from 'vuetify/lib/labs/vBottomSheet/index'
import PageHeader from '../../components/topWrap.vue'
import MarqueeText from 'vue-marquee-text-component'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const numberValue = ref(0.1)
const componentIndx = ref(1)
const tabIndex = ref(0)
const model = ref(0)
const orderIndex = ref(0)

const isApply = ref(true)
const tiles = ref([
  { title: '按天配资-操盘:2天' },
  { title: '按周配资-操盘:7天' },
  { title: '按月配资-操盘:30天' },
  { title: '免息配资-操盘:30天' },
],)

const goRouter = (path) => {
  $router.push(path)
}


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
      background-color: #f33;
      border-radius: 2px;
      color: #fff;
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
    content: '';

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
    width: 50%;
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
