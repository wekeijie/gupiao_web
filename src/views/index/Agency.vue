<template>
  <page-header>
    <template v-slot:headerCenter>代理中心</template>
  </page-header>
  <div class="bg-color pb-8">
    <div class="agency-top-bg">
      <div class="px-3 w-100 h-100 relative">
        <v-btn
          color="white"
          class="text-blue absolute"
          rounded="xl"
          style="bottom: 83px; left: 32px"
          :to="'/Invite'"
        >
          马上领取
        </v-btn>
      </div>
    </div>
    <div class="px-3 mt-n16">
      <v-sheet class="bg-while py-4" rounded="lg">
        <v-row class="ma-0 pa-0">
          <v-col cols="5" class="text-center">
            <div class="text-h5 font-weight-bold">
              {{ store.state.user.child.child_total }}
            </div>
            <div class="text-body-2">累计下线</div>
          </v-col>
          <v-col cols="1">
            <v-divider
              class="ms-3"
              color="#4760EE"
              :thickness="2"
              inset
              vertical
              style="height: 33px"
            ></v-divider>
          </v-col>
          <v-col cols="5" class="text-center">
            <div class="text-h5 font-weight-bold">
              {{ store.state.user.child.commission }}
            </div>
            <div class="text-body-2">累计返佣</div>
          </v-col>
        </v-row>
      </v-sheet>

      <v-sheet class="mt-3 py-3 rounded-t-lg">
        <img src="@/assets/static/agency_vip.png" width="110" class="ml-3" />
        <div
          class="d-flex flex-wrap text-center text-body-1 list-line-bg py-3 text-white font-weight-bold"
        >
          <div class="flex-1-0">邀请人员等级</div>
          <div class="flex-1-0">返佣比例</div>
        </div>
        <div
          class="d-flex flex-wrap text-center text-body-1 py-3"
          v-for="item in store.state.agen.list"
          :key="item.title"
        >
          <div class="flex-1-0">{{ item.title }}</div>
          <div class="flex-1-0 text-red">{{ item.commission + "%" }}</div>
        </div>
      </v-sheet>
      <v-sheet class="mt-4 rounded-t-lg">
        <div
          class="d-flex flex-wrap text-center text-body-1 list-line-bg py-3 text-white font-weight-bold rounded-t-lg"
        >
          <div class="flex-1-0">邀请人员等级</div>
          <div class="flex-1-0">有效邀请</div>
          <div class="flex-1-0">额外福利</div>
        </div>
        <div
          class="d-flex flex-wrap text-center text-body-1 py-3"
          v-for="item in store.state.agen.list"
          :key="item.title"
        >
          <div class="flex-1-0">{{ item.title }}</div>
          <div class="flex-1-0 text-red-darken-4">{{ item.number }}</div>
          <div class="flex-1-0 text-red">{{ parseInt(item.coupon) }}</div>
        </div>
      </v-sheet>
      <v-sheet class="mt-3 py-3" rounded="lg">
        <img src="@/assets/static/agency_active.png" width="110" class="ml-3" />
        <div
          class="px-3 mt-2 text-ui-grey text-body-2"
          style="line-height: 28px !important"
        >
          <p>1.被推荐人使用利息券抵扣管理费的部分，则推荐人不享有返佣。</p>
          <p>2.推荐人级别越高，则享有的返佣越高。</p>
          <p>3.被推荐人充值并且申请合约买票后即为有效邀请。</p>
          <p>4.达到有效邀请人数后，可立即享有额外的利息券福利，仅奖励一次。</p>
        </div>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { onMounted } from "vue";
import { store } from "@/store";
import { jump } from "@/utils/constName";
import { useRouter } from "vue-router";
const router = useRouter();

onMounted(() => {
  store.dispatch("agen/getList");
  if (store.getters.token) {
    store.dispatch("user/getChild");
  }
});
</script>
<style scoped>
.agency-top-bg {
  background-image: url("@/assets/static/agency_top.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 253px;
}
</style>
