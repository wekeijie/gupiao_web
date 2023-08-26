<template>
  <v-app>
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultView from './View.vue'
import { useRouter, useRoute } from "vue-router"

import { watch, ref, onMounted } from "vue"
const $router = useRouter()
const $route = useRoute()

</script>
