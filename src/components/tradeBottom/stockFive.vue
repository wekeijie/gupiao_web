<template>
  <v-row
    class="ma-0 pa-0 text-center text-body-2 py-1"
    v-if="sell_five.length <= 0"
    v-for="item in 5"
    :key="item"
  >
    <v-col cols="4" class="pa-0">卖{{ 5 - item + 1 }}</v-col>
    <v-col cols="4" class="pa-0 text-green">-</v-col>
    <v-col cols="4" class="pa-0">-</v-col>
  </v-row>
  <v-row
    class="ma-0 pa-0 text-center text-body-2 py-1"
    v-else
    v-for="(item, index) in sell_five"
    :key="index"
    @click="selectPrice(item.price)"
  >
    <v-col cols="4" class="pa-0">卖{{ sell_five.length - index }}</v-col>
    <v-col cols="4" class="pa-0 text-green">{{ item.price }}</v-col>
    <v-col cols="4" class="pa-0">{{ item.vol }}</v-col>
  </v-row>

  <v-divider class="mt-2 mb-1"></v-divider>
  <v-row
    class="ma-0 pa-0 text-center text-body-2 py-1"
    v-if="buy_five.length <= 0"
    v-for="item in 5"
    :key="item"
  >
    <v-col cols="4" class="pa-0">买{{ item + 1 }}</v-col>
    <v-col cols="4" class="pa-0 text-red">-</v-col>
    <v-col cols="4" class="pa-0">-</v-col>
  </v-row>
  <v-row
    class="ma-0 pa-0 text-center text-body-2 py-1"
    v-else
    v-for="(item, index) in buy_five"
    :key="index"
    @click="selectPrice(item.price)"
  >
    <v-col cols="4" class="pa-0">买{{ index + 1 }}</v-col>
    <v-col cols="4" class="pa-0 text-red">{{ item.price }}</v-col>
    <v-col cols="4" class="pa-0">{{ item.vol }}</v-col>
  </v-row>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  buy_five: {
    type: Array,
    default: [],
  },
  sell_five: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits(["update:fivePrive"]);

const selectPrice = (price) => {
  emit("update:fivePrive", price);
};
</script>
