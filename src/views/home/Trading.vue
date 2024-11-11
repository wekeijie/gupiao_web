<template>
  <div class="bg-color min-height">
    <page-header>
      <template v-slot:headerCenter>交易</template>
      <template v-slot:headerRight>
        <img
          src="../../assets/img/refresh.png"
          alt=""
          class="refresh-data"
          @click="reloadPage"
        />
      </template>
    </page-header>
    <div class="pt-3 px-3">
      <SelectContract />
    </div>
    <div class="bg-white mt-3">
      <v-tabs
        v-model="tab"
        align-tabs="start"
        color="deep-purple-accent-4"
        class="tab-color"
        selected-class="select-active-color"
      >
        <v-tab :value="1" min-width="75">买入</v-tab>
        <v-tab :value="2" min-width="75">卖出</v-tab>
        <v-tab :value="3" min-width="75">撤单</v-tab>
        <v-tab :value="4" min-width="75">持仓</v-tab>
        <v-tab :value="5" min-width="75">查询</v-tab>
      </v-tabs>
    </div>
    <div class="px-3 mt-3">
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="1">
          <v-sheet class="py-2 px-2 rounded-lg">
            <v-row class="ma-0 pa-0">
              <v-col class="pa-0" cols="8">
                <v-text-field
                  variant="outlined"
                  density="compact"
                  hide-details
                  placeholder="股票代码/简拼"
                  class="symbol-code"
                ></v-text-field>
              </v-col>
              <v-col cols="4" class="pa-0"> 123 </v-col>
            </v-row>
          </v-sheet>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "../../components/topWrap.vue";
import SelectContract from "@/components/contract/Index.vue";
import { ref } from "vue";

const tab = ref();
</script>
<style>
.refresh-data {
  width: 22px;
  margin-right: 20px;
}
.tab-color {
  color: #2d2d2d !important;
}
.select-active-color {
  color: #445ced !important;
}
.symbol-code input {
  text-align: center;
}
.symbol-code input::placeholder {
  text-align: center; /* 让 placeholder 居中 */
}
</style>
