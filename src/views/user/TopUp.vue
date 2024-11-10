<template>
  <page-header>
    <template v-slot:headerCenter>充值</template>
  </page-header>
  <div class="bg-color ui-min-height px-3 pt-4">
    <div class="text-body-1 mb-3 text-grey-darken-1">选择充值方式</div>
    <v-row
      class="ma-0 bg-white rounded-lg mb-2"
      v-for="item in channel"
      :key="item.slug"
      @click="goPayView(item.slug, item.id)"
    >
      <v-col cols="2">
        <img :src="item.icon" class="w-100 rounded-pill" />
      </v-col>
      <v-col cols="10">
        <div class="text-body-1">{{ item.title }}</div>
        <div class="text-caption text-grey-darken-1">
          {{ item.desc }}
        </div>
      </v-col>
    </v-row>
  </div>
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
const channeType = ref();
const name = ref("");

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
  channeType.value = info.type;
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

  if (channeType.value == "manually_type" && name.value == "") {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "请输入付款人姓名",
    });
    return;
  }

  store
    .dispatch("topUp/subPut", {
      name: name.value,
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

const goPayView = (type, id) => {
  if (type == "alipay" || type == "weixin") {
    router.push("/TopUp/weixin?code=" + id);
  }
  if (type == "unionpay") {
    router.push("/TopUp/UnionPay?code=" + id);
  }
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
