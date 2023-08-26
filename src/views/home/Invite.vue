<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>邀请赢好礼</template>
    </page-header>
    <div class="invite-cont-box">
      <img
        src="../../assets/img/agency/Invite.jpg"
        alt=""
      >
      <div class="flexAroud invite-btn">
        <v-btn
          color="#fb5c39"
          @click="overlay=true"
        >
          分享海报邀请
        </v-btn><v-btn color="#fb5c39">
          复制链接邀请
        </v-btn>
      </div>
    </div>

    <v-overlay v-model="overlay">
      <v-icon
        icon="$close"
        class="close-ico"
        @click="overlay=false"
      ></v-icon>
      <img
        src="../../assets/img/agency/Invite.jpg"
        alt=""
      >
    </v-overlay>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const overlay = ref(false)
const $router = useRouter()
const $route = useRoute()
</script>
<style lang="scss" scoped>
.v-overlay {
  display: flex;
  align-items: center;
  .v-icon {
    position: absolute;
    right: 0;
    color: #fff;
    padding: 20px;
    background: rgba($color: #000000, $alpha: 0.5);
    margin: 10px;
    border-radius: 5px;
  }
  img {
    width: 100%;
  }
}
.invite-cont-box {
  padding: 30px 10px;
  border-top: 5px solid rgb(245, 245, 245);
  img {
    width: 100%;
  }
}
.invite-btn {
  margin-top: 30px;
  .v-btn {
    font-size: 15px;
    color: #fff !important;
  }
}
</style>
