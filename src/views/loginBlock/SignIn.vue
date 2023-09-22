<template>
  <div class="login-box">

    <h1>注册</h1>
    <div class="log-top">
      <img src="/src/assets/img/myCenter.png">
    </div>
    <div class="login-cont">
      <v-form ref="form">
        <v-text-field
          variant="underlined"
          v-model="loginData.username"
          required
          :counter="12"
          clearable
          label="账号"
          hide-details="auto"
          :rules="usernameRules"
        ></v-text-field>
        <v-text-field
          variant="underlined"
          v-model="loginData.phone"
          required
          :counter="12"
          clearable
          active=""
          label="手机号"
          hide-details="auto"
          :rules="phoneRoules"
        ></v-text-field>
        <v-row class="ma-0 pa-0">
          <v-col cols="8" class="pa-0">
            <v-text-field
              variant="underlined"
              v-model="loginData.code"
              required
              :counter="4"
              label="验证码"
              type="Number"
              :rules="passwordRules"
            >
            </v-text-field>
          </v-col>
          <v-col cols="4" class="px-1">
            <v-btn
            class="text-none"
            color="success"
            rounded
            block
            variant="outlined"
            @click="sendSms"
            :disabled="isSendLock"
          >
            发送
          </v-btn> 
          </v-col>
        </v-row>
        
        <v-text-field
          variant="underlined"
          v-model="loginData.password"
          required
          :counter="12"
          label="密码"
          type="password"
          :rules="passwordRules"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          v-model="loginData.passwordAgo"
          required
          :counter="12"
          label="确认密码"
          type="password"
          :rules="passwordRules"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          v-model="loginData.recom"
          required
          :counter="12"
          label="推荐人"
        >
        </v-text-field>
        <div class="flexEnd inlin-customer">
          <p>
            提示收不到验证码时请联系 <span @click="goRouter('/ForgertPhone')">在线客服</span>
          </p>
        </div>

      </v-form>
      <v-alert
        text="发送成功"
        v-if="isSend>55"
      ></v-alert>

      <v-btn
        color="#fb5c39"
        class="mt-4"
        size="x-large"
        block
        @click="handleLogin"
      >
        注册
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
        已有账号?<span @click="goRouter('/Login')">马上登陆</span>
      </div>
    </div>
  </div>
</template>
<script  setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick, getCurrentInstance } from "vue"
import { passwordRules, phoneRoules, codeRoules, usernameRules } from "@/utils/vaildRule.js";
import { useRouter, useRoute } from "vue-router"
import {store} from '@/store'
const $router = useRouter()
const passwordType = ref('password')
const loginData = reactive({
  username: '',
  phone: '',
  code: '',
  password: '',
  passwordAgo: '',
  recom: ''
})
const clock = ref(null)
const isSendLock = ref(false)

const lockBtn = () => {
  isSendLock.value = true
  let totalTime = 60
  clock.value = window.setInterval(() => {
    if (totalTime == 0) {
      clearLock()
    } else {
      totalTime--
    }
  }, 1000)
}

const clearLock = () => {
  clearInterval(clock.value)
  isSendLock.value = false
}

const sendSms = () =>{
  if(loginData.phone.length < 6 || loginData.phone.length > 11){
    store.dispatch('snackbar/warning',{'active':true,'body':'请输入正确的手机号码'})
    return
  }
  lockBtn()
  store.dispatch('user/sendSms',loginData.phone).then(rsp => {
    store.dispatch('snackbar/success',{'active':true,'body':'发送成功'})
  }).catch(() => {
    clearLock()
  })
}

const handleLogin = async () => {
  const { valid } = await instance.ctx.$refs.form.validate();

  if (valid) {
    if(loginData.password != loginData.passwordAgo){
      store.dispatch('snackbar/warning',{'active':true,'body':'两次密码不一致'})
      return 
    }
    store.dispatch('user/register',{'user_name':loginData.username,'mobile':loginData.phone,'password':loginData.password,'verify_code':loginData.code,'referrer':loginData.recom}).then(d => {
      store.dispatch('snackbar/success',{'active':true,'body':'注册成功！'})
      goRouter('Login') 
    })
  }
};

let instance = ref();
const isSend = ref(0)
onMounted(() => {
  instance = getCurrentInstance();
});

const goRouter = (path) => {
  $router.push(path)
};
</script>
<style lang="scss" scoped>
.v-alert {
  position: absolute;
  top: 40%;
  left: 25%;
  align-items: center;
  width: 50%;
  margin: 0 auto;
}
.v-input--density-default {
  --v-input-padding-top: 0px;
}
.login-box {
  text-align: center;
  h1 {
    font-size: 16px;
    letter-spacing: 1px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #212a3d;
    padding: 15px;
    // margin-bottom: 15vh;
  }
}
.login-cont {
  padding: 10px 30px 30px;
}
.log-top {
  border-top: 5px solid #e5e5e5;
  padding: 20px 0 0;
  img {
    width: 100px;
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
.inlin-customer {
  font-size: 12px;
  font-weight: 500;
  color: #959ca7;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 15px;
  span {
    color: #007aff;
  }
}
.sign-in-box {
  font-size: 12px;
  font-weight: 500;
  color: #686e7a;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 15px;
  span {
    color: rgb(0, 122, 255);
    color: #fb5c39;
  }
}
</style>
