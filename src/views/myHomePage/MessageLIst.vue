<template>
    <div class="message-box">
        <page-header>
            <template v-slot:headerCenter>消息中心</template>
            <template v-slot:headerRight><span class="all-reading">全部已读</span></template>
        </page-header>
        <div class="tab-box">
            <v-tabs v-model="model">
                <v-tab @click="model = 0">系统消息</v-tab>
                <v-tab @click="model = 1">站内信息</v-tab>
            </v-tabs>
            <v-carousel :show-arrows="false" hide-delimiters v-model="model" height="auto">

                <!-- height="auto" -->
                <v-carousel-item v-for="(slide, i) in 2" :key="i">
                    <div class="new-box" v-if="i == 0">
                        <div v-for="item in 5" :key="item">


                            <p class="message-time">2023-08-25 15:39:40</p>
                            <div class="message-cont-box">
                                <div class="flexBetween list-title">
                                    <p>金帝股份中签缴款</p>
                                    <span :class="1 == 1 ? 'roseColor' : 'blueColor'">{{ 1 == 1 ? '未读' : '已读' }}</span>
                                </div>
                                <p class="list-cont">
                                    【金帝股份中签缴款】金帝股份发布首次公开发行股票网上申购摇号中签结果。投资者根据网上中签结果公告确认中签后须足额缴纳认购款。签结果。投资者根据网上中签结果公告确认中签签结果。投资者根据网上中签结果公告确认中签
                                </p>
                                <div class="flexBetween list-more" @click="goRouter('/MessageDetail')">
                                    <span>点击查看详情</span>
                                    <img src="../../assets/img/right.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="new-box" v-if="i == 1">
                        <div v-for="item in 5" :key="item">
                            <p class="message-time">2023-08-25 15:39:40</p>
                            <div class="message-cont-box">
                                <div class="flexBetween list-title">
                                    <p>金帝股份中签缴款</p>
                                    <span :class="1 == 2 ? 'roseColor' : 'blueColor'">{{ 1 == 2 ? '未读' : '已读' }}</span>
                                </div>
                                <p class="list-cont">
                                    【金帝股份中签缴款】金帝股份发布首次公开发行股票网上申购摇号中签结果。投资者根据网上中签结果公告确认中签后须足额缴纳认购款。签结果。投资者根据网上中签结果公告确认中签签结果。投资者根据网上中签结果公告确认中签
                                </p>
                                <div class="flexBetween list-more" @click="goRouter('/MessageDetail')">
                                    <span>点击查看详情</span>
                                    <img src="../../assets/img/right.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </v-carousel-item>
            </v-carousel>

        </div>
        <p class="padd-bot"></p>

    </div>
</template>
  
<script setup>

import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"


import PageHeader from '../../components/topWrap.vue'
const model = ref(0)
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const isUp = ref(true)
watch(model, (newVal, oldVal) => {
    console.log(newVal, oldVal, 'newVal,oldVal')
}
)

const goRouter = (path) => {
    $router.push(path)
}

</script>
<style scoped lang="scss">
.new-box {
    padding: 10px 3px;
    text-align: center;

    .message-time {
        color: #929292;
        line-height: 34px;
        font-size: 8px;
        padding: 12p 0;
    }

    .list-title {
        padding: 0 0 8px 0;

        p {
            margin-left: 12px;
            letter-spacing: 0.5px;
            word-wrap: break-word;
            word-break: normal;
            line-height: 21px;
            font-size: 15px;
            color: #333;

        }

        span {
            font-size: 12px;
        }
    }

    .list-cont {
        font-size: 12px;
        color: #8f8f94;
        width: 95%;
        margin-left: 12px;
        margin-right: 12px;
        line-height: 21px;
        text-indent: 21px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-align: left;
    }

    .list-more {
        border-top: solid 0.5px #fff;

        span {
            line-height: 34px;
            display: flex;
            flex-direction: row;
            font-size: 12px;
            color: #b2b2b2;
            letter-spacing: 0.5px;
        }

        img {
            width: 8px;
        }
    }

    .message-cont-box {
        background-color: #f7f7f7;
        padding: 10px;
        border-radius: 8px;
        color: #929292;
    }
}

.all-reading {
    color: rgb(0, 0, 0);
    font-size: 11px;
    font-weight: normal;
}

.message-box {
    padding-bottom: 30px;
}

.tab-box {
    padding: 10px;
}

.v-slide-group__container {
    .v-slide-group-item--active {
        line-height: 25px;
        font-size: 12px;
        z-index: 3;
        font-weight: bold;
        color: rgb(48, 48, 48);

        .v-tab__slider {
            width: 10px;
            align-items: center;
        }
    }

    .v-slide-group-item--active::after {
        .v-btn__overlay {
            color: red !important;
        }
    }
}

.v-tab--selected::after {
    color: red !important;
}

.v-btn {
    border-color: red($color: red);
    margin: 0px 0px;
    font-size: 12px;
    z-index: 3;
    font-weight: normal;
    color: rgb(199, 199, 199);
}

// .v-tab--selected{

// }
</style>
  