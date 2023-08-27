<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>{{ topTitle }}</template>
            <template v-slot:headerRight>
                <p class="deleted-box">删除</p>
            </template>
        </page-header>
        <div class="rich-cont-box">
            <div v-if="richType == 1">
                <h2 class="rich-title">新股申购功能已开放</h2>
                <p class="rich-time">2023-08-22</p>
            </div>
            <div v-html="htmlCont" style="padding: 0px 11px;"></div>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const topTitle = ref('消息详情')
const richType = ref(1);//1为有标题富文本 2为有无标题
const htmlCont = ref(
    '<div>这是后台编辑的富文本</div><p>这是第一段</p>'
)
onMounted(
    () => {
        if ($route.query.title) topTitle.value = $route.query.title
        if ($route.query.type) richType.value = $route.query.type
    }
)
</script>
<style lang="scss" scoped>
.deleted-box {
    word-break: keep-all;
    white-space: pre;
    cursor: pointer;
    font-size: 13px;
}

.rich-cont-box {
    text-align: center;

    // padding: 0px 0;
    .rich-title {
        flex-wrap: wrap;
        // text-align: center;
        font-size: 16px;
        font-weight: 700;
        padding: 10px 5px;
        letter-spacing: 1px;
        // border-top: 5px solid rgb(245, 245, 245);
    }

    .rich-time {
        padding: 0 11px 11px;
        text-align: center;
        font-size: 12px;
        color: #bebebe;
        // border-bottom: 5px solid rgb(245, 245, 245);
    }
}
</style>