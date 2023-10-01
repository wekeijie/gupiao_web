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
          v-for="item in store.state.market.list"
          :key="item.code"
          @click="goRouter('/ChanrtPage', item.name, item.code, item.prefix)"
        >
          <td class="tr-one">
            <p>{{ item.name }}</p>
            <span>{{ item.code }}</span>
          </td>
          <td class="tr-two" style="text-align: right">
            <div class="tr-two-number">{{ item.price }}</div>
          </td>
          <td class="tr-three" style="text-align: right">
            <span :class="'text-' + watchStringToColor(item.rank)">{{
              updateStrIcon(item.rank) + "%"
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
const code = ref();
const page = ref(1);
onMounted(() => {
  title.value = $route.query.title;
  code.value = $route.query.code;
  getList();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  store.dispatch("market/clearList");
});

const getList = () => {
  store.dispatch("market/getListDetail", {
    code: code.value,
    page: page.value,
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
