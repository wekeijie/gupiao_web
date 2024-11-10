<template>
  <page-header>
    <template v-slot:headerCenter>{{ title }}</template>
  </page-header>
  <div class="bg-color ui-min-height px-3 pt-4">
    <div class="text-body-1 mb-3 text-grey-darken-1">
      请先成功付款后再“填写付款信息”确认提交
    </div>
    <v-sheet class="px-2 py-5 rounded-lg">
      <div class="text-center">
        <img v-if="code.qrcode" :src="code.qrcode" width="120" />
        <div class="text-caption text-grey-darken-1" v-if="code.qrcode">
          截屏保存二维码到本地相册
        </div>
        <v-row class="ma-0 pa-0">
          <v-col cols="2" class="text-right">账号</v-col>
          <v-col cols="10" class="d-indent-flex">
            <div class="text-body-2">{{ code.app_id }}</div>
            <v-icon
              color="blue-accent-2"
              size="x-small"
              class="ml-1"
              @click="copy"
              >mdi-content-copy</v-icon
            >
          </v-col>
          <v-col cols="2" class="text-right" v-if="code.public_key">姓名</v-col>
          <v-col cols="10" class="d-indent-flex" v-if="code.public_key">
            <div class="text-body-2">{{ code.public_key }}</div>
          </v-col>
        </v-row>

        <div class="text-body-1 mt-3">充值说明</div>
      </div>
      <div class="px-2 mt-2" v-html="code.explain"></div>
    </v-sheet>
    <div class="text-body-1 mt-3 text-grey-darken-1">填写付款信息</div>
    <v-row class="ma-0 pa-0 bg-white rounded-lg pb-3 mt-3">
      <v-col cols="3" class="px-0 pt-5 pl-3">转账金额</v-col>
      <v-col cols="9" class="pa-0 pr-3">
        <v-text-field
          variant="underlined"
          v-model="amount"
          class="mt-3"
          hide-details
          density="compact"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn block="" color="#5262EC" class="mt-4 text-white" @click="submitJump"
      >确认提交</v-btn
    >
    <div
      class="mt-3 text-caption text-grey-darken-1 mt-3"
      v-html="code.tip"
    ></div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { store } from "@/store";
import { rechargeTypeInfoApi } from "@/api/topUpApi";
import useClipboard from "vue-clipboard3";
const amount = ref("");
const code = ref({});
const name = ref("");
const title = ref("充值");
const { toClipboard } = useClipboard();

const route = useRoute();

onMounted(async () => {
  if (!route.query.code) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "充值渠道不存在，请联系在线客服",
    });
    return;
  }
  code.value = await rechargeTypeInfoApi(route.query.code);
  title.value = code.value.title;
});
const submitJump = () => {
  if (amount.value < code.value.min) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "金额不能低于最低金额",
    });
    return;
  }
  if (code.value.id == "") {
    maintenance();
    return;
  }

  store
    .dispatch("topUp/subPut", {
      name: name.value,
      id: code.value.id,
      amount: amount.value,
    })
    .then((d) => {
      store.dispatch("snackbar/success", {
        active: true,
        body: "提交成功，请等待审核",
      });
    });
};
const copy = async () => {
  try {
    await toClipboard(code.value.app_id);
    store.dispatch("snackbar/success", {
      active: true,
      body: "复制成功！",
    });
  } catch (e) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "操作错误！",
    });
  }
};
</script>
