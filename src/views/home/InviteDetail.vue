<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>邀请奖励</template>
    </page-header>

    <div class="invite-cont">
      <img
        src="../../assets/img/longPicture/InviteRewards.jpg"
        alt=""
      >
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
.invite-cont {
  padding: 15px 0;
  img {
    width: 100%;
  }
}
</style>