<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>邀请赢好礼</template>
    </page-header>
    <div class="invite-cont-box">
      <img src="../../assets/img/agency/Invite.jpg" alt="" v-if="inviteType == 1">
      <img src="../../assets/img/longPicture/InviteGroup.jpg" alt="" v-else>
      <div class="flexBetween invite-btn">
        <v-btn color="#dd5054" @click="overlay = true">
          分享海报邀请
        </v-btn><v-btn color="#dd5054">
          复制链接邀请
        </v-btn>
      </div>
    </div>

    <v-overlay v-model="overlay">
      <v-icon icon="$close" class="close-ico" @click="overlay = false"></v-icon>
      <img src="../../assets/img/agency/Invite.jpg" alt="" v-if="inviteType == 1">

      <img src="../../assets/img/longPicture/InviteGroup.jpg" alt="" v-else>
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
const inviteType = ref(1) //默认1为邀请好友 2为合伙人
onMounted(() => {
  if ($route.query.type) {
    inviteType.value = $route.query.type
  }
})

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
  padding: 0px 10px 30px;
  border-top: 5px solid rgb(245, 245, 245);

  img {
    width: 100%;
  }
}

.invite-btn {
  position: fixed;
  bottom: 0px;
  width: calc(100% - 20px);
  background-color: #fff;
  align-items: center;
  padding: 15px 0;

  .v-btn {
    font-size: 15px;
    color: #fff !important;
  }
}
</style>
