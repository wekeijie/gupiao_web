<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>银行卡绑定</template>
        </page-header>

        <div class="bind-list">

            <v-text-field variant="none" v-model="userInfor.name" required clearable label="姓名" hide-details="auto"
                single-line>

                <template v-slot:prepend>
                    <p>用户姓名</p>
                </template>
            </v-text-field>

        </div>
        <div class="line-box flexBetween" @click="isApply = true">
            <div class="flexStart">
                <h2>账户密码</h2>
                <img class="card-logo" src="../../assets/img/myBack.png" alt="">
                <span>请选择所属银行</span>
            </div>
            <img class="line-right-img" src="../../assets/img/rightImg.png" alt="">
        </div>

        <div class="bind-list">
            <v-text-field variant="none" v-model="idCard" required clearable label="请输入银行卡号" hide-details="auto" single-line
                :rules="emailRoules">

                <template v-slot:prepend>
                    <p>银行卡号</p>
                </template>
            </v-text-field>
        </div>

        <v-checkbox hide-details="auto" height="auto" color="red" label="设置为默认"></v-checkbox>
        <div class="bind-list">


            <div class="login-box">
                <v-btn color="#dd5054" class="mt-4" size="x-large" block>
                    添加
                </v-btn>
            </div>

        </div>



        <v-bottom-sheet v-model="isApply">
            <v-list>
                <div class="flexBetween sheet-top">
                    <div class="sheet-sure">请选择您的充值方式</div>
                    <img src="../../assets/img/close.png" alt="" @click="isApply = false">
                </div>
                <div class="list-cont-box">
                    <v-list-item class="flexCenter" v-for="tile, index in 10" :key="tile.title"
                        @click="typeIndex = index; isApply = false">
                        <div class="flexBetween type-list">

                            <img class="list-pay-log" src="../../assets/img/payLog.png" alt="">
                            <v-list-item-title>
                                <h3>EBpay-最低充值100元</h3>
                            </v-list-item-title>
                            <img class="list-select" src="../../assets/img/select.png" alt="" v-if="index == typeIndex">
                        </div>
                    </v-list-item>
                </div>
            </v-list>
        </v-bottom-sheet>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"

import { VBottomSheet } from 'vuetify/lib/labs/vBottomSheet/index'
const $router = useRouter()
const $route = useRoute()
const ex11 = ref(true)
const isApply = ref(true)
const userInfor = ref({
    name: 'you name',
    idCard: '',
})
const goRouter = (path) => {
    $router.push(path)
}


</script>
<style lang="scss" scoped>
.bind-list {
    padding: 0 15px;
    border-bottom: solid 0.5px rgb(245, 245, 245);
    ;
}

.line-box {
    padding: 0 15px;
    border-bottom: solid 0.5px rgb(245, 245, 245);
    ;
    line-height: 60px;

    h2 {
        font-size: 15px;
        letter-spacing: 1px;
        text-align: right;
        color: #2c2e3a;
        // width: 30%;
        // color: #2c2e3a;
    }

    .card-logo {
        margin: 0 15px 0 30px;
        width: 30px;
    }

    span {
        font-size: 15px;
        text-align: left;
        color: #a4a4a4;
    }

    .line-right-img {
        width: 7px;
        margin-left: 10px;
    }
}

.v-btn {
    color: #fff;
}








.sheet-top {
    padding: 12px 13px 30px 13px;
    font-size: 17px;
    line-height: 25px;

    img {
        width: 24px;
    }

    .sheet-sure {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 700;
        color: #2c2e3a;
    }
}

.list-cont-box {
    max-height: 350px;
    overflow-y: scroll;
}

.type-list {
    padding: 10px 25px 10px 10px;
    width: 100%;

    border-bottom: solid 0.5px rgb(245, 245, 245);
    ;

    .list-pay-log {
        width: 38px;
        margin-right: 13px;
    }

    h3 {
        font-size: 15px;
        color: #2c2e3a;
    }

    .list-select {
        width: 12px;
    }
}

.v-list-item-title {
    // margin-right: 130px;
    width: 75vw;
    font-size: 16px;
    font-weight: 500;
    color: #000;
}
</style>
  