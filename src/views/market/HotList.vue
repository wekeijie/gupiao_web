<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>{{ title }}</template>
    </page-header>

    <table>
      <tbody>
        <tr class="tr-list">
          <th style="text-align: left">{{ title }}</th>
          <th style="text-align: right" class="cutUp" @click="isUp = !isUp">
            涨跌幅 <img src="../../assets/img/dowm.png" v-if="isUp" /><img
              src="../../assets/img/up.png"
              v-else
            />
          </th>
          <th style="text-align: right">领涨股</th>
        </tr>

        <div style="background-color: rgb(245, 245, 245); height: 2px"></div>
        <tr
          class="tr-list"
          v-for="item in listData"
          :key="item.f140"
          @click="goRouter('/DetailList', item.f128, item.f12)"
        >
          <td class="tr-one">
            <p>{{ item.f14 }}</p>
          </td>
          <td class="tr-two" style="text-align: right">
            <div
              class="tr-two-number"
              :class="'text-' + watchStringToColor(item.f3)"
            >
              {{ updateStrIcon(item.f3) + "%" }}
            </div>
          </td>
          <td class="tr-three" style="text-align: right">
            <p>{{ item.f128 }}</p>
            <span :class="'text-' + watchStringToColor(item.f136)">{{
              updateStrIcon(item.f136) + "%"
            }}</span>
          </td>
        </tr>
      </tbody>
    </table>
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

import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const title = ref();
let page = ref(2);
const listData = ref([]);

let pageInfo = reactive({
  cate: 2,
  page: 1,
  limit: 20,
});

onMounted(() => {
  title.value = $route.query.title;
  pageInfo.cate = $route.query.code;
  // getList();
  getNewList();
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  // store.dispatch("market/clearList");
  listData.value = [];
  page.value = 0;
});

const getNewList = () => {
  store.dispatch("market/getBoardList", pageInfo).then((d) => {
    listData.value = [...listData.value, ...d.diff];
    page.value = Math.ceil(d.total / pageInfo.limit);
  });
};

const getList = () => {
  store.dispatch("market/getList", pageInfo);
};
const updatePage = () => {
  // Your update logic here
  let temp_page = pageInfo.page + 1;
  if (temp_page > page.value) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "已经是最后一页",
    });
    return;
  }
  getNewList();
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
  if (price < 0) {
    return "green";
  } else if (price === 0 || price === "") {
    return "black";
  } else if (price > 0) {
    return "red";
  }
};

const updateStrIcon = (price) => {
  if (price > 0) {
    return "+" + price;
  } else {
    return price;
  }
};

const goRouter = (path, item, code) => {
  $router.push({
    path,
    query: {
      title: item,
      code: code,
    },
  });
};
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  padding: 0px 10px 90px 10px;

  .tr-list {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }

  .cutUp {
    display: flex;
    justify-content: flex-end;

    img {
      width: 20px;
    }
  }

  .tr-one {
    p {
      width: 70%;
      white-space: nowrap; //不换行
      overflow: hidden; //超出隐藏
      text-overflow: ellipsis; //超出文本省略号
      font-size: 12px;
      font-weight: 500;
      color: #000;
      letter-spacing: 0.5px;
    }
  }

  .tr-two {
    text-align: center;

    .tr-two-number {
      font-size: 12px;
      font-weight: 600;
      color: red;
    }
  }

  .tr-three {
    font-size: 12px;
    font-weight: 500;

    p {
      white-space: nowrap; //不换行
      overflow: hidden; //超出隐藏
      text-overflow: ellipsis; //超出文本省略号
      letter-spacing: 0.5px;
    }

    span {
      text-align: center;
      // width: ;
      border-radius: 4px;
      font-size: 12px;
      padding: 2px 4px;
      font-size: 10px;
      font-weight: 400;
      color: red;
    }
  }

  th {
    width: 33.3%;
    color: #8f8f94;
    font-size: 12px;
    line-height: 20px;
    padding: 1px 0 15px 0;
  }

  td {
    width: 33%;
    font-size: 12px;
  }
}
</style>
