<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>{{ title }}</template>
    </page-header>



    <table>
      <tbody>
        <tr class="tr-list">
          <th style="text-align: left;">代码名称</th>
          <th style="text-align: right;">最新价格</th>
          <th style="text-align: right;" class="cutUp" @click="isUp = !isUp">涨跌幅 <img src="../../assets/img/dowm.png"
              v-if="isUp"><img src="../../assets/img/up.png" v-else> </th>
        </tr>

        <div style="background-color: rgb(245, 245, 245);height: 2px;"></div>
        <tr class="tr-list" v-for="item in 10" :key="item" @click="goRouter('/ChanrtPage', '房地产行业')">
          <td class="tr-one">
            <p>维尔利</p>
            <span>sz300123</span>
          </td>
          <td class="tr-two" style="text-align: right;">
            <div class="tr-two-number">48.87</div>
          </td>
          <td class="tr-three" style="text-align: right;">
            <span>+3.77%</span>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const title = ref()
onMounted(() => {
  title.value = $route.query.title

})

const goRouter = (path, item) => {
  $router.push({
    path, query: {
      title: item
    }
  })
}
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
  