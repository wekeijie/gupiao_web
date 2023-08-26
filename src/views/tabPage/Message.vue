<template>
  <div class="message-box">
    <div class="tab-box">
      <v-tabs v-model="model">
        <v-tab @click="model=0">新闻</v-tab>
        <v-tab @click="model=1">快讯</v-tab>
      </v-tabs>
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
          v-show="i==0"
        >
          <div
            class="new-list"
            v-for="item in 30"
            @click="goRoute('/RichText',item)"
          >
            <p>收盘：美股周五收盘涨跌不一 三大股指本周均录得跌幅本周均录得跌幅</p>
            <span>2023-08-19</span>
          </div>
        </div>
        <!-- 快讯 -->
        <div
          class="fast-box"
          v-show="i==1"
        >

          <div class="timeline-box">
            <div class="years-box"> 2022-02-02</div>
            <div
              class="time-box "
              v-for="item in list"
            >
              <div class="markers-box">
                <p></p> <span>{{item.tiem}}</span>
              </div>
              <div
                class="fast-cont"
                @click="item.show=true"
              >
                <p :class="item.show? '':'fast-cont-show'">【英特尔成为杭州亚运会官方图形处理器供应商】英特尔中国官微消息，2023年8月15日，杭州第19届亚运会官方图形处理器供应商发布仪式在杭州举行，英特尔正式成为杭州亚运会官方图形处理器供应商。</p>
              </div>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <p class="tab-height"></p>
  </div>
</template>

<script setup>

import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const model = ref(0)
const list = ref([
  {
    tiem: '11:00',
    const: '123123132',
    show: false
  },
  {
    tiem: '11:00',
    const: '123123132',
    show: false
  },
  {
    tiem: '11:00',
    const: '123123132',
    show: false
  },
  {
    tiem: '11:00',
    const: '123123132',
    show: false
  },
  {
    tiem: '11:00',
    const: '123123132',
    show: false
  },
])
const goRoute = (path, item) => {
  $router.push({
    path, query: {
      title: '新闻',
      id: item
    }
  })
}
watch(model, (newVal, oldVal) => {
  console.log(newVal, oldVal, 'newVal,oldVal')
}
)
</script>
<style scoped lang="scss">
.tab-height {
  height: 70px;
}
.fast-box {
  .years-box {
    line-height: 44px;
    font-size: 15px;
    font-weight: 500;
    font-family: PingFang SC;
    color: #fe8805;
    margin-left: 6px;
  }
  .timeline-box {
    margin: 10px 10px;
  }
  .fast-cont {
    border-left: 1px solid #bebebe;
    padding: 15px;
    p {
      color: #000;
      font-size: 14px;
      text-indent: 27px;
      line-height: 22px;
      align-items: center;
      margin-top: 5px;
      letter-spacing: 1px;
    }
  }
  .fast-cont-show {
    height: 60px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .markers-box {
    color: #fe8805;
    position: relative;
    display: flex;
    align-items: center;
    p {
      position: absolute;
      left: -6.5px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      border: 1px solid #fe8805;
      display: inline-block;
      z-index: 10;
    }
    span {
      margin-left: 20px;
      font-size: 13px;
      line-height: 13px;
    }
  }
}
.new-list {
  box-sizing: border-box;
  margin: 16px 11px;
  border-bottom: 1px solid #eee;
  p {
    font-size: 15px;
    font-weight: 500;
    color: #000;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  span {
    font-size: 11px;
    color: #a4a4a4;
    margin: 5px 0 10px;
  }
}
.message-box {
  padding: 55px 0 50px 0;
  height: 100vh;
}
.tab-box {
  position: fixed;
  width: 100%;
  display: block;
  top: 0;
  background-color: #fff;
  padding: 15px 0 10px 0;
  z-index: 10;
}
.v-slide-group__container {
  .v-slide-group-item--active {
    line-height: 55px;
    margin: 0px 11px;
    font-size: 22px;
    z-index: 3;
    font-weight: bold;
    color: rgb(48, 48, 48);
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
  margin: 0px 11px;
  font-size: 22px;
  z-index: 3;
  font-weight: normal;
  color: rgb(199, 199, 199);
}
// .v-tab--selected{

// }
</style>
