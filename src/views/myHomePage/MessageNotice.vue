<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>消息通知</template>
    </page-header>

    <div
      class="line-box flexBetween"
      @click="goRouter()"
    >
      <h2>通话时间段</h2>
      <div class="flexStart">
        <h2>07:00-23:00</h2>
        <img
          src="../../assets/img/rightImg.png"
          alt=""
        >
      </div>
    </div>
    <div
      class="line-box-list flexBetween"
      @click="goRouter()"
    >
      <h2>合约警戒</h2>
      <v-switch
        v-model="ex11"
        color="red"
        value="white"
        hide-details
      ></v-switch>
    </div>
    <div
      class="line-box-list flexBetween"
      @click="goRouter()"
    >
      <h2>合约强平</h2>
      <v-switch
        v-model="ex11"
        color="red"
        value="white"
        hide-details
      ></v-switch>
    </div>
    <div
      class="line-box-list flexBetween"
      @click="goRouter()"
    >
      <h2>充值审核</h2>
      <v-switch
        v-model="ex11"
        color="red"
        value="white"
        hide-details
      ></v-switch>
    </div>
    <div
      class="line-box-list flexBetween"
      @click="goRouter()"
    >
      <h2>提现审核</h2>
      <v-switch
        v-model="ex11"
        color="red"
        value="white"
        hide-details
      ></v-switch>
    </div>
    <div
      class="line-box-list flexBetween"
      @click="goRouter()"
    >
      <h2>系统消息</h2>
      <v-switch
        v-model="ex11"
        color="red"
        value="white"
        hide-details
      ></v-switch>
    </div>
    <div
      class="line-box-list flexBetween"
      @click="goRouter()"
    >
      <h2>系统公告</h2>
      <v-switch
        v-model="ex11"
        color="red"
        value="white"
        hide-details
      ></v-switch>
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
.line-box-list {
  padding: 0 15px;
}
.line-box {
  padding: 15px;
  white-space: nowrap;
}
.line-box,
.line-box-list {
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
