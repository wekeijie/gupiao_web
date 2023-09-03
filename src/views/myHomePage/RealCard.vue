<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>银行卡管理</template>
        </page-header>
        <div class="login-box">

            <div v-for="item, index in 3" :key="index" class="card-box">
                <div class="flexBetween cars-up">
                    <div class="flexStart card-infor">

                        <img class="list-pay-log" src="../../assets/img/payLog.png" alt="">
                        <div>
                            <h3>中国工商很行</h3>
                            <p>1231231333</p>
                        </div>
                    </div>
                    <h5>you name</h5>
                </div>
                <div class="flexBetween card-controls">
                    <v-checkbox hide-details="auto" height="auto" color="red" label="默认银行卡"></v-checkbox>
                    <div class="flexEnd card-cont-item">
                        <p><v-icon hide-details="auto" icon="mdi-delete" size="x-small"></v-icon><span>解绑</span></p>
                        <p @click="isApply = true"><v-icon hide-details="auto" height="auto" icon="mdi-eye"
                                size="x-small"></v-icon><span>详情</span>
                        </p>

                    </div>
                </div>

            </div>

        </div>

        <div class="login-box">
            <v-btn color="#dd5054" class="mt-4" size="x-large" block @click="goRouter('/CardBind')" prepend-icon="mdi-plus">
                添加银行卡
            </v-btn>
        </div>



        <v-bottom-sheet v-model="isApply">
            <v-list>
                <div class=" sheet-top">
                    <img src="../../assets/img/close.png" alt="" @click="isApply = false">
                </div>
                <div class="list-cont-box">

                    <div class="list-cont flexBetween">
                        <p>户主姓名</p>
                        <span>you name</span>
                    </div>
                    <div class="list-cont flexBetween">
                        <p>卡开户行</p>
                        <span>中国工商很行</span>
                    </div>
                    <div class="list-cont flexBetween">
                        <p>银行卡号</p>
                        <span>12312312312312</span>
                    </div>
                </div>
            </v-list>
        </v-bottom-sheet>

    </div>
</template>
<script  setup>
import { onMounted, ref, getCurrentInstance, reactive } from "vue";
import { useRouter, useRoute } from "vue-router"
import PageHeader from '../../components/topWrap.vue'
import { VBottomSheet } from 'vuetify/lib/labs/vBottomSheet/index'
import { passwordRules, phoneRoules, emailRoules, codeRoules, usernameRules } from "@/utils/vaildRule.js";
const $router = useRouter()
const isApply = ref(true)
const passwordType = ref('password')
const loginData = reactive({
    phone: '',
    code: '',
})
const goRouter = (path) => {
    $router.push(path)
}
const isSend = ref(0)
const sendCode = () => {
    console.log(isSend, 'isSend')
    isSend.value = 60
    let time = setInterval(() => {
        isSend.value--
        if (isSend.value <= 0) {
            isSend.value = 0
            clearInterval(time)
        }
    }, 1000)
}
const handleLogin = async () => {
    const { valid } = await instance.ctx.$refs.form.validate();
    console.log(valid, 'valid')
    if (valid) {
        if (loginData.username == "" || loginData.password == "") {
        } else {
            try {
            } catch (e) {
                // alert(e);
            }
        }
    }
};

let instance = ref();

onMounted(() => {
    instance = getCurrentInstance();
});
const goSign = () => {
    $router.push('/SignIn')

};
</script>
<style lang="scss" scoped>
.sheet-top {
    padding: 12px 13px 0px 13px;
    font-size: 17px;
    line-height: 25px;
    text-align: right;

    img {
        width: 24px;
        text-align: right;
    }


}

.v-list {
    border-radius: 25px 25px 0px 0px;
}

.list-cont-box {
    padding: 0 15px 15px;

    .list-cont {
        border-bottom: solid 1px #ebecf0;
        padding: 15px 0;

        p {
            font-size: 12px;
            color: #7f829a;
        }

        span {
            font-size: 12px;
            color: #2c2e3a;
            text-align: right;

        }
    }
}

.card-cont-item {
    margin-left: 10px;

    p {
        margin-left: 10px;
        font-size: 13px;
    }

    span {

        margin-left: 3px;
        font-size: 13px;
    }
}

.card-controls {
    padding: 1px 0;
    border-top: solid 1px #e1e1e1;


}

::v-deep .v-checkbox .v-selection-control {
    min-height: 10px !important;
    color: #606266;

    .v-selection-control--density-default {
        --v-selection-control-size: none,
    }

    .v-label {
        font-size: 12px !important;
    }
}

.card-box {
    border: solid 1px #e4d6d0;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    margin-top: 10px;
}

.card-infor {
    img {
        width: 45px;
        margin-right: 10px;
    }

    h3 {
        font-size: 16px;
        font-weight: bolder;
    }

    p {
        font-size: 14px;
        margin-top: 5px;
    }

    h5 {
        font-size: 15px;
        font-weight: bolder;
    }
}

.cars-up {
    padding: 10px 0;
}

.login-box {
    padding: 20px 20px 0;
    text-align: center;

}

.send-code {
    position: absolute;
    right: 0;
    padding: 6px 15px;
    font-size: 12px;
    color: rgb(251, 92, 57);
    z-index: 10;
}

.v-btn {
    color: #fff;
}
</style>
  