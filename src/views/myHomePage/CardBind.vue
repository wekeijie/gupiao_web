<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>银行卡绑定</template>
        </page-header>

        <div class="line-box flexStart" style="padding:0 15px">
            <h2>用户姓名</h2>
            <span>you name</span>
        </div>

        <div class="line-box flexStart">
            <h2>身份证号</h2>
            <span>you name</span>

        </div>

        <v-text-field variant="underlined" v-model="loginData.phone" required clearable label="请输入银行卡号" hide-details="auto"
            :rules="emailRoules">

            <template v-slot:prepend>
                <p>银行卡号</p>
            </template>
        </v-text-field>


        <v-checkbox hide-details="auto" height="auto" color="red" label="设置为默认"></v-checkbox>

        <div class="login-box">
            <v-btn color="#dd5054" class="mt-4" size="x-large" block @click="handleLogin">
                添加
            </v-btn>
        </div>

    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const ex11 = ref(true)

const goRouter = (path) => {
    $router.push(path)
}


</script>
<style lang="scss" scoped>
.line-box {
    padding: 0 15px;
    border-bottom: solid 0.5px rgb(245, 245, 245);
    ;
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
  