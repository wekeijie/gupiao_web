<template>
  <div class="message-box">
    <div class="tab-box">
      <v-tabs v-model="model">
        <v-tab @click="model=0">有效合约</v-tab>
        <v-tab @click="model=1">历史合约</v-tab>
      </v-tabs>
    </div>
    <v-carousel
      :show-arrows="false"
      hide-delimiters
      v-model="model"
    >

      <!-- height="auto" -->
      <v-carousel-item
        v-for="(slide, i) in 2"
        :key="i"
      >
        <div
          class="new-box"
          v-if="i==0"
        >
          23123

          weqweqweqweqwe

          qweqwe
        </div>
        <div
          class="new-box"
          v-if="i==1"
        >12312312

        </div>
      </v-carousel-item>
    </v-carousel>
    <p class="padd-bot"></p>

  </div>
</template>

<script setup>

import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
const model = ref(0)
const isUp = ref(true)
watch(model, (newVal, oldVal) => {
  console.log(newVal, oldVal, 'newVal,oldVal')
}
)
</script>
<style scoped lang="scss">
.message-box {
  padding: 75px 0 50px 0;
}
.v-slide-group__container {
  .v-slide-group-item--active {
    line-height: 55px;
    font-size: 22px;
    z-index: 3;
    font-weight: bold;
    color: rgb(48, 48, 48);
    .v-tab__slider {
      width: 10px;
      align-items: center;
    }
  }
  .v-slide-group-item--active::after {
    .v-btn__overlay {
      color: red !important;
    }
  }
}
.v-tab--selected::after {
  color: red !important;
}
.v-btn {
  border-color: red($color: red);
  margin: 0px 0px;
  font-size: 22px;
  z-index: 3;
  font-weight: normal;
  color: rgb(199, 199, 199);
}
// .v-tab--selected{

// }
</style>
