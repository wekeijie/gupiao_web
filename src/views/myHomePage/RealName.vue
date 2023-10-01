<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>实名认证</template>
    </page-header>

    <v-form ref="form" class="px-5">
      <v-text-field
        variant="underlined"
        v-model="store.state.user.userInfo.name"
        required
        clearable
        :readonly="is_verify"
        label="请输入您的姓名"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        variant="underlined"
        v-model="store.state.user.userInfo.code"
        required
        :counter="18"
        :readonly="is_verify"
        label="请输入身份证号码"
      >
      </v-text-field>
      <div class="login-box" v-if="!is_verify">
        <v-btn
          color="success"
          class="mt-4"
          size="x-large"
          block
          @click="handleSub"
        >
          提交认证
        </v-btn>
      </div>
    </v-form>
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

import { store } from "@/store";
import { useRouter, useRoute } from "vue-router";
const $router = useRouter();
const $route = useRoute();
const ex11 = ref(true);

const is_verify = ref(false);

onMounted(() => {
  if (store.state.user.userInfo.code) {
    is_verify.value = true;
  }
  if (!store.state.user.userInfo.user_name) {
    store.dispatch("user/getInfo");
  }
});

const handleSub = async () => {
  if (
    store.state.user.userInfo.code == "" ||
    store.state.user.userInfo.name == ""
  ) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "身份信息不能为空",
    });
    return;
  }
  if (validateIDCard(store.state.user.userInfo.code) == false) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请输入合法的身份证号码!",
    });
    return;
  }
  store
    .dispatch("user/changeName", {
      name: store.state.user.userInfo.name,
      code: store.state.user.userInfo.code,
    })
    .then(() => {
      store.dispatch("snackbar/success", {
        active: true,
        body: "提交成功!",
      });
      store.dispatch("user/getInfo");
      is_verify.value = true;
    });
};

const validateIDCard = (idCard) => {
  // 基本的身份证号码格式校验
  const reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
  if (!reg.test(idCard)) {
    return false;
  }

  // 校验位的计算
  if (idCard.length === 18) {
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkDigits = "10X98765432";
    let sum = 0;
    for (let i = 0; i < 17; i++) {
      sum += parseInt(idCard.charAt(i)) * weights[i];
    }
    const mod = sum % 11;
    const checkDigit = checkDigits.charAt(mod);
    if (checkDigit !== idCard.charAt(17)) {
      return false;
    }
  }

  return true;
};

const goRouter = (path) => {
  $router.push(path);
};
</script>
<style lang="scss" scoped>
.line-box {
  padding: 0 15px;
  border-bottom: solid 0.5px rgb(245, 245, 245);
  line-height: 60px;

  h2 {
    font-size: 15px;
    letter-spacing: 0.5px;
    font-weight: 400px;
    color: #303133;
    width: 25%;
    // color: #2c2e3a;
  }

  span {
    color: #7f829a;
  }

  img {
    width: 7px;
    margin-left: 10px;
  }
}
</style>
