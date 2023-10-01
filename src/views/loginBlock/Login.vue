<template>
  <div class="login-box">
    <h1>登录</h1>
    <v-form ref="form">
      <v-text-field
        variant="underlined"
        v-model="username"
        required
        :counter="12"
        clearable
        label="账号"
        hide-details="auto"
        prepend-icon="mdi-phone"
        :rules="usernameRules"
      ></v-text-field>
      <v-text-field
        variant="underlined"
        v-model="password"
        required
        :counter="12"
        label="密码"
        prepend-icon="mdi-lock"
        :type="passwordType"
        :rules="passwordRules"
      >
        <div
          class="eye-show"
          @click="
            passwordType == 'text'
              ? (passwordType = 'password')
              : (passwordType = 'text')
          "
        >
          <img
            src="../../assets/img/eyeShow.png"
            v-show="passwordType == 'text'"
          />
          <img
            src="../../assets/img/eyeHide.png"
            v-show="passwordType == 'password'"
          />
        </div>
      </v-text-field>
      <div class="flexEnd forget-box d-none">
        <span @click="goRouter('/ForgertPhone')">忘记密码?</span>
      </div>
    </v-form>

    <v-btn
      color="#fb5c39"
      class="mt-4"
      size="x-large"
      block
      @click="handleLogin"
    >
      登录
    </v-btn>

    <v-btn
      color="rgb(0, 191, 255)"
      class="mt-4"
      size="x-large"
      block
      @click="goRouter('/')"
    >
      返回
    </v-btn>

    <div class="sign-in-box">
      您还没有账号?请点击《 <span @click="goRouter('/SignIn')">注册账号</span>》
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import { passwordRules, usernameRules } from "@/utils/vaildRule.js";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const passwordType = ref("password");
const username = ref("");
const password = ref("");
const handleLogin = async () => {
  // const { valid } = await instance.ctx.$refs.form.validate();
  console.log(username.value, password.value);
  if (username.value.length < 3 || password.value.length < 6) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "账号或密码不能为空!",
    });
    return;
  }
  // if (valid) {
  store
    .dispatch("user/login", {
      user_name: username.value,
      password: password.value,
    })
    .then(() => {
      $router.push("/My");
    });
  // }
};

let instance = ref();

onMounted(() => {
  instance = getCurrentInstance();
});
const goRouter = (path) => {
  $router.push(path);
};
</script>
<style lang="scss" scoped>
.login-box {
  padding: 30px;
  text-align: center;
  h1 {
    font-size: 24px;
    letter-spacing: 1px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #212a3d;
    margin-bottom: 15vh;
  }
}
.eye-show {
  position: absolute;
  right: 0;
  padding: 0 15px;
  img {
    width: 19px;
  }
}
.forget-box {
  font-size: 14px;
  font-family: PingFang SC;
  color: #959ca7;
  margin-bottom: 10px;
}
.v-btn {
  color: #fff;
}
.sign-in-box {
  font-size: 10px;
  color: #686e7a;
  margin-top: 15px;
  span {
    font-size: 13px;
    color: rgb(0, 122, 255);
    text-decoration: underline;
  }
}
</style>
