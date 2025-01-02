<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>合约详情</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245); height: 5px"></div>

    <div class="pact-title">
      <p>{{ store.state.contract.detail.title }}</p>

      <p>[{{ store.state.contract.detail.order_id }}]</p>
    </div>
    <div class="flexAroud amount-cont-box">
      <div class="amount-list">
        <span>{{ store.state.contract.detail.total_amount }}</span>
        <p>操盘资金</p>
      </div>
      <div class="amount-list">
        <span>{{ store.state.contract.detail.expand_amount }}</span>
        <p>配资金额</p>
      </div>
      <div class="amount-list">
        <span>{{ store.state.contract.detail.caution_line }}</span>
        <p>触发警戒</p>
      </div>
      <div class="amount-list" @click="tipshow = !tipshow">
        <span>{{ store.state.contract.detail.stop_loss }}</span>
        <p class="double-decoration text-blue-accent-4">触发止损</p>
        <v-tooltip activator="parent" location="bottom" v-model="tipshow">
          <div>距离强制平仓还差: {{ stop_deficit }}</div>
        </v-tooltip>
      </div>

      <div class="amount-list">
        <span>{{ store.state.contract.detail.balance }}</span>
        <p>可用余额</p>
      </div>
      <div class="amount-list">
        <span>{{ store.state.contract.detail.fee }}</span>
        <p>冻结资金</p>
      </div>
      <div class="amount-list">
        <span>{{ stock_amount_total }}</span>
        <p>证券市值</p>
      </div>
      <div class="amount-list">
        <span>{{
          parseFloat(store.state.contract.detail.total_amount) + underlined
        }}</span>
        <p>合约市值</p>
      </div>

      <div class="amount-list">
        <span>{{ store.state.contract.detail.expend_total }}</span>
        <p>扩大配资</p>
      </div>
      <div class="amount-list">
        <span>{{ store.state.contract.detail.append_total }}</span>
        <p>追保金额</p>
      </div>
      <div class="amount-list">
        <span>{{ store.state.contract.detail.withdraw }}</span>
        <p>提盈金额</p>
      </div>
      <div class="amount-list">
        <span>{{ underlined }}</span>
        <p>合约盈亏</p>
      </div>
    </div>

    <div style="background-color: rgb(245, 245, 245); height: 5px"></div>

    <div class="head-bottom">
      <div class="table-box flexStart">
        <p :class="model == 0 ? 'active-tab' : ''" @click="model = 0">
          合约持仓
        </p>
        <p :class="model == 1 ? 'active-tab' : ''" @click="changeTab(1)">
          资金明细
        </p>
        <p :class="model == 2 ? 'active-tab' : ''" @click="changeTab(2)">
          成交明细
        </p>
        <p :class="model == 3 ? 'active-tab' : ''" @click="changeTab(3)">
          我的委托
        </p>
      </div>
    </div>

    <div class="coupon-box">
      <v-carousel
        :show-arrows="false"
        hide-delimiters
        v-model="model"
        height="auto"
      >
        <v-carousel-item v-for="(slide, i) in 4" :key="i">
          <div class="new-box" v-if="i == 0">
            <table>
              <tbody>
                <tr class="tr-list">
                  <th style="text-align: left">名称</th>
                  <th style="text-align: right">现价/成本</th>
                  <th style="text-align: right">盈亏</th>
                  <th style="text-align: right">持仓</th>
                  <th style="text-align: right">市值</th>
                </tr>
                <tr
                  class="tr-list"
                  v-for="item in stock_ref_list"
                  :key="item.code"
                >
                  <td class="tr-one">
                    <h4>{{ item.title }}</h4>
                  </td>
                  <td class="tr-two">
                    <div class="tr-two-number">
                      {{ item.sell }}/{{ caielAvg(item.cost) }}
                    </div>
                  </td>
                  <td
                    class="tr-three"
                    style="text-align: right"
                    :class="[item.amount > 0 ? 'text-red' : 'text-green']"
                  >
                    <div class="tr-two-number">{{ item.amount }}</div>
                  </td>
                  <td class="tr-three" style="text-align: right">
                    {{ item.number }}
                  </td>
                  <td class="tr-three" style="text-align: right">
                    {{ item.capit.toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="new-box" v-if="i == 1">
            <div class="head-bottom">
              <div class="table-box flexStart">
                <p
                  :class="mouneyIndex == 0 ? 'active-tab' : ''"
                  @click="mouneyIndex = 0"
                >
                  扩大配资
                </p>
                <p
                  :class="mouneyIndex == 1 ? 'active-tab' : ''"
                  @click="mouneyIndex = 1"
                >
                  增加保证金
                </p>
              </div>
            </div>
            <div class="" v-if="mouneyIndex == 0">
              <table>
                <tbody>
                  <tr class="tr-list">
                    <th style="text-align: left">ID</th>
                    <th style="">扩大金额</th>
                    <th style="text-align: right">操作时间</th>
                  </tr>
                  <tr
                    class="tr-list"
                    v-for="item in store.state.contract.amountList.expend"
                    :key="item.id"
                  >
                    <td class="tr-one">
                      <h4>{{ item.id }}</h4>
                    </td>
                    <td class="tr-two">
                      <div class="tr-two-number">{{ item.amount }}</div>
                    </td>
                    <td class="tr-three" style="text-align: right">
                      <div class="tr-two-number">{{ item.date }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="" v-if="mouneyIndex == 1">
              <table>
                <tbody>
                  <tr class="tr-list">
                    <th style="text-align: left">ID</th>
                    <th style="">追加金额</th>
                    <th style="text-align: right">操作时间</th>
                  </tr>
                  <tr
                    class="tr-list"
                    v-for="item in store.state.contract.amountList.append"
                    :key="item.id"
                  >
                    <td class="tr-one">
                      <h4>{{ item.id }}</h4>
                    </td>
                    <td class="tr-two">
                      <div class="tr-two-number">{{ item.amount }}</div>
                    </td>
                    <td class="tr-three" style="text-align: right">
                      <div class="tr-two-number">{{ item.date }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="new-box" v-if="i == 2">
            <table>
              <tbody>
                <tr class="tr-list">
                  <th style="text-align: left">名称</th>
                  <th style="text-align: right">价格/类型</th>
                  <th style="text-align: right">数量</th>
                  <th style="text-align: right">成交时间</th>
                </tr>
                <tr
                  class="tr-list"
                  v-for="item in store.state.contract.allList"
                  :key="item.code"
                  @click="goChanrt(item.id)"
                >
                  <td class="tr-one">
                    <h4 class="double-decoration text-blue-accent-4">
                      {{ item.title }}
                    </h4>
                  </td>
                  <td class="tr-two">
                    <div class="tr-two-number" v-if="item.type == 'BUY'">
                      {{ item.buy_price }}
                    </div>
                    <div class="tr-two-number" v-else>
                      {{ item.sell_price }}
                    </div>

                    <span class="tr-two-number">{{ item.type_string }}</span>
                  </td>
                  <td class="tr-three" style="text-align: right">
                    <div class="tr-two-number">{{ item.number }}</div>
                  </td>
                  <td class="tr-three" style="text-align: right">
                    <p>{{ item.date }}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="new-box" v-if="i == 3">
            <table>
              <tbody>
                <tr class="tr-list">
                  <th style="text-align: left">名称/代码</th>
                  <th style="text-align: right">价格</th>
                  <th style="text-align: right">数量/类型</th>
                  <th style="text-align: right">状态</th>
                </tr>
                <tr
                  class="tr-list"
                  v-for="item in store.state.contract.orderList"
                  :key="item.code"
                >
                  <td class="tr-one">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.code }}</p>
                  </td>
                  <td class="tr-two">
                    <div
                      class="tr-two-number text-right"
                      v-if="item.type == '买入'"
                    >
                      {{ item.buy_price }}
                    </div>
                    <div
                      class="tr-two-number text-right"
                      v-if="item.type == '卖出'"
                    >
                      {{ item.sell_price }}
                    </div>
                  </td>
                  <td class="tr-three" style="text-align: right">
                    <div class="tr-two-number">
                      {{ item.number }}/{{ item.type }}
                    </div>
                  </td>
                  <td class="tr-three" style="text-align: right">
                    <p v-if="item.status == 1">成交</p>
                    <p v-else>等待</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
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

import PageHeader from "../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { fuyingAmount } from "@/utils/helper";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const model = ref(0);
const mouneyIndex = ref(0);
const order_id = ref(0);
const underlined = ref(0);
const tipshow = ref(false);

const stock_amount_total = ref(0);
const stock_ref_list = ref([]);
const total_amount = ref(0);
const stop_deficit = ref(0);

onMounted(() => {
  if ($route.query.code) {
    order_id.value = $route.query.code;
  }
  store.dispatch("contract/getDetail", order_id.value).then((d) => {
    let temp = d.stock.reduce((sum, item) => {
      return (sum += parseFloat(item.sell) * item.number);
    }, 0);
    stock_amount_total.value = parseFloat(temp.toFixed(2));
    stock_ref_list.value = mergeObjectsByCode(d.stock);
  });
});

const caielAvg = (costs) => {
  const cost =
    costs.reduce((sum, item) => sum + parseFloat(item), 0) / costs.length;
  return cost.toFixed(2);
};

const mergeObjectsByCode = (stocks) => {
  const mergedMap = stocks.reduce((acc, item) => {
    let amount = parseFloat(fuyingAmount(item.price, item.sell, item.number));
    let capit = parseFloat(item.sell) * item.number;
    if (!acc[item.code]) {
      acc[item.code] = {
        ...item,
        amount: amount,
        cost: [item.price],
        capit: capit,
      };
    } else {
      acc[item.code].amount += amount;
      acc[item.code].number += item.number;
      acc[item.code].capit += capit;
      acc[item.code].cost.push(item.price);
    }
    return acc;
  }, {});
  return Object.values(mergedMap);
};

watch(
  () => store.state.contract.staock_list,
  (count, prev) => {
    let amount = 0;
    if (count.length > 0) {
      count.forEach((item) => {
        let temp = fuyingAmount(item.price, item.sell, item.number);
        amount += parseFloat(temp);
      });
    }

    let temp =
      parseFloat(amount) + parseFloat(store.state.contract.detail.unrealized);
    underlined.value = parseFloat(temp.toFixed(2));
    stop_deficit.value =
      underlined.value +
      parseFloat(store.state.contract.detail.total_amount) -
      parseFloat(store.state.contract.detail.stop_loss);
  }
);
const goChanrt = (id) => {
  $router.push({ path: "/market/detail", query: { order_id: id } });
};
const changeTab = (index) => {
  if (index == 1) {
    store.dispatch("contract/getAmountList", order_id.value);
  } else if (index == 2) {
    store.dispatch("contract/getAllList", order_id.value);
  } else if (index == 3) {
    store.dispatch("contract/getOrderList", order_id.value);
  }
  model.value = index;
};
</script>
<style lang="scss" scoped>
.pact-title {
  padding: 10px;
  line-height: 38px;
  font-size: 14px;
  color: #000;
  border-bottom: 2px solid rgb(245, 245, 245);
}

.amount-cont-box {
  flex-wrap: wrap;
  padding: 10px 0;
}

.amount-list {
  width: 25%;
  text-align: center;
  margin: 5px 0;

  span {
    color: #fb5c39;
    font-size: 12px;
    text-align: center;
  }

  p {
    font-size: 12px;
    color: #303133;
    text-align: center;
  }
}

.head-bottom {
  line-height: 40px;
  padding: 0 12px;
  color: #7f829a;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
}

.table-box {
  p {
    padding: 8px 10px 3px;
    font-size: 14px;
    font-weight: bold;
    color: rgb(199, 199, 199);
    position: relative;
  }

  .active-tab {
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

.coupon-box {
  min-height: 300px;
  // background-color: #f6f6f6;
  // overflow-y: scroll;
}

.new-box {
  min-height: 300px;
  padding: 0 10px;
}

.coupon-list {
  height: 136px;
  align-items: center;
  margin: 0px 4px;
  background-image: url("../../assets/img/coupon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  padding: 17px 30px 0;
}

.waite-box {
  h2 {
    width: 50%;
    font-size: 30px;
    color: #e95b57;

    span {
      font-size: 20px;
    }
  }

  p {
    text-align: right;
    font-size: 13px;
    color: #7f829a;
  }
}

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
    h4 {
      font-size: 12px;
      letter-spacing: 0.5px;
      color: #000;
    }

    p {
      font-size: 12px;
      border-radius: 2px;
      color: #8f8f94;
    }

    span {
      background-color: #fb5c39;
      padding: 0px 4px;
      font-size: 8px;
      color: #fff;
    }
  }

  .tr-two {
    text-align: center;

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
    text-align: right;

    span {
      font-size: 12px;
      font-size: 12px;
      color: red;
    }
  }

  // span {
  //     color: rgb(230, 5, 5);
  //     margin-left: 3px;
  // }

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
</style>
