<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>银行卡管理</template>
        </page-header>
        <div class="login-box">

            <div>12312</div>

        </div>

        <div class="login-box">
            <v-btn color="#fb5c39" class="mt-4" size="x-large" block @click="handleLogin" prepend-icon="+">
                添加银行卡
            </v-btn>
        </div>

    </div>
</template>
<script  setup>
import { onMounted, ref, getCurrentInstance, reactive } from "vue";
import { useRouter, useRoute } from "vue-router"
import PageHeader from '../../components/topWrap.vue'
import { passwordRules, phoneRoules, emailRoules, codeRoules, usernameRules } from "@/utils/vaildRule.js";
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
  