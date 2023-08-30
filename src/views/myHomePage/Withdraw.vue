<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>余额提现</template>

            <template v-slot:headerRight>
                <p @click="goRouter('/Recordslist', '提现审核记录')">账单</p>
            </template>


        </page-header>
        <div style="background-color: rgb(245, 245, 245);height: 3px;"></div>
        <div class="line-box flexBetween" @click="isApply = true">
            <h2>提现方式</h2>
            <div class="flexEnd" @click="isApply = true">
                <p>
                    <span>中国工商银行</span>
                    <span>123123123123123233</span>

                </p>
                <img class="right-ico" src="../../assets/img/rightImg.png" alt="">

            </div>
        </div>

        <div style="background-color: rgb(245, 245, 245);height: 3px;"></div>


        <div class="limit-box">
            请输入提现金额(最低100元)
        </div>


        <v-text-field type="number" placeholder="100.00" variant="none" hide-details="auto" required prefix="￥" size="80">


            <template v-slot:append>
                <p class="all-btn">全部提现</p>

            </template>

        </v-text-field>
        <div class="return-number">可提现<span>780.31</span> 元（不可提 <span>0</span>元</div>

        <div style="background-color: rgb(245, 245, 245);height: 3px;"></div>

        <div class="apply-btn" @click="isApply = true">提交提现申请</div>


        <v-bottom-sheet v-model="isApply">
            <v-list>
                <div class="flexBetween sheet-top">
                    <div class="sheet-sure">请选择您的提现方式</div>
                    <img src="../../assets/img/close.png" alt="" @click="isApply = false">
                </div>
                <v-list-item class="flexCenter" v-for="tile, index in tiles" :key="tile.title" @click="typeIndex = index">
                    <div class="flexBetween type-list">
                        <v-list-item-title>
                            <h3>中国工商银行</h3>
                            <p>123131231231331212313</p>
                        </v-list-item-title>
                        <img class="list-select" src="../../assets/img/select.png" alt="" v-if="index == typeIndex">
                    </div>
                </v-list-item>
            </v-list>
        </v-bottom-sheet>




    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import { VBottomSheet } from 'vuetify/lib/labs/vBottomSheet/index'
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

const typeIndex = ref(1)

const isApply = ref(false)


const tiles = ref([
    { title: '按天配资-操盘:2天' },
    { title: '按周配资-操盘:7天' },
    { title: '按月配资-操盘:30天' },
    { title: '免息配资-操盘:30天' },
],)

const goRouter = (path, title) => {
    $router.push({
        path, query: {
            title
        }
    })
}


</script>
<style lang="scss" scoped>
.all-btn {
    font-size: 14px;
    color: #dd5054;
}

.v-text-field {
    padding: 0px 10px;

    ::v-deep .v-text-field__prefix {
        font-size: 30px !important;
        color: #000 !important;
        opacity: 1;

    }

    ::v-deep input {
        font-size: 25px !important;
    }
}

.limit-box {
    padding: 10px 10px 0px 10px;
    font-size: 13px;
    color: #2c2e3a;
    // line-height: 50px;

}

.v-list-item {
    line-height: 72px;
    border-top: solid 1px #f1f1f1;
    padding: 25px 0 !important;
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


.type-list {
    padding: 0 25px 0 10px;
    width: 100%;



    h3 {
        font-size: 15px;
        color: #2c2e3a;
        font-weight: 400px;
    }

    p {
        font-size: 15px;
        color: #2c2e3a;
    }

    .list-select {
        width: 13px;
    }
}

.v-list-item-title {
    // margin-right: 130px;
    width: 75vw;
    font-size: 16px;
    font-weight: 500;
    color: #000;
}

.return-number {
    margin: 0 10px;
    font-size: 12px;
    letter-spacing: 0.5px;
    line-height: 34px;
    border-top: solid 1px #f1f1f1;
    margin-left: 12px;
    color: #7f829a;

    span {
        color: #dd5054;
    }
}

.apply-btn {
    margin: 24px 14px 10px 14px;
    border-radius: 7px;
    border: none;
    background-color: #dd5054;
    color: #fff;
    font-size: 18px;
    text-align: center;
    padding: 12px 10px;
}





.line-box {
    padding: 15px;
    border-bottom: solid 0.5px #e5e5e5;

    h2 {
        font-size: 15px;
        letter-spacing: 0.5px;
        width: 90%;
        color: #2c2e3a;
    }

    p {
        text-align: right;
        margin-right: 20px;

        span:first-child {
            font-size: 14px;
            color: #a4a4a4;
        }

        span:last-child {
            font-size: 12px;
            color: #a4a4a4;
        }
    }



    .right-ico {
        width: 7px;
    }
}
</style>
  