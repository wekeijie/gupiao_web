<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>申请合约</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245); height: 3px"></div>
    <div class="flexBetween list-box">
      <h3>钱包可用余额</h3>
      <h2>{{ "¥" + store.state.user.info.balance }}</h2>
    </div>
    <div style="background-color: rgb(245, 245, 245); height: 3px"></div>
    <div class="flexBetween list-box" @click="isProp = true">
      <h3>合约类型</h3>
      <div class="pact-type">
        <span>
          {{ typeIndex.title + typeIndex.day + "天" }}
        </span>
        <img src="../../assets//img/rightImg.png" alt="" />
      </div>
    </div>
    <div style="background-color: rgb(245, 245, 245); height: 3px"></div>

    <div class="input-number">
      <div class="flexBetween input-title-box">
        <h2>请输入保证金额度</h2>
      </div>

      <v-text-field
        v-model="amount"
        variant="underlined"
        hide-details="auto"
        required
        prefix="¥"
        size="25"
      ></v-text-field>
    </div>
    <div style="background-color: rgb(245, 245, 245); height: 3px"></div>

    <div class="limit-box mb-n8">
      <h5>申请额度</h5>
    </div>

    <div class="flexStart limit-list-box">
      <div
        class="limit-list"
        v-for="(item, index) in store.state.contract.limitList"
        :key="item"
        :class="selectIndex == index ? 'activeBg' : ''"
        @click="selelctLimitApply(index)"
      >
        <h4>{{ item.title }} <span></span></h4>
        <p>{{ item.limit * amount }}</p>
      </div>
    </div>
    <div class="apply-btn" @click="applySub">立即申请</div>

    <v-bottom-sheet v-model="isProp">
      <v-list>
        <div class="flexBetween sheet-top">
          <div class="sheet-sure">选择合约类型</div>
          <img
            src="../../assets/img/close.png"
            alt=""
            @click="isProp = false"
          />
        </div>
        <v-list-item
          class="flexCenter"
          v-for="(tile, index) in store.state.contract.typeList"
          :key="tile.title"
          @click="selectType(index)"
        >
          <div class="flexBetween type-list">
            <v-list-item-title>{{
              tile.title + tile.day + "天"
            }}</v-list-item-title>
            <img
              src="../../assets/img/select.png"
              alt=""
              v-if="tile.id == typeIndex.id"
            />
          </div>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>

    <v-dialog v-model="isApply" persistent class="flexCenter">
      <div class="prop-tips">
        <h1>详情</h1>
        <div class="prop-cont flexBetween">
          <p>
            总操盘资金
            <img src="../../assets/img/！.png" alt="" />
          </p>
          <span>{{ applyInfo.total }}</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>保证金/本金</p>
          <span>{{ amount }}</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>配资资金</p>
          <span>{{ applyInfo.expand }}/{{ limit_data.limit }}</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>
            亏损预警线
            <img src="../../assets/img/！.png" alt="" />
          </p>
          <span>{{ applyInfo.loss_waring }}</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>
            亏损平仓线
            <img src="../../assets/img/！.png" alt="" />
          </p>
          <span>{{ applyInfo.loss_fail }}</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>
            利率
            <img src="../../assets/img/！.png" alt="" />
          </p>
          <span>{{ limit_data.rate + "%" }}</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>产生利息</p>
          <span>{{ applyInfo.rate.toFixed(2) }}元</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>
            资金使用时间
            <img src="../../assets/img/！.png" alt="" />
          </p>
          <span>{{ typeIndex.day }}天后自动续期</span>
        </div>
        <div class="prop-cont flexBetween">
          <p>
            可用利息券
            <img src="../../assets/img/！.png" alt="" />
          </p>
          <span>{{ store.state.user.info.interest_amount }}元</span>
        </div>
        <div class="prop-cont flexBetween">
          <p class="flexStart">
            准备资金
            <img src="../../assets/img/！.png" alt="" />
          </p>
          <span>{{ applyInfo.expand }}</span>
        </div>

        <div class="prop-lab">
          <v-checkbox v-model="checkbox" color="#2979ff">
            <template v-slot:label>
              <p>
                勾选即表示已阅读并同意《
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <span target="_blank" @click.stop> 配资协议 </span>
                  </template>
                </v-tooltip>
                》
              </p>
            </template>
          </v-checkbox>
        </div>
        <div class="prop-btn flexCenter">
          <v-btn @click="isApply = false" color="#fb5c39">取消</v-btn>
          <v-btn @click="submitHandle" color="#fb5c39">确认</v-btn>
        </div>
      </div>
    </v-dialog>
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
const selectIndex = ref(0);
const isProp = ref(false);
const isApply = ref(false);
const typeIndex = ref({});
const checkbox = ref(true);
const selectType = (index) => {
  if (store.state.contract.typeList[index]) {
    typeIndex.value = store.state.contract.typeList[index];
    getLimit(typeIndex.value.id);
  }
  isProp.value = false;
};
const limit_data = ref({});

const selelctLimitApply = (index) => {
  selectIndex.value = index;
  limit_data.value = store.state.contract.limitList[index];
};

const amount = ref(500);
const applyInfo = reactive({
  total: 0,
  expand: 0,
  loss_waring: 0,
  loss_fail: 0,
  rate: 0,
});

onMounted(() => {
  store.dispatch("user/userInfo");
  store.dispatch("contract/getType").then(() => {
    selectType(0);
  });
});

const getLimit = (type) => {
  store.dispatch("contract/getLimit", type).then(() => {
    selelctLimitApply(0);
  });
};

const submitHandle = () => {
  const data = {
    amount: amount.value,
    type_id: typeIndex.value.id,
    limit_id: limit_data.value.id,
  };
  store.dispatch("contract/create", data).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "Success",
    });
    isApply.value = false;
    $router.push("/Pact");
  });
};

const applySub = () => {
  isApply.value = true;
  if (amount.value > store.state.user.info.balance) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "保证金不足，请存款！",
    });
    return;
  }
  console.log(limit_data);
  applyInfo.expand = amount.value * limit_data.value.limit;
  applyInfo.total = applyInfo.expand + amount.value;
  applyInfo.loss_waring = applyInfo.expand + amount.value * 0.5;
  applyInfo.loss_fail = applyInfo.expand + amount.value * 0.2;
  applyInfo.rate = applyInfo.expand * (limit_data.value.rate / 100);
  console.log(123);
  console.log(applyInfo);
  isApply.value = true;
};
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
