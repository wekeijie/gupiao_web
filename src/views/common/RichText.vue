<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>{{topTitle}}</template>
    </page-header>
    <div class="rich-cont-box">
      <div v-if="richType==1">

        <h2 class="rich-title">印花税收入降超3成!财政部最新发声 将有这些新举措</h2>
        <p class="rich-time">2023-08-22</p>
      </div>
      <div
        v-html="htmlCont"
        style="padding: 20px 11px;"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const topTitle = ref('新闻')
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
.rich-cont-box {
  // padding: 0px 0;
  .rich-title {
    flex-wrap: wrap;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    padding: 16px 11px;
    letter-spacing: 1px;
    border-top: 5px solid rgb(245, 245, 245);
  }
  .rich-time {
    padding: 0 11px 11px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;
    color: #bebebe;
    border-bottom: 5px solid rgb(245, 245, 245);
  }
}
</style>