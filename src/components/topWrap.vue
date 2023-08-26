<template>
  <div>
    <div class="page-Header flexBetween">
      <img
        class="page-back"
        src="../assets/img/back.png"
        @click="$router.go(-1)"
      >
      <div class="page-title">
        <slot name="headerCenter"></slot>
      </div>
      <div>
        <slot name="headerRight"></slot>
      </div>

    </div>
    <div class="placeholder-box"></div>

  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
</script>
<style lang="scss" scoped>
.placeholder-box {
  height: 50px;
}
.page-Header {
  align-items: center;
  width: 100%;
  position: fixed;
  background: #fff;
  top: 0;
  padding: 10px;
  z-index: 30;
  .page-title {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .page-back {
    width: 11px;
  }
}
</style>
