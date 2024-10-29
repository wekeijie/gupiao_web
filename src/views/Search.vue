<template>
  <div class="search-cont">
    <div class="flexBetween search-top">
      <v-icon class="mr-2" @click="$router.back()">mdi-backburger</v-icon>
      <div class="flexStart search-box">
        <img src="../assets/img/search.png" alt="" />
        <v-col cols="12" sm="2">
          <form @submit.prevent="handleSubmit">
            <v-text-field
              v-model="searchCont"
              variant="none"
              single-line
              required
              clearable
              hide-details="auto"
              label="搜索"
              solo
              @update:modelValue="handleSubmit"
            ></v-text-field>
          </form>
        </v-col>
      </div>
      <h3 @click="handleSubmit">搜索</h3>
    </div>

    <div class="search-title">股票</div>
    <div
      class="flexBetween history-box"
      v-for="item in store.state.market.search_list"
      :key="item.code"
      @click="goCaRouter('/ChanrtPage', item.Name, item.Code, item.MktNum)"
    >
      <div>
        <h3>{{ item.Name }}</h3>
        <p>{{ symbolCodeFormat(item.Code, item.MktNum) }}</p>
      </div>
      <img src="../assets/img/selefNo.png" alt="" v-if="item > 3" />
      <img src="../assets/img/selef.png" alt="" v-else />
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
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
import { symbolCodeFormat } from "@/utils/helper";
const $router = useRouter();
const $route = useRoute();
const searchCont = ref();

onMounted(() => {
  if ($route.query.keyword) {
    searchCont.value = $route.query.keyword;
    handleSubmit();
  }
});

const goChanrt = (id) => {
  $router.push({ path: "ChanrtPage", query: { id: id } });
};
const searchValue = (value) => {
  if (value) {
  } else {
  }
};

const handleSubmit = () => {
  if (searchCont.value.length <= 0) {
    // store.dispatch("snackbar/warning", {
    //   active: true,
    //   body: "请输入名称或者编码",
    // });
    return;
  }
  store.dispatch("market/search", searchCont.value);
};

const goCaRouter = (path, name, code, prefix) => {
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
.search-cont {
  padding-bottom: 50px;
  min-height: calc(100vh - 30px);
}
.history-box {
  padding: 0 15px 15px;
  h3 {
    font-size: 14px;
    color: #000;
    letter-spacing: 1px;
    margin-bottom: 5px;
  }
  p {
    font-size: 10px;
    color: #666;
    margin-left: 2px;
    span {
      background-color: #fb5c39;
      font-size: 8px;
      color: #fff;
      letter-spacing: 0.5px;
      padding: 0px 5px;
    }
  }
  img {
    width: 27px;
    margin-right: 10px;
  }
}
.search-title {
  padding: 15px;
  font-size: 15px;
  color: #000;
}
.hot-box {
  padding: 0 15px 15px 15px;
  border-bottom: 5px solid #f5f5f5;
  flex-wrap: wrap;
  .hot-list {
    width: 45%;
    margin: 5px 0;
    h5 {
      font-size: 14px;
      letter-spacing: 0.5px;
      color: #303133;
    }
    p {
      color: #1aad19;
      font-size: 14px;
      letter-spacing: 0.5px;
    }
  }
}
.class-title {
  padding: 10px 15px;
  h3 {
    font-size: 15px;
    letter-spacing: 0.5px;
    color: #000;
  }
  p {
    text-align: center;
    margin-top: 22px;
    font-size: 15px;
    letter-spacing: 1px;
  }
  img {
    width: 16px;
  }
}
.search-top {
  margin: 20px 15px 0px 25px;
  align-items: center;
  h3 {
    width: 15%;
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;
  }
}
.search-box {
  height: 36px;
  overflow: hidden;
  border-radius: 19px;
  border: solid 0.5px #f2f2f2;
  width: 80%;
  // margin-left: %;
  padding: 15px;
  img {
    width: 20px;
    // margin-right: 10px;
  }
  input {
    border: none;
    padding: 0;
  }
}
</style>
