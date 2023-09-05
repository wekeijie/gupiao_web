<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>资金明细</template>
        </page-header>
        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>

        <div class="flexBetween screen-box">
            <div @click="isApply = true; istype = false"><span>全部交易类型</span> <img src="../../assets/img/downPac.png" alt="">
            </div>
            <div @click="istype = true; isApply = true"><span>2023-08</span> <img src="../../assets/img/downPac.png" alt="">
            </div>
        </div>
        <v-divider></v-divider>

        <div class="list-box">

            <div v-for="item, index in 10 " :key="item" class="flexBetween order-list" @click="goRouter('/BillingDetails')">
                <div class="flexStart">
                    <img src="../../assets/img/documentary.png" alt="">
                    <div>
                        <h3>跟单结束</h3>
                        <p>2023-08-09 13:30:16</p>
                    </div>
                </div>
                <div class="list-number" :class="index > 3 ? 'roseColor' : 'fallColor'">
                    +500.00
                </div>
            </div>
        </div>



        <v-bottom-sheet v-model="isApply">

            <div class="flexBetween sheet-top">
                <div class="sheet-close" @click="isApply = false">取消</div>
                <p class="sheet-sure" @click="isApply = false">完成</p>
            </div>
            <v-divider></v-divider>
            <div class="list-cont-box" v-if="!istype">
                <v-virtual-scroll :bench="benched" :items="list" height="300" item-height="64" class=" type-list">
                    <v-list :items="listType" item-title="text" item-value="text" :value="selectedBank"></v-list>
                </v-virtual-scroll>
            </div>

            <div class="flexBetween" v-else>
                <v-virtual-scroll :bench="benched" :items="list" height="300" item-height="64">
                    <v-list :items="items" item-title="text" item-value="text" :value="selectedBank"></v-list>
                </v-virtual-scroll>
                <v-virtual-scroll :bench="benched" :items="list" height="300" item-height="64"><v-list :items="items"
                        item-title="text" item-value="text"></v-list>
                </v-virtual-scroll>
            </div>
        </v-bottom-sheet>



    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import { VBottomSheet } from 'vuetify/lib/labs/vBottomSheet/index'
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const isApply = ref(false)
const istype = ref(true) //false 为全部交易， true 为时间

const goRouter = (path) => {
    $router.push(path)
}
const list = ref([
    { text: '00:00', icon: 'mdi-clock' },
])
const listType = ref([
    { text: '全部交易类型', },
    { text: '账户充值', },
    { text: '充值返现', },
    { text: '提现成功', },
    { text: '提现失败', },
    { text: '取消提现', },
    { text: '利息扣除', },
    { text: '保证金扣除', },
    { text: '首充返现', },
])

const items = ref([
    { text: '00:00', },
    { text: '01:00', },
    { text: '02:00', },
    { text: '03:00', },
    { text: '04:00', },
    { text: '05:00', },
    { text: '06:00', },
    { text: '07:00', },
    { text: '08:00', },
    { text: '09:00', },
    { text: '10:00', },
    { text: '11:00', },
    { text: '12:00', },
    { text: '13:00', },
    { text: '14:00', },
    { text: '15:00', },
    { text: '16:00', },
    { text: '17:00', },
    { text: '18:00', },
    { text: '19:00', },
    { text: '20:00', },
    { text: '21:00', },
    { text: '22:00', },
    { text: '23:00', },
    { text: '34:00', },
])
</script>
<style lang="scss" scoped>
.v-bottom-sheet {
    .sheet-top {
        padding: 1px 13px 1px 13px;
        font-size: 17px;
        line-height: 25px;
        border-bottom: 1px solid #e5e5e5;
        background: #fff;

        .sheet-sure {
            font-size: 17px;
            line-height: 45px;
            float: right;
            color: #007aff;
        }

        .sheet-close {
            color: #888;
        }
    }


    .list-cont-box {
        max-height: 350px;
        overflow-y: scroll;
    }

    .type-list {
        width: 100%;
        // padding: 0 25px 0 10px;
        width: 100%;
        text-align: center;

        h3 {
            font-size: 15px;
            color: #2c2e3a;
        }

        .list-select {
            width: 12px;
        }
    }
}







.list-number {
    font-size: 16px;
    font-weight: 500;
}

.order-list {
    padding: 10px 0;
    border-bottom: solid 0.5px #f7f7f7;

    img {
        width: 40px;
        margin-right: 10px;
    }

    h3 {
        font-size: 15px;
        color: #2c2e3a
    }

    p {
        font-size: 12px;
        color: #7f829a;
        margin-top: 3px;
    }
}

.list-box {
    padding: 10px 15px 20px 10px;
}

.screen-box {
    padding: 5px 10px;

    span {
        line-height: 40px;
        align-items: center;
        font-size: 12px;
        color: silver;
        // margin-left: 15px
    }

    img {
        width: 12px;
    }
}
</style>
  