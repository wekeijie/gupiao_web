<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>交易规则</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245);height: 2px;"></div>
    <video
      class="video-intro"
      src="../../assets/company_video.mp4"
      controls
    ></video>

    <div
      class="line-box flexBetween"
      v-for="item in list"
      @click="goRouter(item)"
    >
      <h2>{{ item.title }}</h2>
      <img
        src="../../assets/img/rightImg.png"
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
const list = ref(
  [
    {
      title: '公司简介',
      id: 1,
    },
    {
      title: '资质证书',
      id: 2,
    },
    {
      title: '办公环境',
      id: 3,
    },
    {
      title: '风控体系',
      id: 1,
    },
    {
      title: '关于我们',
      id: 2,
    },
    {
      title: '联系我们',
      id: 3,
    }
  ]
)
const goRouter = (item) => {
  $router.push({
    path: '/RichText', query: {
      title: item.title,
      type: 2, id: item.id
    }
  })
}


</script>
<style lang="scss" scoped>
.video-intro {
  width: 100%;
}
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
  }
}
</style>
