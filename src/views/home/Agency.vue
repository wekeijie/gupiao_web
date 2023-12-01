<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>代理中心</template>
    </page-header>
    <img
      class="top-img"
      alt=""
      @click="goRouter('/Invite')"
      src="../../assets/img/agency/top.jpg"
    />
    <div class="flexAroud total-number-box">
      <!-- <div @click="goRouter('/LineLIst', 1)"> -->
      <div>
        <p>{{ store.state.user.child.child_total }}</p>
        <p>累计下线</p>
      </div>
      <!-- <div @click="goRouter('/Downline', 2)"> -->
      <div>
        <p>{{ store.state.user.child.commission }}</p>
        <p>累计返佣</p>
      </div>
    </div>
    <div class="lab-title-box flexStart">
      <img class="top-img" alt="" src="../../assets/img/agency/left.png" />
      <span>VIP等级说明</span>
    </div>

    <div class="grade-box">
      <v-table class="grade-list-one">
        <thead>
          <tr>
            <th class="text-left">邀请人员等级</th>
            <th class="text-left">返佣比例</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in store.state.agen.list" :key="item.title">
            <td class="">{{ item.title }}</td>
            <td class="list-red">{{ item.commission + "%" }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-table class="grade-list-two">
        <thead>
          <tr>
            <th>邀请人员等级</th>
            <th>有效邀请</th>
            <th>额外福利</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in store.state.agen.list" :key="item.title">
            <td class="">{{ item.title }}</td>
            <td class="list-people">{{ item.number }}</td>
            <td class="list-red">{{ parseInt(item.coupon) }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <div class="lab-title-box flexStart">
      <img class="top-img" alt="" src="../../assets/img/agency/left.png" />
      <span>活动规则</span>
    </div>

    <div class="activity-rule">
      <p>1.被推荐人使用利息券抵扣管理费的部分，则推荐人不享有返佣。</p>
      <p>2.推荐人级别越高，则享有的返佣越高。</p>
      <p>3.被推荐人充值并且申请合约买票后即为有效邀请。</p>
      <p>4.达到有效邀请人数后，可立即享有额外的利息券福利，仅奖励一次。</p>
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

import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();

onMounted(() => {
  store.dispatch("agen/getList");
  if (store.getters.token) {
    store.dispatch("user/getChild");
  }
});

const goRouter = (path) => {
  $router.push(path);
};
</script>
<style lang="scss" scoped>
.activity-rule {
  padding: 10px 10px 20px 10px;
  font-size: 14px;
  font-family: PingFang SC;
  line-height: 27px;
  color: #303133;
}

.grade-box {
  padding: 10px;
  font-size: 15px;
  border-bottom: 8px solid rgb(245, 245, 245);

  .v-table {
    font-weight: 700;
    --v-table-header-height: 36px;
    border: 1px #f5f5f5 solid;

    .list-red {
      color: rgb(251, 92, 57) !important;
      font-weight: 700;
      line-height: 16px;
    }

    .list-people {
      color: rgb(177, 57, 0);
    }
  }

  th {
    padding: 0;
    text-align: center !important;
    background-image: url("../../assets/img/agency/labBg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    color: #fff !important;
  }

  tr {
    background: #d0dee5;
  }

  td {
    text-align: center;
  }
}

.grade-list-one {
  .v-table {
  }

  th {
    width: 50%;
  }

  tr {
  }

  td {
    height: 46px !important;
  }
}

.grade-list-two {
  margin: 20px 0;

  .v-table {
  }

  th {
    width: 33.3%;
  }

  tr {
    background: #d0dee5;
  }

  td {
    height: 46px !important;
  }
}

.grade-box {
  width: 100%;
  position: relative;
  background-image: url("../../assets/img/agency/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}

.lab-title-box {
  padding: 10px;
  align-items: center;

  img {
    width: 5px;
  }

  span {
    color: #303133;
    margin-left: 5px;
    font-size: 15px;
    font-weight: 700;
  }
}

.top-img {
  width: 100%;
}

.total-number-box {
  padding: 15px;
  text-align: center;
  font-weight: 700;
  border-bottom: 5px solid rgb(245, 245, 245);
}
</style>
