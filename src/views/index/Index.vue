<template>
  <div class="bg-color pb-8">
    <v-img src="@/assets/static/index_tp_bg.png" class="w-100" cover="">
      <img src="@/assets/static/new_logo.png" width="170" class="ml-3 mt-4" />
      <div class="ml-3 mt-6 font-weight-bold text-h5">
        用户提盈<span class="ml-1 text-red">{{
          store.state.bannerAndRank.three.total_user_rae
        }}</span
        >千万
      </div>
      <div class="ml-3 mt-8 text-body-1">
        累计交易{{ store.state.bannerAndRank.three.total_trade }}亿
      </div>
      <div class="ml-3 mt-2 text-body-1">
        平台运营{{ store.state.bannerAndRank.three.total_day }}天
      </div>
    </v-img>
    <div class="px-3 mt-n122 position-relative">
      <v-sheet class="py-3 rounded-lg">
        <v-row class="ma-0 pa-0">
          <v-col
            cols="3"
            class="pa-0 w-100 text-center"
            @click="openUrlInNewWindow('/chatlink.html')"
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
      <v-carousel
        :show-arrows="false"
        height="100px"
        class="rounded-lg mt-2"
        hide-delimiter-background
        cycle
      >
        <v-carousel-item
          v-for="(item, index) in images"
          :key="index"
          :src="item.image"
          cover
        ></v-carousel-item>
      </v-carousel>

      <v-sheet class="py-4 rounded-lg mt-3 px-2">
        <div class="d-flex justify-space-between text-center">
          <div
            v-for="item in mainIndex"
            :key="item.f12"
            class="w-32 px-2 rounded-lg py-3"
            :class="item.f3 > 0 ? 'ground-red' : 'ground-green'"
          >
            <div class="text-body-2 font-weight-bold">{{ item.f14 }}</div>
            <div
              class="text-body-1 font-weight-bold mt-2"
              :class="item.f3 > 0 ? 'text-red' : 'text-green'"
            >
              {{ marketDataFormat(item.f2, item.f152) }}
            </div>
            <div
              class="d-flex text-caption mt-3"
              :class="item.f3 > 0 ? 'text-red' : 'text-green'"
            >
              <div class="w-50 text-left">
                <span v-if="item.f4 > 0">+</span
                >{{ marketDataFormat(item.f4, item.f152) }}
              </div>
              <div class="w-50 text-right">
                <span v-if="item.f3 > 0">+</span>
                {{ marketDataFormat(item.f3, item.f152) }}%
              </div>
            </div>
          </div>
        </div>
      </v-sheet>
      <v-sheet class="mt-3 px-3 py-4 rounded-lg">
        <div class="text-h6">开始交易</div>
        <img
          src="@/assets/static/home_1_2.png"
          style="width: 100%"
          class="mt-5"
          @click="jump(router, '/contract')"
        />
      </v-sheet>
      <v-sheet class="py-4 px-3 rounded-lg mt-3">
        <div class="d-flex mb-4">
          <div class="w-50 text-body-1 font-weight-bold">热门资讯</div>
          <div
            class="w-50 text-caption text-right text-grey-darken-1"
            @click="router.push('news')"
          >
            更多>
          </div>
        </div>
        <div
          class="d-flex mb-3"
          v-for="(item, key) in store.state.news.list"
          :key="item.id"
          @click="
            jump(router, '/RichText', {
              title: item.title,
              id: item.id,
            })
          "
        >
          <div class="w-75 text-body-2 text-truncate">
            <v-chip class="chip-color mr-2" label v-if="key < 3"> 要闻 </v-chip
            >{{ item.title }}
          </div>
          <div class="w-25 text-right">
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </div>
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
import { marketDataFormat } from "@/utils/helper";
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
.mt-n122 {
  margin-top: -122px;
}
.w-32 {
  width: 32% !important;
}
.ground-green {
  background: linear-gradient(to bottom, #dafad3, #ffffff);
}
.ground-red {
  background: linear-gradient(to bottom, #fad3d3, #ffffff);
}
.chip-color {
  background-color: fad3d3;
  color: #f42f2f;
}
</style>
