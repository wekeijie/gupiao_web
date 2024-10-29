<template>
  <div class="bg-color pb-8">
    <div class="index-top w-100">
      <div class="px-3 pt-4">
        <img src="@/assets/static/jbyp.png" width="130" />
        <v-carousel
          :show-arrows="false"
          height="150px"
          class="rounded-lg mt-2"
          hide-delimiter-background
          hide-delimiters
          cycle
        >
          <v-carousel-item
            v-for="(item, index) in images"
            :key="index"
            :src="item.image"
            cover
          ></v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div class="px-3 mt-8">
      <v-sheet class="py-3 rounded-lg">
        <v-row class="ma-0 pa-0">
          <v-col
            cols="3"
            class="pa-0 w-100 text-center"
            @click="
              openUrlInNewWindow(store.state.bannerAndRank.list.service.url)
            "
          >
            <img src="@/assets/img/kefu.png" width="40" height="40" class="" />
            <div class="text-body-2 nav-text-color">在线客服</div>
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
            @click="jump(router, '/app')"
          >
            <img src="@/assets/img/app.png" width="40" height="40" class="" />
            <div class="text-body-2 nav-text-color">APP下载</div>

            <!-- <v-list-item
              class="pa-0 ma-0 text-body-2"
              link="true"
              href="https://cj.dk18.top/sdfzrf"
              >APP下载</v-list-item
            > -->
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
          <v-col
            cols="3"
            class="pa-0 w-100 text-center mt-4"
            @click="jump(router, '/contract')"
          >
            <img
              src="@/assets/static/zhongjin_03.png"
              width="40"
              height="40"
              class=""
            />
            <div class="text-body-2 nav-text-color">我的持仓</div>
          </v-col>
          <v-col
            cols="3"
            class="pa-0 w-100 text-center mt-4"
            @click="jump(router, '/HelpCenter?title=交易规则&id=2')"
          >
            <img
              src="@/assets/static/zhongjin_08.png"
              width="40"
              height="40"
              class=""
            />
            <div class="text-body-2 nav-text-color">交易规则</div>
          </v-col>
          <v-col
            cols="3"
            class="pa-0 w-100 text-center mt-4"
            @click="jump(router, '/Agency')"
          >
            <img
              src="@/assets/static/zhongjin_05.png"
              width="40"
              height="40"
              class=""
            />
            <div class="text-body-2 nav-text-color">推广赚钱</div>
          </v-col>
          <v-col
            cols="3"
            class="pa-0 w-100 text-center mt-4"
            @click="jump(router, '/Market?tab=1')"
          >
            <img
              src="@/assets/static/zhongjin_11.png"
              width="40"
              height="40"
              class=""
            />
            <div class="text-body-2 nav-text-color">自选</div>
          </v-col>
        </v-row>
      </v-sheet>
      <v-img src="@/assets/static/zhongjin_home_18.png" class="mt-5">
        <v-row class="ma-0 pa-0 text-center text-white mt-3">
          <v-col class="pa-0" cols="4">
            <div class="text-h6">
              {{ store.state.bannerAndRank.three.total_day }}天
            </div>
            <div class="text-caption">平台运营</div>
          </v-col>
          <v-col class="pa-0" cols="4">
            <div class="text-h6">
              {{ store.state.bannerAndRank.three.total_trade }}亿
            </div>
            <div class="text-caption">累计交易</div>
          </v-col>
          <v-col class="pa-0" cols="4">
            <div class="text-h6">
              {{ store.state.bannerAndRank.three.total_user_rae }}千万
            </div>
            <div class="text-caption">用户提盈</div>
          </v-col>
        </v-row>
      </v-img>
      <v-sheet class="mt-3 px-3 py-4 rounded-lg">
        <div class="text-h6">开始交易</div>
        <img
          src="@/assets/static/home_1_2.png"
          style="width: 100%"
          class="mt-5"
        />
      </v-sheet>
      <img
        src="@/assets/static/zhongjin_home_34.png"
        style="width: 90%"
        class="mt-5"
      />
    </div>
  </div>
  <v-dialog max-width="500" v-model="store.state.bannerAndRank.has_alert">
    <v-card :title="store.state.bannerAndRank.list.alert.title">
      <v-card-text v-html="store.state.bannerAndRank.list.alert.content">
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
import Cookies from "js-cookie";
import { onMounted, ref, watch } from "vue";
import { store } from "@/store";
import { useRouter, useRoute } from "vue-router";
import { jump } from "@/utils/constName";
const router = useRouter();
const route = useRoute();
const images = ref([
  {
    id: 1,
    image:
      "https://cdn.cicctx.com/20240503/0yleImPn9wCSn40yCFxWF89Ni5KAHh1CggRJvFsH.jpg",
    summary: null,
  },
  {
    id: 2,
    image:
      "https://cdn.cicctx.com/20240503/V4Sn4bFxxrqyB8XYfvOVq7GxFcd4G9bf94nlamSm.png",
    summary: null,
  },
  {
    id: 3,
    image:
      "https://cdn.cicctx.com/20240503/EJCYQZNuQmTeXQF5rhReCMEqInp4oj8MD4CJT6VP.jpg",
    summary: null,
  },
  {
    id: 4,
    image:
      "https://cdn.cicctx.com/20240503/R30nBAJbZrjXk0R3KEaFn8HQVWZb1oGdKCgnuHmY.png",
    summary: null,
  },
]);

const mainIndex = ref([]);

onMounted(() => {
  store.dispatch("bannerAndRank/get").then((d) => {
    images.value = d.banner;
    if ((store.state.bannerAndRank.list?.alert ?? "") !== "") {
      store.commit("bannerAndRank/updateAlertActive", true);
    }
  });
  if (route.query.ref) {
    Cookies.set("referrer", route.query.ref, { expires: 7 });
  }

  store.dispatch("market/getMainIndex").then((d) => {
    mainIndex.value = d.diff;
  });

  store.dispatch("news/list", { page: 1, limit: 10 });
});
const downloadFile = () => {
  const link = document.createElement("a");
  link.href = "/central_gold.apk";
  link.setAttribute("download", "central_gold.apk");
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const updateAlertActive = () => {
  store.commit("bannerAndRank/updateAlertActive", false);
};

const openUrlInNewWindow = (url) => {
  if (url) {
    window.open(url, "_blank");
  }
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
/* .d-inline-block {
  display: inline-block !important;
} */
.news-list .d-inline-block {
  display: inline-flex !important;
  align-items: center !important;
}
/* .news-list div {
  display: flex;
  align-items: center;
} */
.z-999 {
  z-index: 999;
}
</style>
