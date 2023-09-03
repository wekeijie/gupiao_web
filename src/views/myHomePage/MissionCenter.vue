<template>
    <div class="grayBackgroud" style="min-height: 100lvh;">
        <div class="pact-head-box">
            <div class="flexBetween my-top-box">
                <img src="../../assets/img/backWrite.png" @click="$router.go(-1)" />
                <p>任务中心</p>
                <p></p>
            </div>
            <div class="apply-box flexBetween">
                <div class="head-left flexStart" @click="goRouter('/SetInfor')">
                    <img src="../../assets/img/myAvaatar.png" />

                    <div class="user-infor">
                        <h2>我的利息劵</h2>
                        <h3 class="flexBetween">22222.22元
                        </h3>
                    </div>
                </div>
            </div>

        </div>


        <div class="head-bottom">
            <div class="table-box flexStart">
                <p :class="model == 0 ? 'active-tab' : ''" @click="model = 0">新手任务</p>
                <p :class="model == 1 ? 'active-tab' : ''" @click="model = 1">日常任务</p>
            </div>

        </div>
        <v-carousel :show-arrows="false" hide-delimiters v-model="model" height="auto">
            <v-carousel-item v-for="(slide, i) in 2" :key="i">
                <div class="new-box" v-if="i == 0">
                    <div class="task-list flexBetween" v-for="item in 10" :key="item">
                        <div>
                            <h5>注册成功会员 <span>+688.00</span></h5>
                            <p>注册成为会员即可得到688元利息</p>

                        </div>

                        <div :class="item < 3 ? 'status-full' : 'status-await'">已领取</div>

                    </div>
                </div>
                <div class="new-box" v-if="i == 1">
                    <div class="task-list " v-for="item in 4" :key="item">
                        <div class="flexBetween">
                            <div>
                                <h5 class="flexStart">注册成功会员 <p>+688.00</p>
                                </h5>
                                <div class="flexStart item_up_left_down">
                                    <p>
                                        <v-progress-linear model-value="0" :height="8" color="dark-blue">
                                        </v-progress-linear>
                                    </p>
                                    <div class="schedule-num"><span>0</span>/1</div>
                                </div>
                            </div>

                            <div :class="item < 3 ? 'status-full' : 'status-await'">{{ item < 3 ? '已领取' : '去完成' }}</div>
                            </div>
                            <div class="task-lable">注册成为会员即可得到688元利息</div>
                        </div>
                    </div>
            </v-carousel-item></v-carousel>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const model = ref(1)
const isPop = ref(false)

</script>
<style lang="scss" scoped>
.apply-box {
    margin-top: 30px;
}

.head-left {
    img {
        width: 68px;
        margin-right: 15px;

    }
}

.user-infor {
    h2 {
        font-size: 15px;
        color: #fff;
        letter-spacing: 1px;
        margin-bottom: 10px;

    }

    h3 {
        color: #ff0;
        font-size: 20px;
        font-weight: 500;
    }
}

.pact-head-box {
    position: relative;
    height: 193px;
    background-image: url("../../assets/img/myBg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    padding: 20px 10px 10px 10px;
}

.my-top-box {
    img {
        width: 10px;
    }

    p {
        color: #fff;
        font-size: 18px;
        letter-spacing: 0.5px;
        font-weight: 700;
    }

}





.head-bottom {
    position: relative;
    top: -20px;
    line-height: 40px;
    padding: 0 12px;
    color: #7f829a;
    background-color: #f6f6f6;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
}

.table-box {
    p {
        padding: 8px 10px 3px;
        color: rgb(199, 199, 199);
        font-size: 16px;
        font-weight: bold;
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

.new-box {
    padding: 10px;
    height: calc(100vh - 260px);
    overflow-y: scroll;
}

.task-list {
    background: #fff;
    border-radius: 11px;
    padding: 17px;
    margin-bottom: 11px;

    h5 {
        font-size: 15px;
        color: #2c2e3a;

        p {
            line-height: 22px;
            font-size: 12px;
            color: #fb5c39;
            background: #FDF6EC;
            border-radius: 5px;
            background-color: #fef0f0;
            padding: 1px 11px;
            margin-left: 8px;

        }
    }


    p {
        margin-top: 5px;
        font-size: 12px;
        font-weight: 500;
        color: #c8c9cc;
        line-height: 19px;
    }

    .status-full {
        width: 91px;
        line-height: 34px;
        height: 34px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: #ebecf0;
        border: 1px solid #ebecf0;
        border-radius: 30px;
        font-size: 12px;
        color: #7f829a;
    }

    .status-await {
        width: 91px;
        height: 34px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        line-height: 34px;
        align-items: center;
        background: #fff;
        border: 1px solid #fb5c39;
        border-radius: 30px;
        font-size: 12px;
        font-family: PingFang SC;
        color: #fb5c39;
    }
}

.item_up_left_down {
    margin: 10px 0;

    p {
        width: 90%;
    }

    .schedule-num {
        font-size: 12px;
        font-weight: 500;
        margin-left: 10px;

        span {

            color: rgb(251, 92, 57);
            background: none;
        }
    }
}

.task-lable {
    margin: 0 0 17px 0;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #7f829a;
    line-height: 19px;
    align-items: center;
}
</style>
  