<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>资金明细</template>
        </page-header>
        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>

        <div class="flexBetween screen-box">
            <div @click="isApply = true"><span>全部交易类型</span> <img src="../../assets/img/downPac.png" alt=""></div>
            <div><span>2023-08</span> <img src="../../assets/img/downPac.png" alt=""></div>
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
            <v-list density="compact">
                <div class="flexBetween sheet-top">
                    <div class="sheet-close" @click="isApply = false">取消</div>
                    <p class="sheet-sure" @click="isApply = false">完成</p>
                </div>
                <v-divider></v-divider>
                <div class="list-cont-box">
                    <v-list-item color="primary" :value="tile" v-for="tile in 15" :key="tile.title">
                        <div class=" type-list">
                            <h3>代理返佣</h3>
                        </div>
                    </v-list-item>
                </div>
            </v-list>
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
const selectIndex = ref(1)

const goRouter = (path) => {
    $router.push(path)
}

</script>
<style lang="scss" scoped>
.v-bottom-sheet {
    .sheet-top {
        padding: 1px 13px 1px 13px;
        font-size: 17px;
        line-height: 25px;
        // border-bottom: 1px solid #000;

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
        padding: 0 25px 0 10px;
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
  