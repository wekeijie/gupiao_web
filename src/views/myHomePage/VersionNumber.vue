<template>
  <div class="my-center-box">
    <page-header>
      <template v-slot:headerCenter>关于</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>

    <div class="log-box">

      <img
        src="../../assets/img/myCenter.png"
        alt=""
      >
      <p>当前系统：<span>Android 1.0</span></p>
    </div>
    <div class="verdion-box flexBetween">
      <p>版本信息</p>
      <span>当前已是最新版本</span>
    </div>
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
.my-center-box {
  width: 100%;
  min-height: 100vh;
  background: #f7f7f7;
  text-align: center;
}
.log-box {
  margin-top: 30%;
  img {
    width: 105px;
  }
  p {
    margin-top: 50px;
    color: #303133;
    font-size: 13px;
  }
  span {
    color: #fb5c39;
  }
}
.verdion-box {
  padding: 0 13px;
  line-height: 38px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 48px;
  p {
    color: #303133;
    font-size: 13px;
  }
  span {
    color: #303133;
    font-size: 13px;
  }
}
</style>
