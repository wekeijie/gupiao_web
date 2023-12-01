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
        <div class="apply-btn" @click="goRouter('/ApplyContract')">
          立即申请
        </div>
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
          <p :class="model == 0 ? 'active-tab' : ''" @click="cheangeModel(0)">
            有效合约
          </p>
          <p :class="model == 1 ? 'active-tab' : ''" @click="cheangeModel(1)">
            历史合约
          </p>
        </div>

        <v-carousel
          :show-arrows="false"
          hide-delimiters
          v-model="model"
          height="auto"
        >
          <!-- height="auto" -->
          <v-carousel-item v-for="(slid, i) in 2" :key="i">
            <div class="new-box" v-if="i == 0">
              <div
                class="pact-list-box"
                v-for="item in store.state.contract.list"
                :key="item"
              >
                <div class="pact-name flexBetween" @click="isUp = !isUp">
                  {{ item.type_title + item.contract_limit }}[{{
                    item.order_id
                  }}]
                  <img src="../../assets/img/downPac.png" v-if="isUp" />
                  <img src="../../assets/img/upPac.png" v-else />
                </div>
                <div class="flexBetween balance-box text-center">
                  <div class="">
                    <p>{{ item.total_amount }}</p>
                    <span>操盘资金</span>
                  </div>

                  <div class="">
                    <p>{{ item.balance }}</p>
                    <span>可用余额</span>
                  </div>
                  <div class="">
                    <p>{{ item.caution_line }}</p>
                    <span>触发警戒</span>
                  </div>
                  <div class="">
                    <p>{{ item.stop_loss }}</p>
                    <span>触发止损</span>
                  </div>
                </div>

                <div v-show="isUp">
                  <div class="flexBetween row-box">
                    <span>持仓时间</span
                    ><span>{{ item.start_time + "~" + item.stop_time }} </span>
                  </div>
                  <div class="flexBetween row-box">
                    <span>资金利用率</span
                    ><span>{{ item.contract_rate + "%" }} </span>
                  </div>
                  <div class="flexBetween controls-box">
                    <div @click="showModel(item, 0, true)">
                      <img src="../../assets/img/stopPac.png" />
                      <p>终止</p>
                    </div>
                    <div @click="showModel(item, 1, true)">
                      <img src="../../assets/img/expandPac.png" />
                      <p>扩大</p>
                    </div>
                    <div @click="showModel(item, 2, true)">
                      <img src="../../assets/img/appendPac.png" />
                      <p>追加</p>
                    </div>

                    <div @click="goRouter('/PactDetail', item.order_id)">
                      <img src="../../assets/img/curvePac.png" />
                      <p>详情</p>
                    </div>
                    <div @click="showModel(item, 3, true)">
                      <img src="../../assets/img/sharePac.png" />
                      <p>提盈</p>
                    </div>
                  </div>
                </div>
              </div>

              <no-data
                class="no-data-cont"
                v-if="store.state.contract.list.length <= 0"
              ></no-data>
            </div>
            <div class="new-box" v-if="i == 1">
              <div
                class="pact-list-box"
                v-for="item in store.state.contract.list"
                :key="item"
              >
                <div class="pact-name flexBetween" @click="isUp = !isUp">
                  {{ item.type_title + item.contract_limit }}[{{
                    item.order_id
                  }}]
                  <img src="../../assets/img/downPac.png" v-if="isUp" />
                  <img src="../../assets/img/upPac.png" v-else />
                </div>
                <div class="flexBetween balance-box">
                  <div class="">
                    <p>{{ item.total_amount }}</p>
                    <span>操盘资金</span>
                  </div>

                  <div class="">
                    <p>{{ item.balance }}</p>
                    <span>可用余额</span>
                  </div>
                  <div class="">
                    <p>{{ item.caution_line }}</p>
                    <span>触发警戒</span>
                  </div>
                  <div class="">
                    <p>{{ item.stop_loss }}</p>
                    <span>触发止损</span>
                  </div>
                </div>

                <div v-show="isUp">
                  <div class="flexBetween row-box">
                    <span>持仓时间</span
                    ><span>{{ item.start_time + "~" + item.stop_time }} </span>
                  </div>
                  <div class="flexBetween row-box">
                    <span>资金利率</span
                    ><span>{{ item.contract_rate + "%" }} </span>
                  </div>
                  <div class="flexBetween controls-box">
                    <div>
                      <img src="../../assets/img/stopPac.png" />
                      <p>终止</p>
                    </div>
                    <div>
                      <img src="../../assets/img/expandPac.png" />
                      <p>扩大</p>
                    </div>
                    <div>
                      <img src="../../assets/img/appendPac.png" />
                      <p>追加</p>
                    </div>

                    <div @click="goRouter('/PactDetail', item.order_id)">
                      <img src="../../assets/img/curvePac.png" />
                      <p>详情</p>
                    </div>
                    <div>
                      <img src="../../assets/img/sharePac.png" />
                      <p>提盈</p>
                    </div>
                  </div>
                </div>
              </div>

              <no-data
                class="no-data-cont"
                v-if="store.state.contract.list.length <= 0"
              ></no-data>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <p class="padd-bot"></p>

    <v-overlay v-model="overlay" class="align-center justify-center">
      <v-sheet style="" width="350px" rounded="lg ">
        <div class="">
          <div class="prop-title flexCenter">
            <p>
              {{
                popType == 1
                  ? "扩大配资"
                  : popType == 2
                  ? "增加保证金"
                  : popType == 3
                  ? "合约提盈"
                  : "提示"
              }}
            </p>
          </div>
          <div class="tips-cont" v-if="popType == 0">您确定要终止该合约吗?</div>
          <div v-if="popType != 0">
            <div class="pop-list">
              <div class="flexBetween">
                <p>合约名称</p>
                <p>{{ info.type_title + info.contract_limit }}</p>
              </div>
              <div class="flexBetween">
                <p>合约编号</p>
                <p>{{ info.order_id }}</p>
              </div>
              <div class="flexBetween">
                <p>余额</p>
                <p>{{ info.balance }}</p>
              </div>
            </div>

            <v-text-field
              v-model="amount"
              variant="underlined"
              clearable
              hide-details
              label="金额"
            >
              <template v-slot:prepend>
                <p class="" style="font-size: 30px">¥</p>
              </template>
            </v-text-field>
          </div>
          <div class="btn-box flexAroud">
            <v-btn color="#fb5c39" @click="overlay = fasle">取消</v-btn>
            <v-btn color="#fb5c39" @click="submitok">提交</v-btn>
          </div>
        </div>
      </v-sheet>
    </v-overlay>
  </div>
</template>

<script setup>
import NoData from "../../components/noData.vue";

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
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const model = ref(0);
const isUp = ref(true);
const popType = ref(0); //0终止 1扩大 2追加 3 提盈
const overlay = ref(false);
const info = ref();
const amount = ref(0);

onMounted(() => {
  getList();
});

const showModel = (item, pop, ove) => {
  popType.value = pop;
  overlay.value = ove;
  info.value = item;
};

const cheangeModel = (index) => {
  model.value = index;
  getList();
};

const submitok = () => {
  if (info.value === null || info.value === undefined) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "Por favor, selecione o contrato",
    });
    return;
  }
  if (popType.value == 1) {
    expend();
    return;
  } else if (popType.value == 2) {
    appendAmount();
    return;
  } else if (popType.value == 3) {
    withdrawal();
    return;
  } else if (popType.value == 0) {
    stopPact();
    return;
  }
};

const getList = () => {
  store.dispatch("contract/getList", model.value);
};

const clearoverlay = () => {
  overlay.value = false;
  amount.value = 0;
};

const stopPact = () => {
  store
    .dispatch("contract/stop", { order_id: info.value.order_id })
    .then(() => {
      store.dispatch("snackbar/success", {
        active: true,
        body: "success",
      });
      getList();
      clearoverlay();
    });
};

const withdrawal = () => {
  if (amount.value < 500) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "valor não pode ser inferior a 500",
    });
    return;
  }
  const data = {
    order_id: info.value.order_id,
    amount: amount.value,
  };
  store.dispatch("contract/withdrawal", data).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "success",
    });
    getList();
    clearoverlay();
  });
};

const appendAmount = () => {
  if (amount.value < 100) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "valor não pode ser inferior a 100",
    });
    return;
  }
  const data = {
    order_id: info.value.order_id,
    amount: amount.value,
  };
  store.dispatch("contract/append", data).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "success",
    });
    getList();
    clearoverlay();
  });
};

const expend = () => {
  if (amount.value < 100) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "valor não pode ser inferior a 100",
    });
    return;
  }
  const data = {
    order_id: info.value.order_id,
    amount: amount.value,
  };
  store.dispatch("contract/expand", data).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "success",
    });
    getList();
    clearoverlay();
  });
};
const goRouter = (path, code) => {
  console.log(path, code);
  $router.push({
    path,
    query: {
      code: code,
    },
  });
};
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
    content: "";

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

.v-overlay {
  .v-sheet {
    padding: 10px;
  }

  .prop-title {
    p {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  ::v-deep .v-input__control {
    padding: 8px 0;

    .v-field {
      padding-top: 10px;
    }

    .v-field--active .v-label.v-field-label {
      font-size: 20px;
      color: #000;
      // padding: 10px 0 5px;
    }
  }
}

.pop-list {
  margin-top: 15px;
  line-height: 27px;
  font-size: 13px;
}

.tips-cont {
  padding: 1.5em 1.6em 1.5em;
  min-height: 40px;
  font-size: 15px;
  line-height: 1.4;
  color: #999;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
}

.btn-box {
  ::v-deep .v-btn__content {
    color: #fff;
  }
}
</style>
