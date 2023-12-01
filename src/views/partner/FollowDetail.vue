<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>跟单详情</template>
    </page-header>

    <div class="follow-head">
      <h3>单号: {{ order_id }}</h3>
      <div class="flexBetween">
        <div class="content_Item_item">
          <span>{{ store.state.copyTradeList.order.info.amount }}</span>
          <p>初始资金</p>
        </div>
        <div class="content_Item_item">
          <span>{{ store.state.copyTradeList.order.info.append_amount }}</span>
          <p>追加金额</p>
        </div>
        <div class="content_Item_item">
          <span>{{ store.state.copyTradeList.order.info.amount }}</span>
          <p>余额</p>
        </div>
        <div class="content_Item_item">
          <span>{{ store.state.copyTradeList.order.info.earnings }}</span>
          <p>总收益</p>
        </div>
      </div>
    </div>

    <div style="background-color: rgb(245, 245, 245); height: 5px"></div>

    <div
      class="follow-cont"
      v-for="item in store.state.copyTradeList.order.list"
      :key="item.sell_date"
    >
      <h3>
        {{ item.symbol_title }} (<span>{{ item.symbol }}</span
        >)
      </h3>

      <div class="flexBetween cont-list">
        <p>
          买入价格: <span>{{ item.buy_price }}</span>
        </p>
        <p>
          买入数量: <span>{{ item.buy_number }}</span>
        </p>
      </div>
      <div class="flexBetween cont-list">
        <p>
          买入时间: <span>{{ item.buy_date }}</span>
        </p>
        <p>
          买入仓位: <span>{{ item.buy_position }}</span>
        </p>
      </div>
      <div class="flexBetween cont-list">
        <p>
          卖出价格: <span>{{ item.sell_price }}</span>
        </p>
        <p>
          卖出数量: <span>{{ item.sell_number }}</span>
        </p>
      </div>
      <div class="flexBetween cont-list">
        <p>卖出时间: {{ item.sell_date }}</p>
      </div>

      <h3>
        收益 <span>{{ item.balance }}</span>
      </h3>

      <div class="formula-box">
        <p>收益计算公司</p>
        <p>
          收益({{ item.balance }}) = 总盈利({{ item.earnings }}) -
          明星投资者佣金({{ item.p_price }}) - 上级返佣({{ item.c_price }}) -
          平台佣金({{ item.s_price }})
        </p>
      </div>
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

import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const order_id = ref();

onMounted(() => {
  if ($route.query.order_id) {
    order_id.value = $route.query.order_id;
    store.dispatch("copyTradeList/getOrder", order_id.value);
  }
});
</script>
<style lang="scss" scoped>
.follow-head {
  padding: 10px;

  h3 {
    font-size: 14px;
    font-weight: bolder;
    margin-bottom: 10px;
  }

  .content_Item_item {
    span {
      font-size: 14px;
      color: #fb5c39;
    }

    p {
      font-size: 14px;
    }
  }
}

.follow-cont {
  margin: 10px;
  border-bottom: solid 0.5px #e8e3e8;
  padding-bottom: 5px;

  h3 {
    font-size: 15px;
    font-weight: bolder;

    span {
      font-size: 13px;
      color: #fb5c39;
    }
  }
}

.cont-list {
  margin: 3px 0;

  p {
    font-size: 13px;
    font-weight: 400px;
  }

  span {
    color: #fb5c39;
  }
}

.formula-box {
  border: 1px solid #fab6b6;
  background-color: #fef0f0;
  padding: 10px;
  color: #303133;
  font-size: 11px;
}
</style>
