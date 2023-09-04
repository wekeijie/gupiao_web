<template>
    <div class="">
        <page-header>
            <template v-slot:headerCenter>利息劵</template>
        </page-header>
        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>
        <div class="head-bottom">
            <div class="table-box flexStart">
                <p :class="model == 0 ? 'active-tab' : ''" @click="model = 0">待使用</p>
                <p :class="model == 1 ? 'active-tab' : ''" @click="model = 1">已使用</p>
            </div>

        </div>
        <div class="coupon-box">
            <v-carousel :show-arrows="false" hide-delimiters v-model="model" height="auto">
                <v-carousel-item v-for="(slide, i) in 2" :key="i">
                    <div class="new-box" v-if="i == 0">
                        <div class="coupon-list" v-for="item in 13" :key="item">
                            <div class="flexBetween waite-box">
                                <h2 class="flexStart"> <span>￥</span> 2.00</h2>
                                <div>
                                    <p>
                                        ID:CP202309041952087781935213
                                    </p>
                                    <p>余额 ￥2.00</p>
                                </div>
                            </div>
                            <div class="flexBetween coupon-detail" @click="goRouter('/CouponDetail')">

                                <p>使用范围: 全平台/全部合约</p><span>查看详情</span>
                            </div>
                        </div>


                    </div>
                    <div class="new-box have-used" v-if="i == 1">
                        <div class="coupon-list" v-for="item in 13" :key="item">
                            <div class="flexBetween waite-box">
                                <h2 class="flexStart"> <span>￥</span> 2.00</h2>
                                <div>
                                    <p>
                                        ID:CP202309041952087781935213
                                    </p>
                                    <p>余额 ￥2.00</p>
                                </div>
                            </div>
                            <div class="flexBetween coupon-detail" @click="goRouter('/CouponDetail')">

                                <p>使用范围: 全平台/全部合约</p><span>查看详情</span>
                            </div>
                        </div>


                    </div>
                </v-carousel-item>
            </v-carousel>


        </div>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

const model = ref(0)

const goRouter = (path) => {
    $router.push(path)
}



</script>
<style lang="scss" scoped>
.head-bottom {
    position: relative;
    top: -20px;
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

.coupon-detail {
    width: 100%;
    line-height: 29px;
    font-size: 13px;
    color: silver;
    letter-spacing: 0.5px;
    background-color: #fef8f1;
    border-radius: 6px;
    padding: 0 10px;
    margin-top: 15px;

    span {
        color: #fe8805;
    }
}

.have-used {
    .coupon-detail {

        background-color: #f5f5fd;
    }

    h2 {
        color: #7f829a;
    }

    span {
        color: #7f829a;
    }
}
</style>
  