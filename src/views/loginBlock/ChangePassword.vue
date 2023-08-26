<template>
  <div class="login-box">
    <v-form ref="form">
      <v-text-field
        variant="underlined"
        v-model="loginData.password"
        required
        :counter="12"
        label="新密码"
        :type="passwordType"
        :rules="passwordRules"
      >
        <div
          class="eye-show"
          @click="passwordType=='text'?passwordType='password':passwordType='text'"
        >
          <img
            src="../../assets/img/eyeShow.png"
            v-show="passwordType=='text'"
          >
          <img
            src="../../assets/img/eyeHide.png"
            v-show="passwordType=='password'"
          >
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
      确认修改
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
  password: '',
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
}

.eye-show {
  position: absolute;
  right: 0;
  padding: 0 15px;
  img {
    width: 19px;
  }
}
.v-btn {
  color: #fff;
}
</style>
