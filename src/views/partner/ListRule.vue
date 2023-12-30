<template>
  <page-header>
    <template v-slot:headerCenter>合伙人制度</template>
  </page-header>
  <div class="bg-color ui-min-height px-3 pb-8">
    <v-sheet class="bg-white py-4 rounded-lg mt-3">
      <img src="@/assets/static/partner_list_1.png" width="110" class="ml-3" />
      <div
        class="mt-2 d-flex flex-wrap text-center w-100 text-body-1 list-title-bg py-2 text-white"
      >
        <div class="flex-1-0 w-50">团队人数</div>
        <div class="flex-1-0 w-50">合伙人等级</div>
      </div>
      <div
        class="d-flex flex-wrap text-center w-100 text-body-1 py-3 list-color"
        v-for="(item, key) in store.state.copyTrade.partner"
        :key="key"
        :class="{ 'active-bg': key % 2 != 0 }"
      >
        <div class="flex-1-0 w-50" v-if="key == 0">0 - {{ item.limit }}</div>
        <div
          class="flex-1-0 w-50"
          v-else-if="key == store.state.copyTrade.partner.length - 1"
        >
          {{ parseInt(store.state.copyTrade.partner[key - 1].limit) + 1
          }}<span class="ml-1">-</span>
        </div>
        <div class="flex-1-0 w-50" v-else>
          {{
            formatLimit(
              store.state.copyTrade.partner[key - 1].limit,
              item.limit
            )
          }}
        </div>
        <div class="flex-1-0 w-50">{{ item.title }}</div>
      </div>
      <div class="px-3 mt-2 text-indent body-color">
        <p>
          不同团队人数对应不同合伙人等级，团队人数包含由你邀请码注册进来的人，也包含你邀请的人的邀请码再注册进来的人，比如你邀请A,A邀请B,B又邀请C，那么A、B、C都属于你的团队人员。
        </p>
      </div>
    </v-sheet>
    <v-sheet class="bg-white py-4 rounded-lg mt-3">
      <img src="@/assets/static/partner_list_2.png" width="150" class="ml-3" />
      <div
        class="mt-2 d-flex flex-wrap text-center w-100 text-body-1 list-title-bg py-2 text-white"
      >
        <div class="flex-1-0 w-33">团队人数</div>
        <div class="flex-1-0 w-33">合伙人等级</div>
        <div class="flex-1-0 w-33">分成比例</div>
      </div>
      <div
        class="d-flex flex-wrap text-center w-100 text-body-1 py-3 list-color"
        v-for="(item, key) in store.state.copyTrade.partner"
        :key="key"
        :class="{ 'active-bg': key % 2 != 0 }"
      >
        <div class="flex-1-0 w-33" v-if="key == 0">0 - {{ item.limit }}</div>
        <div
          class="flex-1-0 w-33"
          v-else-if="key == store.state.copyTrade.partner.length - 1"
        >
          {{ parseInt(store.state.copyTrade.partner[key - 1].limit) + 1
          }}<span class="ml-1">-</span>
        </div>
        <div class="flex-1-0 w-33" v-else>
          {{
            formatLimit(
              store.state.copyTrade.partner[key - 1].limit,
              item.limit
            )
          }}
        </div>
        <div class="flex-1-0 w-33">{{ item.title }}</div>
        <div class="flex-1-0 w-33">{{ item.split + "%" }}</div>
      </div>
      <div class="px-3 mt-2 text-indent body-color">
        <p>
          不同团队人数对应不同的团队分成比例，团队人数包含由你邀请码注册进来的人，也包含你邀请的人的邀请码再邀请的人，你邀请A,A邀请B,B又邀请C,那么A、B、C都属于您的团队。假设你的团队人数是45人，整个团队所有人当天跟单总收益10万，那么你的团队分成为100000*4.2%=4200元。
        </p>
      </div>
    </v-sheet>
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
const formatLimit = (start, stop) => {
  return parseInt(start) + 1 + " - " + stop;
};
</script>
<style scoped>
.list-title-bg {
  background-color: #7ea1fa;
}
.active-bg {
  background-color: #eff4fe;
}
.list-color {
  color: #2d2d2d;
}
.body-color {
  color: #5b5b5b;
}
</style>
