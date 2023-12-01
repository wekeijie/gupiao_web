<template>
  <div class="">
    <page-header>
      <template v-slot:headerCenter>利息券</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245); height: 5px"></div>
    <div class="head-bottom">
      <div class="table-box flexStart">
        <p :class="model == 0 ? 'active-tab' : ''" @click="changeModel(0)">
          待使用
        </p>
        <p :class="model == 1 ? 'active-tab' : ''" @click="changeModel(1)">
          已使用
        </p>
      </div>
    </div>
    <div class="coupon-box">
      <v-carousel
        :show-arrows="false"
        hide-delimiters
        v-model="model"
        height="auto"
      >
        <v-carousel-item v-for="(slide, i) in 2" :key="i">
          <div class="new-box" v-if="i == 0">
            <div
              class="coupon-list"
              v-for="item in store.state.userCoupon.list"
              :key="item.id"
            >
              <div class="flexBetween waite-box">
                <h2 class="flexStart"><span>¥</span> {{ item.amount }}</h2>
                <div>
                  <p>ID:{{ item.order_id }}</p>
                  <p>余额 ¥ {{ item.balance }}</p>
                </div>
              </div>
              <div
                class="flexBetween coupon-detail"
                @click="goRouter('/CouponDetail', item.order_id)"
              >
                <p>使用范围：全平台</p>
                <span>详情</span>
              </div>
            </div>
          </div>
          <div class="new-box have-used" v-if="i == 1">
            <div
              class="coupon-list"
              v-for="item in store.state.userCoupon.list"
              :key="item.id"
            >
              <div class="flexBetween waite-box">
                <h2 class="flexStart"><span>¥</span> {{ item.amount }}</h2>
                <div>
                  <p>ID:{{ item.order_id }}</p>
                  <p>余额 ¥ {{ item.balance }}</p>
                </div>
              </div>
              <div
                class="flexBetween coupon-detail"
                @click="goRouter('/CouponDetail', item.order_id)"
              >
                <p>使用范围：全平台</p>
                <span>详情</span>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  defineExpose,
  reactive,
  ref,
  onMounted,
  onUnmounted,
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
} from "vue";

import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();

const model = ref(0);
const page = ref(1);

onMounted(() => {
  getList();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;
  let clientHeight = document.documentElement.clientHeight;

  if (scrollHeight - scrollTop <= clientHeight) {
    updatePage();
  }
};

const updatePage = () => {
  // Your update logic here
  page.value = page.value + 1;
  getList();
};
const changeModel = (index) => {
  model.value = index;
  page.value = 1;
  store.dispatch("userCoupon/clearList");
  getList();
};

const getList = () => {
  store.dispatch("userCoupon/getList", {
    status: model.value,
    page: page.value,
  });
};

const goRouter = (path, code) => {
  $router.push({
    path,
    query: {
      order_id: code,
    },
  });
};
</script>
<style lang="scss" scoped>
.head-bottom {
  position: relative;
  top: -20px;
  line-height: 40px;
  padding: 0 12px;
  color: #7f829a;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
}

.table-box {
  p {
    padding: 8px 10px 3px;
    font-size: 14px;
    font-weight: bold;
    color: rgb(199, 199, 199);
    position: relative;
  }

  .active-tab {
    font-weight: bold;
    color: rgb(48, 48, 48);
  }

  .active-tab::after {
    position: absolute;
    bottom: 0;
    content: "";

    width: 20px;
    height: 6px;
    border-radius: 100px;
    background-color: rgb(251, 92, 57);
    left: calc(50% - 10px);
  }
}

.coupon-box {
  height: calc(100vh - 105px);
  background-color: #f6f6f6;
  overflow-y: scroll;
}

.new-box {
  min-height: calc(100vh - 125px);
  padding: 10px;
}

.coupon-list {
  height: 136px;
  align-items: center;
  margin: 0px 4px;
  background-image: url("../../assets/img/coupon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  padding: 17px 30px 0;
}

.waite-box {
  h2 {
    width: 50%;
    font-size: 30px;
    color: #e95b57;

    span {
      font-size: 20px;
    }
  }

  p {
    text-align: right;
    font-size: 13px;
    color: #7f829a;
  }
}

.coupon-detail {
  width: 100%;
  line-height: 29px;
  font-size: 13px;
  color: silver;
  letter-spacing: 0.5px;
  background-color: #fef8f1;
  border-radius: 6px;
  padding: 0 10px;
  margin-top: 15px;

  span {
    color: #fe8805;
  }
}

.have-used {
  .coupon-detail {
    background-color: #f5f5fd;
  }

  h2 {
    color: #7f829a;
  }

  span {
    color: #7f829a;
  }
}
</style>
