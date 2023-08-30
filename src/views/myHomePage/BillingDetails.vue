<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>账单详情</template>
        </page-header>


        <div class="check-type-box">
            <h3>跟单成功</h3>
            <h2 :class="1 <= 0 ? 'roseColor' : 'fallColor'">0.00</h2>
            <p>2023-08-09 13:30:16</p>
        </div>
        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>
        <div class="check-list-box">

            <div class="flexBetween check-list">
                <p>变动前余额</p>
                <span>￥1069.50</span>
            </div>
            <div class="flexBetween check-list">
                <p>变动后余额</p>
                <span>￥1069.50</span>
            </div>
            <div class="flexBetween check-list">
                <p>账单编号</p>
                <span>CB20212313123133131331</span>
            </div>
            <div class="flexBetween check-list">
                <p>账单描述</p>
                <span></span>
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

</script>
<style lang="scss" scoped>
.check-list {
    padding: 13px 0;
    border-bottom: solid 1px #ebecf0;

    p {
        font-size: 12px;
        color: #7f829a;
    }

    span {
        font-size: 12px;
        color: #2c2e3a;
    }
}

.check-list-box {
    padding: 0 10px;
}

.check-type-box {
    text-align: center;
    padding: 20px;

    h3 {
        font-size: 15px;
        color: #2c2e3a;
        line-height: 30px;
        font-weight: 400;
    }

    h2 {
        font-size: 30px;
        line-height: 40px;
    }

    p {
        font-size: 12px;
        color: #7f829a;
        line-height: 30px;
    }
}
</style>
  