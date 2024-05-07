<template>
  <!-- <v-main style="max-width: 408px; min-width: 280px" class="mx-auto"> -->
  <v-main class="auto-width mx-auto">
    <router-view />
    <bottomNacComponent />
  </v-main>
</template>

<script setup>
import bottomNacComponent from "@/components/bottomNav/Index.vue";
</script>
<style scoped>
/* 默认样式：宽度固定为408px */
.auto-width {
  width: 408px;
  margin-left: auto; /* 居中显示 */
  margin-right: auto; /* 居中显示 */
}

/* 当屏幕宽度小于或等于408px时应用的样式 */
@media (max-width: 408px) {
  .auto-width {
    width: 100%; /* 宽度设置为100% */
  }
}
</style>
