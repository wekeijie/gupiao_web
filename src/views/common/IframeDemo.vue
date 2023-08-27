<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>在线客服</template>
        </page-header>
        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>
        <iframe src="https://gushitong.baidu.com/stock/hk-09888" frameborder="0" width="100%"
            height="calc( 100vh - 30px )"></iframe>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

</script>
<style lang="scss" scoped>
iframe {
    height: calc(100vh - 30px);
}
</style>
  