<template>
  <div class="message-box">
    <div class="pact-head-box">
      <div class="flexBetween my-top-box">
        <p>我的</p>
        <div class="flexCenter">
          <img src="../../assets/img/myCustomer.png" @click="goRouter('/IframeDemo')" />
          <div class="message-list">
            <img src="../../assets/img/myMessage.png" @click="goRouter('/MessageLIst')" />
            <span v-if="3 > 0">3</span>
          </div>
        </div>
      </div>
      <div class="apply-box">
        <div class="head-left" @click="goRouter('/SetInfor')">
          <div class="avatat-box">
            <img src="../../assets/img/myAvaatar.png" />
            <img src="../../assets/img/muMember.png" />
          </div>

          <div class="user-infor">
            <h2>554476</h2>
            <h3 class="flexBetween">推荐码 <span>RI8kPt</span>
              <img src="../../assets/img/myCopy.png" />
            </h3>
            <div class="user-info-ico">
              <img src="../../assets/img/myPhone.png" />
              <img src="../../assets/img/myRealname.png" />
              <img src="../../assets/img/myBack.png" />
              <img src="../../assets/img/myEmail.png" />
            </div>
          </div>

        </div>
        <div class="sign-in-box">
          <img src="../../assets/img/mySign.png" @click="goRouter('/InCoupon')" />
        </div>

      </div>

    </div>

    <div class="pact-cont-box">

      <div class="tab-cont">
        <div class="tab-list" @click="goRouter('/TopUp')">
          <img src="@/assets/img/myTopUp.png">
          <p>充值</p>
        </div>
        <div class="tab-list" @click="goRouter('/Withdraw')">
          <img src="@/assets/img/myWithdraw.png">
          <p>提现</p>
        </div>
        <div class="tab-list" @click="goRouter('/Agency')">
          <img src="@/assets/img/myCenter.png">
          <p>代理中心</p>
        </div>
        <div class="tab-list">
          <img src="@/assets/img/myData.png">
          <p>资金明细</p>
        </div>

      </div>

      <div class="preview-box">
        <h1>账户预览</h1>
        <div class="flexBetween preview-cont">
          <div>
            <p>670px</p>
            <span>余额</span>
          </div>
          <div>
            <p>670px</p>
            <span>利息劵</span>
          </div>
          <div>
            <p>670px</p>
            <span>保证金</span>
          </div>

        </div>
      </div>

      <div class="active-box">
        <img src="@/assets/img/myQuest.png">
        <img src="@/assets/img/active2.png" @click="goRouter('/ActiveList')">

      </div>
      <div class="led-img" @click="goRouter('/Invite')">

        <img src="@/assets/img/mymanage.png">
      </div>

      <div class="controls-box">

        <div class="flexBetween controls-list">
          <div class="flexStart" @click="goRouter('/StarAuthor')">
            <img class="list-icp" src="@/assets/img/myStar.png">
            <span>明星投资者</span>
          </div>
          <img class="right-img" src="@/assets/img/rightImg.png">
        </div>
        <div class="flexBetween controls-list">
          <div class="flexStart" @click="goRouter('/Documentary')">
            <img class="list-icp" src="@/assets/img/myDocumentary.png">
            <span>我要跟单</span>
          </div>
          <img class="right-img" src="@/assets/img/rightImg.png">
        </div>
        <div class="flexBetween controls-list">
          <div class="flexStart">
            <img class="list-icp" src="@/assets/img/mySecure.png">
            <span>账号与安全</span>
          </div>
          <img class="right-img" src="@/assets/img/rightImg.png">
        </div>
        <div class="flexBetween controls-list" @click="goRouter('/HelpCenter')">
          <div class="flexStart">
            <img class="list-icp" src="@/assets/img/myHelp.png">

            <span>帮助中心</span>
          </div>
          <img class="right-img" src="@/assets/img/rightImg.png">
        </div>
        <div class="flexBetween controls-list" @click="goRouter('/CommonSet')">
          <div class="flexStart">
            <img class="list-icp" src="@/assets/img/mySeting.png">
            <span>通用设置</span>
          </div>
          <img class="right-img" src="@/assets/img/rightImg.png">
        </div>
        <div class="flexBetween controls-list" @click="goRouter('/VersionNumber')">
          <div class="flexStart">
            <img class="list-icp" src="@/assets/img/myAbout.png">
            <span>关于</span>
          </div>
          <img class="right-img" src="@/assets/img/rightImg.png">
        </div>

      </div>

    </div>

    <p class="padd-bot"></p>

  </div>
</template>

<script setup>

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
.message-box {
  width: 100%;
  min-height: 100vh;
  background-color: #f2f3f2;
}

.pact-head-box {
  height: 193px;
  background-image: url("../../assets/img/myBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  padding: 10px;
}

.my-top-box {
  p {
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: mediumttf;
  }

  img {
    width: 24px;
    margin: 10px;
  }
}

.message-list {
  position: relative;

  span {
    display: block;
    width: 20px;
    position: absolute;
    right: 5px;
    top: 3px;
    color: #fff;
    background-color: #f0ad4e;
    transform: scale(.8);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    border-radius: 50%;
    font-size: 12px;
    padding: 0 6px;
    text-align: center;
  }
}

.avatat-box {
  position: relative;
  width: 71px;
  margin-right: 10px;

  img {
    width: 71px;
  }

  img:first-child {
    margin-right: 10px;
  }

  img:last-child {
    position: relative;
    top: -20px;
    width: 71px;
  }
}

.head-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.apply-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin: 10px 0;
}

.user-infor {
  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  h3 {
    margin-top: 5px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    color: #fff;

    img {
      width: 13px;
    }
  }
}

.user-info-ico {
  img {
    width: 14px;
    margin: 5px;
  }
}

.sign-in-box {
  img {
    width: 126px;
  }
}

.pact-cont-box {
  padding: 10px;
  z-index: 9990;
}

.tab-cont {
  width: 100%;
  background-color: #fff;
  border-radius: 11px;
  padding: 27px 0;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 1px 3px 5px 1px hsla(0, 0%, 94.9%, 0.8);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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

.preview-box {
  width: 100%;
  background-color: #fff;
  border-radius: 11px;
  padding: 10px 18px;
  margin: 15px 0;

  h1 {
    font-size: 14px;
    color: #000;
    margin-bottom: 10px;
  }
}

.preview-cont {
  text-align: center;
  padding: 0 10px;

  p {
    font-size: 15px;
    font-weight: 500;
    color: #000;
  }

  span {
    margin-top: 5px;
    letter-spacing: 1px;
    font-size: 12px;
    color: #000;
  }
}

.active-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 11px;
  padding: 10px 10px 23px 10px;

  img {
    width: 48%;
  }
}

.led-img {
  width: 100%;
  text-align: center;
  background-color: #fff;
  border-radius: 11px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  img {
    width: 95%;
    border-radius: 5px;
  }
}

.controls-box {
  width: 100%;
  background-color: #fff;
  border-radius: 11px;
  margin-bottom: 30px;
}

.controls-list {
  padding: 10px;
  border-bottom: 1px solid #f5efef;

  .list-icp {
    width: 18px;
    margin-right: 5px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 11px;
  }

  .right-img {
    width: 8px;
  }
}
</style>
