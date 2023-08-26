<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>通用设置</template>
    </page-header>

    <div
      class="line-box flexBetween"
      style="padding:0 15px"
    >
      <h2>屏幕常亮</h2>
      <v-switch
        v-model="ex11"
        color="red"
        value="white"
        hide-details
      ></v-switch>
    </div>

    <div
      @click="goRouter('/MessageNotice')"
      class="line-box flexBetween"
    >
      <h2>消息通知</h2>
      <img
        src="../../assets/img/rightImg.png"
        alt=""
      >
    </div>

    <div class="line-box flexBetween">
      <h2>清理缓存</h2>

      <div class="flexStart">
        <span>10M</span>

        <img
          src="../../assets/img/rightImg.png"
          alt=""
        >
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
  padding: 15px;
  border-bottom: solid 0.5px #e5e5e5;
  h2 {
    font-size: 15px;
    letter-spacing: 0.5px;
    width: 90%;
    color: #2c2e3a;
  }
  img {
    width: 7px;
    margin-left: 10px;
  }
}
</style>
