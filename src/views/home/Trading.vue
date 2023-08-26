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
      <div class="flexEnd">
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
        <img src="../../assets/img/search.png" alt="" class="img-search" />
      </div>
    </div>

    <div class="flexBetween new-title-box">
      <p>
        最新
        <span>11.32 - 0.24 - 2.08%</span>
      </p>
      <div>
        <img src="../../assets/img/pixelsImg.png" alt="" class="img-right" />
        <img src="../../assets/img/lineImg.png" alt="" class="img-right" />
      </div>
    </div>
    <div class="flexCenter">
      <div></div>
      <div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import PageHeader from '../../components/topWrap.vue'
import MarqueeText from 'vue-marquee-text-component'

</script>
<style lang="scss" scoped>
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
