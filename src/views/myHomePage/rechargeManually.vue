<template>
    <page-header><template v-slot:headerCenter>充值信息</template></page-header>
    <div class="text-center mt-3 px-3">
        <p class="text-h5 text-red font-weight-bold">+100元</p>
        <p class="text-body-2 text-grey-darken-1 mt-2">充值金额</p>
        <p class="text-body-2 text-grey-darken-1">请及时完成支付</p>
        <v-col cols="auto">
            <v-btn variant="tonal" block color="text-grey-darken-1">付款后请及时进行付款确认</v-btn>
        </v-col>
    </div>
    <v-divider class="mt-2"></v-divider>
    <div class="px-2 mt-3 text-body-2" style="line-height: 25px;">
        <p>账户:请联系客服获取充值账户</p>
        <p>卡号:请联系客服获取充值卡号</p>
        <p>银行:请联系客服获取充值银行</p>
    </div>
    <v-divider class="mt-2"></v-divider>
    <div class="text-caption mt-3 px-2">
        请点击复制充值账户信息，为了资金安全，如账户信息未可见，请联系在线客服索要，付款成功后，请及时进行付款确认。
    </div>
</template>
<script setup>
import PageHeader from '../../components/topWrap.vue'
</script>