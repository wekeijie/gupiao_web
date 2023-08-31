<template>
  <div class="message-box">
    <div class="pact-head-box">
      <h1>合约</h1>
      <div class="apply-box">
        <div class="head-left">

          <img src="../../assets/img/pactAvat.png" />
          <div>
            <h2>申请合约</h2>
            <h3>及时审批，快速操盘</h3>
          </div>
        </div>
        <div class="apply-btn" @click="goRouter('/ApplyContract')">立即申请</div>

      </div>

    </div>

    <div class="pact-cont-box">
      <div class="pact-cont">
        <!-- <div class="tab-box">
          <v-tabs v-model="model">
            <v-tab @click="model=0">有效合约</v-tab>
            <v-tab @click="model=1">历史合约</v-tab>
          </v-tabs>
        </div> -->

        <div class="table-box flexStart">
          <p :class="model == 0 ? 'active-tab' : ''" @click="model = 0">有效合约</p>
          <p :class="model == 1 ? 'active-tab' : ''" @click="model = 1">历史合约</p>
        </div>


        <v-carousel :show-arrows="false" hide-delimiters v-model="model" height="auto">

          <!-- height="auto" -->
          <v-carousel-item v-for="(slide, i) in 2" :key="i">
            <div class="new-box" v-if="i == 0">

              <div class="pact-list-box" v-for="item in 5" :key="item">
                <div class="pact-name flexBetween" @click="isUp = !isUp">按天配资2倍[CN202308112021289732290036] <img
                    src="../../assets/img/downPac.png" v-if="isUp"><img src="../../assets/img/upPac.png" v-else></div>
                <div class="flexBetween balance-box">
                  <div class="">
                    <p>1500</p>
                    <span>操盘资金</span>
                  </div>

                  <div class="">
                    <p>1500</p>
                    <span>可用余额</span>
                  </div>
                  <div class="">
                    <p>1500</p>
                    <span>触发警戒</span>
                  </div>
                  <div class="">
                    <p>1500</p>
                    <span>触发止损</span>
                  </div>
                </div>

                <div v-show="isUp">
                  <div class="flexBetween row-box"><span>持仓时间</span><span>2023-08-11 ~2023-08-11 </span> </div>
                  <div class="flexBetween row-box"><span>资金利率</span><span>0.08% </span> </div>
                  <div class="flexBetween controls-box">
                    <div>
                      <img src="../../assets/img/stopPac.png">
                      <p>终止</p>
                    </div>
                    <div>
                      <img src="../../assets/img/expandPac.png">
                      <p>扩大</p>
                    </div>
                    <div>
                      <img src="../../assets/img/appendPac.png">
                      <p>追加</p>
                    </div>
                    <div>
                      <img src="../../assets/img/curvePac.png">
                      <p>详情</p>
                    </div>
                    <div>
                      <img src="../../assets/img/sharePac.png">
                      <p>提盈</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div class="new-box" v-if="i == 1">

              <no-data class="no-data-cont"></no-data>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <p class="padd-bot"></p>

  </div>
</template>

<script setup>
import NoData from '../../components/noData.vue'

import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const model = ref(0)
const isUp = ref(true)
const goRouter = (path) => {
  $router.push(path)
}
watch(model, (newVal, oldVal) => {
  console.log(newVal, oldVal, 'newVal,oldVal')
}
)
</script>
<style scoped lang="scss">
// .v-slide-group__container {
//   .v-slide-group-item--active {
//     line-height: 55px;
//     font-size: 22px;
//     z-index: 3;
//     font-weight: bold;
//     color: rgb(48, 48, 48);

//     .v-tab__slider {
//       width: 10px;
//       align-items: center;
//     }
//   }

//   .v-slide-group-item--active::after {
//     .v-btn__overlay {
//       color: red !important;
//     }
//   }
// }

// .v-tab--selected::after {
//   color: red !important;
// }

// .v-btn {
//   border-color: red($color: red);
//   margin: 0px 0px;
//   font-size: 22px;
//   z-index: 3;
//   font-weight: normal;
//   color: rgb(199, 199, 199);
// }

.table-box {
  p {
    padding: 8px 10px;
    color: rgb(199, 199, 199);
    font-size: 22px;
    position: relative;
  }

  .active-tab {
    font-size: 22px;
    font-weight: bold;
    color: rgb(48, 48, 48);
  }

  .active-tab::after {
    position: absolute;
    bottom: 0;
    content: '';

    width: 20px;
    height: 6px;
    border-radius: 100px;
    background-color: rgb(251, 92, 57);
    left: calc(50% - 10px);
  }
}

.no-data-cont {
  padding-top: 40%;
}

.pact-list-box {
  border-bottom: 1px solid #898888;
  margin: 15px 0;
}

.balance-box {
  margin: 13px;

  p {
    font-size: 13px;
    color: #fb5c39;
    font-weight: 700;
  }

  span {
    font-size: 12px;
    color: #606266;
  }
}

.row-box {
  line-height: 35px;
  background-color: #fff0f5;
  border-radius: 5px;
  padding: 0px 11px;
  margin: 5px;
  font-size: 12px;
}

.controls-box {
  margin: 15px;

  img {
    width: 24px;
  }

  p {
    font-size: 12px;
  }
}

.pact-name {
  font-size: 14px;
  font-family: PingFang SC;
  color: #000;

  img {
    height: 7px;
    width: 13px;
  }
}

.pact-cont-box {
  position: relative;
}

.pact-cont {
  left: 2%;
  width: 96%;
  background-color: #fff;
  position: absolute;
  top: -27px;
  padding-top: 8px;
  border-radius: 11px;
}

.pact-head-box {
  position: relative;
  height: 220px;
  background-image: url("/src/assets/img/pactHeadBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 10px;

  h1 {
    line-height: 55px;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 10px;
  }
}

.head-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 55px;
    margin-right: 10px;
  }
}

.apply-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  h2 {
    line-height: 27px;
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: 700;
  }

  h3 {
    line-height: 27px;
    font-size: 13px;
    font-family: PingFang SC;
    color: #fff;
  }
}

.apply-btn {
  height: 38px;
  width: 110px;
  background: #fff;
  border-radius: 27px;
  font-size: 14px;
  color: #fb5c39;
  text-align: center;
  line-height: 38px;
  font-family: PingFang SC;
  font-weight: 700;
}

.message-box {
  // padding: 75px 0 50px 0;
  position: relative;
}

// .v-tab--selected{

// }
</style>
