<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>查找明星投资者</template>
            <template v-slot:headerRight>跟单记录</template>
        </page-header>
        <v-divider></v-divider>
        <div class="search-box">
            <div class="flexBetween input-box">
                <!-- <input placeholder="明星投资者用户名/电话/邮箱" placeholder-class="input-placeholder" /> -->
                <v-text-field label="明星投资者用户名/电话/邮箱" prepend-inner-icon="mdi-account " size="10" density="default"
                    variant="outlined" single-line hide-details clearable max-height="30"></v-text-field>
                <v-btn color="#dd5054">查找</v-btn>
            </div>
            <h3 class="star-name flexBetween">
                <p>
                    明星投资者：---
                </p>
                <span>
                    操盘记录
                </span>
            </h3>
            <div class="flexStart star-infor">
                <img src="../../assets/img/myAvaatar.png" alt="">
                <div>
                    <p>操盘师:--</p>
                    <p>就职于:--</p>
                    <p>最佳策略投资年数:--</p>
                    <p>特别说明:--</p>

                </div>
            </div>
            <v-btn block color="#dd5054" variant="flat" @click="goRouter('/Homepage')">确认</v-btn>
        </div>

        <div class="instructions-title">跟单如何运作？</div>

        <div class="instructions-cont">
            <p>
                跟单十分简单，在搜索框中输入您想跟单的明星投资者账户名称，点击查找就可以查看到明星投资者的详细信息，点击“立即申请”就可以进入申请页面申请。
            </p>
            <p>需要您每天确认跟单后，操盘师才会去操盘您的跟单资金。确认跟单时间太迟，有可能买不上当日的金股。</p>
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
.input-box {
    height: 30px;
}

.instructions-cont {
    padding: 20px 15px;

    p {
        display: block;
        font-size: .7rem;
        color: #6d696d;
        line-height: 20px;
    }
}

.instructions-title {
    line-height: 30px;
    background-color: #dd5054;
    color: #fff;
    font-size: .9rem;
    font-weight: 700;
    padding-left: 15px;
    width: 135px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

.star-infor {
    margin-bottom: 20px;

    img {
        width: 120px;
        margin-right: 10px;

    }

    p {
        font-size: .9rem;
        margin-bottom: 5px;
    }
}

::v-deep .v-btn__content {
    color: #fff !important;
}

.star-name {
    padding: 16px 0 10px;

    p {

        font-size: 1rem;
        font-weight: 700;
    }

    span {
        font-size: 14px;
        text-decoration: underline;
        color: #dd5054;
        cursor: pointer;
    }
}

.search-box {
    padding: 30px 15px;
}
</style>
  