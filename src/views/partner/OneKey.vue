<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>一键跟单</template>
      <template v-slot:headerRight>
        <p @click="goRouter('/FollowList')">跟单记录</p>
      </template>
    </page-header>
    <v-divider :thickness="1"></v-divider>
    <div class="beginner-box">
      <div class="pcontent-title">
        明星投资者：{{ store.state.copyTrade.one.name }}
      </div>
      <div class="pcontent-info flexBetween">
        <p>最低跟单金额:{{ now_data.min }}</p>
        <p>最高跟单金额:{{ now_data.max }}</p>
      </div>
      <div class="pcontent-info flexBetween">
        <p>跟单周期:{{ now_data.title }}</p>
        <p>老师佣金:{{ now_data.commission + "%" }}</p>
      </div>
      <div class="pcontent-input-title">
        最低跟单金额(<span>必须是100的倍数</span>）
      </div>

      <v-text-field
        v-model="amount"
        variant="underlined"
        single-line
        required
        clearable
        hide-details
        label="请输入最低跟单金额(必须是100的倍数)"
        solo
      ></v-text-field>
      <div class="tips">
        <h3>跟单描述:</h3>
        <p>
          一键跟单统一性强，便于操盘，分析师会在机构通道优先进场，一键跟单期内无需任何操作，跟随操作即可，解放双手，避免忘记跟单，每日盈利自动复投
        </p>
      </div>

      <div class="multipleList-title">申请周期</div>

      <div class="multipleList-item flexBetween">
        <div
          class="multiple-item"
          v-for="(item, key) in store.state.copyTrade.one.list"
          :key="item.id"
          :class="selectIndex == key ? 'item-active' : ''"
          @click="selectList(key)"
        >
          <p class="multiple-item1">{{ item.title }}</p>
          <p class="multiple-item2">
            <span>{{ item.min }}</span> ~<span>{{ item.max }}</span>
          </p>
        </div>
      </div>

      <v-btn block color="#fa3534" @click="sub">一键跟单</v-btn>

      <div class="desc-title2 flexStart">
        <img src="../../assets/img/partner/left.png" alt="" />
        <span>一键跟单说明</span>
      </div>

      <v-table class="grade-list-one">
        <thead>
          <tr>
            <th class="text-left">资金门槛</th>
            <th class="text-left">交易周期</th>
            <th class="text-left">老师佣金</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in store.state.copyTrade.one.list" :key="item.id">
            <td class="">{{ item.min + "-" + item.max }}</td>
            <td class="list-red">{{ item.title }}</td>
            <td class="list-red">{{ item.commission + "%" }}</td>
          </tr>
        </tbody>
      </v-table>
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
const selectIndex = ref(0);
const amount = ref();
const now_data = ref({
  min: 0,
  max: 0,
  title: "",
  commission: 0,
});

onMounted(() => {
  if ($route.query.type) {
    store.dispatch("copyTrade/getOne", $route.query.type).then(() => {
      selectList(0);
    });
  }
});

const sub = () => {
  if (amount.value == 100 || amount.value % 100 === 0) {
    store
      .dispatch("copyTrade/apply", {
        amount: amount.value,
        partner_trading_id: now_data.value.id,
        type: "list",
      })
      .then(() => {
        store.dispatch("snackbar/success", {
          active: true,
          body: "提交成功",
        });
        goRouter("/FollowList");
      });
  } else {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "金额必须是100的倍数",
    });
    return;
  }
};

const selectList = (key) => {
  selectIndex.value = key;
  now_data.value = store.state.copyTrade.one.list[selectIndex.value];
};

const goRouter = (path) => {
  $router.push(path);
};
</script>
<style lang="scss" scoped>
::v-deep .v-btn__content {
  color: #fff !important;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}

.grade-list-one {
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
    background-color: #dd5054;
    color: #fff !important;
  }

  tr {
    background-color: #ffe4e1;
  }

  td {
    text-align: center;
  }
}

.grade-list-one {
  .v-table {
  }

  th {
    width: 33.3%;
  }

  tr {
  }

  td {
    height: 46px !important;
  }
}

.beginner-box {
  padding: 10px;
}

.pcontent-title {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.pcontent-info {
  line-height: 25px;
  font-size: 0.8rem;
  font-weight: 500;
}

.pcontent-input-title {
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 10px;

  span {
    font-size: 12px;
    color: #dd5054;
  }
}

.tips {
  border: 1px solid #fab6b6;
  margin-top: 7px;
  font-size: 0.6rem;
  background-color: #fef0f0;
  padding: 8px 15px;
  border-radius: 4px;

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #303133;
  }

  p {
    font-size: 0.7rem;
    text-align: left;
    color: #606266;
  }
}

.multipleList-title {
  margin: 20px 0 10px;
  line-height: 25px;
  align-items: center;
  font-size: 0.9rem;
  color: #000;
  font-family: PingFang SC;
  font-weight: 500;
}

.multipleList-item {
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.multiple-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  width: 105px;
  height: 80px;
  background: #fff;
  color: #333;
  border: 0.5px solid #ebebeb;
  border-radius: 10px;
  margin: 6px 0;

  .multiple-item1 {
    text-align: center;
    color: #333;
    font-size: 1.2rem;

    span {
      font-size: 0.9rem;
    }
  }

  .multiple-item2 {
    display: block;
    margin-top: 5px;
    font-size: 0.8px;
    color: grey;
    text-align: center;
  }
}

.item-active {
  background-color: #dd5054 !important;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .multiple-item1 {
    color: #fff;
  }

  .multiple-item2 {
    color: #fff;
  }
}

.desc-title2 {
  margin: 20px 0;

  img {
    width: 5px;
  }

  span {
    margin-left: 5px;
    font-size: 0.9rem;
    font-weight: 700;
  }
}
</style>
