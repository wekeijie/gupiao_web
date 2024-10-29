<template>
  <page-header>
    <template v-slot:headerCenter>充值</template
    ><template v-slot:headerRight>
      <p @click="jump(router, '/Recordslist', { title: '充值审核记录' })">
        账单
      </p>
    </template>
  </page-header>
  <div class="bg-color ui-min-height">
    <div class="topup-bg">
      <div class="px-3 pt-10">
        <v-row class="ma-0 pa-0 border-bottom-line">
          <v-col class="px-0" cols="1">
            <v-icon color="white">mdi-currency-cny</v-icon>
          </v-col>
          <v-col cols="11">
            <input
              type="number"
              class="amount"
              placeholder="请输入充值金额"
              v-model="money"
            />
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="px-3 mt-n16">
      <v-sheet class="white rounded-lg py-4 px-3">
        <div class="text-body-1">请选择充值金额</div>
        <v-row class="ma-0 pa-0 mt-4">
          <v-col
            cols="3"
            class="mr-7 px-0 text-center rounded mb-3 border-line"
            v-for="(item, key) in [100, 500, 1000, 3000, 5000, 10000]"
            :key="key"
            @click="money = item"
            :class="{
              'money-bg-active': money === item,
              'money-bg': money != item,
            }"
          >
            ¥{{ item }}元
          </v-col>
          <v-col cols="6" class="pa-0 text-body-1 mt-2">应付金额</v-col>
          <v-col cols="6" class="pa-0 text-right text-body-1 text-red pr-6 mt-2"
            >¥{{ money }}元</v-col
          >
        </v-row>
      </v-sheet>

      <v-sheet class="white rounded-lg py-4 mt-5 px-3">
        <div class="text-body-1 text-red-accent-3">请选择充值渠道</div>
        <v-list density="compact" @click:select="selectChannel">
          <v-list-item
            v-for="(item, i) in channel"
            :key="i"
            :value="item"
            color="primary"
          >
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-sheet>
    </div>
  </div>
  <v-btn
    block=""
    color="#445CED"
    class="text-white rounded-0 py-6 text-body-1 fixed"
    style="bottom: 0px"
    @click="submitJump"
    >充值</v-btn
  >
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { jump } from "@/utils/constName";
import { store } from "@/store";

const router = useRouter();

const money = ref(100);
let info = reactive({
  title: "请选择",
  icon: "",
  slug: "",
  min: 0,
  amount: 0,
});
const channel = ref([]);

onMounted(() => {
  store.dispatch("topUp/getList").then(() => {
    if (store.state.topUp.list[0]) {
      channel.value = store.state.topUp.list;
    } else {
      maintenance();
    }
  });
});

const selectChannel = (id, value, path) => {
  info = id.id;
};

const submitJump = () => {
  if (money.value < info.min) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "金额不能低于最低金额",
    });
    return;
  }
  if (info.slug == "") {
    maintenance();
    return;
  }
  store
    .dispatch("topUp/subPut", {
      name: "",
      slug: info.slug,
      amount: money.value,
    })
    .then((d) => {
      if (d.type == 0) {
        window.open(d.url, "_blank");
        return;
      }
      if (d.type == 1) {
        goRouter("/TopUp/unionpay", d.url);
      }
    });
};

const goRouter = (path, order_id = "") => {
  router.push({
    path,
    query: {
      orderid: order_id,
    },
  });
};

const maintenance = () => {
  store.dispatch("snackbar/warning", {
    active: true,
    body: "请选择充值渠道或联系在线客服！",
  });
};
</script>
<style scoped>
.topup-bg {
  background-image: url("@/assets/static/topup_bg.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
}
input.amount::placeholder {
  color: white;
}
.amount {
  line-height: 22px;
  border: none;
  outline: none;
  font-size: 22px;
  color: white;
}
.money-bg {
  background-color: #f7f7f7;
}
.money-bg-active {
  background-color: #445ced;
  color: white;
}
</style>
