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
      <SelectContract
        :contract_id="contract_id"
        @update:modelValue="updateOrderId"
      />
    </div>
    <div class="bg-white mt-3 px-3">
      <v-tabs
        v-model="tab"
        align-tabs="start"
        color="deep-purple-accent-4"
        class="tab-color"
        selected-class="select-active-color"
      >
        <v-tab :value="1" min-width="70">买入</v-tab>
        <v-tab :value="2" min-width="70">卖出</v-tab>
        <v-tab :value="3" min-width="70">撤单</v-tab>
        <v-tab :value="4" min-width="70">持仓</v-tab>
        <v-tab :value="5" min-width="70">查询</v-tab>
      </v-tabs>
    </div>
    <div class="px-3 mt-3">
      <v-sheet class="py-4 px-2 rounded-lg" v-show="tab == 1">
        <v-row class="ma-0 pa-0">
          <v-col class="pa-0" cols="7">
            <SelectSymbol />
            <v-text-field
              variant="outlined"
              append-inner-icon="mdi-plus"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              class="mt-3 symbol-code"
              v-model="amount"
            ></v-text-field>
            <div class="d-flex text-body-2 mt-2">
              <div class="w-50">涨停 <span>12.71</span></div>
              <div class="w-50 text-right">跌停 <span>10.40</span></div>
            </div>
            <v-text-field
              variant="outlined"
              append-inner-icon="mdi-plus"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              class="mt-3 symbol-code"
              v-model="amount"
            ></v-text-field>
            <v-row class="ma-0 pa-0 mt-2 text-body-2">
              <v-col class="pa-0 pr-1" cols="3">
                <div
                  class="w-100 py-1 bg-grey-lighten-2 text-center rounded number-active-color"
                >
                  全仓
                </div>
              </v-col>
              <v-col class="pa-0" cols="3">
                <div class="w-100 py-1 bg-grey-lighten-2 text-center rounded">
                  1/2
                </div>
              </v-col>
              <v-col class="pa-0 pl-1" cols="3">
                <div class="w-100 py-1 bg-grey-lighten-2 text-center rounded">
                  1/3
                </div>
              </v-col>
              <v-col class="pa-0 pl-1" cols="3">
                <div class="w-100 py-1 bg-grey-lighten-2 text-center rounded">
                  1/4
                </div>
              </v-col>
            </v-row>
            <div class="d-flex text-body-2 mt-2">
              <div class="w-50">交易额 <span class="text-red">12.71</span></div>
              <div class="w-50 text-right">
                可买股数 <span class="text-green">10.40</span>
              </div>
            </div>
            <v-btn color="red" block="" class="mt-4" rounded="lg">买入</v-btn>
          </v-col>
          <v-col cols="5" class="pa-0 pl-1">
            <div class="border-sm py-1">
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-divider class="mt-2 mb-1"></v-divider>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet class="py-4 px-2 rounded-lg" v-show="tab == 2">
        <v-row class="ma-0 pa-0">
          <v-col class="pa-0" cols="7">
            <SelectSymbol />
            <v-text-field
              variant="outlined"
              append-inner-icon="mdi-plus"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              class="mt-3 symbol-code"
              v-model="amount"
            ></v-text-field>
            <div class="d-flex text-body-2 mt-2">
              <div class="w-50">涨停 <span>12.71</span></div>
              <div class="w-50 text-right">跌停 <span>10.40</span></div>
            </div>
            <v-text-field
              variant="outlined"
              append-inner-icon="mdi-plus"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-minus"
              class="mt-3 symbol-code"
              v-model="amount"
            ></v-text-field>
            <v-row class="ma-0 pa-0 mt-2 text-body-2">
              <v-col class="pa-0 pr-1" cols="3">
                <div
                  class="w-100 py-1 bg-grey-lighten-2 text-center rounded number-active-color"
                >
                  全仓
                </div>
              </v-col>
              <v-col class="pa-0" cols="3">
                <div class="w-100 py-1 bg-grey-lighten-2 text-center rounded">
                  1/2
                </div>
              </v-col>
              <v-col class="pa-0 pl-1" cols="3">
                <div class="w-100 py-1 bg-grey-lighten-2 text-center rounded">
                  1/3
                </div>
              </v-col>
              <v-col class="pa-0 pl-1" cols="3">
                <div class="w-100 py-1 bg-grey-lighten-2 text-center rounded">
                  1/4
                </div>
              </v-col>
            </v-row>
            <div class="d-flex text-body-2 mt-2">
              <div class="w-50">交易额 <span class="text-red">12.71</span></div>
              <div class="w-50 text-right">
                可买股数 <span class="text-green">10.40</span>
              </div>
            </div>
            <v-btn color="red" block="" class="mt-4" rounded="lg">卖出</v-btn>
          </v-col>
          <v-col cols="5" class="pa-0 pl-1">
            <div class="border-sm py-1">
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">卖5</v-col>
                <v-col cols="4" class="pa-0 text-green">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-divider class="mt-2 mb-1"></v-divider>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-center text-body-2 py-1">
                <v-col cols="4" class="pa-0">买1</v-col>
                <v-col cols="4" class="pa-0 text-red">11.7</v-col>
                <v-col cols="4" class="pa-0">5479</v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <div class="px-3 mt-3">
      <TabSelect />
    </div>
  </div>
</template>

<script setup>
import PageHeader from "../../components/topWrap.vue";
import SelectContract from "@/components/contract/Index.vue";
import SelectSymbol from "@/components/tradeSearch/Index.vue";
import TabSelect from "@/components/tradeBottom/Index.vue";
import { ref, onMounted } from "vue";
import { store } from "@/store";
import { useRoute } from "vue-router";

const route = useRoute();
const tab = ref(1);
const code = ref();
const amount = ref(0);
const contract_id = ref("");
onMounted(() => {
  if (route.query.contract_order_id) {
    console.log(1);
    contract_id.value = route.query.contract_order_id;
  }
});

const updateOrderId = (order_id) => {
  console.log("order_id", order_id);
};
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
.number-active-color {
  background-color: #ffcdce !important;
  border: 1 solid red !important;
  color: #e84346 !important;
}
</style>
