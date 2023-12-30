<template>
  <page-header>
    <template v-slot:headerCenter>查找明星投资者</template>
    <template v-slot:headerRight>
      <p @click="jump(router, '/FollowList')">跟单记录</p>
    </template>
  </page-header>
  <div class="bg-color ui-min-height">
    <v-row class="ma-0 pa-0 px-2 mt-2">
      <v-col cols="10">
        <v-text-field
          label=""
          placeholder="请输入明星投资者名字"
          variant="solo-filled"
          height="30"
          rounded
          hide-details
          density="compact"
          single-line
          prepend-inner-icon="mdi-magnify"
          class="text-white"
          clearable
          v-model="name"
          @keyup.enter="searchSub"
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="text-body-1 pt-6" @click="searchSub"> 搜索 </v-col>
    </v-row>

    <div class="px-4 mt-12">
      <div class="bg-white rounded-lg py-3 px-2 relative">
        <img
          v-if="store.state.trade.info.avatar"
          src="https://cdn.cicctx.com/20231203/XpTV53aqVg1Sz0884jmHiY34WIP9pVxEQnKsSrY2.png"
          width="90"
          height="90"
          class="rounded-circle absolute avatar-top-left"
        />
        <img
          v-else
          src="@/assets/static/trade_avatar.png"
          width="90"
          class="rounded-circle absolute avatar-top-left"
        />
        <div class="ml-4">
          <div class="text-h6 mt-14">
            明星投资者：<span v-if="store.state.trade.info.name">{{
              store.state.trade.info.name
            }}</span>
          </div>
          <div class="mt-3 text-body-1 text-ui-grey">
            <span v-if="store.state.trade.info.summary">{{
              store.state.trade.info.summary
            }}</span>
            <span v-else> - </span>
          </div>
          <ul class="ml-4 mt-3">
            <li class="py-1 text-body-1">
              就职于:<span v-if="store.state.trade.info.company" class="ml-1">{{
                store.state.trade.info.company
              }}</span
              ><span v-else class="ml-1"> - </span>
            </li>
            <li class="py-1 text-body-1">
              投资年数:<span v-if="store.state.trade.info.year" class="ml-1">{{
                store.state.trade.info.year + "年"
              }}</span
              ><span v-else class="ml-1">-</span>
            </li>
          </ul>
          <v-row class="ma-0 pa-0">
            <v-col cols="8" class="pa-0 mt-5">
              <v-btn
                block=""
                color="red"
                v-if="store.state.trade.info.name"
                :to="'/Homepage?id=' + store.state.trade.info.id"
                >确认</v-btn
              >
              <v-btn block="" disabled="" v-else>确认</v-btn>
            </v-col>
            <v-col cols="4" class="pa-0 pt-4 text-right">
              <v-btn
                variant="text"
                class="text-ui-grey"
                v-if="store.state.trade.info.name"
                :to="'/TradeRecordList?id=' + store.state.trade.info.id"
              >
                操盘记录
              </v-btn>
              <v-btn variant="text" class="text-ui-grey" v-else disabled>
                操盘记录
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
      <v-sheet class="py-3 bg-white rounded-lg mt-4 px-4">
        <img src="@/assets/static/copy_help.png" width="140" />
        <div class="text-body-1 text-ui-grey mt-2">
          <p>
            跟单十分简单，在搜索框中输入您想跟单的明星投资者账户名称，点击查找就可以查看到明星投资者的详细信息，点击“立即申请”就可以进入申请页面申请。
          </p>
          <p>
            需要您每天确认跟单后，操盘师才会去操盘您的跟单资金。确认跟单时间太迟，有可能买不上当日的金股。
          </p>
        </div>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { jump } from "@/utils/constName";
import { store } from "@/store";
const router = useRouter();

const name = ref();

const searchSub = () => {
  if (!name.value) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请填写教授的姓名",
    });
    return;
  }
  store.dispatch("trade/getInfo", { name: name.value });
};
</script>
<style scoped>
.avatar-top-left {
  top: -34px;
  left: 19px;
}
</style>
