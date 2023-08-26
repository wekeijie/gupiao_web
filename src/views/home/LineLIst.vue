<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>下线列表</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>

    <div class="flexAroud controls-box">
      <v-text-field
        v-model="searchCont"
        variant="none"
        single-line
        required
        clearable
        max-width="100"
        hide-details="auto"
        label="请输入手机号"
        solo
      ></v-text-field>

      <div
        class="select-time"
        style="width:30%"
      >选择时间</div>

      <div
        class="select-status"
        @click="openBotom"
      >
        全部状态
        <img src="../../assets/img/downPac.png">
      </div>

    </div>

    <div style="background-color: rgb(245, 245, 245);height: 2px;"></div>

    <table>
      <tbody>
        <tr class="tr-list">
          <th style="text-align: left;">用户名</th>
          <th style="text-align: right;">累计返佣</th>
          <th style="text-align: right;">会员状态</th>
          <th style="text-align: right;">更多详情</th>
        </tr>
        <tr
          class="tr-list"
          v-for="item in 10"
          :key="item"
        >
          <td class="tr-one">
            <p>185****7809</p>
          </td>
          <td
            class="tr-two"
            style="text-align: right;"
          >
            <div class="tr-two-number">48.87</div>
          </td>
          <td
            class="tr-three"
            style="text-align: right;"
          >
            <span>100</span>
          </td>
          <td
            class="tr-three"
            style="text-align: right;"
          >
            <span>操作</span>
          </td>
        </tr>
      </tbody>
    </table>
    <boot-sheet :isOpen="isOpen"></boot-sheet>
    <div
      class="new-box"
      v-if="1!=1"
    >
      <no-data class="no-data-cont"></no-data>
    </div>

  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import BootSheet from '../../components/BotomSheet.vue'
import NoData from '../../components/noData.vue'
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const isOpen = ref(true)
const searchCont = ref()
const openBotom = () => {
  isOpen.value = true
  console.log('dakai1', isOpen.value)
}

</script>
<style lang="scss" scoped>
table {
  width: 100%;
  padding: 10px 10px 90px 10px;
  .tr-list {
    padding: 6px 0;
    border-bottom: solid 0.5px #f4f5f6;
    display: flex;
    align-items: center;
  }
  .tr-one {
    p {
      font-size: 13px;
    }
    span {
      color: #8f8f94;
      font-size: 10px;
    }
  }

  .tr-two {
    .tr-two-number {
      font-size: 13px;
      color: #000000;
    }
    p {
      color: #8f8f94;
      font-size: 10px;
    }
  }
  .tr-three {
    span {
      text-align: center;
      // width: ;
      background-color: #fff1ed;
      border-radius: 4px;
      font-size: 12px;
      padding: 2px 4px;
      font-size: 12px;
      color: red;
    }
  }
  span {
    color: rgb(230, 5, 5);
    margin-left: 3px;
  }
  th {
    width: 33.3%;
    color: #8f8f94;
    font-size: 12px;
    line-height: 20px;
  }
  td {
    width: 33%;
    font-size: 12px;
  }
}
.v-text-field {
  border: 0.5px solid #d8d8d8;
  height: 30px;
  input {
    height: 30px;
  }
}
::v-deep .v-field__field {
  height: 30px !important;
}
.controls-box {
  padding: 15px;
  height: 50px;
}
.select-time {
  border: 0.5px solid #d8d8d8;
  height: 30px;
  margin: 0 15px;
  padding: 2px 10px;
}
.select-status {
  font-size: 12px;
  color: #000;
  img {
    width: 13px;
  }
}
</style>