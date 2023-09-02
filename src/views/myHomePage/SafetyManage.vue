<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>账户和安全</template>
        </page-header>
        <div class="line-box flexBetween">
            <h2>账户</h2>
            <span>you name</span>
        </div>
        <div class="line-box flexBetween" @click="goRouter('/RealName')">
            <h2>实名认证</h2>
            <div class="flexStart">
                <span>you name</span>
                <img src="../../assets/img/rightImg.png" alt="">
            </div>
        </div>
        <div class="line-box flexBetween" @click="goRouter('/RealPhone')">
            <h2>手机</h2>
            <div class="flexStart">
                <span>10011001111111121</span>
                <img src="../../assets/img/rightImg.png" alt="">
            </div>
        </div>
        <div class="line-box flexBetween" @click="goRouter('/RealEmail')">
            <h2>邮箱</h2>
            <div class="flexStart">
                <span>未绑定</span>
                <img src="../../assets/img/rightImg.png" alt="">
            </div>
        </div>
        <div class="line-box flexBetween" @click="goRouter('/RealCard')">
            <h2>银行卡管理</h2>
            <div class="flexStart">
                <span>1张</span>
                <img src="../../assets/img/rightImg.png" alt="">
            </div>

        </div>
        <div class="line-box flexBetween" @click="goRouter('/RealCipher')">
            <h2>账户密码</h2>
            <div class="flexStart">
                <span>已设置</span>
                <img src="../../assets/img/rightImg.png" alt="">
            </div>
        </div>
        <div class="line-box flexBetween" @click="goRouter('/RealTrading')">
            <h2>提现密码</h2>
            <div class="flexStart">
                <span>已设置</span>
                <img src="../../assets/img/rightImg.png" alt="">
            </div>
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
  