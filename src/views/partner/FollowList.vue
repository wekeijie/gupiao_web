<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>跟单记录</template>
        </page-header>

        <div class="follow-cont">
            <div class="table-box flexStart">
                <p :class="model == index ? 'active-tab' : ''" @click="model = index" v-for="item, index in list"
                    :key="index">
                    {{
                        item.name }}</p>
            </div>

            <v-carousel :show-arrows="false" hide-delimiters v-model="model">

                <!-- height="auto" -->
                <v-carousel-item v-for="(slide, i) in list" :key="i">
                    <div class="records-list" v-for="item in 10 " :key="item">
                        <div class="list-infor">

                            <p class="flexBetween"> <span>单号：FL202308082152198355415620 </span> <span class="infor-lv"
                                    v-if="item > 3">普通跟单</span>
                                <span class="infor-okey" v-else>一键跟单</span>
                            </p>
                            <p class="flexBetween"> <span> 投资者：赵国防</span> <span>跟单资金：1222 元</span> </p>
                            <p class="flexBetween"> <span>分成比例：1333%</span> <span>申请时间：2023-08-08 21:52:19</span> </p>
                        </div>
                        <div class="controls-box flexEnd">
                            <v-btn v-if="model == 0" color="#6a5acd">撤销</v-btn>
                            <v-btn color="#dc143c">查看详情</v-btn>
                        </div>

                    </div>

                    <div class="new-box" v-if="model == 1">
                        <no-data class="no-data-cont"></no-data>
                    </div>
                </v-carousel-item>
            </v-carousel>



        </div>

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
const list = ref([
    {
        name: '申请中',
    },
    {
        name: '跟单中',
    },
    {
        name: '已结束',
    },
    {
        name: '已撤销',
    },
    {
        name: '已驳回',
    },
])
</script>
<style lang="scss" scoped>
.infor-okey {
    font-size: 15px;
    font-weight: 700;
    color: #a00;
}

::v-deep .v-btn__content {
    color: #fff !important;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    margin: 0;
    padding: 0;
}

.controls-box {

    padding: 5px;

    .v-btn {
        margin: 0 10px;
    }
}

.follow-cont {
    background-color: #f7f7f7;
}

.records-list {
    margin: 10px 5px;
    background: #fff;
    border-radius: 5px;



}

.list-infor {
    padding: 10px;
    border-bottom: 2px solid #f7f7f7;

    p {
        font-size: 13px;
        font-weight: bolder;
        margin: 2px 0;
    }

    .infor-lv {
        font-size: 15px;
        font-weight: 700;
        color: #cf8a00;
    }
}

.no-data-cont {
    padding-top: 40%;
}

.table-box {
    background: #fff;

    p {
        padding: 8px 10px;
        font-size: 14px;
        z-index: 3;
        font-weight: normal;
        color: rgb(199, 199, 199);
        position: relative;
    }

    .active-tab {
        font-size: 14px;
        z-index: 3;
        font-weight: bold;
        color: rgb(48, 48, 48);
    }

    .active-tab::after {
        position: absolute;
        bottom: 0;
        content: '';
        width: 20px;
        height: 5px;
        border-radius: 100px;
        background-color: rgb(251, 92, 57);
        left: calc(50% - 10px);
    }
}
</style>
  