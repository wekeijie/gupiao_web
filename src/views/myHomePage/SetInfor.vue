<template>
  <div class="infor-box">
    <page-header>
      <template v-slot:headerCenter>个人资料</template>
    </page-header>

    <div class="line-box flexBetween">
      <h2>头像</h2>
      <div class="flexStart">
        <img class="user-avatar" src="../../assets/img/myAvaatar.png" alt="" />

        <!-- <img src="../../assets/img/rightImg.png" alt="" /> -->
      </div>
    </div>
    <div class="line-box flexBetween">
      <h2>昵称</h2>

      <div class="flexStart">
        <span>{{ store.state.user.info.user_name }}</span>
        <img src="../../assets/img/rightImg.png" alt="" />
      </div>
    </div>
    <div class="line-box flexBetween">
      <h2>邀请码</h2>

      <div class="flexStart">
        <span>{{ store.state.user.info.code }}</span>
      </div>
    </div>

    <div style="background-color: rgb(245, 245, 245); height: 3px"></div>
    <div class="back-btn" @click="logout">退出登陆</div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  defineExpose,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
} from "vue";

import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();

onMounted(() => {
  onMounted(() => {
    store.dispatch("user/userInfo");
  });
});

const logout = () => {
  store.dispatch("user/logout");
  $router.push("/");
};

const goRouter = (path) => {
  $router.push(path);
};
</script>
<style lang="scss" scoped>
.infor-box {
  background-color: #f5f5f5;
  min-height: 100vh;
  font-weight: 500;
}

.back-btn {
  text-align: center;
  padding: 15px;
  border-bottom: solid 0.5px #e5e5e5;
  background: #fff;
  font-weight: 600;
}

.line-box {
  padding: 15px;
  border-bottom: solid 0.5px #e5e5e5;
  background: #fff;
  font-weight: 500;

  h2 {
    font-size: 15px;
    letter-spacing: 0.5px;
    width: 90%;
    color: #2c2e3a;
    font-weight: 500;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }

  img {
    width: 7px;
    margin-left: 10px;
  }

  .user-avatar {
    width: 42px;
  }
}
</style>
