<template>
  <div class="bg-color pb-8">
    <div class="index-top w-100">
      <div class="px-3 pt-4">
        <searchComponent></searchComponent>
        <v-carousel
          :show-arrows="false"
          hide-delimiters
          cycle
          height="150px"
          hide-delimiter-background
          class="mt-4 rounded-lg"
        >
          <v-carousel-item
            v-for="item in store.state.bannerAndRank.banner"
            :key="item.id"
            :src="item.image"
            cover
          ></v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div class="px-3">
      <v-sheet class="py-3 mt-10 rounded-lg">
        <v-row class="ma-0 pa-0">
          <v-col
            cols="3"
            class="pa-0 w-100 text-center"
            @click="jump(router, '/Market')"
          >
            <img
              src="@/assets/static/index_nav_1.png"
              width="40"
              height="40"
              class=""
            />
            <div class="text-body-2 nav-text-color">自选</div>
          </v-col>
          <v-col
            cols="3"
            class="pa-0 w-100 text-center"
            @click="jump(router, '/Trading')"
          >
            <img
              src="@/assets/static/index_nav_2.png"
              width="40"
              height="40"
              class=""
            />
            <div class="text-body-2 nav-text-color">交易</div>
          </v-col>
          <v-col
            cols="3"
            class="pa-0 w-100 text-center"
            @click="jump(router, '/Agency')"
          >
            <img
              src="@/assets/static/index_nav_3.png"
              width="40"
              height="40"
              class=""
            />
            <div class="text-body-2 nav-text-color">代理中心</div>
          </v-col>
          <v-col
            cols="3"
            class="pa-0 w-100 text-center"
            @click="jump(router, '/TopUp')"
          >
            <img
              src="@/assets/static/index_nav_4.png"
              width="40"
              height="40"
              class=""
            />
            <div class="text-body-2 nav-text-color">充值返现</div>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet class="mt-4 index-card-bg py-4 rounded-lg px-3">
        <v-img
          src="@/assets/static/index_active_1.png"
          @click="jump(router, '/ApplyContract')"
        ></v-img>
        <v-row class="ma-0 pa-0 mt-3">
          <v-col cols="6" class="pa-0 pr-1" @click="jump(router, '/InCoupon')">
            <v-img src="@/assets/static/index_active_2.png"></v-img>
          </v-col>
          <v-col
            cols="6"
            class="pa-0 pl-1"
            @click="jump(router, '/ActiveList')"
          >
            <v-img src="@/assets/static/index_active_3.png"></v-img>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet class="mt-4 index-card-bg py-4 rounded-lg">
        <v-card-title>昨日收益榜</v-card-title>
        <v-row class="ma-3 pa-0">
          <v-col
            cols="12"
            class="pa-2 bg-white rounded-lg border-line text-body-2 mb-2"
            v-for="item in store.state.bannerAndRank.rank"
            :key="item.id"
          >
            <v-row class="ma-0 pa-0">
              <v-col cols="6" class="pa-0 py-1 font-weight-bold">{{
                item.username
              }}</v-col>
              <v-col cols="6" class="pa-0 text-right py-1"
                ><v-chip
                  class="text-caption"
                  size="x-small"
                  color="orange"
                  label
                >
                  {{ item.level }}
                </v-chip></v-col
              >
              <v-col cols="12" class="pa-0 py-1 text-caption text-grey">{{
                item.contract
              }}</v-col>
              <v-col
                cols="6"
                class="pa-0 py-1 font-weight-bold text-body-1 text-red"
                >{{ item.amount + "万" }}</v-col
              >
              <v-col
                cols="6"
                class="pa-0 py-1 text-caption text-right text-grey"
                >盈利率<span class="text-red">{{
                  item.rank + "%"
                }}</span></v-col
              >
            </v-row>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </div>
  <v-dialog max-width="500" v-model="store.state.bannerAndRank.has_alert">
    <v-card :title="store.state.bannerAndRank.alert.title">
      <v-card-text v-html="store.state.bannerAndRank.alert.content">
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="关闭" @click="updateAlertActive"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import searchComponent from "@/components/search/Index.vue";
import { onMounted, ref, watch } from "vue";
import { store } from "@/store";
import { useRouter } from "vue-router";
import { jump } from "@/utils/constName";
const router = useRouter();

onMounted(() => {
  store.dispatch("bannerAndRank/get");
  if (
    store.state.bannerAndRank.alert &&
    store.state.bannerAndRank.view_alert == false
  ) {
    store.commit("bannerAndRank/updateAlertActive", true);
  }
});

const updateAlertActive = () => {
  store.commit("bannerAndRank/updateAlertActive", false);
};
</script>
<style scoped>
.banner-mt-n101 {
  margin-top: -101px !important;
}
.index-top {
  background: url("@/assets/static/index_top_bg.png") no-repeat center;
  background-size: cover;
  height: 200px;
}

.index-card-bg {
  background-image: url("@/assets/static/index_card_bg.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
