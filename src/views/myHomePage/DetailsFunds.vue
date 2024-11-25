<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>资金明细</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245); height: 5px"></div>

    <v-row class="ma-0 pa-0 screen-box">
      <v-col cols="6">
        <div
          @click="
            typeOpen = true;
            istype = false;
          "
        >
          <span class="mr-1">全部交易类型</span>
          <img src="../../assets/img/downPac.png" alt="" />
        </div>
      </v-col>
      <v-col cols="6">
        <VueDatePicker
          v-model="selectDate"
          locale="zh-CN"
          timezone="Asia/Shanghai"
          class="screen-box text-right"
          @update:model-value="setDate"
          model-type="yyyy-MM"
          month-picker
          @closed="handleDate"
        >
          <template #trigger>
            <p class="text-grey text-body-2">
              {{ selectDate }}
              <img src="../../assets/img/downPac.png" alt="" />
            </p>
          </template>
        </VueDatePicker>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <div class="list-box">
      <!-- <div
        v-for="item in store.state.fundrecord.list"
        :key="item.date"
        class="flexBetween order-list"
        @click="goRouter('/BillingDetails')"
      > -->
      <div
        v-for="item in store.state.fundrecord.list"
        :key="item.date"
        class="flexBetween order-list"
      >
        <div class="flexStart">
          <!-- <img src="../../assets/img/documentary.png" alt="" /> -->
          <div>
            <h3>{{ item.type }}</h3>
            <p>{{ item.date }}</p>
          </div>
        </div>
        <div
          class="list-number"
          :class="'text-' + watchStringToColor(item.amount)"
        >
          {{ item.amount }}
        </div>
      </div>
    </div>

    <v-bottom-sheet v-model="typeOpen">
      <div class="flexBetween sheet-top">
        <div class="sheet-close" @click="typeOpen = false">取消</div>
        <p class="sheet-sure" @click="changeType">确认</p>
      </div>
      <v-divider></v-divider>
      <div class="list-cont-box">
        <v-virtual-scroll
          :bench="benched"
          :items="list"
          item-height="64"
          class="type-list"
        >
          <v-list @click:select="selectSubType">
            <v-list-item value="all">全部交易类型</v-list-item>
            <v-list-item
              v-for="(item, index) in store.state.fundrecord.typeList"
              :key="index"
              :value="item"
              >{{ item }}</v-list-item
            >
          </v-list>
        </v-virtual-scroll>
      </div>
    </v-bottom-sheet>
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
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
  onUnmounted,
} from "vue";

// import { VBottomSheet } from "vuetify/lib/labs/vBottomSheet/index";
import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const isApply = ref(false);
const istype = ref(true); //false 为全部交易， true 为时间

const month = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
});
const typeOpen = ref(false);
const selectDate = ref("");
const typeModel = ref("");
const page = ref(1);

const setDate = (value) => {
  selectDate.value = value;
};

onMounted(() => {
  const now_date = new Date();
  selectDate.value = now_date.getFullYear() + "-" + (now_date.getMonth() + 1);
  store.dispatch("fundrecord/getTypeList");
  getList();
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const changeType = () => {
  typeOpen.value = false;
  getList();
};
const getList = () => {
  store.dispatch("fundrecord/getList", {
    page: page.value,
    type: typeModel.value,
    date: selectDate.value,
  });
};

const updatePage = () => {
  // Your update logic here
  page.value = page.value + 1;
  getList();
};
const handleScroll = () => {
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;
  let clientHeight = document.documentElement.clientHeight;

  if (scrollHeight - scrollTop <= clientHeight) {
    updatePage();
  }
};

const watchStringToColor = (price) => {
  if (price.indexOf("+") !== -1) {
    return "red";
  } else {
    return "green";
  }
};

const handleDate = () => {
  getList();
};

const selectSubType = (info) => {
  typeModel.value = getKeyByValue(info.id);
};

function getKeyByValue(value) {
  for (var key in store.state.fundrecord.typeList) {
    if (
      store.state.fundrecord.typeList.hasOwnProperty(key) &&
      store.state.fundrecord.typeList[key] === value
    ) {
      return key;
    }
  }
  return null; // 如果没有找到匹配的键，返回 null 或其他指定的值
}

const goRouter = (path) => {
  $router.push(path);
};
const list = ref([{ text: "00:00", icon: "mdi-clock" }]);
</script>
<style lang="scss" scoped>
.v-bottom-sheet {
  .sheet-top {
    padding: 1px 13px 1px 13px;
    font-size: 17px;
    line-height: 25px;
    border-bottom: 1px solid #e5e5e5;
    background: #fff;

    .sheet-sure {
      font-size: 17px;
      line-height: 45px;
      float: right;
      color: #007aff;
    }

    .sheet-close {
      color: #888;
    }
  }

  .list-cont-box {
    max-height: 350px;
    overflow-y: scroll;
  }

  .type-list {
    width: 100%;
    // padding: 0 25px 0 10px;
    width: 100%;
    text-align: center;

    h3 {
      font-size: 15px;
      color: #2c2e3a;
    }

    .list-select {
      width: 12px;
    }
  }
}

.list-number {
  font-size: 16px;
  font-weight: 500;
}

.order-list {
  padding: 10px 0;
  border-bottom: solid 0.5px #f7f7f7;

  img {
    width: 40px;
    margin-right: 10px;
  }

  h3 {
    font-size: 15px;
    color: #2c2e3a;
  }

  p {
    font-size: 12px;
    color: #7f829a;
    margin-top: 3px;
  }
}

.list-box {
  padding: 10px 15px 20px 10px;
}

.screen-box {
  padding: 5px 10px;

  span {
    line-height: 40px;
    align-items: center;
    font-size: 12px;
    color: silver;
    // margin-left: 15px
  }

  img {
    width: 12px;
  }
}
</style>
