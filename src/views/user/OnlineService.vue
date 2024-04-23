<template>
  <div class="bg-color ui-min-height">
    <page-header>
      <template v-slot:headerCenter>客服服务</template>
    </page-header>
    <div class="px-2 mt-4">
      <v-sheet
        class="bg-white rounded-lg list-text-color mb-3"
        v-for="(item, key) in links"
        :key="key"
      >
        <v-row class="ma-0 pa-0">
          <v-col cols="2" class="text-center">
            <v-icon>mdi-at</v-icon>
          </v-col>
          <v-col
            class="text-body-1 pl-0"
            cols="8"
            v-if="item.type == 'url'"
            @click="onOpenLink(item.url)"
            >{{ item.title }}</v-col
          >
          <v-col class="text-body-1 pl-0" cols="4" v-if="item.type == 'text'">{{
            item.title
          }}</v-col>
          <v-col
            cols="2"
            v-if="item.type == 'url'"
            @click="onOpenLink(item.url)"
          >
            <v-icon size="large" color="#8E8E8E">mdi-chevron-right</v-icon>
          </v-col>
          <v-col
            class="text-body-1 pl-0 text-right pr-8"
            cols="6"
            v-if="item.type == 'text'"
            >{{ item.url }}</v-col
          >
        </v-row>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { store } from "@/store";
import { onMounted, ref } from "vue";

const links = ref([]);

onMounted(() => {
  store.dispatch("user/getKefu").then((d) => {
    links.value = d;
  });
});

const onOpenLink = (url) => {
  window.open(url, "_blank");
};
</script>
