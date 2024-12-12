<template>
  <div class="bg-color ui-min-height">
    <page-header>
      <template v-slot:headerCenter>代理中心</template>
    </page-header>
    <div class="agenr-top-bg rounded-b-lg px-4 pt-6">
      <div class="d-flex align-center">
        <div class="" style="width: 60px">
          <img src="@/assets/static/agency_03.png" width="60" />
        </div>
        <div class="text-white font-size-12 font-weight-bold d-flex ml-3">
          <span>专属邀请码:{{ store.state.user.code.toUpperCase() }}</span>
          <span class="ml-2">
            <v-icon @click="copy">mdi-content-copy</v-icon>
          </span>
        </div>
      </div>
    </div>
    <div class="px-4 mt-n130">
      <v-img
        src="@/assets/static/agency_07.png"
        cover=""
        height="200"
        class="rounded-lg position-relative"
      >
        <div
          class="text-h3 font-weight-bold tag-color position-absolute tag-poine font-italic"
        >
          {{ info.title }}
        </div>
        <v-row
          class="ma-0 pa-0 text-center text-white text-subtitle-2 font-weight-bold position-relative mt-8"
        >
          <v-col cols="4" class="pa-0">
            <div class="text-h6 position-relative">
              {{ info.active_user }}/{{ info.user_number }}
              <v-icon
                size="min"
                color="pink-accent-2"
                class="position-absolute top-0"
                style="right: 12px"
                @click="tipshow = !tipshow"
                >mdi-comment-processing-outline
              </v-icon>
              <v-tooltip activator="parent" location="bottom" v-model="tipshow">
                <div>累计下线：好友通过您的邀请码注册成为一个累计下线</div>
                <div>
                  有效下线：好友通过您的邀请码注册并申请合约成功成为一个有效下线。
                </div>
              </v-tooltip>
            </div>
            <div>有效/累计下线</div>
          </v-col>
          <v-col cols="4" class="pa-0">
            <div class="text-h6">{{ info.amount }}</div>
            <div>累计返佣金额</div>
          </v-col>
          <v-col cols="4" class="pa-0">
            <div class="text-h6">{{ parseInt(info.interest) }}%</div>
            <div>返利息比例</div>
          </v-col>
          <v-col cols="4" class="pa-0 mt-6">
            <div class="text-h6">{{ parseInt(info.level_rate) }}%</div>
            <div>逐级返佣比例</div>
          </v-col>
          <v-col cols="4" class="pa-0 mt-6">
            <div class="text-h6">0%</div>
            <div>返其它费用比例</div>
          </v-col>
          <v-col cols="4" class="pa-0 mt-6">
            <div class="text-h6">{{ parseInt(info.commission) }}%</div>
            <div>返佣金比例</div>
          </v-col>
        </v-row>
      </v-img>
    </div>

    <div class="px-4 mt-5">
      <v-sheet class="py-5 rounded-lg d-flex text-center">
        <div class="w-20" @click="router.push('/agency/sub-user')">
          <img src="@/assets/static/agency_11.png" width="30" />
          <div class="text-body-2 mt-2">下线列表</div>
        </div>
        <div class="w-20" @click="router.push('/agency/sub-contract')">
          <img src="@/assets/static/agency_13.png" width="30" />
          <div class="text-body-2 mt-2">下线合约</div>
        </div>
        <div class="w-20" @click="router.push('/Invite')">
          <img src="@/assets/static/agency_15.png" width="30" />
          <div class="text-body-2 mt-3">邀请好友</div>
        </div>
        <div class="w-20" @click="router.push('/agency/sub-commission')">
          <img src="@/assets/static/agency_17.png" width="30" />
          <div class="text-body-2 mt-3">返佣明细</div>
        </div>
        <div class="w-20" @click="router.push('/agency/sub-delivery')">
          <img src="@/assets/static/agency_19.png" width="30" />
          <div class="text-body-2 mt-1">交割记录</div>
        </div>
      </v-sheet>
    </div>

    <div class="px-4 mt-5">
      <v-sheet class="rounded py-3">
        <div class="text-center text-h6">会员等级说明</div>
        <div class="d-flex mt-4 py-3 text-center text-body-2 tab-bg-color">
          <div class="w-20">会员等级</div>
          <div class="w-20">晋级条件</div>
          <div class="w-20">返佣比例</div>
          <div class="w-20">返利息</div>
          <div class="w-20">逐级返佣</div>
        </div>
        <div
          class="d-flex py-3 text-center text-body-2"
          v-for="item in store.state.agen.list"
          :key="item.title"
        >
          <div class="w-20">{{ item.title }}</div>
          <div class="w-20">{{ item.number }}</div>
          <div class="w-20">{{ parseInt(item.commission) }}%</div>
          <div class="w-20">{{ parseInt(item.interest) }}%</div>
          <div class="w-20">{{ parseInt(item.level_rate) }}%</div>
        </div>
      </v-sheet>
    </div>
    <div class="py-6"></div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, onMounted } from "vue";
import useClipboard from "vue-clipboard3";
import { store } from "@/store";
import { jump } from "@/utils/constName";
import { useRouter } from "vue-router";
import { infoApi } from "@/api/agenApi";
const router = useRouter();
const { toClipboard } = useClipboard();

const info = ref({});
const tipshow = ref(false);

onMounted(async () => {
  store.dispatch("agen/getList");
  const rsp = await infoApi();
  info.value = rsp;
});

const copy = async () => {
  try {
    await toClipboard(store.state.user.code);
    store.dispatch("snackbar/success", {
      active: true,
      body: "复制成功!",
    });
  } catch (e) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "复制失败!",
    });
  }
};
</script>
<style scoped>
.agency-top-bg {
  background-image: url("@/assets/static/agency_top.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 253px;
}
.agenr-top-bg {
  width: 100%;
  height: 240px;
  background-color: #4e63f5;
}
.mt-n130 {
  margin-top: -130px !important ;
}
.tag-color {
  color: #c19f58;
}
.tag-poine {
  right: 14px;
  top: 8px;
}
.tab-bg-color {
  background-color: #d3deff;
}
</style>
