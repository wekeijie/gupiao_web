<template>
  <v-bottom-navigation
    v-model="activeTab"
    style="justify-content=space-between"
  >
    <v-btn
      icon
      @click="cutTab('/','home')"
      value="home"
    >
      <v-icon>mdi-home</v-icon>
      <span>首页</span>
    </v-btn>
    <v-btn
      icon
      @click="cutTab('/Market','market')"
      value="market"
    >
      <v-icon>mdi-email</v-icon>
      <span>行情</span>
    </v-btn>
    <v-btn
      icon
      @click="cutTab('/Message','message')"
      value="message"
    >
      <v-icon>mdi-widgets</v-icon>
      <span>资讯</span>
    </v-btn>
    <v-btn
      icon
      @click="cutTab('/Pact','pact')"
      value="pact"
    >
      <v-icon>mdi-call-split</v-icon>
      <span>合约</span>
    </v-btn>
    <v-btn
      icon
      @click="cutTab('/My','my')"
      value="my"
    >
      <v-icon>mdi-account</v-icon>
      <span>我的</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script setup>

import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

import { onMounted, ref, watch } from "vue";
let activeTab = ref('home')
const cutTab = (path, name) => {
  $router.push(path)
  activeTab.value = name
}
onMounted(() => {
  console.log($route.name, ' $router')
  activeTab.value = $route.name
})
watch($route, (newVal) => {
  // $route.name
  console.log($route.name, ' $router')
  activeTab.value = $route.name
})

</script>
<style scoped lang="scss">
.v-bottom-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 999;
  .v-btn {
    width: 20%;
  }
  .v-btn--active {
    line-height: normal;
    span {
      color: rgb(0, 0, 0);
    }
    .v-icon::before {
      color: red;
    }
  }
}

.v-btn__content span {
  color: rgb(153, 153, 153);
}
</style>

