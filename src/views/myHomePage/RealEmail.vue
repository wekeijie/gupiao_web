<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>绑定邮箱</template>
        </page-header>
        <div class="login-box">

            <v-form ref="form">
                <v-text-field variant="underlined" v-model="loginData.phone" required clearable label="请输入您的邮箱地址"
                    hide-details="auto" :rules="emailRoules">

                    <template v-slot:prepend>
                        <p>邮箱地址</p>
                    </template>
                </v-text-field>

                <v-text-field variant="underlined" v-model="loginData.code" required :counter="12" label="请输入回执码"
                    type="Number" :rules="passwordRules">
                    <template v-slot:prepend>
                        <p>回执码</p>
                    </template>
                    <div class="send-code" @click="sendCode">
                        <p v-if="isSend == 0">
                            点击获取
                        </p>
                        <p v-else>
                            重新获取({{ isSend }})
                        </p>
                    </div>
                </v-text-field>
            </v-form>

        </div>

        <v-divider :thickness="3"></v-divider>
        <div class="login-box">
            <v-btn color="#fb5c39" class="mt-4" size="x-large" block @click="handleLogin">
                更换手机号
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
  