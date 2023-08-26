<template>
  <div>
    <v-bottom-sheet v-model="isProp">
      <v-list>
        <div class="flexBetween sheet-top">
          <div @click="isProp=false">取消</div>
          <div class="sheet-sure">完成</div>
        </div>
        <v-list-item
          class="flexCenter"
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import { VBottomSheet } from 'vuetify/lib/labs/vBottomSheet/index'

import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
}
)
const isProp = ref(props.isOpen)
onMounted(() => {
})

watch(
  isProp, (val) => {
    console.log(val, 'val12312')
  }
)
const tiles = ref([
  { title: '全部状态' },
  { title: '正常' },
  { title: '冻结' },
],)
</script>
<style lang="scss" scoped>
.sheet-top {
  padding: 10px;
  font-size: 17px;
  line-height: 25px;
}
.sheet-sure {
  color: #007aff;
}
</style>
