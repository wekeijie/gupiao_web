<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>新手跟单</template> <template v-slot:headerRight>
                <p @click="goRouter('/FollowList')">跟单记录</p>
            </template>
        </page-header>
        <v-divider :thickness="1"></v-divider>
        <div class="beginner-box
       ">
            <div class="pcontent-title">
                明星投资者：赵国防
            </div>
            <div class="pcontent-info">
                分成比例：30.00%
            </div>
            <div class="pcontent-input-title">
                跟单金额（<span>必须是100的倍数</span>）
            </div>



            <v-text-field v-model="searchCont" variant="none" single-line required clearable hide-details
                label="请输入最低跟单金额(必须是100的倍数)" solo></v-text-field>

            <v-btn block color="#fa3534" @click="goInvite('/Invite')">确认跟单</v-btn>
            <div class="interests">
                <h3>跟单说明</h3>
                <p>1、新手跟单仅限新用户，且只能跟单7个交易日。</p>
                <p>2、新手跟单者的仓位以及资金门槛需要提前向明星投资者申请。</p>

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
::v-deep .v-btn__content {
    color: #fff !important;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
}

.beginner-box {
    padding: 10px;
}

.pcontent-title {
    font-size: .9rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.pcontent-info {
    line-height: 25px;
    font-size: .8rem;
    font-weight: 500;
}

.pcontent-input-title {
    font-size: .8rem;
    font-weight: 700;
    margin-top: 10px;

    span {
        font-size: 12px;
        color: #dd5054;
    }
}

.interests {
    background: #fff;
    overflow: hidden;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, .23);
    border-radius: 7px;
    padding: 15px;
    margin-top: 30px;

    h3 {
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        text-align: center;
    }

    p {
        text-align: left;
        font-size: 12px;
        line-height: 20px;
        margin-top: 10px;
        color: #868686;
    }
}
</style>
  