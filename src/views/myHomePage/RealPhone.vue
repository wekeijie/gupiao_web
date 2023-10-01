<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>已绑定手机号</template>
    </page-header>
    <div class="login-box">
      <v-form ref="form">
        <v-text-field
          variant="underlined"
          v-model="store.state.user.userInfo.mobile"
          required
          readonly
          :counter="12"
          clearable
          label="手机号码"
          hide-details="auto"
          prepend-icon="mdi-phone"
          :rules="phoneRoules"
        ></v-text-field>

        <v-text-field
          variant="underlined"
          v-model="loginData.code"
          required
          :counter="12"
          label="请输入旧手机验证码"
          type="Number"
          prepend-icon="mdi-lock"
          :rules="codeRoules"
        >
          <div class="send-code" @click="sendCode">
            <p v-if="isSend == 0">点击发送</p>
            <p v-else>重新发送({{ isSend }})</p>
          </div>
        </v-text-field>
        <v-text-field
          variant="underlined"
          v-model="loginData.mobile"
          required
          :counter="12"
          clearable
          label="新手机号码"
          hide-details="auto"
          prepend-icon="mdi-phone"
          :rules="phoneRoules"
        ></v-text-field>

        <v-text-field
          variant="underlined"
          v-model="loginData.new_code"
          required
          :counter="12"
          label="请输入新手机验证码"
          type="Number"
          prepend-icon="mdi-lock"
          :rules="codeRoules"
        >
          <div class="send-code" @click="newSendCode">
            <p v-if="newIsSend == 0">点击发送</p>
            <p v-else>重新发送({{ newIsSend }})</p>
          </div>
        </v-text-field>
      </v-form>
    </div>

    <v-divider :thickness="3"></v-divider>
    <div class="login-box">
      <v-btn
        color="#fb5c39"
        class="mt-4"
        size="x-large"
        block
        @click="handleLogin"
      >
        更换手机号
      </v-btn>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, getCurrentInstance, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import PageHeader from "../../components/topWrap.vue";
import {
  passwordRules,
  phoneRoules,
  codeRoules,
  usernameRules,
} from "@/utils/vaildRule.js";
const $router = useRouter();
import { store } from "@/store";
const passwordType = ref("password");
const loginData = reactive({
  mobile: "",
  code: "",
  new_code: "",
});
const isSend = ref(0);
const sendCode = () => {
  isSend.value = 60;
  store.dispatch("user/sendSms", "");
  let time = setInterval(() => {
    isSend.value--;
    if (isSend.value <= 0) {
      isSend.value = 0;
      clearInterval(time);
    }
  }, 1000);
};

const newIsSend = ref(0);
const newSendCode = () => {
  if (loginData.mobile.length < 11) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "新手机号码不能为空",
    });
    return;
  }
  newIsSend.value = 60;
  store.dispatch("user/sendSms", loginData.mobile);
  let time = setInterval(() => {
    newIsSend.value--;
    if (newIsSend.value <= 0) {
      newIsSend.value = 0;
      clearInterval(time);
    }
  }, 1000);
};

const handleLogin = async () => {
  const { valid } = await instance.ctx.$refs.form.validate();
  if (valid) {
    store.dispatch("user/changeMobile", loginData).then(() => {
      store.dispatch("snackbar/success", {
        active: true,
        body: "修改成功!",
      });
      store.dispatch("user/getInfo");
    });
  }
};

let instance = ref();

onMounted(() => {
  instance = getCurrentInstance();
  if (!store.state.user.userInfo.user_name) {
    store.dispatch("user/getInfo");
  }
});
const goSign = () => {
  $router.push("/SignIn");
};
</script>
<style lang="scss" scoped>
.login-box {
  padding: 20px 20px 0;
  text-align: center;
}

.send-code {
  position: absolute;
  right: 0;
  padding: 6px 15px;
  font-size: 12px;
  color: rgb(251, 92, 57);
  z-index: 10;
}

.v-btn {
  color: #fff;
}
</style>
