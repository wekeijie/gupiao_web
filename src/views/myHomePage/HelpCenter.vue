<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>帮助中心</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>

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
      title: '新手入门',
      id: 1,
    },
    {
      title: '我的账户',
      id: 2,
    },
    {
      title: '配资介绍',
      id: 3,
    },
    {
      title: '提款须知',
      id: 1,
    },
    {
      title: '常见问题',
      id: 2,
    },
    {
      title: '推广赚钱',
      id: 3,
    },
    {
      title: '跟单规则',
      id: 2,
    },
    {
      title: '新股申购规则须知',
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
