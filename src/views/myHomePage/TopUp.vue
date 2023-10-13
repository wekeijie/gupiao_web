<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>充值</template
      ><template v-slot:headerRight>
        <p @click="goRouter('/Recordslist', '充值审核记录')">账单</p>
      </template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245); height: 3px"></div>
    <div class="line-box flexBetween" @click="isApply = true">
      <h2>充值方式</h2>
      <div class="flexEnd" style="min-width: 45%" @click="isApply = true">
        <span class="mr-1">{{ info.title }}</span>
        <img class="pay-logo" v-if="info.icon" :src="info.icon" alt="" />
        <img class="right-ico" src="../../assets/img/rightImg.png" alt="" />
      </div>
    </div>

    <div style="background-color: rgb(245, 245, 245); height: 3px"></div>

    <v-text-field
      v-model="name"
      label="请输入付款人姓名"
      v-if="isManually"
      class="mt-2 mb-3"
      density="compact"
      messages="为了及时到账，请务必填写真实付款姓名"
    ></v-text-field>
    <div class="limit-box">
      <h5>充值金额</h5>
    </div>
    <div class="flexStart limit-list-box">
      <div
        class="limit-list"
        :class="selectIndex == item ? 'pay_select' : ''"
        v-for="item in money_list"
        :key="item"
        @click="checkMoney(item)"
      >
        <h2>{{ item }}元</h2>
      </div>
    </div>

    <v-text-field
      v-model="money"
      :messages="'请输入充值金额(最低' + info.min + '元)'"
      :placeholder="'请输入充值金额(最低' + info.min + '元)'"
      variant="none"
      hide-details="auto"
      required
      prefix="￥"
      size="80"
    ></v-text-field>
    <div class="apply-btn" @click="submitJump">立即充值</div>

    <div class="problem-tips">
      充值遇到问题？请联系<span>人工客服</span>解决
    </div>

    <v-bottom-sheet v-model="isApply">
      <v-list>
        <div class="flexBetween sheet-top">
          <div class="sheet-sure">请选择您的充值方式</div>
          <img
            src="../../assets/img/close.png"
            alt=""
            @click="isApply = false"
          />
        </div>
        <v-list-item
          class="flexCenter"
          v-for="(item, index) in store.state.topUp.list"
          :key="item.slug"
          @click="checkPay(index)"
        >
          <div class="flexBetween type-list">
            <img class="list-pay-log" :src="item.icon" alt="" />
            <v-list-item-title>
              <h3>{{ item.title }}-最低充值{{ item.min }}元</h3>
              <p>
                当前充值方式可返现<span>{{ item.amount + "%" }}</span>
              </p>
            </v-list-item-title>
            <img
              class="list-select"
              src="../../assets/img/select.png"
              alt=""
              v-if="index == typeIndex"
            />
          </div>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script setup>
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

import { VBottomSheet } from "vuetify/lib/labs/vBottomSheet/index";
import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();

const selectIndex = ref(1);
const typeIndex = ref(1);

const isApply = ref(false);

const info = ref({
  title: "请选择",
  icon: "",
  slug: "",
  min: 0,
  amount: 0,
});

const money_list = ref([100, 500, 1000, 3000, 5000, 10000]);

const money = ref(0);
const isManually = ref(false);
const name = ref("");
const manually_type = ref("manually_type");

onMounted(() => {
  store.dispatch("topUp/getList").then(() => {
    checkPay(0);
  });
});

const submitJump = () => {
  if (money.value < info.value.min) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "金额不能低于最低金额",
    });
    return;
  }

  if (info.value.type == manually_type.value && name.value == "") {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请输入姓名",
    });
    return;
  }

  store
    .dispatch("topUp/subPut", {
      name: name.value,
      slug: info.value.slug,
      amount: money.value,
    })
    .then((d) => {
      if (info.value.type == manually_type.value) {
        goRouter("/TopUp/manually");
        return;
      } else {
        window.open(d, "_blank");
      }
    });
};

const checkMoney = (item) => {
  money.value = item;
  selectIndex.value = item;
};

const checkPay = (index) => {
  if (store.state.topUp.list[index]) {
    info.value = store.state.topUp.list[index];
    typeIndex.value = index;
    isApply.value = false;
    if (info.value.type == manually_type.value) {
      isManually.value = true;
    } else {
      isManually.value = false;
    }
  }
};

const goRouter = (path, title) => {
  $router.push({
    path,
    query: {
      title,
    },
  });
};
</script>
<style lang="scss" scoped>
.v-text-field {
  padding: 0px 10px;

  ::v-deep .v-text-field__prefix {
    font-size: 30px !important;
    color: #000 !important;
    opacity: 1;
  }

  ::v-deep input {
    font-size: 25px !important;
  }
}

.limit-box {
  padding: 15px 10px 0px 10px;

  h5 {
    font-size: 15px;
    color: #000;
    font-family: PingFang SC;
    font-weight: 700;
  }
}

.v-list-item {
  line-height: 72px;
  border-top: solid 1px #f1f1f1;
  padding: 25px 0 !important;
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
  width: 100%;

  .list-pay-log {
    width: 38px;
    margin-right: 13px;
  }

  h3 {
    font-size: 15px;
    color: #2c2e3a;
  }

  p {
    font-size: 15px;
    color: #2c2e3a;

    span {
      margin-left: 2px;
      color: #dd5054;
    }
  }

  .list-select {
    width: 12px;
  }
}

.v-list-item-title {
  // margin-right: 130px;
  width: 75vw;
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.return-number {
  margin: 0 10px;
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 34px;
  border-top: solid 1px #f1f1f1;
  margin-left: 12px;
  color: #7f829a;

  span {
    color: #dd5054;
  }
}

.apply-btn {
  margin: 24px 14px 10px 14px;
  border-radius: 7px;
  border: none;
  background-color: #dd5054;
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding: 12px 10px;
}

.problem-tips {
  text-align: center;
  font-size: 12px;
  color: #7f829a;

  span {
    color: #05f;
  }
}

.limit-list-box {
  flex-wrap: wrap;

  .pay_select {
    box-sizing: border-box;
    color: #333;
    border-radius: 8px;
    background: url("../../assets/img/select-bg.png") no-repeat 100% 100%;
    border: 1px solid #fc4f00;
    background-size: 27px;
  }

  // .activeBg {
  //     background-color: #fb5c39 !important;
  //     background-image: url("../../assets/img/activeBg.png");
  //     background-repeat: no-repeat;
  //     background-size: 100% 100%;

  //     h2 {
  //         color: #fff;
  //     }

  //     p {
  //         color: #fff;
  //     }
  // }
}

.limit-list {
  margin: 10px 2.6%;
  box-sizing: border-box;
  width: 28%;
  // height: 56px;
  padding: 7px 0;
  text-align: center;
  background: #fff;
  // margin: 6px 0px;
  border: 1px solid #ebebeb;
  border-radius: 8px;

  h2 {
    font-size: 20px;
    color: #333;
    font-weight: 400;
  }
}

.line-box {
  padding: 15px;
  border-bottom: solid 0.5px #e5e5e5;

  h2 {
    font-size: 15px;
    letter-spacing: 0.5px;
    width: 90%;
    color: #2c2e3a;
  }

  span {
    font-size: 15px;
    color: #a4a4a4;
  }

  .pay-logo {
    width: 29px;
    margin: 0 15px 0 10px;
  }

  .right-ico {
    width: 7px;
  }
}
</style>
