<template>
  <v-dialog v-model="store.getters.loadding" hide-overlay persistent>
    <v-card color="primary">
      <v-card-text>
        加载中...
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup name="Loadding">
import { store } from "@/store";
</script>
