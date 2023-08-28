<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>修改昵称</template>
        </page-header>

        <div>
            <v-text-field placeholder="请输入昵称" variant="none" hide-details="auto" required maxLength="140"
                size="14"></v-text-field>
        </div>

        <div class="apply-btn" @click="">确认修改</div>
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
.v-text-field {
    margin: 30px 10px 10px;
    border-bottom: 1px solid #000;

    ::v-deep input {
        font-size: 15px !important;
    }
}

.apply-btn {
    margin: 54px 14px 10px 14px;
    border-radius: 7px;
    border: none;
    background-color: #fb5c39;
    color: #fff;
    font-size: 18px;
    text-align: center;
    padding: 10px;
}
</style>
  