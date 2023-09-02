<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>实名认证</template>
        </page-header>

        <div class="line-box flexStart" style="padding:0 15px">
            <h2>姓名</h2>
            <span>you name</span>
        </div>

        <div class="line-box flexStart">
            <h2>身份证号</h2>
            <span>you name</span>

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
  