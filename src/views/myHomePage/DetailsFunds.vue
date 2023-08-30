<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>资金明细</template>
        </page-header>
        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>

        <div class="flexBetween screen-box">
            <div><span>全部交易类型</span> <img src="../../assets/img/downPac.png" alt=""></div>
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

    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

const goRouter = (path) => {
    $router.push(path)
}

</script>
<style lang="scss" scoped>
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
  