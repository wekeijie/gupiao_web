<template>
  <page-header>
    <template v-slot:headerCenter>设置</template>
  </page-header>
  <div class="bg-color ui-min-height px-3">
    <v-card class="bg-white py-2 rounded-lg mt-3" elevation="0">
      <v-row class="ma-0 pa-0">
        <v-col cols="6" class="text-subtitle-1">账户</v-col>
        <v-col cols="6" class="text-right text-body-1 right-color">{{
          store.state.user.userInfo.user_name
        }}</v-col>
      </v-row>
    </v-card>
    <v-card
      class="bg-white py-2 rounded-lg mt-3"
      elevation="0"
      :to="'/RealName'"
    >
      <v-row class="ma-0 pa-0">
        <v-col cols="6" class="text-subtitle-1">实名认证</v-col>
        <v-col cols="6" class="text-right text-body-1 right-color">
          <span v-if="store.state.user.userInfo.name">{{
            store.state.user.userInfo.name
          }}</span>
          <span v-else>未认证</span>
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      class="bg-white py-2 rounded-lg mt-3"
      elevation="0"
      :to="'/RealPhone'"
    >
      <v-row class="ma-0 pa-0">
        <v-col cols="6" class="text-subtitle-1">手机</v-col>
        <v-col cols="6" class="text-right text-body-1 right-color">
          {{ store.state.user.userInfo.mobile }}
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      class="bg-white py-2 rounded-lg mt-3"
      elevation="0"
      :to="'/RealEmail'"
    >
      <v-row class="ma-0 pa-0">
        <v-col cols="4" class="text-subtitle-1">邮箱</v-col>
        <v-col cols="8" class="text-right text-body-1 right-color">
          <span v-if="store.state.user.userInfo.email">{{
            store.state.user.userInfo.email
          }}</span>
          <span v-else>未绑定</span>
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      class="bg-white py-2 rounded-lg mt-3"
      elevation="0"
      :to="'/RealCard'"
    >
      <v-row class="ma-0 pa-0">
        <v-col cols="6" class="text-subtitle-1">银行卡管理</v-col>
        <v-col cols="6" class="text-right text-body-1 right-color">
          {{ store.state.user.userInfo.bank_total }}张
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      class="bg-white py-2 rounded-lg mt-3"
      elevation="0"
      :to="'/RealCipher'"
    >
      <v-row class="ma-0 pa-0">
        <v-col cols="6" class="text-subtitle-1">登录密码</v-col>
        <v-col cols="6" class="text-right text-body-1 right-color">
          <span>已设置</span>
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      class="bg-white py-2 rounded-lg mt-3"
      elevation="0"
      :to="'/RealTrading'"
    >
      <v-row class="ma-0 pa-0">
        <v-col cols="6" class="text-subtitle-1">提现密码</v-col>
        <v-col cols="6" class="text-right text-body-1 right-color">
          <span v-if="store.state.user.userInfo.is_pay_pwd">已设置</span>
          <span v-else>未设置</span>
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </v-card>

    <v-btn
      block=""
      color="#3063EB"
      class="text-white mt-10 rounded-lg"
      size="x-large"
      @click="logout"
      >退出登陆</v-btn
    >
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { jump } from "@/utils/constName";
import { store } from "@/store";

const router = useRouter();

onMounted(() => {
  store.dispatch("user/getInfo");
});
const logout = () => {
  store.dispatch("user/logout");
  router.push("/");
};
</script>
<style scoped>
.right-color {
  color: #5b5b5b;
}
</style>
