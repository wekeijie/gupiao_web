<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>活动中心</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245); height: 5px"></div>

    <div class="active-list" v-for="item in 1">
      <img
        src="../../assets/img/longPicture/inviteFrend.jpg"
        alt=""
        @click="goRouter('/InviteDetail')"
      />
    </div>
    <div class="new-box" v-if="1 != 1">
      <no-data class="no-data-cont"></no-data>
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  defineExpose,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  nextTick
} from 'vue'
import NoData from '../../components/noData.vue'
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from 'vue-router'
const $router = useRouter()
const $route = useRoute()
const openBotom = () => {}
const goRouter = (path) => {
  $router.push(path)
}
</script>
<style lang="scss" scoped>
.active-list {
  padding: 15px;
  img {
    width: 100%;
  }
}
</style>
