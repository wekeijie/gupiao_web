<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>团队记录</template>
        </page-header>

        <div class="team-cont">
            <v-divider :thickness="2"></v-divider>
            <div class="flexBetween screen-box">
                <p>会员：</p>
                <v-text-field label="用户名" height="auto" :disabled="false" density="compact" variant="outlined" single-line
                    hide-details></v-text-field>
                <p>等级：</p>
                <v-select :items="items" hide-details single-line density="compact" variant="outlined" height="auto"
                    label="代理等级一"></v-select>
                <div class="serch-btn">
                    <v-btn block max-width="50%" color="#fa3534" density="compact">查找</v-btn>
                </div>
            </div>

            <div class="new-box" v-if="1 == 1">

                <no-data class="no-data-cont"></no-data>
            </div>


        </div>




    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import NoData from '../../components/noData.vue'
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

const items = ref(['代理等级一', '代理等级二', '代理等级三'])



</script>
<style lang="scss" scoped>
::v-deep .v-field {
    --v-field-padding-start: 12px !important;
    --v-field-padding-end: 2px !important;
    --v-field-padding-top: 2px !important;
    --v-field-padding-bottom: 1px !important;
    --v-field-input-padding-top: calc(var(--v-field-padding-top, 1px) + var(--v-input-padding-top, 0)) !important;
}

.serch-btn {
    padding: 0 5px;

    ::v-deep .v-btn__content {
        color: #fff !important;
        font-size: 11px;
    }
}

::v-deep .v-field__input {
    min-height: 8px !important;
    font-size: 8px !important;
    margin: 0 !important;
    padding: 3px !important;
    // padding: 5px 2px;

}

::v-deep .v-field__input {
    font-size: 8px !important;
}

.screen-box {
    background: #fff;
    padding: 10px;

    p {
        font-size: 13px;
        color: #000;
        margin: 0 3px;
    }
}

.team-cont {
    width: 100%;
    min-height: calc(100vh - 50px);
    background-color: #f1f1f1;
}

.no-data-cont {
    padding-top: 40%;
}
</style>
  