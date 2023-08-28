<template>
  <div class="home-box">
    <div class="home-top" :style="isBg ? 'background: rgba(251, 92, 57, 1)' : ''">
      <div @click="goRouter('/Search')" class="search-box">
        <img src="@/assets/img/search.png">
        <span>输入股票名称/代码</span>
      </div>
    </div>
    <v-carousel cycle :show-arrows="false" hide-delimiters id="swiperTop">
      <v-carousel-item v-for="(slide, i) in 5" :key="i">
        <!-- <div class="display-3">{{ slide }} Slide</div> -->
        <v-img src="@/assets/img/carouselImg.jpg"></v-img>

      </v-carousel-item>
    </v-carousel>
    <div class="home-content">
      <div class="tab-box">
        <div class="tab-cont">
          <div class="tab-list" @click="goRouter('/Market')">
            <img src="@/assets/img/tab1.png">
            <p>自选</p>
          </div>
          <div class="tab-list" @click="goRouter('/Trading')">
            <img src="@/assets/img/tab2.png">
            <p>交易</p>
          </div>
          <div class="tab-list" @click="goRouter('/Agency')">
            <img src="@/assets/img/tab3.png">
            <p>代理中心</p>
          </div>
          <div class="tab-list" @click="goRouter('/TopUp')">
            <img src="@/assets/img/tab4.png">
            <p>充值返现</p>
          </div>
          <div class="tab-list">
            <img src="@/assets/img/tab5.png">
            <p>APP下载</p>
          </div>
          <div class="tab-list" @click="goRouter('/TradingRules')">
            <img src="@/assets/img/tab6.png">
            <p>交易规则</p>
          </div>
          <div class="tab-list" @click="goRouter('/CompanyIntro')">
            <img src="@/assets/img/tab7.png">
            <p>公司介绍</p>
          </div>
          <div class="tab-list" @click="goRouter('/IframeDemo')">
            <img src="@/assets/img/tab8.png">
            <p>在线咨询</p>
          </div>
        </div>
      </div>

      <img class="led-img" @click="goRouter('/ApplyContract')" src="@/assets/img/led.jpg">
      <div class="title-lab">》 每日福利《</div>
      <div class="active-box">
        <img src="@/assets/img/active1.png" @click="goRouter('/InCoupon')">
        <img src="@/assets/img/active2.png" @click="goRouter('/ActiveList')">

      </div>

      <div class="title-lab">》 昨日收益榜《</div>

      <table>
        <tbody>
          <tr class="tr-list">
            <th style="text-align: left;">用户|合约</th>
            <th style="text-align: right;">盈利[万]</th>
            <th style="text-align: right;">会员等级</th>
          </tr>
          <tr class="tr-list" v-for="item in 10">
            <td class="tr-one">
              <p>185****7809</p>
              <span>按周配资6倍</span>
            </td>
            <td class="tr-two" style="text-align: right;">
              <div class="tr-two-number">48.87</div>
              <p>盈利率<span>6.98%</span></p>
            </td>
            <td class="tr-three" style="text-align: right;">
              <span>王者vip</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <prop-box :isProp="isProp"></prop-box>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
import PropBox from '../../components/PropBox.vue'
import { onMounted, ref, watch, onBeforeUnmount } from "vue";
const isProp = ref(false)
const isBg = ref(false)
// const abnb = ref(require('@/assets/img/tab1.png'))
const goRouter = (path) => {
  $router.push(path)
}
const getImageUrl = (name) => {
  return new URL(`../../lib/Carousel/assets/${name}`, import.meta.url).href
}
onMounted(() => {
  window.addEventListener('scroll', getSwiperTop)
})
const getSwiperTop = () => {
  if (document.getElementById('swiperTop')) isBg.value = document.getElementById('swiperTop').getBoundingClientRect().top > -100 ? false : true

}

onBeforeUnmount(() => {
  window.removeEventListener('scroll', getSwiperTop)
})
watch(
)



</script>
<style scoped  lang="scss">
table {
  width: 100%;
  padding: 10px 10px 90px 10px;

  .tr-list {
    padding: 6px 0;
    border-bottom: solid 0.5px #f4f5f6;
    display: flex;
    align-items: center;
  }

  .tr-one {
    p {
      font-size: 13px;
    }

    span {
      color: #8f8f94;
      font-size: 10px;
    }
  }

  .tr-two {
    .tr-two-number {
      font-size: 13px;
      color: #000000;
    }

    p {
      color: #8f8f94;
      font-size: 10px;
    }
  }

  .tr-three {
    span {
      text-align: center;
      // width: ;
      background-color: #fff1ed;
      border-radius: 4px;
      font-size: 12px;
      padding: 2px 4px;
      font-size: 12px;
      color: red;
    }
  }

  span {
    color: rgb(230, 5, 5);
    margin-left: 3px;
  }

  th {
    width: 33.3%;
    color: #8f8f94;
    font-size: 12px;
    line-height: 20px;
  }

  td {
    width: 33%;
    font-size: 12px;
  }
}

.active-box {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;

  img {
    width: 45%;
  }
}

.title-lab {
  color: #ffab53;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin: 5px 0;
}

.led-img {
  width: 100%;
  margin-top: 20px;
}

.home-content {
  width: 100%;
  position: absolute;
  top: 60vw;
}

.home-box {
  position: relative;
}

.home-top {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2;
  height: 80px;
}

.search-box {
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  width: 80%;
  top: 20px;
  padding: 10px;
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
    color: white;
    font-size: 14px;
  }
}

.tab-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 9990;

  .tab-cont {
    width: 95%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 1px 3px 5px 1px hsla(0, 0%, 94.9%, 0.8);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 12px 0;
    position: relative;
  }

  .tab-list {
    margin: 8px 0px;
    width: 25%;
    text-align: center;

    img {
      width: 46px;
      height: 46px;
    }

    p {
      font-size: 11px;
      color: grey;
      letter-spacing: 1px;
    }
  }
}
</style>
