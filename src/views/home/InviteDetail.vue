<template>
  <page-header>
    <template v-slot:headerCenter>邀请好友</template>
  </page-header>
  <!-- <img src="@/assets/static/ref_1_03.png" class="w-100" /> -->
  <div class="bg-color">
    <v-img
      src="@/assets/static/share_act_02.png"
      class="w-100 position-relative"
      @click="router.push('/Invite')"
    >
      <div
        class="text-h6 text-white text-center font-italic letter-spacing-5 number-fa-container"
      >
        已有<span class="actv-color number-container">
          <span class="number-box" v-for="number in info.user" :key="number">{{
            number
          }}</span> </span
        >人参加
      </div>
      <div class="text-center price-container">
        <span class="yuan-symbol font-weight-bold font-size-27 font-size-27"
          >¥</span
        >
        <span class="font-size-50 font-weight-bold ml-1 gradient-number">{{
          info.coupon
        }}</span>
      </div>
    </v-img>
    <img src="@/assets/static/share_act.png" class="w-100" />
    <div class="px-6 mb-6 mt-3">
      <v-row
        class="ma-0 pa-0 title-bg rounded-t-xl text-center text-body-1 pt-7 font-weight-bold title-color"
      >
        <v-col class="pa-0" cols="6">邀请人员等级</v-col>
        <v-col class="pa-0" cols="6">返利比例</v-col>
      </v-row>
      <v-row
        class="ma-0 pa-0 text-center py-3"
        v-for="(item, index) in level"
        :key="item.title"
        :class="[
          index % 2 == 0 ? 'nav-color' : 'bg-white',
          index == level.length - 1 ? 'rounded-b-xl' : '',
        ]"
      >
        <v-col class="pa-0" cols="6">{{ item.title }}</v-col>
        <v-col class="pa-0 nav-li-color" cols="6">{{
          parseInt(item.commission) + "%"
        }}</v-col>
      </v-row>
    </div>
    <!-- <img src="@/assets/static/ref_1_05.png" class="w-100" /> -->
    <img src="@/assets/static/ref_1_07.png" class="w-100" />
  </div>
</template>

<script setup>
import PageHeader from "../../components/topWrap.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { getShareCommissionNumber } from "@/api/infoApi";
import { listApi } from "@/api/agenApi";

const router = useRouter();

const info = ref({
  user: "",
  coupon: 0,
});

const level = ref([]);

onMounted(async () => {
  info.value = await getShareCommissionNumber();
  level.value = await listApi();
});
</script>
<style scoped>
.bg-color {
  background-color: #333aed !important;
}
.mt-154 {
  margin-top: 154px !important;
}
.actv-color {
  color: #ffff1a !important;
}
.letter-spacing-10 {
  letter-spacing: 5px !important;
}
.number-container {
  display: inline-flex;
  align-items: center;
}

.number-box {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
  font-weight: bold;
  border: 1px solid yellow;
}
.mt-173 {
  margin-top: 173px !important;
}
.yuan-symbol {
  background: linear-gradient(to bottom, #f2552a, #e32b2d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
}
.gradient-number {
  background: linear-gradient(to bottom, #ff682a, #e32b2d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
  font-size: 50px;
  font-weight: bold;
  margin-left: 0.25rem;
}
.price-container {
  position: absolute;
  bottom: 24%; /* 使用百分比 */
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 修正居中 */
  display: flex;
  align-items: center;
}

.number-fa-container {
  position: absolute;
  top: 27%;
  left: 28%;
  transform: translateX(-20%);
}
.title-bg {
  background-image: url("@/assets/static/share_title_bg.png");
  height: 70px;
  background-repeat: repeat-x;
  width: 100%;
}
.title-color {
  color: #9c6614;
}
.nav-color {
  background-color: #fff8ed;
}
.nav-li-color {
  color: #ff4b7a;
}
</style>
