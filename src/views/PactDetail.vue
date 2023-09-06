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
                    <div class="new-box" v-if="i == 0">
                        <table>
                            <tbody>
                                <tr class="tr-list">
                                    <th style="text-align: left;">名称/代码</th>
                                    <th style="text-align: right;">现价/涨幅</th>
                                    <th style="text-align: right;">成本/盈亏</th>
                                    <th style="text-align: right;">持仓/可用</th>
                                </tr>
                                <tr class="tr-list" v-for="item in 10" :key="item">
                                    <td class="tr-one">
                                        <h4>平安银行</h4>
                                        <p><span>sz</span>0000001</p>
                                    </td>
                                    <td class="tr-two">
                                        <div class="tr-two-number">48.87/ <span class="roseColor">1.42%</span></div>
                                    </td>
                                    <td class="tr-three" style="text-align: right;">
                                        <div class="tr-two-number">48.87/ <span class="roseColor">1.42%</span></div>
                                    </td>
                                    <td class="tr-three" style="text-align: right;">
                                        <p>100/100</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>








                    </div>
                    <div class="new-box" v-if="i == 1">

                        <div class="head-bottom">
                            <div class="table-box flexStart">
                                <p :class="mouneyIndex == 0 ? 'active-tab' : ''" @click="mouneyIndex = 0">扩大配资</p>
                                <p :class="mouneyIndex == 1 ? 'active-tab' : ''" @click="mouneyIndex = 1">增加保证金</p>
                            </div>
                        </div>
                        <div class="" v-if="mouneyIndex == 0">



                            <table>
                                <tbody>
                                    <tr class="tr-list">
                                        <th style="text-align: left;">序号</th>
                                        <th style="text-align: right;">扩大金额</th>
                                        <th style="text-align: right;">操作时间</th>
                                    </tr>
                                    <tr class="tr-list" v-for="item in 10" :key="item">
                                        <td class="tr-one">
                                            <h4>平安银行</h4>
                                            <p><span>sz</span>0000001</p>
                                        </td>
                                        <td class="tr-two">
                                            <div class="tr-two-number">48.87/ <span>买入</span></div>
                                        </td>
                                        <td class="tr-three" style="text-align: right;">
                                            <div class="tr-two-number">48.87/ 1.42%</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                        <div class="" v-if="mouneyIndex == 1">





                            <table>
                                <tbody>
                                    <tr class="tr-list">
                                        <th style="text-align: left;">序号</th>
                                        <th style="text-align: right;">追加金额</th>
                                        <th style="text-align: right;">操作时间</th>
                                    </tr>
                                    <tr class="tr-list" v-for="item in 10" :key="item">
                                        <td class="tr-one">
                                            <h4>平安银行</h4>
                                            <p><span>sz</span>0000001</p>
                                        </td>
                                        <td class="tr-two">
                                            <div class="tr-two-number">48.87/ <span>买入</span></div>
                                        </td>
                                        <td class="tr-three" style="text-align: right;">
                                            <div class="tr-two-number">48.87/ 1.42%</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>






                    </div>
                    <div class="new-box" v-if="i == 2">




                        <table>
                            <tbody>
                                <tr class="tr-list">
                                    <th style="text-align: left;">名称/代码</th>
                                    <th style="text-align: right;">现价/买卖</th>
                                    <th style="text-align: right;">数量/总价</th>
                                    <th style="text-align: right;">成交时间</th>
                                </tr>
                                <tr class="tr-list" v-for="item in 10" :key="item">
                                    <td class="tr-one">
                                        <h4>平安银行</h4>
                                        <p><span>sz</span>0000001</p>
                                    </td>
                                    <td class="tr-two">
                                        <div class="tr-two-number">48.87/ <span>买入</span></div>
                                    </td>
                                    <td class="tr-three" style="text-align: right;">
                                        <div class="tr-two-number">48.87/ 1.42%</div>
                                    </td>
                                    <td class="tr-three" style="text-align: right;">
                                        <p>100/100</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>








                    </div>
                    <div class="new-box" v-if="i == 3">




                        <table>
                            <tbody>
                                <tr class="tr-list">
                                    <th style="text-align: left;">委托股票</th>
                                    <th style="text-align: right;">委托价/类型</th>
                                    <th style="text-align: right;">已成/委托</th>
                                    <th style="text-align: right;">状态</th>
                                </tr>
                                <tr class="tr-list" v-for="item in 10" :key="item">
                                    <td class="tr-one">
                                        <h4>平安银行</h4>
                                        <p><span>sz</span>0000001</p>
                                    </td>
                                    <td class="tr-two">
                                        <div class="tr-two-number">48.87/ <span>买入</span></div>
                                    </td>
                                    <td class="tr-three" style="text-align: right;">
                                        <div class="tr-two-number">48.87/ 1.42%</div>
                                    </td>
                                    <td class="tr-three" style="text-align: right;">
                                        <p>已成交</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>





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
    min-height: 300px;
    // background-color: #f6f6f6;
    overflow-y: scroll;

}

.new-box {
    min-height: 300px;
    padding: 0 10px;
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







table {
    width: 100%;
    padding: 10px 10px 90px 10px;

    .tr-list {
        padding: 6px 0;
        border-bottom: solid 0.5px #f4f5f6;
        display: flex;
        align-items: center;
    }

    .tr-one {
        h4 {
            font-size: 12px;
            letter-spacing: 0.5px;
            color: #000;
        }

        p {
            font-size: 12px;
            border-radius: 2px;
            color: #8f8f94;
        }

        span {
            background-color: #fb5c39;
            padding: 0px 4px;
            font-size: 8px;
            color: #fff;
        }
    }

    .tr-two {
        text-align: center;

        .tr-two-number {
            font-size: 13px;
            color: #000000;
        }

        p {
            color: #8f8f94;
            font-size: 10px;
        }
    }

    .tr-three {
        text-align: right;

        span {
            font-size: 12px;
            font-size: 12px;
            color: red;
        }
    }

    // span {
    //     color: rgb(230, 5, 5);
    //     margin-left: 3px;
    // }

    th {
        width: 33.3%;
        color: #8f8f94;
        font-size: 12px;
        line-height: 20px;
    }

    td {
        width: 33%;
        font-size: 12px;
    }
}
</style>
  