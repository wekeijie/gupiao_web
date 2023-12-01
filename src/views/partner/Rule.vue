<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>跟单规则</template>
    </page-header>
    <div class="bg-blue-darken-3 py-6 px-5">
      <v-card>
        <div class="text-h6 text-center">跟单规则</div>
        <v-card-text>
          <p class="text-indeent">
            不论您是刚入门的新手，还是仅仅因为没有时间盯市，都能够借别人的专长轻松投资。你可以跟随明星投资者自动跟单，即时复制他们的交易，完善你的投资组合。跟单规则说明如下：
          </p>
          <p class="text-indeent">
            跟单：需要你每天确认跟单后，操盘师才会去操盘您的跟单资金。确认跟单时间太迟，有可能买不上当日的金股。
          </p>
          <div class="mt-7">
            <div class="text-center text-h6">limiar de capital</div>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">等级</th>
                  <th class="text-left">返佣</th>
                  <th class="text-left">仓位</th>
                  <th class="text-left">团队人数</th>
                </tr>
              </thead>
              <tbody class="text-caption">
                <tr
                  v-for="(item, key) in store.state.copyTrade.partner"
                  :key="key"
                >
                  <td>{{ item.title }}</td>
                  <td>{{ item.split + "%" }}</td>
                  <td>{{ item.position + "%" }}</td>
                  <td v-if="key == 0">0 - {{ item.limit }}</td>
                  <td v-else>
                    {{
                      store.state.copyTrade.partner[key - 1].limit +
                      " - " +
                      item.limit
                    }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </v-card-text>
      </v-card>
      <v-card class="mt-9 pt-5">
        <div class="text-center text-h6">问题说明</div>
        <v-card-text>
          <p class="text-subtitle-1">跟单交易是否产生费用?</p>
          <p class="text-indeent text-caption">
            明星投资者会收取跟单员盈利的百分比，此比例由明星投资者自行定义，平台将收取您每一笔跟单收益的5%作为交易费用
          </p>
          <p class="text-subtitle-1 mt-2">跟单其他交易员的最低限额是多少?</p>
          <p class="text-indeent text-caption">
            跟单员最低跟单限额是根据每位明星投资者自行设定为准。
          </p>
          <p class="text-subtitle-1 mt-2">如何设置我的跟单交易?</p>
          <p class="text-indeent text-caption">
            设置跟单交易十分简单，选择您想跟单的明星投资者，在我要跟单栏页面中，检索明星投资者账户名称，输入您想分配的金额，然后点击跟单，跟单成功后您将可按比例自动跟单。
          </p>
          <p class="text-indeent text-body-2 mt-3">
            您可随时开始跟单某一名明星投资者，您还可以为跟单交易设置增资。
          </p>
        </v-card-text>
      </v-card>
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
import { store } from "@/store";
onMounted(() => {
  if (store.state.copyTrade.partner.length <= 0) {
    store.dispatch("copyTrade/getPartner");
  }
});
</script>
<style>
.text-indeent {
  text-indent: 2em;
}
</style>
