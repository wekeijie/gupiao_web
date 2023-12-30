<template>
  <page-header>
    <template v-slot:headerCenter>跟单</template>
  </page-header>
  <div class="bg-color ui-min-height">
    <div class="top-bg"></div>
    <div class="px-3 mt-n81">
      <div class="info-bg w-100 rounded-lg">
        <v-row class="ma-0 pa-0 pt-2">
          <v-col cols="6" class="text-h6 text-color font-weight-bold">{{
            store.state.copyTrade.info.partner.start_title
          }}</v-col>
          <v-col cols="6" class="text-right text-color font-weight-bold"
            >跟单师:<span class="ml-1">{{
              store.state.copyTrade.info.name
            }}</span></v-col
          >
          <v-col cols="12" class="text-right text-body-2 text-color mt-4">
            <div>{{ store.state.copyTrade.info.partner.new_title }}</div>
            <div class="mr-5">
              {{ store.state.copyTrade.info.partner.new_limit }}人
            </div>
          </v-col>
          <v-col cols="12" class="pa-0 ml-3 text-body-2 text-color">
            {{ store.state.copyTrade.info.partner.start_title }}
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="px-3 mt-4">
      <v-sheet class="bg-white py-3 rounded-lg">
        <v-row class="ma-0 pa-0 text-body-2 copy-text-color">
          <v-col
            cols="3"
            class="text-center"
            @click="jump(router, '/Beginner', { type: trader_id })"
          >
            <img src="@/assets/static/copy_2.png" width="30" class="" />
            <div class="">新手跟单</div>
          </v-col>
          <v-col
            cols="3"
            class="text-center"
            @click="jump(router, '/OneKey', { type: trader_id })"
          >
            <img src="@/assets/static/copy_3.png" width="25" class="" />
            <div class="">一键跟单</div>
          </v-col>
          <v-col
            cols="3"
            class="text-center px-1"
            @click="jump(router, '/partner/list', { type: 1 })"
          >
            <img src="@/assets/static/copy_4.png" width="33" class="" />
            <div class="">合伙人制度</div>
          </v-col>
          <v-col
            cols="3"
            class="text-center"
            @click="jump(router, '/partner/rule', { type: 2 })"
          >
            <img src="@/assets/static/copy_5.png" width="30" class="" />
            <div class="">跟单规则</div>
          </v-col>
        </v-row>
      </v-sheet>

      <v-sheet class="bg-white py-3 rounded-lg mt-3">
        <div class="text-subtitle-1 px-3">个人报告</div>
        <v-divider class="mt-2"></v-divider>
        <v-row class="ma-0 pa-0 copy-text-rate">
          <v-col class="text-center text-body-2" cols="3">
            <div class="text-h6">{{ store.state.copyTrade.info.me.total }}</div>
            <div>总收益</div>
          </v-col>
          <v-col class="text-center text-body-2" cols="3">
            <div class="text-h6">
              {{ store.state.copyTrade.info.me.day_total }}
            </div>
            <div>今日收益</div>
          </v-col>
          <v-col class="text-center text-body-2" cols="3">
            <div class="text-h6">
              {{ store.state.copyTrade.info.me.copy_number }}
            </div>
            <div>跟单总数</div>
          </v-col>
          <v-col class="text-center text-body-2 px-1" cols="3">
            <div class="text-h6">
              {{ store.state.copyTrade.info.me.day_copy_number }}
            </div>
            <div>今日跟单数</div>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet class="bg-white py-3 rounded-lg mt-3">
        <div class="text-subtitle-1 px-3">我的团队</div>
        <v-divider class="mt-2"></v-divider>
        <v-row class="ma-0 pa-0 copy-text-rate">
          <v-col class="text-center text-body-2" cols="3">
            <div class="text-h6">
              {{ store.state.copyTrade.info.team.team_number_all }}
            </div>
            <div>团队人数</div>
          </v-col>
          <v-col class="text-center text-body-2" cols="3">
            <div class="text-h6">
              {{ store.state.copyTrade.info.team.team_number }}
            </div>
            <div>直属人数</div>
          </v-col>
          <v-col class="text-center text-body-2" cols="3">
            <div class="text-h6">
              {{ store.state.copyTrade.info.team.tree_number }}
            </div>
            <div>三日未跟单人数</div>
          </v-col>
          <v-col class="text-center text-body-2 px-0" cols="3">
            <div class="text-h6">
              {{ store.state.copyTrade.info.team.recharge_number }}
            </div>
            <div>今日首充人数</div>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, onMounted } from "vue";
import { store } from "@/store";
import { useRoute, useRouter } from "vue-router";
import { jump } from "@/utils/constName";

const route = useRoute();
const router = useRouter();
const trader_id = ref("");
onMounted(() => {
  if (route.query.id) {
    trader_id.value = route.query.id;
    store.dispatch("copyTrade/getInfo", trader_id.value);
  }
});
</script>
<style scoped>
.top-bg {
  background-image: url("@/assets/static/copy_1.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 107px;
}
.info-bg {
  background-image: url("@/assets/static/copy_6.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 177px;
}
.mt-n81 {
  margin-top: -81px !important;
}
.text-color {
  color: #84632a;
}
.copy-text-color {
  color: #2d2d2d;
}
.copy-text-rate {
  color: #5b5b5b;
}
</style>
