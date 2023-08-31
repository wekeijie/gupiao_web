<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>{{ title }}</template>
        </page-header>


        <div class="table-box flexStart">
            <p :class="model == 0 ? 'active-tab' : ''" @click="model = 0">待审核</p>
            <p :class="model == 1 ? 'active-tab' : ''" @click="model = 1">{{ title == '提现审核记录' ? '待出款' : '待支付' }}</p>
            <p :class="model == 2 ? 'active-tab' : ''" @click="model = 2">审核通过</p>
            <p :class="model == 3 ? 'active-tab' : ''" @click="model = 3">审核失败</p>
        </div>


        <v-carousel :show-arrows="false" hide-delimiters v-model="model" height="auto">

            <!-- height="auto" -->
            <v-carousel-item v-for="(slide, i) in 4" :key="i">
                <div class="new-box" v-if="i == 0">
                </div>
                <div class="new-box" v-if="i == 1">
                </div>

                <div class="new-box" v-if="i == 2">
                </div>
                <div class="new-box" v-if="i == 3">
                </div>
                <div class="new-box" v-if="dataList.length <= 0 && i != 2">
                    <no-data class="no-data-cont"></no-data>
                </div>
            </v-carousel-item>
        </v-carousel>

    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import NoData from '../../components/noData.vue'
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

const model = ref(0)
const title = ref()
const dataList = ref([])
onMounted(() => {
    title.value = $route.query.title || '记录列表'
})

</script>
<style lang="scss" scoped>
.no-data-cont {
    padding-top: 40%;
}

.table-box {
    p {
        margin: 3px;
        padding: 8px 10px;
        color: rgb(199, 199, 199);
        font-size: 17px;
        z-index: 3;
        font-weight: bold;
        position: relative;
    }

    .active-tab {
        color: rgb(48, 48, 48);
        font-size: 17px;
        z-index: 3;
        font-weight: bold;
        color: rgb(48, 48, 48);
    }

    .active-tab::after {
        position: absolute;
        bottom: 0;
        content: '';

        width: 20px;
        height: 6px;
        border-radius: 100px;
        background-color: rgb(251, 92, 57);
        left: calc(50% - 10px);
    }
}
</style>
  