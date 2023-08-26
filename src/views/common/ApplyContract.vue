<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>申请合约</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245);height: 3px;"></div>
    <div class="flexBetween list-box">
      <h3>钱包可用余额</h3>
      <h2>￥1000.00</h2>
    </div>
    <div style="background-color: rgb(245, 245, 245);height: 3px;"></div>
    <div
      class="flexBetween list-box"
      @click="isProp=true"
    >
      <h3>合约类型</h3>
      <div class="pact-type">
        <span>
          {{ tiles[typeIndex].title }}
        </span>
        <img
          src="../../assets//img/rightImg.png"
          alt=""
        >
      </div>
    </div>
    <div style="background-color: rgb(245, 245, 245);height: 3px;"></div>

    <div class="input-number">
      <div class="flexBetween input-title-box">
        <h2>请输入保证金额度</h2>
        <p>可配资金<span>500-5000000</span>元</p>
      </div>

      <v-text-field
        model-value="500.00"
        variant="underlined"
        hide-details="auto"
        required
        prefix="￥"
        size="25"
      ></v-text-field>

    </div>
    <div style="background-color: rgb(245, 245, 245);height: 3px;"></div>

    <div class="limit-box">
      <h5>申请额度</h5>
    </div>

    <div class="flexStart limit-list-box">
      <div
        class="limit-list "
        :class="selectIndex==item? 'activeBg':''"
        v-for="item in 11"
        @click="selectIndex= item"
      >
        <h2>{{ item }} <span>倍</span></h2>
        <p>{{item*500}}元</p>
      </div>

    </div>
    <div
      class="apply-btn"
      @click="isApply=true"
    >立即申请</div>

    <v-bottom-sheet v-model="isProp">
      <v-list>
        <div class="flexBetween sheet-top">
          <div class="sheet-sure">选择合约类型</div>
          <img
            src="../../assets/img/close.png"
            alt=""
            @click="isProp=false"
          >
        </div>
        <v-list-item
          class="flexCenter"
          v-for="tile,index in tiles"
          :key="tile.title"
          @click="selectType(index)"
        >
          <div class="flexBetween type-list">

            <v-list-item-title>{{ tile.title }}</v-list-item-title>
            <img
              src="../../assets/img/select.png"
              alt=""
              v-if="index==typeIndex"
            >
          </div>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>

    <v-dialog
      v-model="isApply"
      persistent
      class="flexCenter"
    >

      <div class="prop-tips">
        <h1>会员详情</h1>
        <div class="prop-cont flexBetween">
          <p>总操盘资金
            <img
              src="../../assets/img/！.png"
              alt=""
            >
          </p>
          <span>1000.00元</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>保证金/本金
          </p>
          <span>500.00元</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>配资资金
          </p>
          <span>500.00元/1倍</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>亏损预警线
            <img
              src="../../assets/img/！.png"
              alt=""
            >
          </p>
          <span>750.00元</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>亏损平仓线
            <img
              src="../../assets/img/！.png"
              alt=""
            >
          </p>
          <span>600.00元</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>利率
            <img
              src="../../assets/img/！.png"
              alt=""
            >
          </p>
          <span>0.09%</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>产生利息
          </p>
          <span>0.45元</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>资金使用时间
            <img
              src="../../assets/img/！.png"
              alt=""
            >
          </p>
          <span>2天后自动续期</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>可用利息券
            <img
              src="../../assets/img/！.png"
              alt=""
            >
          </p>
          <span>2271.50元</span>
        </div>
        <div class="prop-cont flexBetween">
          <p class="flexStart">准备资金
            <img
              src="../../assets/img/！.png"
              alt=""
            >
          </p>
          <span>1000.00元</span>
        </div>

        <div class="prop-lab">
          <v-checkbox
            v-model="checkbox"
            color="#2979ff"
          >
            <template v-slot:label>
              <p>
                勾选即表示已阅读并同意《
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <span
                      target="_blank"
                      @click.stop
                    >
                      配资协议
                    </span>
                  </template>
                </v-tooltip>
                》
              </p>
            </template>
          </v-checkbox>
        </div>
        <div class="prop-btn flexCenter">
          <v-btn
            @click="isApply=false"
            color="#fb5c39"
          >取消</v-btn>
          <v-btn
            @click="isApply=false"
            color="#fb5c39"
          >确认</v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import { VBottomSheet } from 'vuetify/lib/labs/vBottomSheet/index'
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const selectIndex = ref(1)
const isProp = ref(false)
const isApply = ref(true)
const typeIndex = ref(1)
const checkbox = ref(true)
const selectType = (index) => {
  typeIndex.value = index
  isProp.value = false
}

const tiles = ref([
  { title: '按天配资-操盘:2天' },
  { title: '按周配资-操盘:7天' },
  { title: '按月配资-操盘:30天' },
  { title: '免息配资-操盘:30天' },
],)
</script>
<style lang="scss" scoped>
.prop-tips {
  width: 100%;
  background: #fdfbfc;
  border-radius: 9px;
  h1 {
    text-align: center;
    line-height: 40px;
    letter-spacing: 2px;
    font-size: 16px;
    color: #3b4144;
    border-bottom: solid 1px #f2f2f2;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    padding: 5px 0;
  }

  .prop-cont {
    margin: 10px 25px;
    p {
      font-size: 14px;
      color: #7a7e83;
      align-items: center;
      img {
        width: 14px;
        margin-left: 3px;
      }
    }
    span {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }
  }
  .prop-lab {
    font-size: 12px;
    text-align: center;
    align-content: center;
    .v-input--horizontal {
      grid-template-areas: none;
      grid-template-columns: none;
      grid-template-rows: auto auto;
    }
    span {
      color: #2979ff;
      text-decoration: underline;
    }
    p {
      font-size: 12px;
    }
  }
  .prop-btn {
    padding-bottom: 30px;
    .v-btn {
      border-radius: 7px;
      border: none;
      background-color: #fb5c39;
      line-height: 33px;
      font-size: 15px;
      color: #fff;
      margin: 0 30px;
    }
  }
}

.type-list {
  width: 100%;
}
.v-list-item {
  line-height: 72px;
  border-top: solid 1px #f1f1f1;
  padding: 25px 0 !important;
}
.v-list-item-title {
  margin-right: 130px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
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
.apply-btn {
  margin: 24px 14px;
  border-radius: 7px;
  border: none;
  background-color: #fb5c39;
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding: 10px;
}
.limit-box {
  padding: 15px 10px 50px 10px;
  h5 {
    font-size: 15px;
    color: #000;
    font-family: PingFang SC;
    font-weight: 500;
  }
}
.limit-list-box {
  flex-wrap: wrap;
  .activeBg {
    background-color: #fb5c39 !important;
    background-image: url("../../assets/img/activeBg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    h2 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
}
.limit-list {
  margin: 10px 2.6%;
  box-sizing: border-box;
  width: 28%;
  // height: 56px;
  padding: 7px 0;
  text-align: center;
  background: #fff;
  color: #333;
  // margin: 6px 0px;

  border: 1px solid #ebebeb;
  border-radius: 9px;
  h2 {
    font-size: 20px;
    color: #333;
    span {
      font-size: 13px;
    }
  }
  p {
    font-size: 12px;
    color: grey;
  }
}
.input-title-box {
  h2 {
    font-size: 14px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
  span {
    color: #fb5c39;
  }
  .v-text-field {
    font-size: 25px;
  }
}
.input-number {
  padding: 15px 10px 30px 10px;
}
.pact-type {
  span {
    text-align: right;
    font-size: 15px;
    color: #fb5c39;
  }
  img {
    width: 6px;
    margin-left: 5px;
  }
}
.list-box {
  padding: 15px 10px;
  h3 {
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
  }
  h2 {
    font-size: 16px;
    color: #000;
    font-weight: 500;
  }
}
.v-field__field {
  border-bottom: 1px solid #ebebeb;
}
</style>