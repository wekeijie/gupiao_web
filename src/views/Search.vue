<template>
  <div class="search-cont">
    <div class="flexBetween search-top">
      <div class="flexStart search-box">
        <img
          src="../assets/img/search.png"
          alt=""
        >
        <!-- <input
          type="text"
          placeholder="搜索"
          style="outline: none;"
          v-model="searchCont"
          @change="searchValue"
        > -->
        <v-col
          cols="12"
          sm="2"
        >
          <v-text-field
            v-model="searchCont"
            variant="none"
            single-line
            required
            clearable
            hide-details="auto"
            label="搜索"
            solo
          ></v-text-field>
        </v-col>
      </div>
      <h3 @click="$router.go(-1)">取消</h3>
    </div>

    <div v-if="!searchCont">

      <div class="flexBetween class-title">
        <h3>热门股票</h3>
        <p>更多...</p>
      </div>

      <div class="flexBetween hot-box">
        <div
          v-for="item in 5"
          class="flexBetween hot-list"
          @click="goChanrt(item)"
          :key="item"
        >
          <h5>太平洋</h5>
          <p :style="item>3?'color:green':'color:red'">-2.92%</p>
        </div>

      </div>

      <div class="flexBetween class-title">
        <h3>历史搜索</h3>
        <img
          src="../assets/img/deleted.png"
          alt=""
        >
      </div>

    </div>
    <div
      class="search-title"
      v-else
    >股票</div>
    <div
      class="flexBetween history-box"
      v-for="item in 10"
      @click="goChanrt(item)"
    >
      <div>
        <h3>太平洋</h3>
        <p><span>sh</span>688515</p>
      </div>
      <img
        src="../assets/img/selefNo.png"
        alt=""
        v-if="item>3"
      >
      <img
        src="../assets/img/selef.png"
        alt=""
        v-else
      >

    </div>

  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const searchCont = ref()
const goChanrt = (id) => {
  $router.push({ path: 'ChanrtPage', query: { id: id } })
}
const searchValue = (value) => {
  if (value) {

  } else {

  }
}

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
