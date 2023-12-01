<template>
  <div class="grayBackgroud" style="min-height: 100lvh">
    <div class="pact-head-box">
      <div class="flexBetween my-top-box">
        <img src="../../assets/img/backWrite.png" @click="$router.go(-1)" />
        <p>签到有好礼</p>
        <p></p>
      </div>
      <div class="apply-box flexBetween">
        <div class="head-left flexStart" @click="goRouter('/SetInfor')">
          <img src="../../assets/img/myAvaatar.png" />

          <div class="user-infor">
            <h2>
              已累计签到
              <span>{{ store.state.checkIn.info.total }}</span> 天
            </h2>
            <h3 class="flexBetween">
              累计已获得
              <span>{{ store.state.checkIn.info.total_coup }}</span
              >元利息券
            </h3>
          </div>
        </div>
        <div
          class="sign-in-box"
          @click="checkPut"
          :class="store.state.checkIn.info.is ? 'isSigned' : 'noSigned'"
        >
          签到
        </div>
      </div>
      <div class="head-bottom">利息券ID：</div>
    </div>

    <div class="date_box">
      <seting-data
        :check_day="store.state.checkIn.info.check_day"
      ></seting-data>
    </div>

    <div class="rule_box">
      <h3>签到规则</h3>

      <p style="position: relative">
        1、每次签到都会送利息券，直接到达您个人账户。<br />2、首次签到送2元利息券，连续签到每日送的利息券逐日递增，连续签到日越多，每次领取的利息券越多。<br />3、断签后中断赠送利息券的金额递增，次日签到从2元的基础上重新累计签到日，每月1日重置签到。<br />4、利息券仅可用于合约利息抵扣，其他特殊签到送利息券规则如下：<br />
        当月连续签到10天,额外奖励利息券29元<br />
        当月连续签到20天,额外奖励利息券59元<br />
        当月连续签到满月,额外奖励利息券99元
      </p>
    </div>

    <v-overlay
      v-model="isPop"
      class="align-center justify-center"
      @click="isPop = false"
    >
      <div class="pop_box">
        <p>利息券 +{{ amount }}</p>
      </div>
    </v-overlay>
  </div>
</template>

<script setup>
import setingData from "../../components/setingData.vue";
import {
  defineProps,
  defineEmits,
  defineExpose,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
} from "vue";

import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const isPop = ref(false);
const amount = ref(2);

onMounted(() => {
  getInfo();
});

const getInfo = () => {
  store.dispatch("checkIn/getInfo");
};

const checkPut = () => {
  if (store.state.checkIn.info.is) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "Já fez check-in hoje",
    });
    return;
  }
  store.dispatch("checkIn/put").then((d) => {
    amount.value = d.amount;
    isPop.value = true;
    getInfo();
  });
};
</script>
<style lang="scss" scoped>
.pop_box {
  width: 314px;
  height: 398px;
  z-index: 10075;
  margin-top: 0px;
  position: relative;
  background-image: url("../../assets/img/longPicture/couponBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;

  p {
    width: 100%;
    position: absolute;
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #a93000;
    top: 240px;
    text-align: center;

    span {
      margin-left: 5px;
    }
  }
}

.rule_box {
  padding: 10px;

  h3 {
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 700;
    color: #2c2e3a;
    line-height: 25px;
    margin-bottom: 5px;
    border-bottom: solid 1px #747474;
  }

  p {
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 14px;
    color: grey;
    padding: 10px 15px;
    line-height: 25px;
  }
}

.date_box {
  margin: 0 10px 15px;
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-bottom: 30px;
}

.head-bottom {
  position: absolute;
  bottom: 0;
  line-height: 40px;
  padding: 0 10px;
  border-bottom: solid 0.5px #f0f0f0;
  font-size: 12px;
  font-weight: 700;
  font-family: PingFang SC;
  color: #7f829a;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: calc(100vw - 20px);
}

.sign-in-box {
  line-height: 30px;
  border-radius: 10px;
  text-align: center;
  padding: 2px 12px;
  font-size: 13px;
  font-family: PingFang SC;
  border-radius: 10px;
  font-weight: 700;
}

.isSigned {
  background-color: #9ca8bc;
  color: #fff;
}

.noSigned {
  color: #fb5c39;
  background-color: #fff;
}

.apply-box {
  margin-top: 30px;
}

.head-left {
  img {
    width: 60px;
    margin-right: 15px;
  }
}

.user-infor {
  h2 {
    font-size: 15px;
    color: #fff;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  span {
    color: #ff0;
    margin-left: 5px;
    margin-right: 5px;
  }

  h3 {
    font-size: 12px;
    color: #fff;
  }
}

.pact-head-box {
  position: relative;
  height: 193px;
  background-image: url("../../assets/img/myBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  padding: 20px 10px 10px 10px;
}

.my-top-box {
  img {
    width: 10px;
  }

  p {
    color: #fff;
    font-size: 18px;
    letter-spacing: 0.5px;
    font-weight: 700;
  }
}
</style>
