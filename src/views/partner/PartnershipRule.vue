<template>
    <div class="intro-page">
        <page-header>
            <template v-slot:headerCenter>{{ typeValue == 1 ? '合伙人2制度' : '跟单规则' }}</template>
        </page-header>

        <img src="../../assets/img/longPicture/institution.png" alt="" v-if="typeValue == 1">
        <img src="../../assets/img/longPicture/FollowRule.png" alt="" v-if="typeValue == 2">
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const typeValue = ref(1)//1为合伙人制度 2为跟单规则
onMounted(() => {
    if ($route.query.type) {
        typeValue.value = $route.query.type
    }
}
)
</script>
<style lang="scss" scoped>
.intro-page {
    width: 100%;
    height: 100%;


    img {
        width: 100%;
        padding: 10px;
    }
}
</style>
  