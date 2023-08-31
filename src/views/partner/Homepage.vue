<template>
    <div class="hom-page-box">
        <page-header>
            <template v-slot:headerCenter>跟单</template>
            <template v-slot:headerRight>跟单记录</template>
        </page-header>

        <div class="header">
            <div class="change">
                跟单师：赵国防【
                <span>切换</span>】
            </div>
            <div class="vip">
                <img src="../../assets/img/partner/vip.png" alt="">
                <p>普通合伙人</p>
            </div>
            <div class="steps">
                <div class="steps-up flexBetween">
                    <p>普通合伙人</p>
                    <p>初级合伙人</p>
                </div>
                <v-progress-linear model-value="20"></v-progress-linear>
                <div class="steps-up flexBetween">
                    <p>0人</p>
                    <p>10ren</p>
                </div>
            </div>
        </div>
        <div class="nav">
            <div class="nav-list" @click="goRouter('/Beginner')">
                <img src="../../assets/img/partner/top1.png" alt="">
                <p>新手跟单</p>
            </div>
            <div class="nav-list" @click="goRouter('/OneKey')">
                <img src="../../assets/img/partner/top2.png" alt="">
                <p>一键跟单</p>
            </div>
            <div class="nav-list" @click="goInvite('/PartnershipRule', 1)">
                <img src="../../assets/img/partner/top3.png" alt="">
                <p>合伙人制度</p>
            </div>
            <div class="nav-list" @click="goInvite('/PartnershipRule', 2)">
                <img src="../../assets/img/partner/top4.png" alt="">
                <p>跟单规则</p>
            </div>


        </div>

        <div class="report-title" style="
    margin-top: 80px;">个人报名</div>

        <div class="report flexBetween">
            <div class="user-list">
                <p>总收益</p>
                <span>80.31</span>
            </div>
            <div class="user-list">
                <p>今日收益</p>
                <span>80.31</span>
            </div>
            <div class="user-list">
                <p>跟单总数</p>
                <span>80.31</span>
            </div>
            <div class="user-list">
                <p>今日跟单数</p>
                <span>80.31</span>
            </div>

        </div>


        <div class="report-title">我的团队</div>

        <div class="report2 flexBetween">
            <div class="user-list">
                <p>团队人数</p>
                <span>80.31</span>
            </div>
            <div class="user-list">
                <p>直属人数</p>
                <span>80.31</span>
            </div>
            <div class="user-list">
                <p>三日未跟人数</p>
                <span>80.31</span>
            </div>
            <div class="user-list">
                <p>今日首充人数</p>
                <span>80.31</span>
            </div>

        </div>
        <div class="invite-box">

            <v-btn block color="#fa3534" @click="goInvite('/Invite', 2)">邀请好友</v-btn>
        </div>

    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

const goInvite = (path, type) => {
    $router.push({
        path, query: {
            type
        }
    })
}
const goRouter = (path) => {
    $router.push({
        path,
    })
}

</script>
<style lang="scss" scoped>
.hom-page-box {
    text-align: center;
    width: 100%;
    background-color: #f8f8ff;
    position: relative;
}

.header {
    background-image: url('../../assets/img/partner/topbg.png');
    background-repeat: no-repeat;
    background-size: 100%;
    -moz-background-size: 100%;
    height: 275px;

    .change {
        padding: 10px 10px 5px;
        text-align: left;
        top: 15px;
        left: 10px;
        color: #fff;
        font-size: 14px;

        span {
            color: #fff;
            font-size: 14px;
            text-decoration: underline;
        }
    }

    .vip {
        position: relative;

        img {
            width: 150px;
        }

        p {
            width: 100%;
            position: absolute;
            bottom: 9px;
            text-align: center;
            color: #fff;
            font-size: .8rem;
            letter-spacing: 2px;
        }
    }

    .steps {
        padding: 3px 15px;

        .steps-up {
            font-size: 12px;
            color: #fff;
            margin: 3px 0;
        }
    }



}

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    position: absolute;
    left: 0;
    right: 0;
    top: 275px;
    margin: auto;
    background: #fff;
    padding: 20px;
    z-index: 9;
    overflow: hidden;
    overflow: auto;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, .23);
    border-radius: 10px;

    .nav-list {
        img {
            width: 45px;
        }

        p {
            font-size: 13px;
            margin-top: 5px;
        }
    }
}

.report-title {
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    font-weight: 700;

}

.report {
    line-height: 20px;
    text-align: center;
    flex-wrap: wrap;
    padding: 0px 10px;

    .user-list {
        width: 170px;
        height: 70px;
        margin-bottom: 10px;
        padding: 15px 0 0 15px;
        border-radius: 7px;
        font-size: 13px;
        text-align: left;
        background: #fff;
        z-index: 9;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .23);

        p {
            font-size: 14px;
        }

        span {
            font-size: 14px;
        }
    }

    .user-list:nth-of-type(1) {
        background: url('../../assets/img/partner/user1.png') no-repeat 50%;
        background-size: 100% auto;
    }

    .user-list:nth-of-type(2) {
        background: url('../../assets/img/partner/user2.png') no-repeat 50%;
        background-size: 100% auto;
    }

    .user-list:nth-of-type(3) {
        background: url('../../assets/img/partner/user3.png') no-repeat 50%;
        background-size: 100% auto;
    }

    .user-list:nth-of-type(4) {
        background: url('../../assets/img/partner/user4.png') no-repeat 50%;
        background-size: 100% auto;
    }
}


.report2 {
    line-height: 20px;
    text-align: center;
    flex-wrap: wrap;
    padding: 0px 10px;

    .user-list {
        width: 170px;
        height: 70px;
        margin-bottom: 10px;
        padding: 15px 0 0 15px;
        border-radius: 7px;
        font-size: 13px;
        text-align: left;
        background: #fff;
        z-index: 9;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .23);

        p {
            font-size: 14px;
        }

        span {
            font-size: 14px;
        }
    }

    .user-list:nth-of-type(1) {
        background: url('../../assets/img/partner/group1.png') no-repeat 50%;
        background-size: 100% auto;
    }

    .user-list:nth-of-type(2) {
        background: url('../../assets/img/partner/group2.png') no-repeat 50%;
        background-size: 100% auto;
    }

    .user-list:nth-of-type(3) {
        background: url('../../assets/img/partner/group3.png') no-repeat 50%;
        background-size: 100% auto;
    }

    .user-list:nth-of-type(4) {
        background: url('../../assets/img/partner/group4.png') no-repeat 50%;
        background-size: 100% auto;
    }
}

.invite-box {
    padding: 15px 10px 30px;


    ::v-deep .v-btn__content {
        color: #fff !important;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
    }
}
</style>
  