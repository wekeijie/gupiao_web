<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>{{ title }}</template>
    </page-header>

    <table>
      <tbody>
        <tr class="tr-list">
          <th style="text-align: left">代码名称</th>
          <th style="text-align: right">最新价格</th>
          <th style="text-align: right" class="cutUp" @click="isUp = !isUp">
            涨跌幅 <img src="../../assets/img/dowm.png" v-if="isUp" /><img
              src="../../assets/img/up.png"
              v-else
            />
          </th>
        </tr>

        <div style="background-color: rgb(245, 245, 245); height: 2px"></div>
        <tr
          class="tr-list"
          v-for="item in listData"
          :key="item.f12"
          @click="goRouter('/ChanrtPage', item.f14, item.f12, item.f13)"
        >
          <td class="tr-one">
            <p>{{ item.f14 }}</p>
            <span>{{ symbolCodeFormat(item.f12, item.f13) }}</span>
          </td>
          <td class="tr-two" style="text-align: right">
            <div class="tr-two-number">{{ item.f2 }}</div>
          </td>
          <td class="tr-three" style="text-align: right">
            <span :class="'text-' + watchStringToColor(item.f3)">{{
              updateStrIcon(item.f3) + "%"
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
import { symbolCodeFormat } from "@/utils/helper";
import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const title = ref();
const code = ref();
const page = ref(2);

const listData = ref([]);

let pageInfo = reactive({
  cate: "",
  page: 1,
  limit: 20,
});

let refreshTimer = null;

onMounted(() => {
  title.value = $route.query.title;
  pageInfo.cate = $route.query.code;
  getNewList();
  window.addEventListener("scroll", handleScroll);
  startRefreshTimer();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  // store.dispatch("market/clearList");
  stopRefreshTimer();
});

const startRefreshTimer = () => {
  // 清除可能存在的旧定时器
  if (refreshTimer) {
    clearInterval(refreshTimer);
  }

  // 设置新的定时器，每5秒执行一次 initData
  refreshTimer = setInterval(() => {
    getNewList();
  }, 5000);
};

const stopRefreshTimer = () => {
  if (refreshTimer) {
    clearInterval(refreshTimer);
    refreshTimer = null;
  }
};

const getNewList = (is_page = false) => {
  store.dispatch("market/getBoardStockList", pageInfo).then((d) => {
    if (is_page) {
      listData.value = [...listData.value, ...d.diff];
    } else {
      listData.value = d.diff;
    }

    page.value = Math.ceil(d.total / pageInfo.limit);
  });
};

const getList = () => {
  store.dispatch("market/getListDetail", {
    code: code.value,
    page: page.value,
  });
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
  getNewList(true);
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

const goRouter = (path, name, code, prefix) => {
  $router.push({
    path,
    query: {
      code: code,
      title: name,
      prefix: prefix,
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
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #000;
    }

    span {
      font-size: 8px;
      background-color: #f33;
      border-radius: 2px;
      color: #fff;
    }
  }

  .tr-two {
    .tr-two-number {
      font-size: 12px;
      font-weight: 600;
      color: #000;
    }
  }

  .tr-three {
    span {
      text-align: center;
      // width: ;
      border-radius: 4px;
      font-size: 12px;
      padding: 2px 4px;
      font-size: 12px;
      font-weight: 600;
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
