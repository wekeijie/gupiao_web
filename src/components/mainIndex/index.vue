<template>
  <div class="exponent-box">
    <div
      class="exponent-list"
      v-for="item in mainIndex"
      :key="item.f12"
      :class="'text-' + watchStringToColor(item.f4)"
    >
      <h1>{{ item.f14 }}</h1>
      <h2>{{ marketDataFormat(item.f2, item.f152) }}</h2>
      <h3>
        <span>{{ marketDataFormat(item.f4, item.f152) }}</span
        ><span class="ml-2">{{ marketDataFormat(item.f3, item.f152) }}%</span>
      </h3>
      <img src="@/assets/img/curve.png" />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { marketDataFormat } from "@/utils/helper";

const props = defineProps({
  mainIndex: {
    type: Array,
    default: () => [],
  },
});

const watchStringToColor = (price) => {
  if (price < 0) {
    return "green";
  } else if (price === 0 || price === "") {
    return "black";
  } else if (price > 0) {
    return "red";
  }
};
</script>
<style scoped lang="scss">
.exponent-box {
  width: 100%;
  display: flex;
  padding: 0 11px;
  justify-content: space-between;
}
.exponent-list {
  background-color: #fff;
  background-image: linear-gradient(#e8f8f2, #f8fdfb);
  padding: 11px 5px;
  height: 150px;
  text-align: left;
  width: 31%;
  border-radius: 8px;
  h1 {
    font-size: 14px;
    color: #303133;
  }
  h2 {
    font-size: 16px;
    color: #1aad19;
    margin: 3px 0;
  }
  h3 {
    span {
      font-size: 12px;
      color: #1aad19;
    }
  }
  img {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
