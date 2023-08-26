<template>
  <div class="login-box">
    <h1>验证手机</h1>
    <v-form ref="form">
      <v-text-field
        variant="underlined"
        v-model="loginData.phone"
        required
        :counter="12"
        clearable
        label="账号"
        hide-details="auto"
        prepend-icon="mdi-phone"
        :rules="phoneRoules"
      ></v-text-field>

      <v-text-field
        variant="underlined"
        v-model="loginData.code"
        required
        :counter="12"
        label="验证码"
        type="Number"
        prepend-icon="mdi-lock"
        :rules="passwordRules"
      >
        <div
          class="send-code"
          @click="sendCode"
        >
          <p v-if="isSend==0">
            点击发送
          </p>
          <p v-else>
            重新发送({{isSend}})
          </p>
        </div>
      </v-text-field>
    </v-form>

    <v-btn
      color="#fb5c39"
      class="mt-4"
      size="x-large"
      block
      @click="handleLogin"
    >
      下一步
    </v-btn>

  </div>
</template>
<script  setup>
import { onMounted, ref, getCurrentInstance, reactive } from "vue";
import { useRouter, useRoute } from "vue-router"
import { passwordRules, phoneRoules, codeRoules, usernameRules } from "@/utils/vaildRule.js";
const $router = useRouter()
const passwordType = ref('password')
const loginData = reactive({
  phone: '',
  code: '',
})
const isSend = ref(0)
const sendCode = () => {
  console.log(isSend, 'isSend')
  isSend.value = 60
  let time = setInterval(() => {
    isSend.value--
    if (isSend.value <= 0) {
      isSend.value = 0
      clearInterval(time)
    }
  }, 1000)
}
const handleLogin = async () => {
  const { valid } = await instance.ctx.$refs.form.validate();
  console.log(valid, 'valid')

  $router.push('/ChangePassword')
  if (valid) {
    if (loginData.username == "" || loginData.password == "") {
    } else {
      try {
      } catch (e) {
        // alert(e);
      }
    }
  }
};

let instance = ref();

onMounted(() => {
  instance = getCurrentInstance();
});
const goSign = () => {
  $router.push('/SignIn')

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
