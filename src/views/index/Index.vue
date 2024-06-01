<template>
  <div class="bg-color pb-8">
    <div class="index-top w-100">
      <div class="px-3 pt-4">
        <v-img src="@/assets/img/logo.png" height="40" width="100"></v-img>
        <v-carousel
          :show-arrows="false"
          height="150px"
          class="mt-4 rounded-lg"
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
    <div class="px-3">
      <v-sheet class="py-3 mt-10 rounded-lg">
        <v-row class="ma-0 pa-0">
          <v-col
            cols="3"
            class="pa-0 w-100 text-center"
            @click="jump(router, '/online-service')"
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
        </v-row>
      </v-sheet>
      <!-- <v-sheet class="mt-4 index-card-bg py-4 rounded-lg px-3">
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
      </v-sheet> -->
      <v-sheet class="mt-4 py-2 rounded-lg">
        <MainIndexComponent :mainIndex="mainIndex" />
      </v-sheet>
      <v-sheet class="mt-4 index-card-bg py-4 rounded-lg">
        <v-card-title>新闻资讯</v-card-title>
        <v-list lines="one" density="compact" nav>
          <v-list-item
            v-for="item in store.state.news.list"
            :key="item.id"
            :to="'/RichText?id=' + item.id + '&title=' + item.title"
          >
            <v-row class="ma-0 pa-0">
              <v-col cols="1" class="px-0 py-1"
                ><v-icon color="#333">mdi-format-list-checkbox</v-icon></v-col
              >
              <v-col
                cols="11"
                class="text-truncate overflow-hidden px-0 py-1 text-body-1"
                >{{ item.title }}</v-col
              >
            </v-row>
          </v-list-item>
        </v-list>
      </v-sheet>
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
import MainIndexComponent from "@/components/mainIndex/Index.vue";
import { onMounted, ref, watch } from "vue";
import { store } from "@/store";
import { useRouter } from "vue-router";
import { jump } from "@/utils/constName";
const router = useRouter();
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
  });

  store.dispatch("market/getMainIndex").then((d) => {
    mainIndex.value = d.diff;
  });

  if (
    store.state.bannerAndRank.list.alert &&
    store.state.bannerAndRank.view_alert == false
  ) {
    store.commit("bannerAndRank/updateAlertActive", true);
  }

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
  window.open(url, "_blank");
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
</style>
