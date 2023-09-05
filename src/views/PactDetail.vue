<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>合约详情</template>
        </page-header>
        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>


        <div class="pact-title">

            <p>按天配资2倍</p>

            <p>[1231231313123331232]</p>

        </div>
        <div class="flexAroud amount-cont-box">

            <div class="amount-list">
                <span>1500</span>
                <p>操盘资金</p>
            </div>
            <div class="amount-list">
                <span>1500</span>
                <p>配资金额</p>
            </div>
            <div class="amount-list">
                <span>1500</span>
                <p>触发警戒</p>
            </div>
            <div class="amount-list">
                <span>1500</span>
                <p>触发止损</p>
            </div>



            <div class="amount-list">
                <span>1500</span>
                <p>可用余额</p>
            </div>
            <div class="amount-list">
                <span>1500</span>
                <p>冻结资金</p>
            </div>
            <div class="amount-list">
                <span>1500</span>
                <p>证劵市值</p>
            </div>
            <div class="amount-list">
                <span>1500</span>
                <p>合约市值</p>
            </div>

            <div class="amount-list">
                <span>1500</span>
                <p>扩大配资</p>
            </div>
            <div class="amount-list">
                <span>1500</span>
                <p>追保金额</p>
            </div>
            <div class="amount-list">
                <span>1500</span>
                <p>提盈金额</p>
            </div>
            <div class="amount-list">
                <span>1500</span>
                <p>合约盈亏</p>
            </div>

        </div>




        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>

        <div class="head-bottom">
            <div class="table-box flexStart">
                <p :class="model == 0 ? 'active-tab' : ''" @click="model = 0">合约持仓</p>
                <p :class="model == 1 ? 'active-tab' : ''" @click="model = 1">资金明细</p>
                <p :class="model == 2 ? 'active-tab' : ''" @click="model = 2">成交明细</p>
                <p :class="model == 3 ? 'active-tab' : ''" @click="model = 3">我的委托</p>
            </div>

        </div>


        <div class="coupon-box">
            <v-carousel :show-arrows="false" hide-delimiters v-model="model" height="auto">
                <v-carousel-item v-for="(slide, i) in 4" :key="i">
                    <div class="new-box" v-if="i == 0">0
                    </div>
                    <div class="new-box" v-if="i == 1">

                        <div class="head-bottom">
                            <div class="table-box flexStart">
                                <p :class="mouneyIndex == 0 ? 'active-tab' : ''" @click="mouneyIndex = 0">扩大配资</p>
                                <p :class="mouneyIndex == 1 ? 'active-tab' : ''" @click="mouneyIndex = 1">增加保证金</p>
                            </div>

                        </div>




                    </div>
                    <div class="new-box" v-if="i == 2">2
                    </div>
                    <div class="new-box" v-if="i == 3">3
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>




    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const model = ref(0)
const mouneyIndex = ref(0)




</script>
<style lang="scss" scoped>
.pact-title {
    padding: 10px;
    line-height: 38px;
    font-size: 14px;
    color: #000;
    border-bottom: 2px solid rgb(245, 245, 245);
}

.amount-cont-box {
    flex-wrap: wrap;
    padding: 10px 0;
}

.amount-list {
    width: 25%;
    text-align: center;
    margin: 5px 0;

    span {
        color: #fb5c39;
        font-size: 12px;
        text-align: center;
    }

    p {
        font-size: 12px;
        color: #303133;
        text-align: center;
    }
}





.head-bottom {
    line-height: 40px;
    padding: 0 12px;
    color: #7f829a;
    background-color: #fff;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
}

.table-box {
    p {
        padding: 8px 10px 3px;
        font-size: 14px;
        font-weight: bold;
        color: rgb(199, 199, 199);
        position: relative;
    }

    .active-tab {
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

.coupon-box {
    height: calc(100vh - 105px);
    background-color: #f6f6f6;
    overflow-y: scroll;

}

.new-box {
    min-height: calc(100vh - 125px);
    padding: 10px;
}

.coupon-list {
    height: 136px;
    align-items: center;
    margin: 0px 4px;
    background-image: url('../../assets/img/coupon.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    padding: 17px 30px 0;

}

.waite-box {
    h2 {
        width: 50%;
        font-size: 30px;
        color: #e95b57;

        span {
            font-size: 20px;
        }
    }

    p {
        text-align: right;
        font-size: 13px;
        color: #7f829a;
    }
}
</style>
  