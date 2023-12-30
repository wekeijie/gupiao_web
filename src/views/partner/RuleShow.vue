<template>
  <page-header>
    <template v-slot:headerCenter>跟单规则</template>
  </page-header>
  <div class="bg-color ui-min-height pb-3">
    <div class="px-3">
      <v-sheet class="mt-3 bg-white py-3 rounded-lg">
        <div class="px-3">
          <img src="@/assets/static/rule_03.png" width="100" />
          <div class="text-body-2 text-color line-height-24">
            <p class="text-indeent">
              不论您是刚入门的新手，还是仅仅因为没有时间盯市，都能够借别人的专长轻松投资。你可以跟随明星投资者自动跟单，即时复制他们的交易，完善你的投资组合。跟单规则说明如下：
            </p>
            <p class="text-indeent">
              跟单：需要你每天确认跟单后，操盘师才会去操盘您的跟单资金。确认跟单时间太迟，有可能买不上当日的金股。
            </p>
          </div>
        </div>

        <div
          class="mt-5 d-flex flex-wrap list-title-bg text-white py-2 text-center"
        >
          <div class="flex-1-0 w-25">等级</div>
          <div class="flex-1-0 w-25">返佣</div>
          <div class="flex-1-0 w-25">仓位</div>
          <div class="flex-1-0 w-25">团队人数</div>
        </div>
        <div
          class="d-flex flex-wrap py-4 text-center text-body-2"
          v-for="(item, key) in store.state.copyTrade.partner"
          :key="key"
          :class="{ 'list-data-bg': key % 2 != 0 }"
        >
          <div class="flex-1-0 w-25">{{ item.title }}</div>
          <div class="flex-1-0 w-25">{{ item.split + "%" }}</div>
          <div class="flex-1-0 w-25">{{ item.position + "%" }}</div>
          <div class="flex-1-0 w-25" v-if="key == 0">0 - {{ item.limit }}</div>
          <div class="flex-1-0 w-25" v-else>
            {{
              store.state.copyTrade.partner[key - 1].limit + " - " + item.limit
            }}
          </div>
        </div>
      </v-sheet>
      <v-sheet class="mt-3 bg-white py-3 rounded-lg px-3">
        <img src="@/assets/static/rule_6.png" width="100" />
        <div>
          <p class="text-subtitle-1 font-weight-bold">跟单交易是否产生费用?</p>
          <p class="text-indeent text-body-2 text-color">
            明星投资者会收取跟单员盈利的百分比，此比例由明星投资者自行定义，平台将收取您每一笔跟单收益的5%作为交易费用
          </p>
          <p class="text-subtitle-1 mt-2 font-weight-bold">
            跟单其他交易员的最低限额是多少?
          </p>
          <p class="text-indeent text-body-2 text-color">
            跟单员最低跟单限额是根据每位明星投资者自行设定为准。
          </p>
          <p class="text-subtitle-1 mt-2 font-weight-bold">
            如何设置我的跟单交易?
          </p>
          <p class="text-indeent text-body-2 text-color">
            设置跟单交易十分简单，选择您想跟单的明星投资者，在我要跟单栏页面中，检索明星投资者账户名称，输入您想分配的金额，然后点击跟单，跟单成功后您将可按比例自动跟单。
          </p>
          <p class="text-indeent text-body-2 mt-3 text-color">
            您可随时开始跟单某一名明星投资者，您还可以为跟单交易设置增资。
          </p>
        </div>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { onMounted } from "vue";
import { store } from "@/store";

onMounted(() => {
  if (store.state.copyTrade.partner.length <= 0) {
    store.dispatch("copyTrade/getPartner");
  }
});
</script>
<style scoped>
.text-color {
  color: #7a7a7a;
}
.list-title-bg {
  background-color: #7ea1fa;
}
.list-data-bg {
  background-color: #eff4fe;
}
</style>
