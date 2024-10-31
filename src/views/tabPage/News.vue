<template>
  <div class="px-3 pb-2">
    <v-tabs
      center-active
      class="tab-color"
      selected-class="tab-active-color"
      v-model="tab"
      @update:modelValue="updateItems"
    >
      <v-tab value="0">快讯</v-tab>
      <v-tab value="1">新闻</v-tab>
    </v-tabs>
  </div>
  <div class="bg-color ui-min-height pt-3">
    <v-window v-model="tab">
      <v-window-item value="0">
        <div class="bg-white">
          <v-timeline side="end" align="start">
            <v-timeline-item
              v-for="(item, key) in store.state.news.flash_item.list"
              :key="item.time"
              :dot-color="flashStyle(key)"
              size="small"
            >
              <div class="d-flex">
                <strong class="me-4">{{
                  item.create_time.split(" ")[1]
                }}</strong>
                <div class="pr-2">
                  <!-- <strong>New Icon</strong> -->
                  <div class="text-caption">{{ item.rich_text }}</div>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-window-item>

      <v-window-item value="1">
        <div class="bg-white text-body-1">
          <div
            class="px-4 py-4 border-bottom-line-grey"
            v-for="item in store.state.news.list"
            :key="item.id"
            @click="
              jump(router, '/RichText', {
                title: item.title,
                id: item.id,
              })
            "
          >
            <div class="article-title-color">
              {{ item.title }}
            </div>
            <div class="text-right text-body-2 date-color mt-2">
              {{ item.created_at }}
            </div>
          </div>
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { jump } from "@/utils/constName";
import { store } from "@/store";
const router = useRouter();
const tab = ref(0);
let page = ref(1);
const limit = ref(50);

onMounted(() => {
  updateItems();
});

const flashStyle = (key) => {
  if (key % 2 == 0) {
    return "pink";
  } else {
    return "teal-lighten-3";
  }
};

const getList = () => {
  store.dispatch("news/list", { page: page.value, limit: limit.value });
};

const updateItems = () => {
  if (tab.value === 0) {
    if (store.state.news.flash_item.length <= 0) {
      getFlash();
    }
  } else {
    if (store.state.news.list.length <= 0) {
      getList();
    }
  }
};

const getFlash = () => {
  store.dispatch("news/flash");
};
</script>
<style scoped>
.tab-color {
  color: #5b5b5b;
}
.tab-active-color {
  color: #3d55eb;
}
.article-title-color {
  color: #31313e;
}
.date-color {
  color: #979797;
}
</style>
