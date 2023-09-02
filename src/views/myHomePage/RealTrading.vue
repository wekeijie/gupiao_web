
<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>更改取款密码</template>
        </page-header>
        <v-divider :thickness="3"></v-divider>
        <div class="login-box">
            <v-form ref="form">
                <v-text-field variant="underlined" v-model="loginData.password" required :counter="12" label="请输入当前账号取款密码"
                    :type="passwordType" :rules="passwordRules">
                    <template v-slot:prepend>
                        <p>当前取款密码</p>
                    </template>
                    <div class="eye-show"
                        @click="passwordType == 'text' ? passwordType = 'password' : passwordType = 'text'">
                        <img src="../../assets/img/eyeShow.png" v-show="passwordType == 'text'">
                        <img src="../../assets/img/eyeHide.png" v-show="passwordType == 'password'">
                    </div>
                </v-text-field>
            </v-form>
        </div>
        <div class="login-box">
            <v-btn color="#fb5c39" class="mt-4" size="x-large" block @click="handleLogin">
                下一步
            </v-btn>
            <p class="forget-box">
                <span>忘记取款密码？</span>
            </p>
        </div>

    </div>
</template>
<script  setup>
import { onMounted, ref, getCurrentInstance, reactive } from "vue";
import { useRouter, useRoute } from "vue-router"
import { passwordRules, phoneRoules, codeRoules, usernameRules } from "@/utils/vaildRule.js";
import PageHeader from '../../components/topWrap.vue'
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
.forget-box {
    text-align: right;
    margin: 5px 0;

    span {
        line-height: 30px;
        align-items: center;
        font-size: 12px;
        color: #5af;
        letter-spacing: 0.5px;
        text-align: right;
    }

}

.login-box {
    padding: 20px 10px;
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
  