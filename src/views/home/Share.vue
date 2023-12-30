<template>
  <page-header>
    <template v-slot:headerCenter>邀请赢好礼</template>
  </page-header>
  <div class="bottom-bg ui-min-height">
    <div class="w-100 main-bg" style="height: 528px"></div>
    <div class="qrcode bg-white rounded-lg mx-auto mt-n15 pa-2">
      <qrcode-vue :value="signin" :size="160" level="H" />
    </div>
    <div class="text-center mt-3">
      <div class="text-subtitle-1 link-color" v-if="store.getters.token">
        {{ signin }}
      </div>
      <div class="text-subtitle-2 text-color">我的邀请链接</div>
      <v-row class="ma-0 pa-0" v-if="store.getters.token">
        <v-col cols="6"
          ><v-btn color="warning" class="" @click="copyShare"
            >复制海报地址</v-btn
          ></v-col
        >
        <v-col cols="6"
          ><v-btn color="info" @click="copy">复制邀请链接</v-btn></v-col
        >
      </v-row>
      <v-row class="ma-0 pa-0" v-else>
        <v-col cols="12">
          <v-btn
            color="success"
            block=""
            class=""
            :to="'/SignIn?code=' + hasUser"
            >注册赢好礼</v-btn
          ></v-col
        >
      </v-row>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import useClipboard from "vue-clipboard3";
import QrcodeVue from "qrcode.vue";
import { store } from "@/store";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const { toClipboard } = useClipboard();
const route = useRoute();
const router = useRouter();
const hasUser = ref("");
const link = ref("");

const signin = ref("");
const shareLink = ref("");

onMounted(() => {
  if (store.getters.token || route.query.code) {
    hasUser.value = store.getters.token
      ? store.state.user.code
      : route.query.code;
    getLink();
  } else {
    hasUser.value = "";
    store.dispatch("snackbar/warning", {
      active: true,
      body: "页面不存在",
    });
    router.push("/");
  }
});

const copyShare = async () => {
  try {
    await toClipboard(shareLink.value);
    store.dispatch("snackbar/success", {
      active: true,
      body: "复制海报地址成功!",
    });
  } catch (e) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "操作失败!",
    });
  }
};

const copy = async () => {
  try {
    await toClipboard(signin.value);
    store.dispatch("snackbar/success", {
      active: true,
      body: "复制邀请链接成功!",
    });
  } catch (e) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "操作失败!",
    });
  }
};

const getLink = () => {
  const url = window.location.protocol + "//" + window.location.hostname;
  signin.value = url + "/SignIn?code=" + hasUser.value;
  shareLink.value = url + "/Invite?code=" + hasUser.value;
};
</script>
<style scoped>
.main-bg {
  background: url("@/assets/static/share_1_03.png");
  background-size: contain;
}
.bottom-bg {
  background: url("@/assets/static/share_1_04.png");
  background-size: contain;
}
.qrcode {
  width: 180px;
  height: 180px;
}
.link-color {
  color: #1939de;
}
.text-color {
  color: #718590;
}
</style>
