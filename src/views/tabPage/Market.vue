<template>
  <div class="message-box">

    <div class="tab-box">
      <v-tabs v-model="model">
        <v-tab @click="model=0">沪深</v-tab>
        <v-tab @click="model=1">自选</v-tab>
      </v-tabs>
      <div
       
      @click="goRouter('/Search','热门行业')"
        class="search-box"
      >
        <img src="@/assets/img/search.png">
        <span>输入股票名称/代码</span>
      </div>
    </div>
    <v-carousel
      :show-arrows="false"
      hide-delimiters
      v-model="model"
      height="auto"
    >
      <v-carousel-item
        v-for="(slide, i) in 2"
        :key="i"
        
      >
        <div
          class="new-box"
          v-if="i==0"
        >
          <div class="exponent-box">
            <div
              class="exponent-list"
              v-for="item in store.state.market.index" :key="item.code"
              :class="'text-' + watchStringToColor(item.ratio)"
            >
              <h1>{{ item.name }}</h1>
              <h2>{{ item.last_price }}</h2>
              <h3><span>{{ item.price }}</span><span class="ml-2">{{item.ratio}}%</span></h3>
              <img src="../../assets/img/curve.png">
            </div>

          </div>
          <div class="sort-title">
            <p>今日股市</p>
          </div>
          <div class="all_number-box">
            <div>
              <p class="">{{ store.state.market.day.rise }}
                <img src="../../assets/img/curveUp.png">
              </p>
              <span class="">涨家数</span>
            </div>
            <div>
              <p class="text-green">{{ store.state.market.day.fall }}
                <img src="../../assets/img/curveDown.png">
              </p>
              <span class="">跌家数</span>
            </div>
            <div>
              <p class="text-black">{{ store.state.market.day.flat }}
                <img src="../../assets/img/average.png">
              </p>
              <span class="">平盘家数</span>
            </div>
          </div>

          <div class="sort-title" 
              @click="goRouter('/HotList','gainian')">
            <p>热门概念</p>
            <img src="../../assets/img/rightImg.png">
          </div>
          
          <div class="list-box">
            <div
              class="list-cont"
              v-for="item in store.state.market.gainian"
              :key="item.code"
              @click="goRouter('/DetailList',item.name,item.code)"
            >
              <h1>{{ item.name }}</h1>
              <h2 :class="'text-' + watchStringToColor(item.rank)">{{ updateStrIcon(item.rank) + '%' }}</h2>
              <h3>{{ item.first_name }}</h3>
              <h4><span :class="'text-' + watchStringToColor(item.quota)">{{ updateStrIcon(item.quota) }}</span> <span :class="'text-' + watchStringToColor(item.first_rank)">{{ updateStrIcon(item.first_rank) + '%' }}</span></h4>
            </div>

          </div>

          <div class="sort-title" 
              @click="goRouter('/HotList','hangye')">
            <p>热门行业</p>
            <img src="../../assets/img/rightImg.png">
          </div>

          <div class="list-box">
            <div
              class="list-cont"
              v-for="item in store.state.market.hangye"
              :key="item.code"
              @click="goRouter('/DetailList',item.name,item.code)"
            >
              <h1>{{ item.name }}</h1>
              <h2 :class="'text-' + watchStringToColor(item.rank)">{{ updateStrIcon(item.rank) + '%' }}</h2>
              <h3>{{ item.first_name }}</h3>
              <h4><span :class="'text-' + watchStringToColor(item.quota)">{{ updateStrIcon(item.quota) }}</span> <span :class="'text-' + watchStringToColor(item.first_rank)">{{ updateStrIcon(item.first_rank) + '%' }}</span></h4>
            </div>

          </div>

        </div>
        <div
          class="new-box"
          v-if="i==1"
        >

          <table>
            <tbody>
              <tr class="tr-list">
                <th style="text-align: left;">代码名称</th>
                <th style="text-align: right;">最新价格</th>
                <th
                  style="text-align: right;"
                  class="cutUp"
                  @click="isUp=!isUp"
                >涨跌幅 <img
                    src="../../assets/img/dowm.png"
                    v-if="isUp"
                  ><img
                    src="../../assets/img/up.png"
                    v-else
                  > </th>
              </tr>
              <tr
                class="tr-list"
                v-for="item in 10"
              :key="item"
              @click="goRouter('/ChanrtPage',item.name,item.code)"


              >
                <td class="tr-one">
                  <p>维尔利</p>
                  <span>sz300123</span>
                </td>
                <td
                  class="tr-two"
                  style="text-align: right;"
                >
                  <div class="tr-two-number">48.87</div>
                </td>
                <td
                  class="tr-three"
                  style="text-align: right;"
                >
                  <span>+3.77%</span>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </v-carousel-item>
    </v-carousel>
    <p class="padd-bot"></p>

  </div>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import { useRouter, useRoute } from "vue-router"
import { store } from "@/store";
const $router = useRouter()
const $route = useRoute()
const model = ref(0)
const isUp = ref(true)

onMounted(() => {
  store.dispatch('market/get')
})

const goRouter = (path,item,code = '') => {
  $router.push({path,query:{
    title:item,
    code:code
  }})
}

const watchStringToColor = (price) => {
    if (price < 0) {
        return 'green';
    } else if (price === 0 || price === '') {
        return 'black';
    } else if (price > 0) {
        return 'red';
    }
}

const updateStrIcon = (price) => {
  if (price > 0) {
        return '+' + price;
    }else{
      return price
    }
}

watch(model, (newVal, oldVal) => {
  console.log(newVal, oldVal, 'newVal,oldVal')
}
)
</script>
<style scoped lang="scss">
.list-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  // margin-top: 11px;
}
.list-cont {
  width: 30%;
  height: 154px;
  margin: 11px 5px;
  border-radius: 8px;

  box-shadow: 1px 3px 5px 1px hsla(0, 0%, 94.9%, 0.8);
  h1 {
    font-size: 13px;
    margin-left: 11px;
    margin-top: 16px;
    letter-spacing: 1px;
    color: #000;
  }
  h2 {
    font-size: 14px;
    letter-spacing: 0.5px;
    margin-left: 11px;
    margin-top: 16px;
    color: red;
  }
  .green {
    color: #1aad19;
  }
  h3 {
    font-size: 12px;
    letter-spacing: 1px;
    color: grey;
    margin-left: 11px;
    margin-top: 4px;
  }
  h4 {
    font-size: 10px;
    margin-left: 2px;
    margin-top: 16px;
  }
}
.all_number-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 16px;
  padding-left: 30px;
  padding-right: 27px;
  justify-content: space-between;
  height: 66px;
  background-color: #fff;
  background-image: linear-gradient(#f5f5fd, #fff);
  opacity: 0.9;
  border-radius: 10px;
  p {
    font-size: 16px;
    color: #ea4b56;
    line-height: 33px;
  }
  img {
    width: 15px;
    height: 9px;
    margin-left: 8px;
  }
  span {
    font-size: 12px;
    letter-spacing: 1px;
    color: #000;
  }
}
.sort-title {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  p {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
  }
  img {
    width: 8px;
    height: 13px;
  }
}
.exponent-box {
  width: 100%;
  display: flex;
  padding: 0 11px;
  justify-content: space-between;
}
.exponent-list {
  background-color: #fff;
  background-image: linear-gradient(#e8f8f2, #f8fdfb);
  padding: 11px 5px;
  // margin: ;
  height: 165px;
  text-align: left;
  width: 31%;
  border-radius: 8px;
  h1 {
    font-size: 14px;
    color: #303133;
  }
  h2 {
    font-size: 16px;
    color: #1aad19;
    margin: 3px 0;
  }
  h3 {
    span {
      font-size: 12px;
      color: #1aad19;
    }
  }
  img {
    width: 100%;
    margin-top: 10px;
  }
}
table {
  width: 100%;
  padding: 0px 10px 90px 10px;
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
      font-weight: 600;
      color: red;
    }
  }
  th {
    width: 33.3%;
    color: #8f8f94;
    font-size: 12px;
    line-height: 20px;
    padding: 1px 0 15px 0;
  }
  td {
    width: 33%;
    font-size: 12px;
  }
}
.padd-bot {
}

.tab-box {
  position: fixed;
  width: 100%;
  display: block;
  top: 0;
  background-color: #fff;
  padding: 15px 0 10px 0;
  z-index: 10;
  display: flex;

  align-items: center;

  .search-box {
    width: 50%;
    line-height: 37px;
    height: 37px;
    background: #f7f7f9;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    top: 15px;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 2;
    img {
      width: 13px;
      height: 13px;
      margin: auto 10px;
    }
    span {
      color: #a6a9b5;
      font-size: 14px;
    }
  }
}
.message-box {
  padding: 75px 0 50px 0;
}
.v-slide-group__container {
  .v-slide-group-item--active {
    line-height: 55px;
    font-size: 22px;
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
.v-btn {
  border-color: red($color: red);
  margin: 0px 0px;
  font-size: 22px;
  z-index: 3;
  font-weight: normal;
  color: rgb(199, 199, 199);
}
// .v-tab--selected{

// }
</style>
