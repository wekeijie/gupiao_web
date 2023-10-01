<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>银行卡绑定</template>
        </page-header>
        <div class="bind-list">

            <v-text-field variant="none" v-model="userInfor.name" required clearable label="请输入开户名" hide-details="auto"
                single-line>

                <template v-slot:prepend>
                    <p>用户姓名</p>
                </template>
            </v-text-field>

        </div>
        <div class="line-box flexBetween">
            <v-text-field variant="none" v-model="userInfor.bank_name" required clearable label="请输入银行名称" hide-details="auto"
                single-line>

                <template v-slot:prepend>
                    <p>银行名称</p>
                </template>
            </v-text-field>
        </div>

        <div class="bind-list">
            <v-text-field variant="none" v-model="userInfor.bank_code" required clearable label="请输入银行卡号" hide-details="auto" single-line>

                <template v-slot:prepend>
                    <p>银行卡号</p>
                </template>
            </v-text-field>
        </div>

        <v-checkbox hide-details="auto" v-model="userInfor.is_default" value="1" height="auto" color="red" label="设置为默认"></v-checkbox>
        <div class="bind-list">


            <div class="login-box">
                <v-btn color="#dd5054" class="mt-4" size="x-large" block @click="create">
                    添加
                </v-btn>
            </div>

        </div>

    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
import {store} from '@/store'

import { VBottomSheet } from 'vuetify/lib/labs/vBottomSheet/index'
const $router = useRouter()
const $route = useRoute()
const ex11 = ref(true)
const isApply = ref(true)
const userInfor = ref({
    name: '',
    bank_name: '',
    bank_code:'',
    is_default:0
})

const create = () => {
   if(userInfor.value.name == '' && userInfor.value.bank_name == '' && userInfor.value.bank_code == ''){
      store.dispatch('snackbar/warning', {
        active: true,
        body: '内容不能为空',
      })
      return
   }
   const is_default = userInfor.value.is_default == false ? 0 : 1
   store.dispatch('bank/create',{'user_name':userInfor.value.name,'bank_name':userInfor.value.bank_name,'code':userInfor.value.bank_code,'is_default':is_default}).then(d=>{
        $router.go(-1)
   })

}

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
  