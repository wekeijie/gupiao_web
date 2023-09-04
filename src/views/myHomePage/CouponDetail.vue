<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>利息劵明细</template>
        </page-header>


        <div class="check-type-box">
            <h2>+3.00</h2>
            <p>利息劵ID：2023-08-09 13:30:16</p>
        </div>
        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>
        <div class="check-list-box">

            <div class="flexStart check-list">
                <p>剩余金额</p>
                <span>￥1069.50</span>
            </div>
            <div class="flexStart check-list">
                <p>已用金额</p>
                <span>￥1069.50</span>
            </div>
            <div class="flexStart check-list">
                <p>使用范围</p>
                <span>CB20212313123133131331</span>
            </div>
            <div class="flexStart check-list">
                <p>生效时间</p>
                <span>2023-09-04 19:21313</span>
            </div>

        </div>

        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>
        <div class="user-box">

            <div class="title">使用明细 </div>

            <table>
                <tbody>
                    <tr class="tr-list">
                        <th style="text-align: left;">合约名称</th>
                        <th style="text-align: center;">抵扣金额</th>
                        <th style="text-align: right;">抵扣时间</th>
                    </tr>
                    <tr class="tr-list" v-for="item in 10" :key="item">
                        <td class="tr-one">
                            按天配资2倍
                        </td>
                        <td class="tr-two" style="text-align: center;">
                            0.2
                        </td>
                        <td class="tr-three" style="text-align: right;">
                            2023-08-21 123123
                        </td>
                    </tr>
                </tbody>
            </table>



        </div>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

</script>
<style lang="scss" scoped>
.check-list {
    padding: 13px 0;
    border-bottom: solid 1px #ebecf0;

    p {
        width: 30%;
        font-size: 14px;
        color: #8f8f94;
        letter-spacing: 0.5px;
    }

    span {
        font-size: 14px;
        color: #000;
        font-weight: 500;
    }
}

.check-list-box {
    padding: 0 10px;
}

.check-type-box {
    text-align: center;
    padding: 30px;

    h2 {
        font-size: 35px;
        color: #82848a;
    }

    p {
        font-size: 12px;
        color: #7f829a;
        line-height: 30px;
    }
}

.title {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.5px
}

.user-box {
    padding: 15px 10px;
}





table {
    width: 100%;
    padding: 15px 0px 30px 0px;

    .tr-list {
        padding: 6px 0;
        border-bottom: solid 0.5px #f4f5f6;
        display: flex;
        align-items: center;
    }

    .tr-one {
        p {
            font-size: 13px;
        }

        span {
            color: #8f8f94;
            font-size: 10px;
        }
    }

    .tr-two {
        .tr-two-number {
            font-size: 13px;
            color: #000000;
        }

        p {
            color: #8f8f94;
            font-size: 10px;
        }
    }

    .tr-three {}


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
  