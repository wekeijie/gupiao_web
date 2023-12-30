<template>
  <v-bottom-navigation :elevation="2" grow color="#3952E8">
    <v-btn value="recent" class="text-color" :to="'/'">
      <v-icon size="x-large">mdi-home-variant-outline</v-icon>

      <span>首页</span>
    </v-btn>

    <v-btn value="favorites" class="text-color" :to="'/Market'">
      <v-icon size="x-large">mdi-chart-box-outline</v-icon>

      <span>行情</span>
    </v-btn>

    <v-btn value="nearby" class="text-color" :to="'/news'">
      <v-icon size="x-large">mdi-newspaper-variant-multiple</v-icon>

      <span>资讯</span>
    </v-btn>
    <v-btn value="nearby" class="text-color" :to="'/contract'">
      <v-icon size="x-large">mdi-file-document-edit-outline</v-icon>

      <span>合约</span>
    </v-btn>
    <v-btn value="nearby" class="text-color" :to="'/user'">
      <v-icon size="x-large">mdi-account-outline</v-icon>

      <span>我的</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script setup>
import { ref } from "vue";
const bottomValue = ref(null);
</script>
<style scoped>
.text-color {
  color: #5b5b5b;
}
</style>
