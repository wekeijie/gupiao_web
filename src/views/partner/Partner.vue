<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>合伙人制度</template>
    </page-header>
    <div class="bg-blue-darken-3 py-6 px-5">
      <v-card class="pt-3">
        <div class="text-h6 text-center">合伙人核定</div>
        <v-card-text>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">团队人数</th>
                <th class="text-left">合伙人等级</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, key) in store.state.copyTrade.partner"
                :key="key"
              >
                <td v-if="key == 0">0 - {{ item.limit }}</td>
                <td v-else-if="key == store.state.copyTrade.partner.length - 1">
                  {{
                    parseInt(store.state.copyTrade.partner[key - 1].limit) +
                    1 +
                    "-"
                  }}
                </td>
                <td v-else>
                  {{
                    formatLimit(
                      store.state.copyTrade.partner[key - 1].limit,
                      item.limit
                    )
                  }}
                </td>
                <td>{{ item.title }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-divider
            class="border-opacity-100 mt-3 mb-3"
            color="info"
          ></v-divider>
          <div class="mt-3 text-caption text-indeent text-grey-darken-1">
            不同团队人数对应不同合伙人等级，团队人数包含由你邀请码注册进来的人，也包含你邀请的人的邀请码再注册进来的人，比如你邀请A,A邀请B,B又邀请C，那么A、B、C都属于你的团队人员。
          </div>
        </v-card-text>
      </v-card>
      <v-card class="mt-10 pt-3">
        <div class="text-h6 text-center">合伙人团队分成</div>
        <v-card-text>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">团队人数</th>
                <th class="text-left">合伙人等级</th>
                <th class="text-left">分成比例</th>
              </tr>
            </thead>
            <tbody class="text-caption">
              <tr
                v-for="(item, key) in store.state.copyTrade.partner"
                :key="key"
              >
                <td v-if="key == 0">0 - {{ item.limit }}</td>
                <td v-else-if="key == store.state.copyTrade.partner.length">
                  {{
                    parseInt(store.state.copyTrade.partner[key - 1].limit) +
                    1 +
                    "-"
                  }}
                </td>
                <td v-else-if="key == store.state.copyTrade.partner.length - 1">
                  {{
                    parseInt(store.state.copyTrade.partner[key - 1].limit) +
                    1 +
                    "-"
                  }}
                </td>
                <td v-else>
                  {{
                    formatLimit(
                      store.state.copyTrade.partner[key - 1].limit,
                      item.limit
                    )
                  }}
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.split + "%" }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-divider
            class="border-opacity-100 mt-3 mb-3"
            color="info"
          ></v-divider>
          <div class="mt-3 text-caption text-indeent text-grey-darken-1">
            不同团队人数对应不同的团队分成比例，团队人数包含由你邀请码注册进来的人，也包含你邀请的人的邀请码再邀请的人，你邀请A,A邀请B,B又邀请C,那么A、B、C都属于您的团队。假设你的团队人数是45人，整个团队所有人当天跟单总收益10万，那么你的团队分成为100000*4.2%=4200元。
          </div>
        </v-card-text>
      </v-card>
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
  if (store.state.copyTrade.partner.length <= 0) {
    store.dispatch("copyTrade/getPartner");
  }
});

const formatLimit = (start, stop) => {
  return parseInt(start) + 1 + "-" + stop;
};
</script>
<style>
.text-indeent {
  text-indent: 2em;
}
</style>
