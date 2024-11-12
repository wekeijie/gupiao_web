<template>
  <v-sheet class="py-2 rounded-lg">
    <div>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
        class="tab-color"
        selected-class="select-active-color"
      >
        <v-tab :value="1" min-width="75">持仓</v-tab>
        <v-tab :value="2" min-width="75">委托</v-tab>
        <v-tab :value="3" min-width="75">成交</v-tab>
        <v-tab :value="4" min-width="75">自选</v-tab>
      </v-tabs>
      <div>
        <div v-show="tab == 1">
          <div class="px-3 bg-grey-lighten-3 mt-2 mb-2">
            <v-row
              class="ma-0 pa-0 py-2 font-weight-bold text-body-2 text-center text-grey-darken-2"
            >
              <v-col cols="3" class="pa-0"> 市值 </v-col>
              <v-col cols="3" class="pa-0"> 盈亏 </v-col>
              <v-col cols="3" class="pa-0"> 持仓/可用 </v-col>
              <v-col cols="3" class="pa-0"> 成本/现价 </v-col>
            </v-row>
          </div>
          <div>
            <v-row class="ma-0 pa-0 text-center px-3 text-body-2 py-2">
              <v-col cols="3" class="pa-0"> 股票名称 </v-col>
              <v-col cols="3" class="pa-0"> -15 </v-col>
              <v-col cols="3" class="pa-0"> 300 </v-col>
              <v-col cols="3" class="pa-0"> 3.45 </v-col>
              <v-col cols="3" class="pa-0"> 1015.00 </v-col>
              <v-col cols="3" class="pa-0"> -1.43% </v-col>
              <v-col cols="3" class="pa-0"> 0 </v-col>
              <v-col cols="3" class="pa-0"> 3.5 </v-col>
            </v-row>
            <v-divider></v-divider>
          </div>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
<script setup>
import { ref } from "vue";

const tab = ref();
</script>
