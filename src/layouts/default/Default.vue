<template>
  <v-main style="max-width: 408px; min-width: 280px" class="mx-auto">
    <router-view />
    <bottomNacComponent />
  </v-main>
</template>

<script setup>
import bottomNacComponent from "@/components/bottomNav/Index.vue";
</script>
